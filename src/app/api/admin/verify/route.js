import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { key } = await request.json();
        const isValid = key === process.env.ADMIN_SECRET_KEY;

        return NextResponse.json({ success: isValid });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
    }
}
