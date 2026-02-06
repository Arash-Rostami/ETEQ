'use server';

import fs from 'fs/promises';
import path from 'path';
import { sendContactEmail } from '@/services/email';

export async function submitContactForm(formData) {
    const name = formData.get('name');
    const title = formData.get('title');
    const contactInfo = formData.get('contactInfo');
    const message = formData.get('message');
    const lang = formData.get('lang') || 'en';

    try {
        const messagesDir = path.join(process.cwd(), 'public', 'messages');
        await fs.mkdir(messagesDir, { recursive: true });

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `message-${timestamp}.md`;
        const filepath = path.join(messagesDir, filename);

        const content = `
# New Contact Message

**Date:** ${new Date().toLocaleString()}
**Name:** ${name}
**Subject/Title:** ${title}
**Contact Info:** ${contactInfo}
**Language:** ${lang}

## Message
${message}
        `.trim();

        await Promise.all([
            fs.writeFile(filepath, content, 'utf8'),
            sendContactEmail({ name, title, contactInfo, message })
        ]);

        return { success: true };
    } catch (error) {
        console.error('Error processing submission:', error);
        return { success: false, error: 'Failed to process submission' };
    }
}
