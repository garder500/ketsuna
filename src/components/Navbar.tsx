import Link from "next/link";

type NavbarProps = Readonly<{
    leftButton?: React.ReactNode;
    rightButton?: React.ReactNode;
    middleLinks: Array<{
        href: string;
        label: string;
        focus?: boolean;
    }>;
    }>;

export default function Navbar({ leftButton, rightButton, middleLinks }: NavbarProps) {

    return (
        <div className="flex items-center justify-between bg-gray-800 text-white p-8 shadow-md mb-4">
            <div className="flex items-center">
                {leftButton}
                <div className="ml-4">
                    {middleLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <button className={`mr-4 ${link.focus ? "font-bold" : ""} hover:underline focus:outline-none`}>
                                {link.label}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                {rightButton}
            </div>
        </div>
    );
}
