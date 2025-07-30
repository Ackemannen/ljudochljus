import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SoundsProducts from "@/components/SoundsProducts";

const Sound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <SoundsProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Sound;
