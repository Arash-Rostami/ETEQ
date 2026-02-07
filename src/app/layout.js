import BodyFontProvider from "@/components/BodyFontProvider";
import "@/styles/globals.css";

export const metadata = {
    title:  "ETEQ - Senior Engineering Expertise",
    description: "35 Years of Leadership in Sustainability and Operational Excellence",
    keywords: "engineering consulting, sustainability, net zero, pharmaceutical manufacturing, energy optimization",
    authors: [{ name: "Arash Rostami" }],
    icons: {
        icon: "/favicon.ico",
    }
};

export default async function RootLayout({children, params}) {
    const { lang } = await params;
    return (
        <html lang={lang} suppressHydrationWarning>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
            />
        </head>
        <BodyFontProvider>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">{children}</div>
            </div>
        </BodyFontProvider>
        </html>
    );
}

