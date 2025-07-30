import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LightProducts from "@/components/LightProducts";

const Lighting = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <LightProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Lighting;
