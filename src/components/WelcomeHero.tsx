
import { Building2, Heart, Users } from "lucide-react";

const WelcomeHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-warm-brown-600 via-warm-brown-700 to-sage-green-700 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Building2 className="w-12 h-12" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bem-vindo ao seu novo lar!
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Residencial Magnólia - COHAGRA / Uberaba - MG
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center animate-scale-in">
              <div className="bg-white/20 p-3 rounded-full mb-4">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Primeira Entrega Vertical</h3>
              <p className="text-sm opacity-80">Tecnologia de parede de concreto em Uberaba</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-scale-in">
              <div className="bg-white/20 p-3 rounded-full mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Conforto e Segurança</h3>
              <p className="text-sm opacity-80">Sua nova moradia com cuidados específicos</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-scale-in">
              <div className="bg-white/20 p-3 rounded-full mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Convivência Harmoniosa</h3>
              <p className="text-sm opacity-80">Orientações para viver bem em comunidade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHero;
