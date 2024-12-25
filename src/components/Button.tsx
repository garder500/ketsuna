"use client";
import Link from 'next/link';
import { Button } from '@mui/material';

export default function ButtonLink({
    href,
    children,
    }: Readonly<{
    href: string;
    children: React.ReactNode;
    }>) {
    return (
        <Link href={href} passHref>
            <Button variant="contained" color="primary">
                {children}
            </Button>
        </Link>
    );
}
