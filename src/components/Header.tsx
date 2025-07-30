import { useState } from "react";
import logo from "../assets/Logomain.jpg";
import { Link } from "react-router-dom";
import { MailIcon, Menu, PhoneIcon, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Hem", href: "/" },
    { name: "Ljud", href: "/ljud" },
    { name: "Ljus", href: "/ljus" },
    { name: "Rök", href: "/rok" },
    { name: "Om", href: "/om" },
    { name: "Villkor", href: "/villkor" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-4 py-4 bg-card backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* LOGO */}
          <div className="flex items-center gap-6">
            <img
              src={logo}
              alt="Norrköpings ljud & ljus"
              className="h-20 rounded-2xl shadow-glow hidden lg:block"
            />
            <h1 className="!text-xl font-serif font-bold text-white">
              Norrköpings Ljud & Ljus
            </h1>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="font-semibold hover:text-purple-600 transition-colors duration-200"
                >
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="flex items-center gap-2 text-gray-400">
              <PhoneIcon className="w-5" />
              076-1313516
            </span>
            <Button
              variant="default"
              className="bg-purple-600 text-black cursor-pointer hover:bg-purple-500"
            >
              Kontakta Oss
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white font-semibold hover:text-purple-600 transition-colors duration-200 py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col pt-4 border-t border-gray-500">
                <div className="flex items-center text-sm text-gray-400 gap-2">
                  <PhoneIcon className="w-4 h-4" />
                  <span>076-1313516</span>
                </div>
                <div className="flex items-center text-sm text-gray-400 gap-2 mb-4">
                  <MailIcon className="w-4 h-4" />
                  <span>info@nkpgljudochljus.se</span>
                </div>
                <Button
                  variant="default"
                  className="bg-purple-600 text-black cursor-pointer hover:bg-purple-500"
                >
                  Kontakta Oss
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
