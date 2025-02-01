import { PresentationHeader } from "@/components/PresentationHeader/PresentationHeader";

export default function Home() {
  return (
    <section className="w-full fullScreen flex flex-col items-center justify-center bg-transparent gap-20 lg:gap-0">
      <PresentationHeader />
    </section>
  );
}