import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export const PaketImageSlider = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false);

  const changeImage = (nextIndex: number) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImage(nextIndex);
      setFade(false);
    }, 200); // duration matches transition
  };

  const handlePrev = () => {
    changeImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    changeImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <img
        src={images[currentImage]}
        alt=""
        className={`w-40 h-40 object-contain mb-2 transition-opacity duration-200 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      />
      {images.length > 1 && (
        <div className="flex justify-between w-40 mt-2">
          <button
            onClick={handlePrev}
            className="px-2 py-1 bg-gray-700 text-white rounded-2xl cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="px-2 py-1 bg-gray-700 text-white rounded-2xl cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
