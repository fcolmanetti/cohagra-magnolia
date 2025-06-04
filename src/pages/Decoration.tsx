
import { ArrowLeft, Palette, Home, Lightbulb, Sofa, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Decoration = () => {
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
            <Palette className="w-8 h-8 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Móveis e Decoração</h1>
          </div>
          <p className="text-xl text-white/90">
            Escolha os móveis adequados e decore seu lar com segurança e estilo
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=400&fit=crop" 
              alt="Apartamento bem decorado" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Móveis Adequados */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Sofa className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Móveis Adequados</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">✅ Móveis Recomendados:</h3>
                <ul className="space-y-3 text-sage-green-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Móveis planejados leves e funcionais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Peças modulares que se adaptam ao espaço</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Móveis com pés para facilitar limpeza</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Peças multifuncionais (mesa que vira estante)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-3">❌ Evite:</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• Armários muito pesados fixados na parede</li>
                  <li>• Móveis que exigem muitos furos</li>
                  <li>• Peças que sobrecarregam as paredes</li>
                  <li>• Móveis sem proteção em áreas úmidas</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
              <h4 className="font-semibold text-amber-800 mb-2">💡 Dica Importante:</h4>
              <p className="text-amber-700">
                Use silicone ou borrachas de vedação em móveis próximos de áreas úmidas 
                (banheiro, cozinha, lavanderia) para proteger contra a umidade.
              </p>
            </div>
          </div>

          {/* Decoração e Conforto Visual */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Camera className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Decoração e Conforto Visual</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Cores Claras</h3>
                <p className="text-sage-green-700 text-sm">
                  Branco, bege, cinza claro e tons pastéis ampliam visualmente os espaços pequenos
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Detalhes Coloridos</h3>
                <p className="text-sage-green-700 text-sm">
                  Cortinas, almofadas e quadros com cores vibrantes criam personalidade
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Iluminação</h3>
                <p className="text-sage-green-700 text-sm">
                  Cortinas leves e iluminação difusa proporcionam conforto visual
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">🎨 Paleta de Cores Recomendada:</h4>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="h-8 bg-white border rounded"></div>
                  <div className="h-8 bg-gray-100 rounded"></div>
                  <div className="h-8 bg-blue-100 rounded"></div>
                  <div className="h-8 bg-green-100 rounded"></div>
                </div>
                <p className="text-blue-700 text-sm">
                  Base neutra com toques de cor para criar harmonia e amplitude
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">🌿 Elementos Naturais:</h4>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Plantas pequenas purificam o ar</li>
                  <li>• Madeira clara aquece o ambiente</li>
                  <li>• Tecidos naturais como algodão e linho</li>
                  <li>• Luz natural sempre que possível</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fixação Segura */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <span className="text-red-600 text-xl">🔧</span>
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Fixação Segura</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">✅ Métodos Seguros:</h4>
                <ul className="space-y-2 text-green-700">
                  <li>• Buchas plásticas de expansão</li>
                  <li>• Suportes adesivos de qualidade</li>
                  <li>• Prateleiras de pressão</li>
                  <li>• Móveis apoiados no chão</li>
                  <li>• Ganchos adesivos removíveis</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-3">❌ Nunca Use:</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• Pregos diretamente na parede</li>
                  <li>• Parafusos muito longos</li>
                  <li>• Furadeira sem orientação técnica</li>
                  <li>• Buchas inadequadas para concreto</li>
                  <li>• Fixação em áreas estruturais</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/manutencao" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-orange-600 text-white rounded-lg hover:from-blue-600 hover:to-orange-700 transition-all duration-300 text-lg font-semibold"
            >
              Próximo: Manutenção e Conservação
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Decoration;
