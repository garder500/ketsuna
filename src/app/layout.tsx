"use client";
/* eslint-disable @next/next/no-sync-scripts */
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
import { useEffect } from "react";
import { analytics } from "@/global/database";
import { logEvent } from "firebase/analytics";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);

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
