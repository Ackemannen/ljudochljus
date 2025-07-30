import { Sparkles } from "lucide-react";
import smokeBg from "../assets/home/smoke.jpg";
import rokSmall from "../assets/smoke/Roksmall.png";
import rokLarge from "../assets/smoke/Roklarge.png";

const SmokeProducts = () => {
  const products = [
    {
      id: 1,
      name: "Rökmaskin liten",
      description:
        "Liten rökmaskin som passar bra till det mindre rummet. Framhäver ljuseffekterna på ett effektfullt sätt. Rökmaskinen är fylld vid hyran. Mer rökvätska kan köpas till. Inkl enkel kontroller.",
      image: rokSmall,
      price: 290,
    },
    {
      id: 2,
      name: "Rökmaskin stor",
      description:
        "Stor rökmaskin som passar bra till större lokaler. Framhäver ljuseffekterna på ett effektfullt sätt. Rökmaskinen är fylld vid hyran. Mer rökvätska kan köpas till. Inkl en enkel kontroller",
      image: rokLarge,
      price: 390,
    },
  ];

  return (
    <div className="min-w-full">
      <div className="flex flex-col relative pt-32">
        <img
          src={smokeBg}
          alt=""
          className="w-full h-[50vh] object-cover absolute inset-0 z-0 opacity-30"
        />

        <div className="w-full flex flex-col items-center justify-center z-10 relative pb-24">
          <div className="flex items-center justify-center gap-2 px-2 py-0.5 rounded-full bg-[rgba(0,0,0,0.5)] border border-blue-400 mb-10">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <p className="text-sm font-semibold text-blue-500">Rök</p>
          </div>

          <div className="flex flex-col itmes-center w-full md:w-1/2">
            <h1 className="!text-3xl md:!text-5xl font-bold text-white text-center">
              Professionella Rökmaskiner
            </h1>
            <p className="!text-base md:!text-lg text-gray-300 text-center">
              Rökdutrustning som skapar den perfekta atmosfärn för din fest.
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="w-full pb-10">
          <div className="flex flex-col items-center py-10">
            <h1 className="!text-2xl md:!text-3xl font-bold text-white">
              Vår Rökdutrustning
            </h1>
            <p className="text-sm text-center md:text-base text-gray-400">
              All utrustning är professionell och välunderhållen för att
              garantera bästa kvalitet.
            </p>
          </div>

          {/* Single products */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row gap-4 px-6 md:px-20 lg:px-25">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-card border border-gray-800 hover:shadow-blue-500 hover:shadow-[0px_0px_20px_0px] transition-all duration-500 rounded-2xl p-4 flex flex-col itmes-center"
                >
                  <div className="flex flex-col items-center gap-2 pb-2">
                    <h3 className="text-lg">{product.name}</h3>
                    <img src={product.image} alt="" className="h-40" />
                    <p className="text-base text-gray-400 text-center">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-2 py-1 bg-amber-400 w-1/2 rounded-full m-auto">
                    <p className="text-base font-semibold text-black flex gap-1">
                      <span className="hidden lg:block">Hyra:</span>
                      {product.price}kr/dygn
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmokeProducts;
