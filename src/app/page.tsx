import { BackgroundGradient } from "@/components/common/BackgroundGradient.tsx/BackgroundGradient";
import { Presentation } from "@/components/Presentation/Presentation";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center bg-transparent py-[5vh]">
      <Presentation />
      <BackgroundGradient />
    </div>
  );
}