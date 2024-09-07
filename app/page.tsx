import { Hero } from "@/sections/Hero";
import { Header } from "@/sections/Header";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker/>
      <ProductShowcase/>
    </div>
  );
}
