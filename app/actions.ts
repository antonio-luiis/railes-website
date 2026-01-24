'use server'

import { sql } from '@vercel/postgres';
import fs from 'fs/promises';
import path from 'path';
import { Resend } from 'resend';

// Inicializar Resend (Idealmente usar process.env.RESEND_API_KEY)
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

const SUBMISSIONS_FILE = path.join(process.cwd(), 'submissions.json');

async function saveToJSON(data: any) {
    try {
        let submissions = [];
        try {
            const fileContent = await fs.readFile(SUBMISSIONS_FILE, 'utf-8');
            submissions = JSON.parse(fileContent);
        } catch (error) {
            // File doesn't exist or is empty, start fresh
        }

        submissions.push({
            ...data,
            timestamp: new Date().toISOString()
        });

        await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
    } catch (error) {
        console.error('Error writing to submissions.json:', error);
    }
}

export async function submitForm(prevState: any, formData: FormData) {
    const rawData = {
        name: (formData.get('name') as string) || (formData.get('formType') === 'newsletter' ? 'Newsletter Subscriber' : ''),
        email: formData.get('email') as string,
        message: formData.get('message') as string,
        phone: (formData.get('phone') as string) || '',
        industry: (formData.get('industry') as string) || '',
        formType: (formData.get('formType') as string) || 'unknown',
    };

    console.log('--- NEW FORM SUBMISSION ---', rawData);

    // Save to JSON (Local fallback/Primary for dev)
    await saveToJSON(rawData);

    try {
        // 1. Garantir que a tabela existe
        await sql`
            CREATE TABLE IF NOT EXISTS submissions (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                message TEXT,
                phone TEXT,
                industry TEXT,
                form_type TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

        // 2. Inserir os dados
        await sql`
            INSERT INTO submissions (name, email, message, phone, industry, form_type)
            VALUES (${rawData.name}, ${rawData.email}, ${rawData.message}, ${rawData.phone}, ${rawData.industry}, ${rawData.formType});
        `;

        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Database Error:', error);
        return { success: true, message: 'Message received (saved locally).' };
    }
}

export async function submitApplication(formData: FormData) {
    const rawData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: (formData.get('phone') as string) || '',
        linkedin: (formData.get('linkedin') as string) || '',
        jobTitle: formData.get('jobTitle') as string,
        formType: 'application',
        cvName: (formData.get('cv') as File)?.name || 'No CV'
    };

    console.log('--- NEW APPLICATION ---', rawData);

    // Save to JSON (Local dev backup)
    await saveToJSON(rawData);

    // 1. Enviar Email com Anexo via Resend
    let emailSent = false;
    try {
        const file = formData.get('cv') as File;
        let attachments = [];

        if (file && file.size > 0) {
            const buffer = Buffer.from(await file.arrayBuffer());
            attachments.push({
                filename: file.name,
                content: buffer
            });
        }

        if (process.env.RESEND_API_KEY) {
            const { data, error } = await resend.emails.send({
                from: 'Railes Careers <onboarding@resend.dev>',
                to: ['antonio.goncalves@muvu.tech'], // Alterado para o email que provavelmente usaste no registo
                subject: `New Application: ${rawData.jobTitle} - ${rawData.name}`,
                html: `
                    <h1>New Job Application</h1>
                    <p><strong>Position:</strong> ${rawData.jobTitle}</p>
                    <p><strong>Name:</strong> ${rawData.name}</p>
                    <p><strong>Email:</strong> ${rawData.email}</p>
                    <p><strong>Phone:</strong> ${rawData.phone}</p>
                    <p><strong>LinkedIn:</strong> <a href="${rawData.linkedin}">${rawData.linkedin}</a></p>
                    <hr />
                    <p>CV attached.</p>
                `,
                attachments: attachments
            });

            if (error) {
                console.error('RESEND ERROR:', error);
            } else {
                console.log('RESEND SUCCESS:', data);
                emailSent = true;
            }
        } else {
            console.log('RESEND_API_KEY NOT FOUND:', process.env.RESEND_API_KEY);
        }
    } catch (error) {
        console.error('Email Sending Error:', error);
    }

    // 2. Guardar registo na BD (apenas metadados, sem o ficheiro pesado)
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS submissions (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                message TEXT,
                phone TEXT,
                industry TEXT,
                form_type TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

        const messageContent = `Job Application: ${rawData.jobTitle}\nLinkedIn: ${rawData.linkedin}\nCV File: ${rawData.cvName}\nEmail Sent: ${emailSent ? 'Yes' : 'No'}`;

        await sql`
            INSERT INTO submissions (name, email, message, phone, industry, form_type)
            VALUES (${rawData.name}, ${rawData.email}, ${messageContent}, ${rawData.phone}, 'Job Application', ${rawData.formType});
        `;

        return { success: true, message: 'Application submitted successfully!' };
    } catch (error) {
        console.error('Database Error:', error);
        return { success: true, message: 'Application received (saved locally).' };
    }
}
