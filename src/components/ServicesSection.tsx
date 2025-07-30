import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Music,
  Lightbulb,
  Sparkles,
  ArrowRight,
  Volume2,
  Zap,
} from "lucide-react";
import soundImage from "../assets/home/mics.jpg";
import lightingImage from "../assets/home/lights.jpg";
import smokeImage from "../assets/home/smoke.jpg";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      id: "ljud",
      title: "Ljud",
      subtitle: "Professionell ljudutrustning",
      description:
        "Komplett ljudsystem med högtalare, mikrofoner och mixerbord. Perfekt för alla typer av evenemang - från intima fester till stora företagsevent.",
      icon: Music,
      image: soundImage,
      features: [
        "Högkvalitativa högtalare",
        "Trådlösa mikrofoner",
        "DJ-mixerbord",
        "Smartphone/tablet-koppling",
        "Spotify-kompatibel",
      ],
      color: "purple",
    },
    {
      id: "ljus",
      title: "Ljus",
      subtitle: "Stämningsfull belysning",
      description:
        "Professionell ljusutrustning som skapar den perfekta atmosfären för din fest. Från subtil stämningsbelysning till spektakulära ljusshower.",
      icon: Lightbulb,
      image: lightingImage,
      features: [
        "LED-belysning",
        "Moving head-lampor",
        "Färgade strålkastare",
        "Dimmer-styrning",
        "Programmerbara effekter",
      ],
      color: "yellow",
    },
    {
      id: "rok",
      title: "Rök & Effekter",
      subtitle: "Magiska specialeffekter",
      description:
        "Skapa magiska ögonblick med professionella rökeffekter som framhäver ljuseffekterna på ett effektfullt sätt. Vi erbjuder både små och stora rökmaskiner för olika lokaler.",
      icon: Sparkles,
      image: smokeImage,
      features: [
        "Rökmaskin Small (290kr/dygn)",
        "Rökmaskin Large (390kr/dygn)",
        "Inkl. enkel kontroller",
        "Rökvätska kan köpas till",
        "Fylld vid uthyrning",
      ],
      color: "blue",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Våra Tjänster
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Komplett utbud av professionell fest- och eventutrustning för alla
            tillfällen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`bg-card border-gray-800 hover:shadow-purple-500 hover:shadow-[0px_0px_20px_0px] transition-all duration-500 group animate-fade-in p-0 pb-6`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>
                <div
                  className={`absolute top-4 right-4 w-12 h-12 bg-${service.color}-500 rounded-xl flex items-center justify-center shadow-glow`}
                >
                  <service.icon className="w-6 h-6 text-foreground" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-serif text-foreground flex items-center">
                  {service.title}
                  <ArrowRight className="w-5 h-5 ml-2 text-white group-hover:text-purple-500 transition-colors" />
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <div
                        className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={`/${service.id}`}>
                  <Button
                    variant="outline"
                    className="w-full bg-black text-white group-hover:bg-purple-600 group-hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    Läs mer om {service.title}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Highlight */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-glow border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Komplett Service
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Vi erbjuder inte bara utrustning - vi hjälper dig genom hela
                processen. Från planering till uppsättning och nedmontering. Din
                fest är vår prioritet.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-5 h-5 text-brand-purple" />
                  <span className="text-sm text-muted-foreground">
                    Leverans & uppsättning
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-brand-gold" />
                  <span className="text-sm text-muted-foreground">
                    Teknisk support
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-purple-800 text-black rounded-2xl p-6">
                <Music className="w-12 h-12 text-primary-foreground mb-4 mx-auto lg:mx-0" />
                <p className="text-primary-foreground font-semibold">
                  Upp till 2-3 mil från Norrköping
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Leverans och uppsättning ingår
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
