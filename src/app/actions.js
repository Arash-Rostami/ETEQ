'use server';

import fs from 'fs/promises';
import path from 'path';

export async function submitContactForm(formData) {
    const name = formData.get('name');
    const title = formData.get('title');
    const contactInfo = formData.get('contactInfo');
    const message = formData.get('message');
    const lang = formData.get('lang') || 'en';

    // In a real application, you would send an email here using a service like Resend, SendGrid, etc.
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Title/Subject: ${title}`);
    console.log(`Contact Info: ${contactInfo}`);
    console.log(`Message: ${message}`);
    console.log(`Language: ${lang}`);
    console.log('------------------------------------');

    try {
        const messagesDir = path.join(process.cwd(), 'messages');
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

        await fs.writeFile(filepath, content, 'utf8');

        return { success: true };
    } catch (error) {
        console.error('Error saving message:', error);
        return { success: false, error: 'Failed to save message' };
    }
}
