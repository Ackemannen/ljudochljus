import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  MessageCircle,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Kontakta Oss
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Redo att göra din fest oförglömlig? Hör av dig så hjälper vi dig
            planera den perfekta evenemanget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-gray-800 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Phone className="w-6 h-6 mr-3 text-brand-purple" />
                  Telefon & SMS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-400">
                  <a
                    href="tel:0761313516"
                    className="block text-2xl font-bold text-brand-gold transition-colors"
                  >
                    076-1313516
                  </a>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Telefontid: 16:00-18:00</span>
                  </div>
                  <p className="text-sm">
                    Ring eller skicka SMS för snabb kontakt och prisförfrågan.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-gray-800 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Mail className="w-6 h-6 mr-3 text-brand-blue" />
                  E-post
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-400">
                  <a
                    href="mailto:info@nkpgljudochljus.se"
                    className="block text-xl font-semibold text-brand-blue"
                  >
                    info@nkpgljudochljus.se
                  </a>
                  <p className="text-sm">
                    Skicka detaljerad förfrågan om ditt evenemang via e-post.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-gray-800 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="w-6 h-6 mr-3 text-brand-gold" />
                  Vårt Område
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-400">
                  <p className="font-semibold text-xl text-white">
                    Norrköping & Omnejd
                  </p>
                  <p>
                    Vi levererar och sätter upp utrustning inom en radie av 2-3
                    mil från Norrköping.
                  </p>
                  <div className="inline-flex items-center bg-gray-800 rounded-lg px-3 py-1">
                    <span className="text-sm text-muted-foreground">
                      Leverans ingår i priset
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-gray-800 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Facebook className="w-6 h-6 mr-3 text-brand-purple" />
                  Sociala Medier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-400">
                  <a
                    href="https://www.facebook.com/nkpgljudochljus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-brand-purple hover:text-primary transition-colors"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    <span className="font-semibold">
                      facebook.com/nkpgljudochljus
                    </span>
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Följ oss för inspiration och uppdateringar om våra tjänster.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-glow border border-gray-800">
            <div className="mb-8">
              <h1 className="text-2xl font-serif font-bold text-white mb-4">
                Snabbkontakt
              </h1>
              <p className="text-gray-400">
                Berätta om ditt evenemang så återkommer vi med ett skräddarsytt
                förslag.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4 border border-gray-800">
                  <h4 className="font-semibold text-white mb-2">Bröllop</h4>
                  <p className="text-sm text-gray-400">
                    Romantisk belysning och kristallklar ljudkvalitet
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-gray-800">
                  <h4 className="font-semibold text-white mb-2">
                    Företagsevent
                  </h4>
                  <p className="text-sm text-gray-400">
                    Professionell presentation och networking
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-gray-800">
                  <h4 className="font-semibold text-white mb-2">Privat Fest</h4>
                  <p className="text-sm text-gray-400">
                    Skapa den perfekta stämningen hemma
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-gray-800">
                  <h4 className="font-semibold text-white mb-2">
                    Större Event
                  </h4>
                  <p className="text-sm text-gray-400">
                    Fullskalig ljudanläggning och belysning
                  </p>
                </div>
              </div>

              <div className="bg-purple-600/5 rounded-lg p-6 border border-gray-800">
                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-6 h-6 text-brand-purple mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Vad behöver vi veta?
                    </h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Typ av evenemang och antal gäster</li>
                      <li>• Datum och tid för evenemanget</li>
                      <li>• Plats (inomhus/utomhus)</li>
                      <li>• Vilken typ av musik/ljud du planerar</li>
                      <li>• Önskemål om belysning och effekter</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col text-center space-y-4 gap-4">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-500 text-black shadow-glow w-full cursor-pointer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ring 076-1313516
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-black hover:bg-gray-800 border-gray-600  cursor-pointer"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Skicka E-post
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-card rounded-2xl p-8 border border-gray-800 shadow-card">
          <h3 className="text-xl font-serif font-bold text-white mb-2">
            Redo att börja planera?
          </h3>
          <p className="text-gray-400 mb-6">
            Kontakta oss idag för ett kostnadsfritt och skräddarsytt förslag för
            ditt evenemang.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <span className="text-sm text-gray-400">
              Telefontid: 16:00-18:00 alla dagar
            </span>
            <div className="w-2 h-2 bg-brand-gold rounded-full hidden sm:block"></div>
            <span className="text-sm text-gray-400">
              E-post besvaras så snabbt som möjligt
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
