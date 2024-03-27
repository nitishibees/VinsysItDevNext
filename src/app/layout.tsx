import type { Metadata } from "next";
import "./globals.css";
import '@/app/styles/app.scss';
import Head from "next/head";
import SiteHeader from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'

export const metadata: Metadata = {
    title: "Vinsys",
    description: "It Development Services",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>     
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <main className="flex min-h-screen flex-col items-center justify-between">
                    <SiteHeader />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
