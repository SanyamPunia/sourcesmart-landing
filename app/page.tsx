import Header from "@/components/header";
import Hero from "@/components/hero";
import FeatureHighlights from "@/components/feature-highlights";
import ProductGlimpse from "@/components/product-glimpse";
import AllFeatures from "@/components/all-features";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeatureHighlights />
        <ProductGlimpse />
        <AllFeatures />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
