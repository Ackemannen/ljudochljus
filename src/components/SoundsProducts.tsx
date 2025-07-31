import { Music } from "lucide-react";
import micsBg from "../assets/home/mics.jpg";
import h400w from "../assets/ljud/h400w.png";
import baslåda from "../assets/ljud/baslåda.png";
import dubbel1200w from "../assets/ljud/dubbel1200w.png";
import h1200w from "../assets/ljud/h1200w.png";
import mikrofon from "../assets/ljud/mikrofon.png";
import mixer6 from "../assets/ljud/mixer6.png";
import mixer10 from "../assets/ljud/mixer10.png";
import { PaketImageSlider } from "./PaketImageSlider";

const SoundsProducts = () => {
  const pakets = [
    {
      id: 1,
      name: "Paket 1",
      images: [h1200w, mikrofon],
      description:
        "Högtalare med inbyggd 3-kanals mixer och mikrofon. Passar till tal och bakgrundsmusik",
      content: [
        "1 st aktiv högtalare på 1200w",
        "1 st mikrofon inkl stativ",
        "1 st högtalarstativ",
        "1 st audiokabel (3,5mm aux) för inkoppling till tex en dator",
      ],
      price: 595,
    },
    {
      id: 2,
      name: "Paket 2",
      images: [dubbel1200w],
      description: "Passar perfekt för den mindre/mellanstora festen",
      content: [
        "2 st aktiva högtalare på 2x1200w",
        "2 st högtalarstativ",
        "1 st 5 kanals mixer inklusive audiokabel för inkoppling till tex en iPad",
        "2 st högtalarkablar",
      ],
      price: 795,
    },
    {
      id: 3,
      name: "Paket 3",
      images: [dubbel1200w, baslåda],
      description:
        "Passar perfekt för den mellanstora festen. Högtalare med bra bastryck plus en extra baslåda för extra bas",
      content: [
        "2 st aktiva högtalare på 2x1200w",
        "1 st aktiv baslåda på 800w",
        "2 st högtalarstativ",
        "1 st 5 kanals mixer inklusive audiokabel för inkoppling till tex en iPad",
        "4 st högtalarkablar",
      ],
      price: 1195,
    },
    {
      id: 4,
      name: "Paket 4",
      images: [dubbel1200w, baslåda, baslåda],
      description:
        "Passar perfekt för den mellanstora/stora festen. Högtalare med bra bastryck plus två extra baslådor för extra bas",
      content: [
        "2 st aktiva högtalare på 2x1200w",
        "2 st aktiv baslådor på 2x800w",
        "2 st högtalarstativ",
        "1 st 5 kanals mixer inklusive audiokabel för inkoppling till tex en iPad",
        "4 st högtalarkablar",
      ],
      price: 1495,
    },
  ];

  const products = [
    {
      id: 1,
      name: "Aktiv högtalare 400w",
      description: "Aktiv högtalare med inbyggt slutsteg",
      image: h400w,
      price: 300,
    },
    {
      id: 2,
      name: "Aktiv högtalare 1200w",
      description: "Aktiv högtalare med inbyggt slutsteg",
      image: h1200w,
      price: 595,
    },
    {
      id: 3,
      name: "Aktiv baslåda 1000w",
      description: "Aktiv baslåda med inbyggt slutsteg",
      image: baslåda,
      price: 645,
    },
    {
      id: 4,
      name: "Mixer 6 kanaler",
      description:
        "Passar bra till festen då det inte behövs så många ingångskällor tex bara musik från en surfplatta/smartphone/CD- spelare",
      image: mixer6,
      price: 150,
    },
    {
      id: 5,
      name: "Mixer 10 kanaler",
      description:
        "Passar bra till festen då fler ingångskällor behövs tex musik från en surfplatta/smartphone/CD- spelare och några mikrofoner",
      image: mixer10,
      price: 350,
    },
  ];

  return (
    <div className="min-w-full">
      <div className="flex flex-col relative pt-32">
        <img
          src={micsBg}
          alt=""
          className="w-full h-[50vh] object-cover absolute inset-0 z-0 opacity-30"
        />

        <div className="w-full flex flex-col items-center justify-center z-10 relative pb-24">
          <div className="flex items-center justify-center gap-2 px-2 py-0.5 rounded-full bg-[rgba(0,0,0,0.5)] border border-purple-400 mb-10">
            <Music className="w-4 h-4 text-purple-400" />
            <p className="text-sm font-semibold text-purple-500">Ljud</p>
          </div>

          <div className="flex flex-col itmes-center w-full md:w-1/2">
            <h1 className="!text-3xl md:!text-5xl font-bold text-white text-center">
              Professionell Ljuduthyrning
            </h1>
            <p className="!text-base md:!text-lg text-gray-300 text-center">
              Komplett ljudsystem med högtalare, mikrofoner och mixerbord.
              Perfekt för alla typer av evenemang - från intima fester till
              stora företagsevent.
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="w-full pb-10">
          <div className="flex flex-col items-center py-10">
            <h1 className="!text-2xl md:!text-3xl font-bold text-white">
              Vår Ljudutrustning
            </h1>
            <p className="text-sm text-center md:text-base text-gray-400">
              All utrustning är professionell och välunderhållen för att
              garantera bästa möjliga ljudkvalitet
            </p>
          </div>

          {/* Pakets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 px-6 md:px-20 lg:px-25 pb-20">
            {pakets.map((paket) => (
              <div
                key={paket.id}
                className="bg-card border border-gray-800 hover:shadow-purple-500 hover:shadow-[0px_0px_20px_0px] transition-all duration-500 rounded-2xl p-4 flex flex-col itmes-center"
              >
                <h2 className="!text-xl font-bold mb-2 text-center">
                  {paket.name}
                </h2>
                <div className="flex flex-row items-center pb-2">
                  <PaketImageSlider images={paket.images} />
                  <p className="text-base text-gray-400 text-center">
                    {paket.description}
                  </p>
                </div>
                <div className="flex flex-col items-start text-gray-400 pb-4">
                  {paket.content.map((item) => (
                    <p>• {item}</p>
                  ))}
                </div>
                <div className="flex items-center justify-center px-2 py-1 bg-amber-400 w-1/2 rounded-full m-auto">
                  <p className="text-base font-semibold text-black flex gap-1">
                    <span className="hidden md:block">Hyra:</span>
                    {paket.price}kr/dygn
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Single products */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-2 pb-10">
              <h2 className="text-3xl font-bold text-white">
                Enskilda komponenter
              </h2>
              <p className="text-sm text-center text-gray-400">
                Det finns mer utrustning, så söker du nått annat, hör av dig med
                en förfrågan!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-20 lg:px-25">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-card border border-gray-800 hover:shadow-purple-500 hover:shadow-[0px_0px_20px_0px] transition-all duration-500 rounded-2xl p-4 flex flex-col itmes-center"
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

export default SoundsProducts;
