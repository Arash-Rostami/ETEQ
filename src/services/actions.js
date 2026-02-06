'use server';

import connectDB from '@/lib/db/mongoose';
import Contact from '@/models/Contact';
import {sendContactEmail} from '@/services/email';

export async function submitContactForm(formData) {
    const name = formData.get('name');
    const title = formData.get('title');
    const contactInfo = formData.get('contactInfo');
    const message = formData.get('message');
    const lang = formData.get('lang') || 'en';

    try {
        await connectDB();

        await Contact.create({
            name,
            title,
            contactInfo,
            message,
            lang
        });

        // await sendContactEmail({name, title, contactInfo, message});

        return {success: true};
    } catch (error) {
        console.error('Database Error:', error);
        return {success: false, error: 'Failed to save message'};
    }
}

export async function verifyAdminKey(key) {
    return key === process.env.ADMIN_SECRET_KEY;
}

export async function getContacts(key) {
    if (!await verifyAdminKey(key)) {
        return {success: false, error: 'Unauthorized'};
    }

    try {
        await connectDB();
        const contacts = await Contact.find({}).sort({createdAt: -1});
        return {success: true, data: JSON.parse(JSON.stringify(contacts))};
    } catch (error) {
        console.error('Database Error:', error);
        return {success: false, error: 'Failed to fetch contacts'};
    }
}

export async function deleteContact(key, id) {
    if (!await verifyAdminKey(key)) {
        return {success: false, error: 'Unauthorized'};
    }

    try {
        await connectDB();
        await Contact.findByIdAndDelete(id);
        return {success: true};
    } catch (error) {
        console.error('Database Error:', error);
        return {success: false, error: 'Failed to delete contact'};
    }
}