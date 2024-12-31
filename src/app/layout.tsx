import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeRegistry from '@/components/Theme';

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
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true, key: 'mui' }}>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
