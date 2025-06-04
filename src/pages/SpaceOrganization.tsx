import { ArrowLeft, Layout, Sofa, ChefHat, Bed, Bath, Shirt, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SpaceOrganization = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-r from-sage-green-600 to-sage-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
          <div className="flex items-center mb-4">
            <Layout className="w-8 h-8 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Organização dos Espaços</h1>
          </div>
          <p className="text-xl text-white/90">
            Dicas práticas para organizar cada ambiente do seu apartamento
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Planta Baixa do Apartamento */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/2739f78f-ac39-496c-a1f8-ae27fb6c4c36.png" 
              alt="Planta baixa detalhada do apartamento do Residencial Magnólia" 
              className="w-full h-96 md:h-[500px] object-contain bg-white"
            />
            <div className="bg-white p-4 text-center">
              <p className="text-sage-green-700 font-medium">Planta baixa do apartamento com dimensões dos ambientes</p>
            </div>
          </div>

          {/* Hero Image - Apartamento Real */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/9f33b359-88b0-4d6c-ae10-715c5d0afcea.png" 
              alt="Sala integrada do Residencial Magnólia" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="bg-white p-4 text-center">
              <p className="text-sage-green-700 font-medium">Apartamento do Residencial Magnólia - Layout integrado otimizado</p>
            </div>
          </div>

          <Tabs defaultValue="sala" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-8">
              <TabsTrigger value="sala">Sala</TabsTrigger>
              <TabsTrigger value="cozinha">Cozinha</TabsTrigger>
              <TabsTrigger value="quartos">Quartos</TabsTrigger>
              <TabsTrigger value="banheiro">Banheiro</TabsTrigger>
              <TabsTrigger value="lavanderia">Lavanderia</TabsTrigger>
            </TabsList>

            {/* Sala */}
            <TabsContent value="sala">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-warm-brown-100 p-3 rounded-full mr-4">
                    <Sofa className="w-6 h-6 text-warm-brown-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-warm-brown-800">Sala de Estar</h2>
                </div>
                
                {/* Imagem da sala integrada */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/c0397237-44b4-47d9-9a9c-0c07160210c4.png" 
                    alt="Sala de estar do Residencial Magnólia" 
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="bg-warm-brown-50 p-3 text-center">
                    <p className="text-warm-brown-700 text-sm">Exemplo de organização da sala com móveis compactos e funcionais</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">✅ Dicas Essenciais:</h3>
                    <ul className="space-y-3 text-sage-green-700">
                      <li className="flex items-start">
                        <span className="text-sage-green-500 mr-2">•</span>
                        <span>Use móveis compactos e modulares que otimizam o espaço</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-green-500 mr-2">•</span>
                        <span>Sofás modulares são ideais para apartamentos pequenos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-green-500 mr-2">•</span>
                        <span>Para suporte de TV, use buchas plásticas de expansão</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-green-500 mr-2">•</span>
                        <span>Evite parafusos profundos nas paredes estruturais</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-3">💡 Dica de Ouro:</h4>
                    <p className="text-amber-700">
                      Móveis com pés elevados criam sensação de amplitude e facilitam a limpeza. 
                      Cores claras nas paredes e móveis refletem mais luz natural.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h4 className="font-semibold text-red-800 mb-2">⚠️ Cuidados Importantes:</h4>
                  <p className="text-red-700">
                    Nunca fixe suportes pesados diretamente na parede sem consultar um técnico. 
                    As paredes de concreto requerem buchas específicas.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Cozinha */}
            <TabsContent value="cozinha">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <ChefHat className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-warm-brown-800">Cozinha</h2>
                </div>
                
                {/* Imagem da cozinha */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/32edfc5d-a0fb-4f08-a9fc-2cd9f12a8a9e.png" 
                    alt="Cozinha do Residencial Magnólia" 
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="bg-orange-50 p-3 text-center">
                    <p className="text-orange-700 text-sm">Layout da cozinha com móveis planejados e organização vertical</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">🍳 Organização Vertical:</h3>
                    <ul className="space-y-3 text-sage-green-700">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Priorize prateleiras altas para utensílios menos usados</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Use ganchos na parede para panelas e utensílios</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Organize por frequência de uso: mais usados na altura dos olhos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Aproveite o espaço interno dos armários com organizadores</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3">🌬️ Ventilação Natural:</h4>
                    <p className="text-blue-700 mb-3">
                      Mantenha a janela aberta durante e após o preparo das refeições para evitar:
                    </p>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Acúmulo de umidade</li>
                      <li>• Formação de mofo</li>
                      <li>• Odores persistentes</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 text-xl">🥄</span>
                    </div>
                    <h4 className="font-semibold text-warm-brown-800 mb-2">Utensílios</h4>
                    <p className="text-sm text-sage-green-600">Organize por categoria e frequência de uso</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 text-xl">🥫</span>
                    </div>
                    <h4 className="font-semibold text-warm-brown-800 mb-2">Despensa</h4>
                    <p className="text-sm text-sage-green-600">Use potes transparentes para facilitar identificação</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 text-xl">🧽</span>
                    </div>
                    <h4 className="font-semibold text-warm-brown-800 mb-2">Limpeza</h4>
                    <p className="text-sm text-sage-green-600">Mantenha produtos organizados e seguros</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Quartos */}
            <TabsContent value="quartos">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Bed className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-warm-brown-800">Quartos</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">🛏️ Otimização do Espaço:</h3>
                    <ul className="space-y-3 text-sage-green-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Beliches maximizam o espaço em quartos compartilhados</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Camas com gavetas oferecem armazenamento extra</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Aproveite nichos e cantoneiras para decoração</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Móveis multifuncionais economizam espaço</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-3">💜 Ambiente Acolhedor:</h4>
                    <p className="text-purple-700 mb-3">
                      Crie um ambiente relaxante com:
                    </p>
                    <ul className="space-y-1 text-purple-700 text-sm">
                      <li>• Iluminação suave e indireta</li>
                      <li>• Cores neutras e tons pastéis</li>
                      <li>• Tecidos macios e confortáveis</li>
                      <li>• Plantas pequenas para purificar o ar</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h4 className="font-semibold text-green-800 mb-2">🌱 Dica Sustentável:</h4>
                  <p className="text-green-700">
                    Organize roupas por estação e doe aquelas que não usa mais. 
                    Isso libera espaço e ajuda outras famílias.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Banheiro */}
            <TabsContent value="banheiro">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-cyan-100 p-3 rounded-full mr-4">
                    <Bath className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-warm-brown-800">Banheiro</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">🚿 Soluções Inteligentes:</h3>
                    <ul className="space-y-3 text-sage-green-700">
                      <li className="flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        <span>Use prateleiras de pressão entre paredes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        <span>Suportes adesivos evitam perfurações</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        <span>Organize produtos por frequência de uso</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        <span>Mantenha sempre limpo e ventilado</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-cyan-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-cyan-800 mb-3">💧 Prevenção de Problemas:</h4>
                    <p className="text-cyan-700 mb-3">
                      Evite mofo e umidade excessiva:
                    </p>
                    <ul className="space-y-1 text-cyan-700 text-sm">
                      <li>• Ventile após cada banho</li>
                      <li>• Seque superfícies molhadas</li>
                      <li>• Verifique vazamentos regularmente</li>
                      <li>• Use produtos antimofo se necessário</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-3">⚠️ Produtos Seguros:</h4>
                    <p className="text-yellow-700">
                      Use apenas suportes adesivos de qualidade ou prateleiras de pressão. 
                      Evite furar azulejos desnecessariamente.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3">🧴 Organização:</h4>
                    <p className="text-green-700">
                      Agrupe produtos por categoria: higiene pessoal, limpeza, 
                      medicamentos (em local seguro e seco).
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Lavanderia */}
            <TabsContent value="lavanderia">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <Shirt className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-warm-brown-800">Lavanderia/Varanda</h2>
                </div>
                
                {/* Imagem da lavanderia */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/2c282db3-dc17-49e8-a3e5-cbeb2469b6db.png" 
                    alt="Área da lavanderia do Residencial Magnólia" 
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="bg-indigo-50 p-3 text-center">
                    <p className="text-indigo-700 text-sm">Área de serviço com lavadora e organização eficiente</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">👕 Equipamentos Essenciais:</h3>
                    <ul className="space-y-3 text-sage-green-700">
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Varal retrátil economiza espaço quando não usado</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Tanques com armário inferior aumentam armazenamento</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Prateleiras para produtos de limpeza</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Cesto organizador para roupas sujas</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-3">☀️ Secagem Eficiente:</h4>
                    <p className="text-orange-700 mb-3">
                      Aproveite a ventilação natural:
                    </p>
                    <ul className="space-y-1 text-orange-700 text-sm">
                      <li>• Estenda roupas logo após lavar</li>
                      <li>• Use todo o espaço do varal</li>
                      <li>• Evite sobrepor peças</li>
                      <li>• Aproveite o sol da manhã</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <h4 className="font-semibold text-red-800 mb-2">💧 Mantenha Sempre Seco:</h4>
                  <p className="text-red-700">
                    Água acumulada pode causar infiltrações e danificar a estrutura. 
                    Seque sempre a área após uso e verifique se não há vazamentos.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-indigo-600 text-xl">🧺</span>
                    </div>
                    <h4 className="font-semibold text-warm-brown-800 mb-2">Organização</h4>
                    <p className="text-sm text-sage-green-600">Separe roupas por cor e tipo de tecido</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-indigo-600 text-xl">🧴</span>
                    </div>
                    <h4 className="font-semibold text-warm-brown-800 mb-2">Produtos</h4>
                    <p className="text-sm text-sage-green-600">Mantenha detergentes em local seco e arejado</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-indigo-600 text-xl">🌱</span>
                    </div>
                    <h4 className="font-semibold text-warm-brown-800 mb-2">Sustentabilidade</h4>
                    <p className="text-sm text-sage-green-600">Use produtos ecológicos quando possível</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <Link 
              to="/decoracao" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sage-green-500 to-blue-600 text-white rounded-lg hover:from-sage-green-600 hover:to-blue-700 transition-all duration-300 text-lg font-semibold"
            >
              Próximo: Móveis e Decoração
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SpaceOrganization;
