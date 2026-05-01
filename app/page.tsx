import Hero from "@/Components/hero";
import MissionVision from "@/Components/MissionVision";
import OurSolutions from "@/Components/OurSolutions";
import Solutions from "@/Components/Solutions";
import Testimonials from "@/Components/Testimonials";
import TrustedBy from "@/Components/TrustedBy";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <Solutions />
      <MissionVision />
      <OurSolutions />
      <Testimonials />

    </div>
  );
}
