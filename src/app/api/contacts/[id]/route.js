import { NextResponse } from 'next/server';
import connectDB from '@/lib/db/mongoose';
import Contact from '@/models/Contact';

export async function DELETE(request, { params }) {
    const authHeader = request.headers.get('authorization');
    const key = authHeader?.split(' ')[1];

    if (key !== process.env.ADMIN_SECRET_KEY) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { id } = await params;
        await connectDB();
        const deleted = await Contact.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json({ success: false, error: 'Contact not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to delete contact' }, { status: 500 });
    }
}
