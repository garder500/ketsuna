import Navbar from "@/components/Navbar";
export default function Money() {
    return (
        <>
        <Navbar />
        <div className="tw-flex tw-flex-col tw-h-screen">
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen">
                <h1 className="tw-text-4xl tw-font-bold">Money Management</h1>
                <p className="tw-text-lg tw-mt-4">This is the money management page</p>
            </div>
        </div>
        </>
    );
}
