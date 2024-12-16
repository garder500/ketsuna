import Link from "next/link";

type ButtonProps = Readonly<{
    href?: string;
    disabled?: boolean;
    children: React.ReactNode;
}>;

export default function Button({ href = "/", disabled = false,  children }: ButtonProps) {

  if(disabled) {
    // the button will be grayed out and not clickable if disabled and little faded
    return (
        <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed" disabled
        >
            {children}
        </button>
    );
    }

  return (
    <Link href={href}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {children}
      </button>
    </Link>
    );
}
