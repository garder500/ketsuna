import Navbar from "@/components/Navbar";
import { Button } from "@mui/material";
import Link from "next/link";
export default function Management() {
    return (
        <div className="tw-flex tw-flex-col tw-h-screen">
        <Navbar />
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen">
                <h1 className="tw-text-4xl tw-font-bold tw-text-blue-900">Managements Apps</h1>
                <Link href={"/managements/money"} passHref>
                    <Button variant="contained" color="primary" className="tw-mt-4">Money Management</Button>
                </Link>
            </div>
        </div>
    );
}
