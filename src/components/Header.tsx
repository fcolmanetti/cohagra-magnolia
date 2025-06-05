
import { Home, Phone, QrCode, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Chatbot from "./Chatbot";

const Header = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b border-warm-brown-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-gradient-to-br from-warm-brown-500 to-sage-green-600 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-warm-brown-800">Portal Magnólia</h1>
                <p className="text-sm text-sage-green-600">Manual para Morar Bem</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 px-3 py-2 bg-blue-50 rounded-lg border border-blue-200">
                <img 
                  src="https://www.cohagra.ms.gov.br/wp-content/themes/cohagra/assets/images/logo-cohagra.png" 
                  alt="Logo COHAGRA" 
                  className="h-8 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'block';
                    }
                  }}
                />
                <span className="text-blue-700 font-semibold text-sm hidden">COHAGRA</span>
              </div>
              
              <button 
                onClick={() => setIsChatbotOpen(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Ajuda</span>
              </button>
              
              <Link 
                to="/contatos" 
                className="flex items-center space-x-2 px-4 py-2 bg-sage-green-100 text-sage-green-700 rounded-lg hover:bg-sage-green-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Contatos</span>
              </Link>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-warm-brown-100 text-warm-brown-700 rounded-lg hover:bg-warm-brown-200 transition-colors">
                <QrCode className="w-4 h-4" />
                <span className="hidden sm:inline">QR Code</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </>
  );
};

export default Header;
