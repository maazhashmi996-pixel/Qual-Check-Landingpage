import Hero from "@/Components/hero";
import MissionVision from "@/Components/MissionVision";
import OurSolutions from "@/Components/OurSolutions";
import Solutions from "@/Components/Solutions";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Solutions />
      <MissionVision />
      <OurSolutions />

    </div>
  );
}
