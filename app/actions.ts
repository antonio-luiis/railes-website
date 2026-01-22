'use server'

import { sql } from '@vercel/postgres';

export async function submitForm(prevState: any, formData: FormData) {
    const rawData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
        phone: (formData.get('phone') as string) || '',
        industry: (formData.get('industry') as string) || '',
        formType: (formData.get('formType') as string) || 'unknown',
    };

    console.log('--- NEW FORM SUBMISSION ---', rawData);

    try {
        // 1. Garantir que a tabela existe (Executado apenas se necessário)
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

        // Se a BD ainda não estiver configurada no Vercel Dashboard, o comando vai falhar.
        // Retornamos sucesso na mesma para não bloquear o UI, mas avisamos no log.
        return { success: true, message: 'Message received (Local Log Only).' };
    }
}
