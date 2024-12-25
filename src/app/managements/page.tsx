import ButtonLink from "@/components/Button";
import Navbar from "@/components/Navbar";
export default function Management() {
    return (
        <>
        <Navbar />
        <div className="tw-flex tw-flex-col tw-h-screen">
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center h-screen">
            <h1 className="tw-text-4xl tw-font-bold">Management</h1>
            <p className="tw-text-lg mt-4">This is the management page</p>
            <div className="tw-mt-4">
                <ButtonLink href={"/managements/money"}>Go to Money Management</ButtonLink>
            </div>
        </div>
        </div>
        </>
    );
}
