import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/Logomain.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[hsl(240_10%_3.9%)] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2 space-x-3">
              <img
                src={logo}
                alt="Norrköpings ljud & ljus"
                className="h-24 w-48 rounded-2xl"
              />
              <div>
                <h3 className="font-serif font-bold text-white">
                  Norrköpings Ljud & Ljus
                </h3>
                <p className="text-sm text-gray-400">
                  Din partner för festuthyrning
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professionell ljud- och ljusuthyrning för alla typer av evenemang
              i Norrköping. Vi skapar en minnesvärd atmosfär för ditt event.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold white">Våra Tjänster</h4>
            <nav className="space-y-2">
              <a
                href="/ljud"
                className="block text-gray-400 hover:text-purple-100 transition-colors text-sm"
              >
                Ljuduthyrning
              </a>
              <a
                href="/ljus"
                className="block text-gray-400 hover:text-purple-100 transition-colors text-sm"
              >
                Ljusuthyrning
              </a>
              <a
                href="/rok"
                className="block text-gray-400 hover:text-purple-100 transition-colors text-sm"
              >
                Rök & Effekter
              </a>
              <a
                href="/om-oss"
                className="block text-gray-400 hover:text-purple-100 transition-colors text-sm"
              >
                Om Oss
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold white">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-purple" />
                <div>
                  <a
                    href="tel:0761313516"
                    className="text-gray-400 hover:text-purple-100 transition-colors text-sm"
                  >
                    076-1313516
                  </a>
                  <p className="text-xs text-gray-400">16:00-18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-blue" />
                <a
                  href="mailto:info@nkpgljudochljus.se"
                  className="text-gray-400 hover:text-purple-100 transition-colors text-sm"
                >
                  info@nkpgljudochljus.se
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span className="text-gray-400 text-sm">
                  Norrköping & närområde
                </span>
              </div>
            </div>
          </div>

          {/* Social & Additional */}
          <div className="space-y-4">
            <h4 className="font-semibold white">Följ Oss</h4>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/nkpgljudochljus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-purple-100 transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span className="text-sm">Facebook</span>
              </a>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold white text-sm mb-2">
                Leveransområde
              </h5>
              <p className="text-gray-400 text-xs leading-relaxed">
                Vi levererar och sätter upp utrustning inom 2-3 mil från
                Norrköping. Leverans och uppsättning ingår efter
                överenskommelse.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Norrköpings Ljud & Ljus. Alla rättigheter förbehållna.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link
                to="/villkor"
                className="hover:text-purple-100 transition-colors"
              >
                Villkor
              </Link>
              <p>Integritet</p>
              <span className="text-xs">Sedan 2010</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
