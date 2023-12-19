import Benefits from "./_components/benefits";
import Hero from "./_components/hero";
import StickyBar from "./_components/sticky-bar";

export default function HomePage() {
  return (
    <div className="space-y-20 py-20">
      <Hero />
      <Benefits />
      <StickyBar />
    </div>
  );
}
