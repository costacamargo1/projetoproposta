import React from 'react';
import { ShieldCheck, Zap, FileSpreadsheet, AlertTriangle, CheckCircle2, ArrowRight, Lock } from 'lucide-react';

// Componente para simular a interface do sistema
const SystemMockup = () => (
  <div className="w-full bg-white rounded-lg overflow-hidden text-[10px] sm:text-xs font-mono shadow-inner">
    {/* Excel-like Ribbon */}
    <div className="bg-[#107C41] text-white p-2 flex items-center gap-4 border-b border-[#0d6b37]">
      <div className="flex gap-1 items-center font-bold"><FileSpreadsheet size={14} /> LicitaPro.xlsm</div>
      <div className="hidden sm:flex gap-3 text-white/80">
        <span>Arquivo</span>
        <span>Página Inicial</span>
        <span className="font-bold border-b border-white text-white">Automação</span>
        <span>Dados</span>
      </div>
    </div>
    
    {/* Formula Bar */}
    <div className="bg-slate-100 p-1 flex items-center gap-2 border-b border-slate-300 text-slate-600">
      <span className="font-bold bg-white px-2 border border-slate-300">C4</span>
      <span className="flex-1 bg-white px-2 border border-slate-300 italic text-slate-400">fx =SE(E4="SIM"; 0; PROCV(...))</span>
    </div>

    {/* Spreadsheet Grid */}
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100 text-slate-600 font-bold text-center">
            <td className="border border-slate-300 w-8"></td>
            <td className="border border-slate-300 px-2 py-1 bg-slate-200">A</td>
            <td className="border border-slate-300 px-2 py-1 bg-slate-200">B</td>
            <td className="border border-slate-300 px-2 py-1 bg-slate-200 w-24">C</td>
            <td className="border border-slate-300 px-2 py-1 bg-slate-200 w-24">D</td>
            <td className="border border-slate-300 px-2 py-1 bg-slate-200 w-32">E</td>
          </tr>
        </thead>
        <tbody className="text-slate-800">
          {/* Header Row */}
          <tr className="bg-slate-50 font-bold">
            <td className="bg-slate-100 border border-slate-300 text-center text-slate-500">1</td>
            <td className="border border-slate-300 px-2 py-1">Código</td>
            <td className="border border-slate-300 px-2 py-1">Descrição do Item</td>
            <td className="border border-slate-300 px-2 py-1">Vlr. Unit</td>
            <td className="border border-slate-300 px-2 py-1 text-center">ICMS</td>
            <td className="border border-slate-300 px-2 py-1 text-center bg-blue-50 text-blue-700">Status Conv.</td>
          </tr>
          {/* Item 1 */}
          <tr>
            <td className="bg-slate-100 border border-slate-300 text-center text-slate-500">2</td>
            <td className="border border-slate-300 px-2 py-1">10293</td>
            <td className="border border-slate-300 px-2 py-1">AMOXICILINA 500MG CAPS</td>
            <td className="border border-slate-300 px-2 py-1">R$ 0,45</td>
            <td className="border border-slate-300 px-2 py-1 text-center text-red-500 font-bold bg-red-50">18%</td>
            <td className="border border-slate-300 px-2 py-1 text-center text-slate-400">-</td>
          </tr>
          {/* Item 2 - The highlighted one */}
          <tr className="bg-green-50/50">
            <td className="bg-slate-100 border border-slate-300 text-center text-slate-500 font-bold text-blue-600 border-r-4 border-r-blue-600">3</td>
            <td className="border border-slate-300 px-2 py-1">10442</td>
            <td className="border border-slate-300 px-2 py-1 font-medium">
              DIPIRONA SÓDICA 500MG/ML
              <span className="block text-[9px] text-green-700 font-bold mt-0.5 animate-pulse">
                (CONV. 140/01: IDENTIFICADO)
              </span>
            </td>
            <td className="border border-slate-300 px-2 py-1 font-bold">R$ 1,12</td>
            <td className="border border-slate-300 px-2 py-1 text-center font-bold text-green-700 bg-green-100 relative overflow-hidden">
               0%
               <div className="absolute inset-0 bg-white/20"></div>
            </td>
            <td className="border border-slate-300 px-2 py-1 text-center font-bold text-white bg-green-600">
               <CheckCircle2 size={12} className="inline mr-1" />
               VÁLIDO
            </td>
          </tr>
          {/* Item 3 */}
          <tr>
            <td className="bg-slate-100 border border-slate-300 text-center text-slate-500">4</td>
            <td className="border border-slate-300 px-2 py-1">10551</td>
            <td className="border border-slate-300 px-2 py-1">CEFTRIAXONA 1G INJ</td>
            <td className="border border-slate-300 px-2 py-1">R$ 15,30</td>
            <td className="border border-slate-300 px-2 py-1 text-center text-red-500 font-bold bg-red-50">18%</td>
            <td className="border border-slate-300 px-2 py-1 text-center text-slate-400">-</td>
          </tr>
           {/* Item 4 */}
           <tr>
            <td className="bg-slate-100 border border-slate-300 text-center text-slate-500">5</td>
            <td className="border border-slate-300 px-2 py-1">10602</td>
            <td className="border border-slate-300 px-2 py-1">
              INSULINA NPH 100UI
              <span className="block text-[9px] text-blue-600 font-bold mt-0.5">
                (LISTA CAP: CALCULADO)
              </span>
            </td>
            <td className="border border-slate-300 px-2 py-1 font-bold">R$ 32,50</td>
            <td className="border border-slate-300 px-2 py-1 text-center text-blue-600 font-bold bg-blue-50">12%</td>
            <td className="border border-slate-300 px-2 py-1 text-center font-bold text-blue-600 bg-blue-100">
               CAP
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bg-slate-100 border-t border-slate-300 p-1 flex gap-2">
      <div className="bg-white px-4 py-0.5 text-slate-700 font-bold border-b-2 border-green-600 text-[10px] shadow-sm">Planilha1</div>
      <div className="text-slate-500 px-2 py-0.5 text-[10px]">Base_CMED</div>
      <div className="text-slate-500 px-2 py-0.5 text-[10px]">Regras_ICMS</div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-700 cursor-pointer hover:opacity-80 transition">
            <FileSpreadsheet className="h-6 w-6" />
            <span>LicitaPro<span className="text-slate-500 font-normal">Automator</span></span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#funcionalidades" className="hover:text-blue-600 transition">Funcionalidades</a>
            <a href="#beneficios" className="hover:text-blue-600 transition">Benefícios</a>
            <a href="#demo" className="hover:text-blue-600 transition">Demonstração</a>
          </nav>
          <div className="md:hidden">
             {/* Mobile menu placeholder */}
             <button className="p-2 text-slate-600"><div><div className="w-5 h-0.5 bg-current"></div><div className="w-5 h-0.5 bg-current"></div><div className="w-5 h-0.5 bg-current"></div></div></button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Texto Hero */}
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 mb-6 animate-fade-in-up">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                Inovação para o Setor de Licitação
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6 leading-tight">
                Zere erros na elaboração de propostas de <span className="text-blue-600">medicamentos</span>.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Um sistema inteligente em Excel/VBA que identifica automaticamente convênios <strong>162, 87, 140 e Lista CAP</strong>. Elimine o risco regulatório e garanta a segurança jurídica em segundos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-200 hover:-translate-y-0.5 active:translate-y-0">
                  Ver Demonstração Interna
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50">
                  Entender a Metodologia
                </button>
              </div>
            </div>

            {/* Visual Abstract / Stats */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Decorative blob */}
              <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>

              <div className="relative rounded-2xl bg-white p-6 shadow-2xl border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Segurança Ativa</h3>
                    <p className="text-sm text-slate-500">Validação em tempo real</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-green-200 transition-colors cursor-default group">
                    <span className="text-sm font-medium text-slate-600">Convênio 140/01</span>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded group-hover:bg-green-600 group-hover:text-white transition-colors">IDENTIFICADO</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors cursor-default group">
                    <span className="text-sm font-medium text-slate-600">Lista CAP</span>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded group-hover:bg-blue-600 group-hover:text-white transition-colors">CALCULADO</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-green-200 transition-colors cursor-default group">
                    <span className="text-sm font-medium text-slate-600">Confaz 87/02</span>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded group-hover:bg-green-600 group-hover:text-white transition-colors">VALIDADO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A PROVA (Print do Sistema) */}
      <section id="demo" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background texture/grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Veja o Sistema em Ação</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A imagem abaixo é uma simulação da captura real do sistema. Note como a coluna de descrição traz automaticamente os alertas de convênios, sem intervenção manual.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 ring-4 ring-slate-800/50">
            {/* Área da Imagem/Mockup */}
            <div className="w-full bg-slate-800 flex items-center justify-center overflow-hidden group p-1 sm:p-4">
               {/* SUBSTITUIÇÃO: Troquei o <img src="/image_4772fc.png"> pelo componente <SystemMockup> 
                  para garantir que a visualização funcione sem o arquivo local.
               */}
               <div className="w-full max-w-5xl transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                 <SystemMockup />
               </div>
            </div>
            
            {/* Destaques sobre a imagem (Floating UI) */}
            <div className="absolute -bottom-10 md:bottom-8 left-0 right-0 flex flex-col md:flex-row gap-4 justify-center items-center px-4 pointer-events-none">
               <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-lg border border-green-500/30 flex items-start gap-3 max-w-xs md:max-w-md shadow-xl pointer-events-auto transform transition hover:-translate-y-1">
                 <CheckCircle2 className="text-green-400 mt-1 shrink-0 shadow-lg shadow-green-900/50" size={20} />
                 <div>
                   <p className="font-bold text-sm text-white">Identificação Automática</p>
                   <p className="text-xs text-slate-300 mt-1">O sistema detecta e escreve "(CONV. 140/01: SIM)" diretamente na linha do item.</p>
                 </div>
               </div>
               <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-lg border border-blue-500/30 flex items-start gap-3 max-w-xs md:max-w-md shadow-xl pointer-events-auto transform transition hover:-translate-y-1">
                 <Lock className="text-blue-400 mt-1 shrink-0 shadow-lg shadow-blue-900/50" size={20} />
                 <div>
                   <p className="font-bold text-sm text-white">Trava de Segurança</p>
                   <p className="text-xs text-slate-300 mt-1">Se o item é isento, o valor é forçado para a coluna "Sem ICMS", evitando erro fiscal.</p>
                 </div>
               </div>
            </div>
          </div>
          {/* Spacer for the floating cards on mobile */}
          <div className="h-24 md:h-0"></div>
        </div>
      </section>

      {/* Problema vs Solução */}
      <section id="funcionalidades" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-4 bg-amber-50 inline-flex px-3 py-1 rounded-full border border-amber-100">
                <AlertTriangle size={18} />
                <span className="text-xs uppercase tracking-wider">O Custo do Erro Manual</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Por que confiar em buscas manuais é um risco?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                O processo manual exige conferência item a item em tabelas descentralizadas da CMED. Um único erro de interpretação na aplicação de CAP, PF ou PMVG pode resultar em:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-700 p-3 rounded-lg hover:bg-red-50 transition-colors border border-transparent hover:border-red-100">
                  <span className="h-2 w-2 rounded-full bg-red-500 mt-2 shrink-0 shadow-sm shadow-red-200"></span>
                  <span>Prejuízo financeiro por cálculo errado de desoneração.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 p-3 rounded-lg hover:bg-red-50 transition-colors border border-transparent hover:border-red-100">
                  <span className="h-2 w-2 rounded-full bg-red-500 mt-2 shrink-0 shadow-sm shadow-red-200"></span>
                  <span>Risco regulatório e multas por estar acima da CMED.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 p-3 rounded-lg hover:bg-red-50 transition-colors border border-transparent hover:border-red-100">
                  <span className="h-2 w-2 rounded-full bg-red-500 mt-2 shrink-0 shadow-sm shadow-red-200"></span>
                  <span>Perda de tempo operacional com retrabalho em planilhas gigantes.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50/80 p-8 rounded-2xl border border-blue-100 relative overflow-hidden">
               {/* Decorative background icon */}
               <Zap className="absolute -right-10 -bottom-10 text-blue-100 w-64 h-64 rotate-12" />

              <div className="flex items-center gap-2 text-blue-700 font-bold mb-4 bg-blue-100/50 inline-flex px-3 py-1 rounded-full relative z-10">
                <Zap size={18} />
                <span className="text-xs uppercase tracking-wider">A Solução Automatizada</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Padronização e Agilidade</h3>
              <p className="text-slate-600 mb-8 relative z-10">
                Nosso algoritmo varre as regras e valida os dados cruzados antes mesmo de você finalizar a proposta.
              </p>

              <div className="grid gap-4 relative z-10">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                   <div className="bg-blue-100 h-10 w-10 flex items-center justify-center rounded-lg text-blue-600 font-bold text-xl shrink-0">1</div>
                   <div>
                     <p className="font-bold text-slate-800">Busca Automática</p>
                     <p className="text-sm text-slate-500 mt-1">Identifica 162/87/140/CAP instantaneamente sem você precisar abrir o PDF da legislação.</p>
                   </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                   <div className="bg-blue-100 h-10 w-10 flex items-center justify-center rounded-lg text-blue-600 font-bold text-xl shrink-0">2</div>
                   <div>
                     <p className="font-bold text-slate-800">Cálculo Preciso</p>
                     <p className="text-sm text-slate-500 mt-1">Aplica desoneração e preenche colunas sem fórmulas manuais complexas que quebram facilmente.</p>
                   </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                   <div className="bg-blue-100 h-10 w-10 flex items-center justify-center rounded-lg text-blue-600 font-bold text-xl shrink-0">3</div>
                   <div>
                     <p className="font-bold text-slate-800">Validação Final</p>
                     <p className="text-sm text-slate-500 mt-1">Bloqueia envio de propostas inconsistentes, protegendo a margem da empresa.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 font-bold text-xl text-slate-400 mb-4">
            <FileSpreadsheet className="h-6 w-6" />
            <span>LicitaPro</span>
          </div>
          <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto leading-relaxed">
            Sistema desenvolvido internamente para garantir excelência operacional, segurança jurídica e alta produtividade no setor de licitações.
          </p>
          <div className="pt-8 border-t border-slate-200 flex flex-col items-center gap-2">
            <p className="text-slate-400 text-xs">
              Desenvolvido por <strong className="text-slate-600">Vinicius Selga</strong>
            </p>
            <span className="inline-block px-2 py-1 bg-slate-200 text-slate-600 text-[10px] font-bold rounded uppercase tracking-wide">
              Analista de Licitação - Costa Camargo
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;