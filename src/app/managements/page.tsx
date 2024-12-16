import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

export default function Management() {
    return (
        <div className="flex flex-col h-screen">
        <Navbar middleLinks={[
            { href: "/", label: "Home" },
            { href: "/managements", label: "Management", focus: true },
        ]} />
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Management</h1>
            <p className="text-lg mt-4">This is the management page</p>
            <div className="mt-4">
                <div className="mt-4">
                <Button href={"/managements/money"}>
                    Go to the Money Management App
                </Button>
                <Button href={"/managements/game"} disabled>
                    Go to the Game Management App
                </Button>
                </div>
            </div>
        </div>
        </div>

    );
}
