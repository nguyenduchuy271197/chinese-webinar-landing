import Benefits from "./_components/benefits";
import Hero from "./_components/hero";
import StickyBar from "./_components/sticky-bar";
import Story from "./_components/story";
import StoryChart from "./_components/story-chart";

export default function HomePage() {
  return (
    <div className="space-y-20 sm:py-16 py-10">
      <Hero />
      <Benefits />
      <Story />
      <StoryChart />
      <StickyBar />
    </div>
  );
}
