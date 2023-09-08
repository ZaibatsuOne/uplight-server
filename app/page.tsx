import Contacs from "@/components/contacs";
import Hero from "@/components/hero";
import InDevelopmemtBlock from "@/components/in-developmemt-block";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Pricing />
      <InDevelopmemtBlock />
      <Contacs />
    </main>
  );
}
