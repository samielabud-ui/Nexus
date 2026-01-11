
import { Question } from './types';

const mapGabarito: Record<string, number> = { "A": 0, "B": 1, "C": 2, "D": 3 };

const mapJsonToQuestions = (json: any[]): Question[] => {
  return json.map(q => ({
    id: q.id.toString(),
    ciclo: q.ciclo,
    modalidade: q.modalidade === "Tradicional" ? "Morfofuncional" : "PBL",
    modulo: q.modulo,
    tema: q.tema,
    problema: q.problema,
    enunciado: q.enunciado,
    alternativas: [
      q.alternativas.A,
      q.alternativas.B,
      q.alternativas.C,
      q.alternativas.D
    ],
    gabarito: mapGabarito[q.gabarito] ?? 0
  }));
};

// --- BASE DE DADOS EXPANDIDA (MÓDULO 7: 173 QUESTÕES | MÓDULO 8: 227 QUESTÕES) ---
const RAW_DATA = [
  // --- QUESTÃO INICIAL ---
  { "id": 0, "ciclo": "Ciclo Básico", "modalidade": "Tradicional", "modulo": "ASE 1 — Introdução ao Estudo da Medicina", "tema": "Ética e Profissionalismo", "problema": 1, "status": "Nao Respondida", "enunciado": "De acordo com os princípios da bioética, qual conceito define a obrigação do médico de agir no melhor interesse do paciente e maximizar os benefícios?", "alternativas": { "A": "Autonomia", "B": "Não maleficência", "C": "Beneficência", "D": "Justiça" }, "gabarito": "C" },

  // --- MÓDULO 7 (173 QUESTÕES: IDs 1 A 173) ---
  ...Array.from({ length: 173 }, (_, i) => ({
    "id": 1 + i,
    "ciclo": "Ciclo Básico",
    "modalidade": "PBL",
    "modulo": "ASE 7 — Concepção, Formação do Ser Humano e Gestação",
    "tema": i % 4 === 0 ? "Fisiologia do Ciclo Menstrual" : i % 4 === 1 ? "Embriologia Humana" : i % 4 === 2 ? "Assistência Pré-Natal" : "Hormônios Gestacionais",
    "problema": (i % 5) + 1,
    "status": "Nao Respondida",
    "enunciado": i === 0 
      ? "O controle central do ciclo menstrual reside no hipotálamo. Sobre a secreção do Hormônio Liberador de Gonadotrofina (GnRH), assinale a alternativa correta:"
      : `Questão técnica NexusBQ (Módulo 7) #${1 + i}: Analisando os parâmetros de ${i % 4 === 0 ? "Fisiologia do Ciclo Menstrual" : i % 4 === 1 ? "Embriologia Humana" : i % 4 === 2 ? "Assistência Pré-Natal" : "Hormônios Gestacionais"}, qual a conduta padrão ouro segundo o método PBL?`,
    "alternativas": i === 0 
      ? { "A": "Sua secreção deve ser contínua para manter os níveis de FSH.", "B": "A liberação ocorre em pulsos rítmicos para evitar a desensibilização dos receptores.", "C": "O GnRH é secretado apenas na fase lútea.", "D": "A pulsatilidade é controlada apenas pela progesterona." }
      : { "A": "Opção A: Abordagem sistêmica baseada em evidências.", "B": "Opção B: Protocolo de manejo clínico integrado.", "C": "Opção C: Intervenção terapêutica prioritária.", "D": "Opção D: Avaliação diagnóstica complementar." },
    "gabarito": i === 0 ? "B" : (i % 4 === 0 ? "A" : i % 4 === 1 ? "B" : i % 4 === 2 ? "C" : "D")
  })),

  // --- MÓDULO 8 (227 QUESTÕES: IDs 174 A 400) ---
  ...Array.from({ length: 227 }, (_, i) => {
    const id = 174 + i;
    const temasMod8 = [
      "Reanimação Neonatal", 
      "Puericultura e Crescimento", 
      "Marcos do Desenvolvimento", 
      "Aleitamento Materno", 
      "Triagem Neonatal (Teste do Pezinho)",
      "Imunização e PNI",
      "Afecções Comuns do RN",
      "Teorias do Desenvolvimento (Piaget/Freud)"
    ];
    const tema = temasMod8[i % temasMod8.length];
    
    // Exemplos reais para as primeiras questões do módulo 8
    if (id === 174) {
      return {
        "id": 174,
        "ciclo": "Ciclo Básico",
        "modalidade": "PBL",
        "modulo": "Módulo 8 (ASE 8) — Nascimento, Crescimento e Desenvolvimento da Criança e do Adolescente",
        "tema": "Reanimação Neonatal",
        "problema": 1,
        "status": "Nao Respondida",
        "enunciado": "Ao nascimento de um recém-nascido (RN), a decisão de manter o bebê junto à mãe ou levá-lo à mesa de reanimação baseia-se em três perguntas fundamentais. Quais são elas?",
        "alternativas": { 
          "A": "Gestação a termo? O líquido amniótico é claro? Tem bom tônus muscular?", 
          "B": "Gestação a termo? Está respirando ou chorando? Tem bom tônus muscular?", 
          "C": "O peso é adequado? Está respirando ou chorando? A frequência cardíaca é > 100 bpm?", 
          "D": "Gestação a termo? Tem mecônio? A mãe fez pré-natal?" 
        },
        "gabarito": "B"
      };
    }

    if (id === 175) {
      return {
        "id": 175,
        "ciclo": "Ciclo Básico",
        "modalidade": "PBL",
        "modulo": "Módulo 8 (ASE 8) — Nascimento, Crescimento e Desenvolvimento da Criança e do Adolescente",
        "tema": "Clampeamento do Cordão",
        "problema": 1,
        "status": "Nao Respondida",
        "enunciado": "Para um RN com boa vitalidade, recomenda-se o clampeamento tardio do cordão umbilical. Qual é o tempo recomendado e o principal benefício dessa prática?",
        "alternativas": { 
          "A": "30 a 60 segundos; previne icterícia.", 
          "B": "1 a 3 minutos; aumenta os estoques de ferro e previne anemia nos primeiros meses.", 
          "C": "Imediatemente após o nascimento; evita policitemia.", 
          "D": "Após 5 minutos; melhora o vínculo mãe-bebê." 
        },
        "gabarito": "B"
      };
    }

    return {
      "id": id,
      "ciclo": "Ciclo Básico",
      "modalidade": "PBL",
      "modulo": "Módulo 8 (ASE 8) — Nascimento, Crescimento e Desenvolvimento da Criança e do Adolescente",
      "tema": tema,
      "problema": (i % 5) + 1,
      "status": "Nao Respondida",
      "enunciado": `Questão técnica NexusBQ (Módulo 8) #${id}: No contexto de ${tema}, qual critério clínico é determinante para a evolução satisfatória do paciente pediátrico no método PBL?`,
      "alternativas": { 
          "A": "Monitoramento rigoroso dos parâmetros antropométricos.", 
          "B": "Intervenção precoce baseada em protocolos de triagem.", 
          "C": "Apoio à rede de suporte familiar e educação em saúde.", 
          "D": "Aplicação de escalas validadas de desenvolvimento infantil." 
      },
      "gabarito": i % 4 === 0 ? "A" : i % 4 === 1 ? "B" : i % 4 === 2 ? "C" : "D"
    };
  }),

  // --- MÓDULO 9 (MANUTENÇÃO) ---
  { "id": 401, "ciclo": "Ciclo Básico", "modalidade": "PBL", "modulo": "ASE 9 — Vida Adulta e Processo de Envelhecimento", "tema": "Transtornos Alimentares - Anorexia", "problema": 1, "status": "Nao Respondida", "enunciado": "A Anorexia Nervosa é caracterizada por uma tríade diagnóstica clássica. Assinale a alternativa correta:", "alternativas": { "A": "Compulsão alimentar, vômitos e baixo peso.", "B": "Restrição calórica, medo intenso de engordar e distorção da imagem.", "C": "Uso de laxantes, amenorreia e queda de cabelo.", "D": "Hiperfagia, culpa e exercícios excessivos." }, "gabarito": "B" }
];

export const MOCK_QUESTIONS: Question[] = mapJsonToQuestions(RAW_DATA);

export interface RankingUser {
  rank: number;
  name: string;
  points: number;
  isCurrentUser: boolean;
}

export const MOCK_RANKING: RankingUser[] = [
  { rank: 1, name: "Dr. Roberto Santos", points: 1250, isCurrentUser: false },
  { rank: 5, name: "Você", points: 745, isCurrentUser: true }
];
