import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mt-4">Ketsuna</h1>
      <p className="text-lg text-center mt-2">
        A simple and easy to use task management app
      </p>

      <div className="mt-4">
        <Button href="/managements">Go to the Management App</Button>
      </div>
    </div>
  );
}
