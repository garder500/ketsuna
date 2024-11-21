import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={200}
        height={200}
      />
      <h1 className="text-4xl font-bold mt-4">Ketsuna</h1>
      <p className="text-lg text-center mt-2">
        A simple and easy to use task management app
      </p>
    </div>
  );
}
