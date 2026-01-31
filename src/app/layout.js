import BodyFontProvider from "@/components/BodyFontProvider";

import "@/styles/globals.css";


export const metadata = {
    title: "ETEQ - Senior Engineering Expertise",
    description: "35 Years of Leadership in Sustainability and Operational Excellence",
    keywords: "engineering consulting, sustainability, net zero, pharmaceutical manufacturing, energy optimization",
    author: "Designed and Developed by Arash Rostami",
};

export default async function RootLayout({children, params}) {
    return (
        <html suppressHydrationWarning>
        <BodyFontProvider>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">{children}</div>
            </div>
        </BodyFontProvider>
        </html>
    );
}

