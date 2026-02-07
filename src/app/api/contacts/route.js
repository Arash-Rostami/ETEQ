import { NextResponse } from 'next/server';
import connectDB from '@/lib/db/mongoose';
import Contact from '@/models/Contact';
import { defaultLanguage } from '@/lib/i18n/config';

export async function GET(request) {
    const authHeader = request.headers.get('authorization');
    const key = authHeader?.split(' ')[1];

    if (key !== process.env.ADMIN_SECRET_KEY) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    try {
        await connectDB();
        const contacts = await Contact.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: contacts });
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to fetch contacts' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, title, contactInfo, message, lang } = body;

        if (!name || !title || !contactInfo || !message) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        await connectDB();
        const newContact = await Contact.create({
            name,
            title,
            contactInfo,
            message,
            lang: lang || defaultLanguage
        });

        return NextResponse.json({ success: true, data: newContact }, { status: 201 });
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to save message' }, { status: 500 });
    }
}
