import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmokeProducts from "@/components/SmokeProducts";

const Smoke = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <SmokeProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Smoke;
