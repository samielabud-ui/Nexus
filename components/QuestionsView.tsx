
import React, { useState, useMemo } from 'react';
import { MOCK_QUESTIONS } from '../constants';
import QuestionCard from './QuestionCard';

const QuestionsView: React.FC = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  
  // Estados dos Filtros
  const [ciclo, setCiclo] = useState<'Ciclo Básico' | 'Ciclo Clínico' | null>(null);
  const [modulo, setModulo] = useState('');
  const [modalidade, setModalidade] = useState('Todos');
  const [problema, setProblema] = useState('Todos');
  const [tema, setTema] = useState('');
  const [quantidade, setQuantidade] = useState<string>('10');

  // Listagem de Módulos (ASEs)
  const modulosBasico = [
    'ASE 1 — Introdução ao Estudo da Medicina',
    'ASE 2 — Proliferação, Alteração do Crescimento e Diferenciação Celular',
    'ASE 3 — Funções Biológicas 1',
    'ASE 7 — Concepção, Formação do Ser Humano e Gestação',
  ];

  const modulosClinico = [
    'ASE 13 — Disúria, Edema e Proteinúria',
  ];

  const currentModulos = ciclo === 'Ciclo Básico' ? modulosBasico : modulosClinico;

  // Lógica de Filtragem
  const filteredQuestions = useMemo(() => {
    if (!ciclo) return [];
    
    let results = MOCK_QUESTIONS.filter(q => {
      const matchesCiclo = q.ciclo === ciclo;
      
      // Lógica de módulo adaptada para os dois formatos de nomes
      const moduloSearch = modulo.split(' — ')[0]; 
      const moduloNum = moduloSearch.replace(/\D/g, ''); 
      
      const matchesModulo = modulo === '' || modulo === 'Todos' || 
                           q.modulo.includes(moduloSearch) || 
                           q.modulo.toLowerCase().includes(`módulo ${moduloNum}`) ||
                           q.modulo.toLowerCase().includes(`ase ${moduloNum}`);

      const matchesModalidade = modalidade === 'Todos' || q.modalidade === modalidade;
      const matchesProblema = problema === 'Todos' || q.problema.toString() === problema;
      const matchesTema = tema === '' || q.tema.toLowerCase().includes(tema.toLowerCase());
      
      return matchesCiclo && matchesModulo && matchesModalidade && matchesProblema && matchesTema;
    });

    // Aplicar filtro de quantidade
    if (quantidade === 'Todas') return results;
    return results.slice(0, parseInt(quantidade));
  }, [ciclo, modulo, modalidade, problema, tema, quantidade]);

  const handleGenerate = () => {
    if (!ciclo) return;
    setIsGenerated(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setIsGenerated(false);
    setCiclo(null);
    setModulo('');
    setModalidade('Todos');
    setProblema('Todos');
    setTema('');
    setQuantidade('10');
  };

  if (isGenerated) {
    return (
      <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{ciclo}</span>
              <span className="text-neutral-700">•</span>
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{modulo || 'Todos os Módulos'}</span>
              <span className="text-neutral-700">•</span>
              <span className="text-[10px] font-bold text-purple-500 uppercase tracking-widest">{filteredQuestions.length} questões</span>
            </div>
            <h2 className="text-xl font-bold text-white">Sessão de Estudos Personalizada</h2>
          </div>
          <button 
            onClick={() => setIsGenerated(false)}
            className="text-xs font-medium text-neutral-400 hover:text-white flex items-center gap-2 transition-colors bg-neutral-900 px-4 py-2 rounded-lg border border-neutral-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Editar Filtros
          </button>
        </header>

        {filteredQuestions.length > 0 ? (
          <div className="space-y-6">
            {filteredQuestions.map(q => (
              <QuestionCard key={q.id} question={q} />
            ))}
            
            <div className="py-10 text-center">
              <p className="text-neutral-600 text-sm mb-4">Parabéns! Você concluiu esta meta de questões.</p>
              <button 
                onClick={resetFilters}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-600/10"
              >
                Configurar Nova Sessão
              </button>
            </div>
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-neutral-800 rounded-3xl">
            <h3 className="text-white font-medium mb-2">Sem resultados específicos</h3>
            <p className="text-neutral-500 text-sm mb-6 max-w-xs mx-auto">
              Tente ampliar sua busca removendo alguns refinamentos (como tema ou problema específico).
            </p>
            <button onClick={() => setIsGenerated(false)} className="text-blue-500 hover:underline text-sm font-bold">Voltar</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Banco de Questões PBL</h2>
        <p className="text-neutral-400 text-sm font-light">
          Configure sua sessão escolhendo o módulo e a quantidade ideal de questões para seu momento de estudo.
        </p>
      </div>

      <div className="space-y-8 bg-neutral-900/30 border border-neutral-800 p-8 md:p-10 rounded-3xl">
        <section>
          <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4 text-center">1. Ciclo Acadêmico</label>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => { setCiclo('Ciclo Básico'); setModulo(''); }}
              className={`p-6 rounded-2xl border transition-all text-center group ${ciclo === 'Ciclo Básico' ? 'bg-blue-600/10 border-blue-600 shadow-lg shadow-blue-600/5' : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'}`}
            >
              <span className={`block text-sm font-bold ${ciclo === 'Ciclo Básico' ? 'text-white' : 'text-neutral-400'}`}>Ciclo Básico</span>
            </button>
            <button 
              onClick={() => { setCiclo('Ciclo Clínico'); setModulo(''); }}
              className={`p-6 rounded-2xl border transition-all text-center group ${ciclo === 'Ciclo Clínico' ? 'bg-blue-600/10 border-blue-600 shadow-lg shadow-blue-600/5' : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'}`}
            >
              <span className={`block text-sm font-bold ${ciclo === 'Ciclo Clínico' ? 'text-white' : 'text-neutral-400'}`}>Ciclo Clínico</span>
            </button>
          </div>
        </section>

        <section className={`transition-all duration-500 ${!ciclo ? 'opacity-20 pointer-events-none' : ''}`}>
          <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">2. Módulo (ASE)</label>
          <select 
            value={modulo}
            onChange={(e) => setModulo(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-4 px-5 text-sm focus:border-blue-600 outline-none transition-all text-white appearance-none cursor-pointer"
          >
            <option value="">Todos os módulos deste ciclo</option>
            {currentModulos.map((m, i) => (
              <option key={i} value={m}>{m}</option>
            ))}
          </select>
        </section>

        <section className={`transition-all duration-500 ${!ciclo ? 'opacity-20 pointer-events-none' : ''}`}>
          <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">3. Quantidade de Questões</label>
          <div className="grid grid-cols-5 gap-2">
            {['5', '10', '20', '30', 'Todas'].map((q) => (
              <button
                key={q}
                onClick={() => setQuantidade(q)}
                className={`py-3 rounded-xl border text-xs font-bold transition-all ${
                  quantidade === q 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/10' 
                    : 'bg-neutral-950 border-neutral-800 text-neutral-500 hover:border-neutral-700'
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </section>

        <section className={`transition-all duration-500 ${!ciclo ? 'opacity-20 pointer-events-none' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[9px] font-semibold text-neutral-600 uppercase mb-2">Modalidade</label>
              <select 
                value={modalidade}
                onChange={(e) => setModalidade(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-3 px-4 text-xs focus:border-blue-600 outline-none text-white"
              >
                <option value="Todos">Todas as modalidades</option>
                <option value="PBL">Tutoria / PBL</option>
                <option value="Morfofuncional">Morfofuncional / Tradicional</option>
              </select>
            </div>
            <div>
              <label className="block text-[9px] font-semibold text-neutral-600 uppercase mb-2">Problema</label>
              <select 
                value={problema}
                onChange={(e) => setProblema(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-3 px-4 text-xs focus:border-blue-600 outline-none text-white"
              >
                <option value="Todos">Todos os problemas</option>
                {[1,2,3,4,5,6].map(n => (
                  <option key={n} value={n.toString()}>Problema {n}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4">
            <input 
              type="text" 
              placeholder="Buscar por tema (ex: Fisiologia, Embriologia...)"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-3 px-4 text-xs focus:border-blue-600 outline-none text-white placeholder:text-neutral-800"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
            />
          </div>
        </section>

        <div className="pt-6 border-t border-neutral-800">
          <button 
            disabled={!ciclo}
            onClick={handleGenerate}
            className={`w-full font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group ${
              !ciclo 
                ? 'bg-neutral-900 text-neutral-700 cursor-not-allowed border border-neutral-800' 
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/10 active:scale-[0.98]'
            }`}
          >
            Gerar Sessão de Estudos
            {ciclo && (
              <span className="bg-white/20 text-[10px] px-2 py-0.5 rounded-full border border-white/10 ml-2">
                {filteredQuestions.length} questões filtradas
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsView;
