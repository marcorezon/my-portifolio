import { Presentation } from "@/components/Presentation/Presentation";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center bg-gradient-to-r from-primary-dark to-primary-grey shadow-primary-grey">
      <Presentation />
    </div>
  );
}