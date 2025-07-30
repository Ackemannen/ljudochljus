import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Music, Lightbulb, Sparkles } from "lucide-react";
import backgroundImage from "../assets/home/background.png";

const HeroSection = () => {
  return (
    <section
      id="hem"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
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
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card backdrop-blur-sm rounded-full px-4 py-2 mb-8 mt-4">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span className="text-base font-medium text-foreground">
              Professionell festuthyrning sedan 2010
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="!text-4xl md:!text-6xl font-serif font-bold text-foreground mb-6">
            Gör din fest
            <span className="block text-brand-purple">oförglömlig</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-400">
            Professionell ljud- och ljusuthyrning för alla typer av evenemang i
            Norrköping. Högkvalitativ utrustning som garanterar en perfekt
            atmosfär för din fest.
          </p>

          {/* Service Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12 animate-fade-in-up delay-400">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-2 shadow-card">
                <Music className="w-6 h-6 text-brand-purple" />
              </div>
              <span className="text-sm text-gray-400">Ljud</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-2 shadow-card">
                <Lightbulb className="w-6 h-6 text-brand-gold" />
              </div>
              <span className="text-sm text-gray-400">Ljus</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-2 shadow-card">
                <Sparkles className="w-6 h-6 text-brand-blue" />
              </div>
              <span className="text-sm text-gray-400">Effekter</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              className="bg-purple-600 text-black shadow-glow cursor-pointer hover:bg-purple-500 transition-all duration-300"
            >
              Boka Utrustning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-gray-900 border-gray-600 cursor-pointer hover:bg-gray-700 transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Se Våra Tjänster
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12">
            <p className="text-gray-400 mb-2">
              Ring oss idag mellan 16:00-18:00
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              <a
                href="tel:0761313516"
                className="text-brand-gold hover:text-accent transition-colors font-semibold"
              >
                📞 076-1313516
              </a>
              <a
                href="mailto:info@nkpgljudochljus.se"
                className="text-brand-blue hover:text-primary transition-colors font-semibold"
              >
                ✉️ info@nkpgljudochljus.se
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-purple rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
