import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import NavBar from "@/app/NavBar";
import {ThemeModeScript} from 'flowbite-react';
import {Button, createTheme, ThemeProvider} from "flowbite-react";
import '../styles/input.css'
import DynamicTitle from "@/app/DynamicTitle";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    // title: "StudyFlow",
    description: "Keep tracks of your learning_paths_courses needs in one place!",
};

const erfansTheme = createTheme({
    button: {
        color: {
            primary: "bg-cyan-600 hover:bg-cyan-700",
            secondary: "bg-zinc-500 hover:bg-zinc-600",
            delete: "bg-red-500 hover:bg-red-600",
        },
        size: {
            lg: "px-6 py-3 text-lg",
        },
    },
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <ThemeProvider theme={erfansTheme}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            <DynamicTitle/>
            <NavBar></NavBar>
            <main>
                <div className="p-4 sm:ml-64">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        {children}
                    </div>
                </div>
            </main>
            </body>
        </ThemeProvider>
        </html>
    );
}
