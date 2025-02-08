import Navbar from "@/components/Navbar";
import { Button } from "@mui/material";
import type { Metadata } from "next";
import Link from "next/link";

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

export default function Management() {
    return (
        <div className="tw-flex tw-flex-col tw-h-screen">
        <Navbar />
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen">
                <h1 className="tw-text-4xl tw-font-bold tw-text-blue-900">Ketsuna</h1>
                <p className="tw-text-lg tw-mt-4">A simple and Easy management Apps for your daily needs</p>
                <Link href={"/managements"} passHref>
                    <Button variant="contained" color="primary" className="tw-mt-4">Go to the Management Page</Button>
                </Link>
            </div>
        </div>
    );
}
