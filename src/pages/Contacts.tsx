
import { ArrowLeft, Phone, Mail, MapPin, Clock, Building2, Users, AlertTriangle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
          <div className="flex items-center mb-4">
            <Phone className="w-8 h-8 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Contatos Úteis</h1>
          </div>
          <p className="text-xl text-white/90">
            Todos os contatos importantes para sua vida no Residencial Magnólia
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* COHAGRA - Contato Principal */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">COHAGRA - Companhia de Habitação</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold text-warm-brown-800">Telefone Principal</p>
                    <p className="text-sage-green-700">(67) 3318-1500</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold text-warm-brown-800">E-mail</p>
                    <p className="text-sage-green-700">atendimento@cohagra.ms.gov.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-warm-brown-800">Endereço</p>
                    <p className="text-sage-green-700">
                      Rua Cândido Mariano, 2000<br />
                      Centro, Campo Grande - MS<br />
                      CEP: 79020-300
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-warm-brown-800">Horário de Atendimento</p>
                    <p className="text-sage-green-700">
                      Segunda a Sexta: 7h às 13h<br />
                      Sábado, Domingo e Feriados: Fechado
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">🏠 Pós-Venda Residencial Magnólia</h4>
                  <p className="text-blue-700 text-sm">
                    Para questões específicas sobre o seu apartamento, 
                    sempre mencione que é morador do Residencial Magnólia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergências e Urgências */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Emergências</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-red-800 mb-2">Bombeiros</h3>
                <p className="text-2xl font-bold text-red-600">193</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">Polícia Militar</h3>
                <p className="text-2xl font-bold text-blue-600">190</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-800 mb-2">SAMU</h3>
                <p className="text-2xl font-bold text-green-600">192</p>
              </div>
            </div>
          </div>

          {/* Serviços Públicos */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-sage-green-100 p-3 rounded-full mr-4">
                <Users className="w-6 h-6 text-sage-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Serviços Públicos</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-warm-brown-800">Energisa (Energia Elétrica)</h4>
                  <p className="text-sage-green-700">📞 0800 720 0116</p>
                  <p className="text-sm text-sage-green-600">Emergências: 116</p>
                </div>
                
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-warm-brown-800">Águas Guariroba (Água e Esgoto)</h4>
                  <p className="text-sage-green-700">📞 0800 642 0115</p>
                  <p className="text-sm text-sage-green-600">WhatsApp: (67) 3312-6700</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-warm-brown-800">Solurb (Limpeza Urbana)</h4>
                  <p className="text-sage-green-700">📞 (67) 3314-3700</p>
                  <p className="text-sm text-sage-green-600">Coleta seletiva e entulho</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-warm-brown-800">Defesa Civil</h4>
                  <p className="text-sage-green-700">📞 199</p>
                  <p className="text-sm text-sage-green-600">(67) 3314-3000</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-warm-brown-800">Procon Municipal</h4>
                  <p className="text-sage-green-700">📞 (67) 3314-3000</p>
                  <p className="text-sm text-sage-green-600">Ramal 1178</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-warm-brown-800">Ouvidoria Municipal</h4>
                  <p className="text-sage-green-700">📞 (67) 3314-3000</p>
                  <p className="text-sm text-sage-green-600">Ramal 1100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Administração do Condomínio */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-warm-brown-100 p-3 rounded-full mr-4">
                <Building2 className="w-6 h-6 text-warm-brown-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Administração do Condomínio</h2>
            </div>
            
            <div className="bg-warm-brown-50 p-6 rounded-lg">
              <h3 className="font-semibold text-warm-brown-800 mb-3">📋 Informações Importantes:</h3>
              <ul className="space-y-2 text-warm-brown-700">
                <li>• O síndico será eleito pelos moradores em assembleia</li>
                <li>• A administradora será contratada pelo condomínio</li>
                <li>• Enquanto isso, contate a COHAGRA para questões administrativas</li>
                <li>• Participe das reuniões de moradores para organizar o condomínio</li>
              </ul>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <ExternalLink className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Links Úteis</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <a href="https://www.cohagra.ms.gov.br" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <ExternalLink className="w-4 h-4 text-blue-600 mr-3" />
                  <span className="text-blue-700 font-medium">Site da COHAGRA</span>
                </a>
                
                <a href="https://www.energisa.com.br" target="_blank" rel="noopener noreferrer"
                   className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <ExternalLink className="w-4 h-4 text-blue-600 mr-3" />
                  <span className="text-blue-700 font-medium">Energisa - 2ª Via</span>
                </a>
              </div>
              
              <div className="space-y-3">
                <a href="https://www.aguasguariroba.com.br" target="_blank" rel="noopener noreferrer"
                   className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <ExternalLink className="w-4 h-4 text-blue-600 mr-3" />
                  <span className="text-blue-700 font-medium">Águas Guariroba - 2ª Via</span>
                </a>
                
                <a href="https://www.campogrande.ms.gov.br" target="_blank" rel="noopener noreferrer"
                   className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <ExternalLink className="w-4 h-4 text-blue-600 mr-3" />
                  <span className="text-blue-700 font-medium">Prefeitura Municipal</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-sage-green-600 text-white rounded-lg hover:from-blue-600 hover:to-sage-green-700 transition-all duration-300 text-lg font-semibold"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Manual
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
