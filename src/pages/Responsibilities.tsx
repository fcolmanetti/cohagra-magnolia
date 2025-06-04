
import { ArrowLeft, FileText, Shield, AlertTriangle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Responsibilities = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-r from-warm-brown-600 to-warm-brown-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
          <div className="flex items-center mb-4">
            <FileText className="w-8 h-8 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Responsabilidades</h1>
          </div>
          <p className="text-xl text-white/90">
            Entenda suas obrigações como morador e mantenha tudo em ordem
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Manutenção do Imóvel */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-warm-brown-100 p-3 rounded-full mr-4">
                <Shield className="w-6 h-6 text-warm-brown-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Manutenção do Imóvel</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">🏠 Cuidados Essenciais:</h3>
                <ul className="space-y-3 text-sage-green-700">
                  <li className="flex items-start">
                    <span className="text-warm-brown-500 mr-2">•</span>
                    <span>Manter o apartamento sempre limpo e organizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown-500 mr-2">•</span>
                    <span>Realizar limpeza regular das paredes com produtos adequados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown-500 mr-2">•</span>
                    <span>Ventilar todos os ambientes diariamente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown-500 mr-2">•</span>
                    <span>Verificar regularmente torneiras e ralos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown-500 mr-2">•</span>
                    <span>Conservar portas, janelas e fechaduras</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">📝 Documentação Necessária:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Manual da construtora</li>
                  <li>• Certificado de entrega do imóvel</li>
                  <li>• Termo de responsabilidade assinado</li>
                  <li>• Regulamento interno do condomínio</li>
                  <li>• Contatos de emergência</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h4 className="font-semibold text-green-800 mb-2">✅ Compromisso do Morador:</h4>
              <p className="text-green-700">
                Como beneficiário do programa habitacional da COHAGRA, você tem o compromisso de 
                zelar pelo patrimônio público e manter o imóvel em perfeitas condições de habitabilidade.
              </p>
            </div>
          </div>

          {/* Normas de Convivência */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <span className="text-purple-600 text-xl">🤝</span>
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Normas de Convivência e Segurança</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">🔇</span>
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Silêncio</h3>
                <p className="text-sage-green-700 text-sm">
                  Respeitar horários de silêncio (22h às 7h) e manter volume adequado
                </p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🚯</span>
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Limpeza</h3>
                <p className="text-sage-green-700 text-sm">
                  Manter áreas comuns limpas e descartar lixo adequadamente
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🔒</span>
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Segurança</h3>
                <p className="text-sage-green-700 text-sm">
                  Manter portas trancadas e não fornecer acesso a estranhos
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">⚖️ Consequências do Descumprimento:</h4>
              <ul className="space-y-2 text-yellow-700">
                <li>• Advertência verbal pelo síndico</li>
                <li>• Notificação oficial da COHAGRA</li>
                <li>• Multa conforme regulamento</li>
                <li>• Em casos graves: revisão do contrato de habitação</li>
              </ul>
            </div>
          </div>

          {/* Comunicação com a COHAGRA */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Comunicação com a COHAGRA</h2>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">🚨 OBRIGATÓRIO COMUNICAR:</h3>
              <p className="text-red-700 mb-3">
                Avise imediatamente a COHAGRA sobre qualquer defeito visível ou estrutural:
              </p>
              <ul className="space-y-2 text-red-700">
                <li>• Rachaduras nas paredes ou teto</li>
                <li>• Vazamentos ou infiltrações</li>
                <li>• Problemas elétricos</li>
                <li>• Defeitos em portas e janelas</li>
                <li>• Qualquer dano estrutural</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-4">📞 Canais de Comunicação:</h4>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 mr-2 mt-0.5 text-blue-500" />
                    <span>Central de Atendimento COHAGRA</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 mr-2 mt-0.5 text-blue-500" />
                    <span>WhatsApp para emergências</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 mr-2 mt-0.5 text-blue-500" />
                    <span>E-mail oficial para solicitações</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 mr-2 mt-0.5 text-blue-500" />
                    <span>Atendimento presencial</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-4">📋 Informações a Fornecer:</h4>
                <ul className="space-y-2 text-green-700">
                  <li>• Nome completo e CPF</li>
                  <li>• Endereço completo do apartamento</li>
                  <li>• Descrição detalhada do problema</li>
                  <li>• Fotos quando possível</li>
                  <li>• Data e horário da ocorrência</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Direitos do Morador */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-green-600 text-xl">⚖️</span>
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Seus Direitos</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">✅ Você Tem Direito a:</h3>
                <ul className="space-y-3 text-sage-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Moradia digna e segura</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Atendimento da COHAGRA para problemas estruturais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Participar das decisões do condomínio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Receber orientações técnicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Acesso a programas de capacitação</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">🎯 Programas Disponíveis:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Oficinas de manutenção doméstica</li>
                  <li>• Cursos de convivência comunitária</li>
                  <li>• Orientação sobre direitos e deveres</li>
                  <li>• Capacitação profissional</li>
                  <li>• Apoio social quando necessário</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/alteracoes" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-warm-brown-500 to-orange-600 text-white rounded-lg hover:from-warm-brown-600 hover:to-orange-700 transition-all duration-300 text-lg font-semibold"
            >
              Próximo: Alterações e Ampliações
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Responsibilities;
