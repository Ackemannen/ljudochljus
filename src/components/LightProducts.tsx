import { Music } from "lucide-react";
import lightsBg from "../assets/home/lights.jpg";
import Apelabs from "../assets/ljus/ApeLabs4pc.png";
import Apelabsfx from "../assets/ljus/ApeLabsfx.jpg";
import LedLight from "../assets/ljus/LedLight.png";
import LedPar56 from "../assets/ljus/LedPar56.png";
import MegaHex from "../assets/ljus/MegaHex.png";
import Moonflower from "../assets/ljus/Moonflower.png";
import Scanner from "../assets/ljus/Scanner.png";
import UvLight from "../assets/ljus/UvLight.png";
import VortexScanner from "../assets/ljus/VortexScanner.png";
import ledBar from "../assets/ljus/ledBar.png";
import { PaketImageSlider } from "./PaketImageSlider";
import { useState } from "react";

const LightProducts = () => {
  const [labsAmmount, setLabsAmmount] = useState(1);
  const [labsPrice, setLabsPrice] = useState(200);

  const pakets = [
    {
      id: 1,
      name: "Paket 1",
      images: [LedPar56],
      description: "Perfekt för en liten tillställning",
      content: [
        "4 st LED Par56 lampor som blinkar i autoläge eller med musiken",
        "1 st stativ",
        "1 st 5m 230VAC spänningskablel",
      ],
      price: 390,
    },
    {
      id: 2,
      name: "Paket 2",
      images: [Moonflower, Scanner],
      description: "Passar perfekt för den mindre/mellanstora festen",
      content: [
        "1 st moonflower med 160 strålar som ändras i automode eller med musiken",
        "1 st scanner som med hjälp av en hjul med speglar projekterar ljusmönster i lokalen",
        "1 st ljusstativ",
        "1 st 5m 230VAC spänningskablel",
      ],
      price: 595,
    },
    {
      id: 3,
      name: "Paket 3",
      images: [Scanner, Scanner],
      description:
        "Passar perfekt för den mellanstora festen. Dessa 2 scanners kan kopplas ihop med en DMX kabel till master/slav funktion, så att båda två följer varandra",
      content: [
        "2 st scanner som med hjälp av en hjul med speglar projekterar ljusmönster i lokalen",
        "1 eller 2 st ljusstativ",
        "1 eller 2 st 5m 230VAC spänningskablel",
      ],
      price: 595,
    },
    {
      id: 4,
      name: "Paket 4",
      images: [Scanner, Scanner, Moonflower],
      description:
        "Passar perfekt för den mellanstora/stora festen. Dessa 2 scanners kan kopplas ihop med en DMX kabel till master/slav funktion, så att båda två följer varandra",
      content: [
        "2 st scanner som med hjälp av en hjul med speglar projekterar ljusmönster i lokalen",
        "1 st moonflower med 160 strålar som ändras med musiken",
        "2 st ljusstativ",
        "2 st 5m 230VAC spänningskablel",
      ],
      price: 695,
    },
  ];

  const products = [
    {
      id: 1,
      name: "Mega Hex Par",
      description:
        "LED lampa som kan programmeras att blinka med musiken, sättas till fast färg, ändra färg med fast tidsintevall eller styras med DMX",
      image: MegaHex,
      price: 120,
    },
    {
      id: 2,
      name: "LED Ljus",
      description:
        "9 LED strålar från varje lins (7 st) som skapar olika mönster som ändras  med musiken",
      image: LedLight,
      price: 190,
    },
    {
      id: 3,
      name: "Moonflower",
      description:
        "Moonflower som kan programmeras att ändra stålar med musiken, master/slav funktion, eller styras med DMX",
      image: Moonflower,
      price: 395,
    },
    {
      id: 4,
      name: "Scanner",
      description:
        "Scanner som kan programmeras att rotera/ändra mönster med musiken, master/slav funktion, eller styras med DMX",
      image: Scanner,
      price: 395,
    },
    {
      id: 5,
      name: "Vortex Scanner",
      description:
        "Kraftigare 80w Scanner som kan programmeras att rotera/ändra mönster i automode, eller reagera med musiken på dansgolvet, master/slav funktion, eller styras med DMX",
      image: VortexScanner,
      price: 395,
    },
    {
      id: 6,
      name: "UV Ljus",
      description: "Framhäver vissa material att bli självlysnade",
      image: UvLight,
      price: 200,
    },
    {
      id: 6,
      name: "LED Bar",
      description:
        "LedBar som kan programmeras att ändra mönster i takt med musiken, master/slav funktion, eller styras med DMX",
      image: ledBar,
      price: 250,
    },
  ];

  return (
    <div className="min-w-full">
      <div className="flex flex-col relative pt-32">
        <img
          src={lightsBg}
          alt=""
          className="w-full h-[50vh] object-cover absolute inset-0 z-0 opacity-30"
        />

        <div className="w-full flex flex-col items-center justify-center z-10 relative pb-24">
          <div className="flex items-center justify-center gap-2 px-2 py-0.5 rounded-full bg-[rgba(0,0,0,0.5)] border border-yellow-400 mb-10">
            <Music className="w-4 h-4 text-yellow-400" />
            <p className="text-sm font-semibold text-yellow-500">Ljus</p>
          </div>

          <div className="flex flex-col itmes-center w-full md:w-1/2">
            <h1 className="!text-3xl md:!text-5xl font-bold text-white text-center">
              Professionell Ljusuthyrning
            </h1>
            <p className="!text-base md:!text-lg text-gray-300 text-center">
              Ljusutrustning som passar perfekt till olika typer av fester och
              tillställningar.
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="w-full pb-10">
          <div className="flex flex-col items-center py-10">
            <h1 className="!text-2xl md:!text-3xl font-bold text-white">
              Vår Ljusutrustning
            </h1>
            <p className="text-sm text-center md:text-base text-gray-400">
              All utrustning är professionell och välunderhållen för att
              garantera bästa möjliga ljus och färgkvalitet.
            </p>
          </div>

          {/* Pakets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 px-6 md:px-20 lg:px-25 pb-20">
            {pakets.map((paket) => (
              <div
                key={paket.id}
                className="bg-card border border-gray-800 hover:shadow-yellow-500 hover:shadow-[0px_0px_20px_0px] transition-all duration-500 rounded-2xl p-4 flex flex-col itmes-center"
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
                  className="bg-card border border-gray-800 hover:shadow-yellow-500 hover:shadow-[0px_0px_20px_0px] transition-all duration-500 rounded-2xl p-4 flex flex-col itmes-center"
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
              <div className="bg-card border border-gray-800 hover:shadow-yellow-500 hover:shadow-[0px_0px_20px_0px] transition-all duration-500 rounded-2xl p-4 flex flex-col itmes-center">
                <div className="flex flex-col items-center gap-2 pb-2">
                  <h3 className="text-lg">Ape Labs Mini</h3>
                  <PaketImageSlider images={[Apelabs, Apelabsfx]} />
                  <p className="text-base text-gray-400 text-center">
                    Ljuskälla med batteri, används tex. som dekorationsbelysning
                    i lokalen för att skapa en häftig uplight-effekt. Upp till
                    10 timmars batteritid
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 py-4">
                  <div
                    className={`px-1.5 py-1.5 rounded-full text-sm cursor-pointer hover:bg-yellow-700 ${
                      labsAmmount === 1 ? "bg-yellow-700" : "bg-gray-700"
                    }`}
                    onClick={() => {
                      setLabsAmmount(1);
                      setLabsPrice(200);
                    }}
                  >
                    1st
                  </div>
                  <div
                    className={`px-1.5 py-1.5 rounded-full text-sm cursor-pointer hover:bg-yellow-700 ${
                      labsAmmount === 4 ? "bg-yellow-700" : "bg-gray-700"
                    }`}
                    onClick={() => {
                      setLabsAmmount(4);
                      setLabsPrice(700);
                    }}
                  >
                    4st
                  </div>
                  <div
                    className={`px-1.5 py-1.5 rounded-full text-sm cursor-pointer hover:bg-yellow-700 ${
                      labsAmmount === 6 ? "bg-yellow-700" : "bg-gray-700"
                    }`}
                    onClick={() => {
                      setLabsAmmount(6);
                      setLabsPrice(1000);
                    }}
                  >
                    6st
                  </div>
                  <div
                    className={`px-1.5 py-1.5 rounded-full text-sm cursor-pointer hover:bg-yellow-700 ${
                      labsAmmount === 8 ? "bg-yellow-700" : "bg-gray-700"
                    }`}
                    onClick={() => {
                      setLabsAmmount(8);
                      setLabsPrice(1200);
                    }}
                  >
                    8st
                  </div>
                </div>
                <div className="flex items-center justify-center px-2 py-1 bg-amber-400 w-1/2 rounded-full m-auto">
                  <p className="text-base font-semibold text-black flex gap-1">
                    <span className="hidden lg:block">Hyra:</span>
                    {labsPrice}kr/dygn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightProducts;
