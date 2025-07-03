import { PresentationHeader } from "@/components/PresentationHeader/PresentationHeader";

export default function Home() {
  return (
    <section className="w-full minFullScreen flexColCentered bg-transparent gap-20 lg:gap-0">
      <PresentationHeader />
    </section>
  );
}