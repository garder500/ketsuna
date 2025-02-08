/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeRegistry from '@/components/Theme';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import Head from "next/head";
import { getAnalytics, isSupported } from "firebase/analytics";
import { app } from "@/global/database";

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
  setTimeout(async() => {
    const canGatherAnalytics = await isSupported();
    if (canGatherAnalytics) {
      getAnalytics(app);
    }
  }, 1000);
  return (
    <html lang="fr" suppressHydrationWarning>
      <Head>
        <script type="text/javascript" data-cmp-ab="1" src="https://cdn.consentmanager.net/delivery/autoblocking/60f23c61d2619.js" data-cmp-host="d.delivery.consentmanager.net" data-cmp-cdn="cdn.consentmanager.net" data-cmp-codesrc="16"></script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true, key: 'mui' }}>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
