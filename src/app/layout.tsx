import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StyledEngineProvider } from '@mui/material/styles';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ketsuna",
  description: "The simple and easy to use task management app",

  openGraph: {
    url: "https://ketsuna.com",
    title: "Ketsuna",
    modifiedTime: new Date().toISOString(),
    authors: ["Jérémy"],
    siteName: "Ketsuna",
  },
  twitter: {
    site: "@ketsuna",
    card: "summary_large_image",
    creator: "@exatombe",
    title: "Ketsuna",
    description: "The simple and easy to use task management app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledEngineProvider injectFirst>
          {children}
        </StyledEngineProvider>
      </body>
    </html>
  );
}
