import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "@/theme";
export const runtime = 'nodejs'



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
        <StyledEngineProvider injectFirst>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
