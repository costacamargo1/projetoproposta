import React from 'react';
import { ShieldCheck, Zap, FileSpreadsheet, AlertTriangle, CheckCircle2, Lock } from 'lucide-react';

const ProposalTable = () => {
  const items = [
    {
      numero: 1,
      descricao:
        'ALTEPLASE 50 MG PO LIOF INJ CT FA VD INC + FA DIL 50 ML + CANUL TRANS - FABRICANTE: BOEHRINGER / MARCA: ACTILYSE / REGISTRO ANVISA: 1036700490023 / VALIDADE: 36 MESES / PROCEDÊNCIA: ALEMANHA / GGREM: 504500101153319',
      observacoes: ['(CONV. 140/01: SIM)'],
      unidade: 'FRASCO-AMPOLA',
      quantidade: '100',
      fabricante: 'BOEHRINGER',
      marca: 'ACTILYSE',
      valorUnitIcms: 'R$ -',
      valorTotalIcms: 'R$ -',
      valorUnitSemIcms: 'R$ 2.799,9500',
      valorTotalSemIcms: 'R$ 279.995,00',
    },
    {
      numero: 2,
      descricao:
        'AMANTADINA 100 MG COM CT BL AL PLAS PVC TRANS X 30 - FABRICANTE: EUROFARMA/MOMENTA / MARCA: MANTIDAN / REGISTRO ANVISA: 1004314100022 / VALIDADE: 24 MESES / PROCEDÊNCIA: NACIONAL / GGREM: 508022060163317',
      observacoes: ['(CONFAZ 87/02: SIM | CAP: SIM)'],
      unidade: 'COMPRIMIDO',
      quantidade: '15.000',
      fabricante: 'EUROFARMA',
      marca: 'MANTIDAN',
      valorUnitIcms: 'R$ 0,7229',
      valorTotalIcms: 'R$ 10.843,50',
      valorUnitSemIcms: 'R$ 0,6000',
      valorTotalSemIcms: 'R$ 9.000,00',
    },
    {
      numero: 3,
      descricao:
        'CLORIDRATO DE DOXORRUBICINA 50 MG PO LIOF SOL INJ CT FA VD TRANS X 50 ML - FABRICANTE: EUROFARMA / MARCA: GENÉRICO / REGISTRO ANVISA: 1004300040022 / VALIDADE: 24 MESES / PROCEDÊNCIA: NACIONAL / GGREM: 508022050162306',
      observacoes: ['(CONV. 162/94: SIM)'],
      unidade: 'FRASCO-AMPOLA',
      quantidade: '500',
      fabricante: 'EUROFARMA',
      marca: 'GENÉRICO',
      valorUnitIcms: 'R$ -',
      valorTotalIcms: 'R$ -',
      valorUnitSemIcms: 'R$ 120,0000',
      valorTotalSemIcms: 'R$ 60.000,00',
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-300 overflow-hidden shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs sm:text-sm text-slate-800">
          <thead>
            <tr className="bg-slate-100 text-center font-semibold">
              <th className="border border-slate-300 px-3 py-2 w-20">Nº DO ITEM</th>
              <th className="border border-slate-300 px-3 py-2 text-left">DESCRIÇÃO DO PRODUTO</th>
              <th className="border border-slate-300 px-3 py-2 w-28">UNIDADE</th>
              <th className="border border-slate-300 px-3 py-2 w-28">QUANTIDADE</th>
              <th className="border border-slate-300 px-3 py-2 w-28">FABRICANTE</th>
              <th className="border border-slate-300 px-3 py-2 w-28">MARCA</th>
              <th className="border border-slate-300 px-3 py-2 w-36">VALOR UNITÁRIO COM ICMS</th>
              <th className="border border-slate-300 px-3 py-2 w-36">VALOR TOTAL COM ICMS</th>
              <th className="border border-slate-300 px-3 py-2 w-36 bg-rose-50">VALOR UNITÁRIO SEM ICMS</th>
              <th className="border border-slate-300 px-3 py-2 w-36 bg-rose-50">VALOR TOTAL SEM ICMS</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={item.numero} className={idx % 2 === 0 ? 'bg-white' : 'bg-amber-50/40'}>
                <td className="border border-slate-300 px-3 py-3 text-center font-semibold align-top">{item.numero}</td>
                <td className="border border-slate-300 px-3 py-3 align-top">
                  <div className="space-y-2">
                    <p className="leading-5 whitespace-pre-line font-semibold text-slate-900">{item.descricao}</p>
                    {item.observacoes?.map((obs, idx) => (
                      <p key={idx} className="text-red-600 font-semibold text-xs sm:text-sm">• {obs}</p>
                    ))}
                  </div>
                </td>
                <td className="border border-slate-300 px-3 py-3 text-center font-semibold align-top">{item.unidade}</td>
                <td className="border border-slate-300 px-3 py-3 text-center font-semibold align-top">{item.quantidade}</td>
                <td className="border border-slate-300 px-3 py-3 text-center font-semibold align-top">{item.fabricante}</td>
                <td className="border border-slate-300 px-3 py-3 text-center font-semibold align-top">{item.marca}</td>
                <td className="border border-slate-300 px-3 py-3 text-center font-semibold align-top">{item.valorUnitIcms}</td>
                <td className="border border-slate-300 px-3 py-3 text-center font-semibold align-top">{item.valorTotalIcms}</td>
                <td className="border border-slate-300 px-3 py-3 text-center font-semibold bg-rose-50 align-top">{item.valorUnitSemIcms}</td>
                <td className="border border-slate-300 px-3 py-3 text-center font-semibold bg-rose-50 align-top">{item.valorTotalSemIcms}</td>
              </tr>
            ))}
            <tr className="bg-slate-100">
              <td className="border border-slate-300 px-3 py-3 font-bold" colSpan={2}>
                VALOR TOTAL DA PROPOSTA: TREZENTOS E QUARENTA E OITO MIL E NOVECENTOS E NOVENTA E CINCO REAIS
              </td>
              <td className="border border-slate-300" colSpan={7}></td>
              <td className="border border-slate-300 px-3 py-3 text-center font-bold">R$ 348.995,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-700 cursor-pointer hover:opacity-80 transition">
            <FileSpreadsheet className="h-6 w-6" />
            <span>Projeto <span className="text-slate-500 font-normal">Proposta</span></span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600"></nav>
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
            </div>

            {/* Visual Abstract / Stats */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>

              <div className="relative rounded-2xl bg-white p-6 shadow-2xl border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Segurança na elaboração de propostas</h3>
                    <p className="text-sm text-slate-500">Descritivos sinalizados</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-green-200 transition-colors cursor-default group">
                    <span className="text-sm font-medium text-slate-600">Convênio 140/01 e 162/94</span>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded group-hover:bg-green-600 group-hover:text-white transition-colors">INSERIDO</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors cursor-default group">
                    <span className="text-sm font-medium text-slate-600">Lista CAP</span>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded group-hover:bg-blue-600 group-hover:text-white transition-colors">INSERIDO</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-green-200 transition-colors cursor-default group">
                    <span className="text-sm font-medium text-slate-600">Confaz 87/02</span>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded group-hover:bg-green-600 group-hover:text-white transition-colors">INSERIDO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A PROVA (Print do Sistema) */}
      <section id="demo" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Exemplo do sistema</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Visão breve conforme a planilha oficial, incluindo destaques de convênios e valores com/sem ICMS.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-white ring-4 ring-slate-800/20">
            <div className="w-full bg-white flex items-center justify-center overflow-hidden p-4">
               <div className="w-full max-w-6xl transition-transform duration-700 ease-out">
                 <ProposalTable />
               </div>
            </div>
            
            {/* Destaques sobre a imagem (Floating UI) */}
            <div className="absolute -bottom-10 md:bottom-8 left-0 right-0 flex flex-col md:flex-row gap-4 justify-center items-center px-4 pointer-events-none">
               <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-lg border border-green-500/30 flex items-start gap-3 max-w-xs md:max-w-md shadow-xl pointer-events-auto transform transition hover:-translate-y-1">
                 <CheckCircle2 className="text-green-400 mt-1 shrink-0 shadow-lg shadow-green-900/50" size={20} />
                 <div>
                   <p className="font-bold text-sm text-white">Campos sensíveis</p>
                   <p className="text-xs text-slate-300 mt-1">Sem ICMS e convênios destacados em colunas exclusivas.</p>
                 </div>
               </div>
               <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-lg border border-blue-500/30 flex items-start gap-3 max-w-xs md:max-w-md shadow-xl pointer-events-auto transform transition hover:-translate-y-1">
                 <Lock className="text-blue-400 mt-1 shrink-0 shadow-lg shadow-blue-900/50" size={20} />
                 <div>
                   <p className="font-bold text-sm text-white">Rastreio completo</p>
                   <p className="text-xs text-slate-300 mt-1">Descrição inclui fabricante, marca, registro, validade e procedência.</p>
                 </div>
               </div>
            </div>
          </div>
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
               <Zap className="absolute -right-10 -bottom-10 text-blue-100 w-64 h-64 rotate-12" />

              <div className="flex items-center gap-2 text-blue-700 font-bold mb-4 bg-blue-100/50 inline-flex px-3 py-1 rounded-full relative z-10">
                <Zap size={18} />
                <span className="text-xs uppercase tracking-wider">A Solução Automatizada</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Padronização e Agilidade</h3>

              <div className="grid gap-4 relative z-10">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                   <div className="bg-blue-100 h-10 w-10 flex items-center justify-center rounded-lg text-blue-600 font-bold text-xl shrink-0">1</div>
                   <div>
                     <p className="font-bold text-slate-800">Busca Automática</p>
                     <p className="text-sm text-slate-500 mt-1">Identifica 162/87/140/CAP instantaneamente sem necessidade abrir a lista de cada convênio individual.</p>
                   </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                   <div className="bg-blue-100 h-10 w-10 flex items-center justify-center rounded-lg text-blue-600 font-bold text-xl shrink-0">2</div>
                   <div>
                     <p className="font-bold text-slate-800">Cálculo Preciso</p>
                     <p className="text-sm text-slate-500 mt-1">Aplica desoneração e preenche colunas sem erros de cálculo.</p>
                   </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                   <div className="bg-blue-100 h-10 w-10 flex items-center justify-center rounded-lg text-blue-600 font-bold text-xl shrink-0">3</div>
                   <div>
                     <p className="font-bold text-slate-800">Validação Final - Blindagem</p>
                     <p className="text-sm text-slate-500 mt-1">Sinaliza e corrige aplicação de convênios. </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card de recursos extras */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-xl p-8 text-center">
            <div className="inline-flex items-center gap-2 text-blue-700 font-semibold mb-3">
              <ShieldCheck size={20} />
              <span>Formatação e Autocompletar</span>
            </div>
            <p className="text-slate-800 text-xl font-bold mb-3">Proposta pronta para enviar sem retrabalho.</p>
            <p className="text-slate-600 leading-relaxed">
              O sistema aplica formatação padronizada e autocompleta campos operacionais: prazo de entrega, validade da proposta, vigência e validade dos medicamentos. Menos cliques, mais consistência. Possui também função para descritivo de ICMS detalhado no modelo exigido pelo SEPLAG.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 font-bold text-xl text-slate-400 mb-4">
            <FileSpreadsheet className="h-6 w-6" />
            <span>Projeto Proposta</span>
          </div>
          <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto leading-relaxed">
            Projeto desenvolvido internamente para garantir excelência operacional, segurança e alta produtividade no setor de licitações.
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

export default App;

