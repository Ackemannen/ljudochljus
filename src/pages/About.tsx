import Header from "@/components/Header";
import backgroundImage from "../assets/home/background.png";
import Footer from "@/components/Footer";
import { Facebook, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div>
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <div className="absolute inset-0 gradient-hero opacity-80"></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 hidden sm:block">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-purple rounded-full animate-[pulse_3s_ease-in-out_infinite]"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-brand-gold rounded-full animate-[pulse_4s_ease-in-out_infinite] delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-blue-400 rounded-full animate-[pulse_4s_ease-in-out_infinite] delay-2000"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center z-10">
            <h1 className="!text-3xl md:!text-4xl lg:!text-5xl font-bold font-serif text-white z-10">
              Norrköpings ljud och ljus
            </h1>
            <div className="w-1/2 h-1 bg-purple-500 mb-20"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-card w-6/8 sm:w-3/4 md:w-2/3 lg:w-1/2 border border-gray-800 shadow-card px-6 py-4 rounded-2xl">
              <p className="text-gray-400 text-lg flex items-center justify-center">
                Norrköpings ljud & ljus startades 2014 av Tobias Grönkvist. Jag
                erbjuder ljud- och ljusanläggningar till både privatpersoner och
                företag.
              </p>
              <div className="flex flex-col items-center gap-2">
                <p className="font-semibold">För uthyrning, hör av Er på:</p>
                <span className="flex items-center gap-2 text-amber-400 hover:text-amber-200 transition-colors cursor-pointer">
                  <Phone className="w-4 h-4" />
                  <div>
                    <p>076-1313516</p>
                    <p className="text-sm group-hover:text-amber-400">
                      16:00 - 18:00
                    </p>
                  </div>
                </span>
                <div className="flex items-center space-x-3 text-blue-400 hover:text-blue-200 transition-colors ">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@nkpgljudochljus.se" className="text-sm">
                    info@nkpgljudochljus.se
                  </a>
                </div>
                <a
                  href="https://www.facebook.com/nkpgljudochljus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-purple-400 hover:text-purple-200 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span className="text-sm">Facebook</span>
                </a>
                <p className="text-sm text-gray-400">Innehar f-skattebevis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
