import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

export default function Money() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar
                leftButton={<Button href={"/managements"}>Go Back</Button>}
                middleLinks={[
                    { href: "/", label: "Home" },
                    { href: "/managements", label: "Management" },
                ]} />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold">Money Management</h1>
                <p className="text-lg mt-4">This is the money management page</p>
            </div>
        </div>
    );
}
