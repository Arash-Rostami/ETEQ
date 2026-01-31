import {Geist, Geist_Mono, Inter, Noto_Sans_JP, Poppins} from "next/font/google";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
    variable: '--font-poppins',
    display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
    weight: ['300', '400', '500', '700'],
    subsets: ["latin"],
    variable: '--font-noto-sans-jp',
    display: 'swap',
});

export const fontVariables = `${poppins.variable} ${notoSansJP.variable} ${geistSans.variable} ${geistMono.variable} ${inter.variable}`;

export default function BodyFontProvider({children}) {
    return (
        <body className={`${fontVariables} font-sans antialiased`}>
        {children}
        </body>
    );
}