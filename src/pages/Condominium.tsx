
import { ArrowLeft, Users, Clock, VolumeX, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Condominium = () => {
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
            <Users className="w-8 h-8 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Viver em Condomínio</h1>
          </div>
          <p className="text-xl text-white/90">
            Regras de convivência e como ser um bom vizinho no seu novo lar
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1200&h=400&fit=crop" 
              alt="Edifício residencial" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Horários de Silêncio */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Horários de Silêncio</h2>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">🌙 HORÁRIO OBRIGATÓRIO</h3>
              <p className="text-purple-700 text-xl font-medium">
                22h às 7h - Silêncio Total
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-4">✅ Práticas Recomendadas:</h4>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <VolumeX className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
                    <span>TV e som em volume baixo após 22h</span>
                  </li>
                  <li className="flex items-start">
                    <VolumeX className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
                    <span>Evite arrastar móveis no período noturno</span>
                  </li>
                  <li className="flex items-start">
                    <VolumeX className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
                    <span>Conversas em tom baixo nos corredores</span>
                  </li>
                  <li className="flex items-start">
                    <VolumeX className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
                    <span>Feche portas suavemente</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-4">👶 Respeito às Famílias:</h4>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 mr-2 mt-0.5 text-blue-500" />
                    <span>Crianças dormem mais cedo</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 mr-2 mt-0.5 text-blue-500" />
                    <span>Idosos precisam de tranquilidade</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 mr-2 mt-0.5 text-blue-500" />
                    <span>Trabalhadores precisam descansar</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 mr-2 mt-0.5 text-blue-500" />
                    <span>Pessoas com necessidades especiais</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Áreas Comuns */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Cuidado com Áreas Comuns</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">🏢 Responsabilidade Compartilhada:</h3>
                <ul className="space-y-3 text-sage-green-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span><strong>Corredores:</strong> Mantenha sempre limpos e desobstruídos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span><strong>Escadas:</strong> Use corrimão e não deixe objetos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span><strong>Elevador:</strong> Respeite peso máximo e horários</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span><strong>Hall:</strong> Não deixe objetos pessoais</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-3">❌ Proibições Importantes:</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• Jogar lixo pela janela</li>
                  <li>• Deixar sapatos no corredor</li>
                  <li>• Pendurar roupas em áreas comuns</li>
                  <li>• Fazer barulho excessivo</li>
                  <li>• Usar espaços comuns como depósito</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h4 className="font-semibold text-blue-800 mb-2">🗑️ Descarte Correto do Lixo:</h4>
              <p className="text-blue-700 mb-3">
                Use sempre as lixeiras adequadas e respeite os horários de coleta:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="bg-green-100 p-2 rounded mb-2">♻️</div>
                  <strong>Recicláveis</strong>
                  <div>Terças e Sextas</div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 p-2 rounded mb-2">🗑️</div>
                  <strong>Comum</strong>
                  <div>Diariamente</div>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 p-2 rounded mb-2">🍎</div>
                  <strong>Orgânico</strong>
                  <div>Diariamente</div>
                </div>
              </div>
            </div>
          </div>

          {/* Participação no Condomínio */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Participação no Condomínio</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-4">🤝 Como Participar:</h4>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Compareça às reuniões mensais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Vote nas decisões importantes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Sugira melhorias para o prédio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Mantenha-se informado sobre as regras</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-4">📋 Direitos e Deveres:</h4>
                <ul className="space-y-3 text-purple-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Pagar taxa condominial em dia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Cumprir regulamento interno</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Respeitar decisões da maioria</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Comunicar problemas ao síndico</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h4 className="font-semibold text-yellow-800 mb-2">👥 Convivência Harmoniosa:</h4>
              <p className="text-yellow-700">
                Lembre-se: um bom vizinho torna a vida de todos mais agradável. 
                Pratique a empatia, seja cordial e contribua para um ambiente familiar e acolhedor.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/responsabilidades" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sage-green-500 to-warm-brown-600 text-white rounded-lg hover:from-sage-green-600 hover:to-warm-brown-700 transition-all duration-300 text-lg font-semibold"
            >
              Próximo: Responsabilidades
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Condominium;
