import Button from "@/components/Button";
export default function Home() {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center h-screen">
      <h1 className="tw-text-4xl tw-font-bold mt-4">Ketsuna</h1>
      <p className="tw-text-lg tw-text-center mt-2">
        A simple and easy to use task management app
      </p>

      <div className="tw-mt-4">
        <Button href={"/managements"}>Go to Management</Button>
      </div>
    </div>
  );
}
