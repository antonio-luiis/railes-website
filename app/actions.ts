'use server'

import fs from 'fs/promises';
import path from 'path';

export async function submitForm(prevState: any, formData: FormData) {
    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        phone: formData.get('phone'),
        industry: formData.get('industry'),
        formType: formData.get('formType') || 'unknown',
        timestamp: new Date().toISOString(),
    };

    console.log('--- NEW FORM SUBMISSION ---');
    console.log(JSON.stringify(rawData, null, 2));
    console.log('---------------------------');

    // Guardar em ficheiro local (provisório)
    const filePath = path.join(process.cwd(), 'submissions.json');

    try {
        let submissions = [];
        try {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            submissions = JSON.parse(fileContent);
        } catch (error) {
            // Ficheiro não existe ou vazio, cria novo array
        }

        submissions.push(rawData);
        await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));

        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Error saving submission:', error);
        return { success: false, message: 'Failed to save submission but received.' };
    }
}
