import MyHome from "@/components/home";
import RoadMap from "@/components/roadmap";
import Tokenomics from "@/components/tokenomics";
import UseCase from "@/components/usecase";
import OurVision from "@/components/vision";
import WhyUs from "@/components/whyus";
import JoinUs from "@/components/joinus";

export default function Home() {

  return (
    <section className="flex flex-col items-center justify-center gap-4 text-center pt-16">
      <MyHome />
      <WhyUs />
      <OurVision />
      <UseCase />
      <Tokenomics />
      <RoadMap />
      <JoinUs />
    </section>
  );
}
