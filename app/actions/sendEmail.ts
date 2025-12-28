'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { error: 'Missing required fields' };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Consilo Contact <onboarding@resend.dev>',
            to: 'praiseibec@gmail.com',
            subject: `New Message from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            console.error('Resend error:', error);
            return { error: 'Failed to send email' };
        }

        return { success: true, data };
    } catch (err) {
        console.error('Server error:', err);
        return { error: 'An unexpected error occurred' };
    }
}
