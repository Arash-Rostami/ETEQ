import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendContactEmail(data) {
    const { name, title, contactInfo, message } = data;

    await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.SMTP_TO,
        replyTo: contactInfo,
        subject: `New Submission: ${title}`,
        text: `Name: ${name}\nContact: ${contactInfo}\n\n${message}`,
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                <h2 style="color: #333;">New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Contact:</strong> ${contactInfo}</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                <p style="white-space: pre-wrap; color: #555;">${message}</p>
            </div>
        `
    });
}