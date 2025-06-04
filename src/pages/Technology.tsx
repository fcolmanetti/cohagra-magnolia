
import { ArrowLeft, AlertTriangle, Building, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Technology = () => {
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
            <AlertTriangle className="w-8 h-8 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Tecnologia de Parede de Concreto</h1>
          </div>
          <p className="text-xl text-white/90">
            Informações importantes sobre o sistema construtivo do seu edifício
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=400&fit=crop" 
              alt="Edifício moderno de concreto" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* O que é */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">O que é a Tecnologia de Parede de Concreto?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-sage-green-700 text-lg mb-4">
                  A tecnologia de parede de concreto é um sistema construtivo moderno onde 
                  as paredes são moldadas in loco (no local) com concreto armado, formando 
                  uma estrutura monolítica e resistente.
                </p>
                <p className="text-sage-green-700">
                  Diferente da alvenaria tradicional (tijolos), suas paredes têm função 
                  estrutural, ou seja, elas sustentam o edifício.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">🏗️ Características Principais:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Paredes estruturais de concreto armado</li>
                  <li>• Sistema monolítico (peça única)</li>
                  <li>• Maior resistência e durabilidade</li>
                  <li>• Melhor isolamento térmico e acústico</li>
                  <li>• Construção mais rápida e precisa</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h4 className="font-semibold text-green-800 mb-2">🌟 Por que é Especial?</h4>
              <p className="text-green-700">
                Esta é a primeira entrega de habitação popular vertical em Uberaba com esta tecnologia, 
                representando um avanço significativo na qualidade habitacional da cidade.
              </p>
            </div>
          </div>

          {/* Diferenças da Alvenaria */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <span className="text-orange-600 text-xl">⚖️</span>
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Diferenças da Alvenaria Tradicional</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-4">🧱 Alvenaria Tradicional:</h4>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Tijolos + argamassa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Paredes apenas de vedação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Estrutura separada (vigas e pilares)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Pode ser perfurada com mais facilidade</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-4">🏢 Parede de Concreto:</h4>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Concreto armado maciço</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Paredes estruturais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Estrutura integrada às paredes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Requer cuidados especiais para perfuração</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cuidados Especiais */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Cuidados Especiais Necessários</h2>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ ATENÇÃO CRÍTICA</h3>
              <p className="text-red-700 text-lg">
                Furos mal feitos podem causar infiltrações e comprometer a segurança de todo o prédio. 
                As armaduras internas não podem ser danificadas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">🔍 Por que é Perigoso Furar?</h3>
                <ul className="space-y-3 text-sage-green-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Pode atingir armaduras de aço</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Compromete a resistência estrutural</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Cria pontos de infiltração</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Pode causar corrosão das armaduras</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">🔧 Quando Furar é Necessário:</h4>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Use detector de metal para localizar armaduras</li>
                  <li>• Consulte planta baixa com instalações</li>
                  <li>• Use buchas específicas para concreto</li>
                  <li>• Profundidade máxima: 3-4 cm</li>
                  <li>• Sempre com orientação técnica</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-warm-brown-800 mb-2">Instalações Elétricas</h4>
                <p className="text-sm text-sage-green-600">Fiação embutida nas paredes</p>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-xl">🚰</span>
                </div>
                <h4 className="font-semibold text-warm-brown-800 mb-2">Instalações Hidráulicas</h4>
                <p className="text-sm text-sage-green-600">Tubulações integradas</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-xl">🔩</span>
                </div>
                <h4 className="font-semibold text-warm-brown-800 mb-2">Armaduras</h4>
                <p className="text-sm text-sage-green-600">Ferro estrutural interno</p>
              </div>
            </div>
          </div>

          {/* Fixação Adequada */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-green-600 text-xl">🔧</span>
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Fixação Adequada para Concreto Maciço</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-4">✅ Fixadores Recomendados:</h4>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Buchas de nylon:</strong> Para objetos leves (até 5kg)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Buchas metálicas:</strong> Para cargas médias (5-15kg)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Chumbadores químicos:</strong> Para cargas pesadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Fixadores magnéticos:</strong> Temporários</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-4">🛠️ Ferramentas Adequadas:</h4>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Furadeira com broca para concreto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Detector de metal (localizar armaduras)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Aspirador para retirar pó</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Óculos e máscara de proteção</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Profissionais Especializados */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <span className="text-purple-600 text-xl">👨‍🔧</span>
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Quando Procurar Profissionais</h2>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
              <h4 className="font-semibold text-orange-800 mb-2">📞 Consulte Sempre um Técnico Para:</h4>
              <ul className="text-orange-700 space-y-1">
                <li>• Fixação de armários pesados</li>
                <li>• Instalação de suportes para TV grandes</li>
                <li>• Qualquer alteração elétrica ou hidráulica</li>
                <li>• Dúvidas sobre localização de instalações</li>
                <li>• Problemas estruturais (rachaduras, vazamentos)</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Arquiteto ou Engenheiro</h3>
                <p className="text-sage-green-700 text-sm">
                  Para modificações estruturais e projetos técnicos
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🔧</span>
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Técnico Especializado</h3>
                <p className="text-sage-green-700 text-sm">
                  Para instalações específicas e reparos técnicos
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-warm-brown-600 text-white rounded-lg hover:from-blue-600 hover:to-warm-brown-700 transition-all duration-300 text-lg font-semibold"
            >
              Voltar ao Início
              <ArrowLeft className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Technology;
