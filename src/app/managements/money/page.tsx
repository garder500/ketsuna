import Navbar from "@/components/Navbar";
export default function Money() {
    return (
        <div className="tw-flex tw-flex-col tw-h-screen">
        <Navbar />
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen">
                <h1 className="tw-text-4xl tw-font-bold tw-text-blue-900">Money Management</h1>
                <p className="tw-text-lg tw-mt-4">This is the money management page</p>
            </div>
        </div>
    );
}
