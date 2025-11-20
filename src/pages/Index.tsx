import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductCategories from "@/components/ProductCategories";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <ProductCategories />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
