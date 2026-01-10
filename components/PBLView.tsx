
import React, { useState, useEffect } from 'react';

// Tipagem para suportar a estrutura aninhada dos resumos
interface SummaryProblem {
  numero: string;
  titulo: string;
  conteudo: Record<string, any>;
}

const GLOBAL_SUMMARIES: Record<number, SummaryProblem[]> = {
  // --- MÓDULO I: INTRODUÇÃO AO ESTUDO DA MEDICINA ---
  1: [
    {
      numero: "1", titulo: "Com os sentimentos à flor da pele!",
      conteudo: {
        "Sistema Único de Saúde (SUS)": {
          "Fundamentos e Doutrina": "O Sistema Único de Saúde é regido por princípios doutrinários que garantem a justiça social. A universalidade estabelece que a saúde é um direito de todos e dever do Estado, sem qualquer tipo de discriminação. A equidade busca diminuir as desigualdades sociais ao tratar de forma diferenciada aqueles que possuem necessidades distintas, garantindo que o atendimento seja proporcional à carência do paciente. Já a integralidade foca no indivíduo como um todo, unindo ações de prevenção, cura e reabilitação, além de considerar a variável humana e o contexto social no processo de cuidado.",
          "Organização e Diretrizes": "A estrutura do SUS baseia-se na descentralização, que redistribui o poder e os recursos entre as esferas federal, estadual e municipal para aproximar a gestão da realidade local. A regionalização e a hierarquização organizam os serviços em níveis de complexidade crescente, permitindo um fluxo eficiente de pacientes. Além disso, a participação popular é garantida por lei através dos Conselhos de Saúde, órgãos colegiados que contam com 50% de representantes dos usuários para fiscalizar e planejar as políticas públicas de saúde em cada nível de governo.",
          "Níveis de Atenção": "A rede de assistência é dividida em três níveis fundamentais. A Atenção Primária é a porta de entrada preferencial, representada pelas Unidades Básicas de Saúde e pela Estratégia Saúde da Família, sendo capaz de resolver cerca de 80% dos problemas de saúde. A Atenção Secundária lida com casos de média complexidade, como os atendimentos realizados em UPAs e ambulatórios especializados. Por fim, a Atenção Terciária concentra os serviços de alta densidade tecnológica, como cirurgias complexas, tratamentos oncológicos e hemodiálise em ambientes hospitalares de grande porte."
        },
        "Etica e Formação Médica": {
          "Conduta Profissional": "O Código de Ética Médica orienta a relação entre o médico, o paciente e a sociedade, estabelecendo que o sigilo profissional é um dever fundamental, salvo em situações de risco à coletividade ou por ordem legal. A autonomia do paciente deve ser sempre respeitada, permitindo que ele decida sobre seus tratamentos após receber todas as informações necessárias. O profissional também é proibido de causar dano por imperícia, imprudência ou negligência, devendo sempre buscar o benefício do paciente e a manutenção de sua dignidade acima de interesses comerciais ou políticos.",
          "Humanização": "O atendimento dialógico e humanizado coloca a comunicação efetiva e a empatia como pilares centrais da prática médica. Essa abordagem visa construir uma relação de confiança entre o profissional e o paciente, o que contribui diretamente para a satisfação, o bem-estar emocional e a eficácia do tratamento proposto, promovendo uma medicina mais compassiva e centrada na pessoa."
        },
        "Conhecimentos Científicos e Anatômicos": {
          "Patologias": "O conteúdo aborda o SARS-CoV-2, vírus da família coronavírus responsável pela pandemia de Covid-19, caracterizando-o como o agente causador de síndromes respiratórias graves. Também são detalhadas as queimaduras, que podem ser causadas por agentes químicos, físicos ou mecânicos; elas são classificadas em primeiro grau quando atingem apenas a epiderme, segundo grau quando afetam a derme e causam bolhas, e terceiro grau quando destroem toda a espessura da pele e tecidos profundos. A pneumonia é descrita como uma inflamação alveolar que prejudica as trocas gasosas nos pulmões.",
          "Fundamentos de Anatomia": "A anatomia básica é explorada através da planimetria e da classificação óssea. O corpo humano é dividido por planos imaginários: o sagital mediano divide o corpo em direita e esquerda de forma simétrica; o plano frontal ou coronal separa as partes anterior e posterior; e o plano transversal divide o corpo em superior e inferior. Quanto aos ossos, eles são categorizados conforme sua forma e função em ossos longos, como o fêmur, ossos curtos como os do pulso, ossos planos como os do crânio, ossos irregulares como as vértebras e ossos sesamoides como a patela."
        }
      }
    },
    {
      numero: "2", titulo: "Te apresento... meu novo chá de emagrecimento!",
      conteudo: {
        "Processo Histórico da Medicina": "O estudo da medicina evoluiu de práticas místicas e sacerdotais na pré-história para um campo autônomo e científico ao longo dos séculos. Na Antiguidade, civilizações como a egípcia desenvolveram conhecimentos anatômicos avançados através da mumificação, realizando procedimentos como cesarianas e trepanações, enquanto na Grécia, Hipócrates separou a medicina da filosofia, defendendo que o corpo deve ser analisado em associação com o ambiente. Durante o período medieval na Europa, a Igreja Católica dominava o saber médico, tratando a doença como fruto do pecado e a cura como um ato de fé, ao passo que a medicina islâmica no Oriente preservava e expandia conhecimentos clássicos em anatomia e farmacologia. A Idade Moderna e a Renascença marcaram a ruptura com o pensamento religioso, trazendo avanços como a descoberta da bactéria, o desenvolvimento do microscópio e a invalidação da teoria da geração espontânea por Pasteur. Atualmente, a medicina contemporânea integra biotecnologia, robótica e uma ampla gama de especialidades voltadas para a melhoria da qualidade de vida. A história da medicina no Brasil é definida por crises sanitárias e pela busca por saúde pública, culminando na criação do SUS. Figuras centrais como Oswaldo Cruz foram responsáveis pela erradicação de doenças como a febre amarela e a peste bubônica, além da fundação de institutos de pesquisa que deram origem à FIOCRUZ. Outro destaque é Carlos Chagas, que catalogou protozoários causadores da malária e da doença de Chagas, dedicando-se intensamente ao estudo de patologias tropicais.",
        "Conhecimentos Tradicionais e Saberes Amazônicos": "A região amazônica abriga uma vasta diversidade de populações, como indígenas, ribeirinhos, quilombolas e comunidades extrativistas, cada uma com compreensões próprias de saúde e sociedade baseadas em tradições orais e experiências empíricas. Os indígenas utilizam conhecimentos ancestrais sobre plantas e animais, tendo no Pajé a figura central do cuidado tradicional. Já os ribeirinhos e seringueiros misturam influências indígenas e europeias, recorrendo frequentemente a emplastros de ervas nativas para tratar dores laborais. Os quilombolas, por sua vez, carregam a herança de matrizes africanas, utilizando chás e banhos de raízes para combater febres e infecções. A prática médica moderna muitas vezes incorpora conhecimentos tradicionais, como visto na homeopatia, acupuntura e hipnoterapia, que são reconhecidas pelo Conselho Federal de Medicina e integradas ao SUS através da Política Nacional de Práticas Integrativas e Complementares (PICS). Nas comunidades amazônicas, existe um diálogo frequente entre a medicina tradicional (chás e orações) e a medicina clínica (fármacos), embora alguns profissionais ainda demonstrem resistência a essas práticas populares. Estudos científicos também buscam validar o uso de plantas locais, como a Kalanchoe pinnata (folha da fortuna), para o tratamento de doenças como a leishmaniose.",
        "Medicina Alternativa e Curandeirismo": "A medicina alternativa ou complementar engloba práticas terapêuticas que não fazem parte da medicina convencional, como o uso de suplementos, massagens e terapias energéticas, visando melhorar a qualidade de vida sem substituir o tratamento médico tradicional. O curandeirismo, por outro lado, é tipificado como crime pelo Código Penal Brasileiro (Art. 284) quando o indivíduo prescreve substâncias ou realiza diagnósticos sem habilitação médica habitual, especialmente quando substitui procedimentos invasivos ou coloca em risco a saúde pública. Embora a comunidade científica tenda a rejeitar curadores populares devido à falta de formação acadêmica, há uma forte relação de confiança e proximidade entre esses agentes e suas comunidades. O universo da curandagem na Amazônia inclui parteiras, benzedeiras, erveiras e sacacas, cujos saberes convergem com a religiosidade e a fé, elementos que podem interferir positivamente na recuperação psicológica e espiritual dos enfermos.",
        "Epidemiologia e Saúde Pública": "A epidemiologia diferencia a propagação de doenças em níveis distintos: o surto é o aumento repentino e localizado de casos acima do esperado em uma região específica; a epidemia ocorre quando esse surto se espalha por diversas regiões ou cidades; a endemia é caracterizada pela presença constante e prevista de uma doença em uma região específica, como a malária na Amazônia. A pandemia é o cenário mais grave, caracterizado pela disseminação global de uma enfermidade por pelo menos três continentes, com transmissão ativa, conforme definido pela Organização Mundial da Saúde (OMS). Doenças sazonais são aquelas que apresentam tendência de aumento em épocas específicas do ano devido a mudanças ambientais, como temperatura e umidade. No Pará, observa-se o aumento de síndromes gripais durante os períodos chuvosos, exemplificando como o clima e o comportamento humano influenciam a recorrência epidemiológica.",
        "Tecido Epitelial": "O tecido epitelial é um dos quatro tecidos fundamentais do corpo, caracterizado por células poliédricas justapostas com pouquíssima matriz extracelular. É um tecido avascularizado, nutrido por difusão a partir do tecido conjuntivo subjacente, e possui uma intensa atividade mitótica, o que lhe confere alta capacidade de regeneração, mas também o torna suscetível ao desenvolvimento de cânceres de pele, como o carcinoma basocelular. Suas funções principais incluem revestimento para proteção e absorção, secreção glandular, percepção de estímulos e contração através de células mioepiteliais. Os epitélios são classificados pelo número de camadas em simples (uma camada), estratificado (várias camadas) ou pseudoestratificado (uma camada com núcleos em alturas variadas). Quanto ao formato das células, podem ser pavimentosas (achatadas para facilitar trocas), cúbicas ou colunares (alongadas para secreção e absorção). As superfícies das células epiteliais podem apresentar especializações como microvilos para aumentar a absorção, cílios para movimentação de partículas e estereocílios imóveis. O epitélio glandular organiza-se em glândulas exócrinas, que secretam substâncias para fora do corpo ou cavidades via ductos, e endócrinas, que lançam hormônios diretamente na corrente sanguínea. O processo de secreção pode ser merócrino (sem perda celular), apócrino (perda parcial) ou holócrino (destruição total da célula durante a secreção)."
      }
    },
    {
      numero: "3", titulo: "Respeito às Crenças",
      conteudo: {
        "Concepções de Saúde e Doença": "As concepções de saúde evoluíram de modelos mágico-religiosos, onde a doença era vista como punição divina ou espiritual, para modelos holísticos que buscavam o equilíbrio entre humores e elementos do organismo. O modelo biomédico, predominante no ocidente após o Renascimento, passou a tratar o corpo como uma máquina cujas partes falhas devem ser reparadas, focando no funcionamento mecânico e no controle biológico, enquanto o modelo sistêmico propõe uma visão mais abrangente, tratando a saúde como um equilíbrio dinâmico onde alterações em um componente repercutem em todo o sistema. A Organização Mundial da Saúde define saúde como um estado de completo bem-estar físico, mental e social, superando a visão meramente dicotômica entre estar doente ou saudável. O conceito contemporâneo de Saúde Única (One Health) expande essa visão ao integrar a saúde humana, animal e ambiental como esferas interdependentes, reconhecendo que o equilíbrio do ecossistema e a saúde dos animais impactam diretamente no bem-estar e na prevenção de patologias em seres humanos.",
        "História Natural da Doença": "A História Natural da Doença, sistematizada por Leavell e Clark, descreve o ciclo patológico em duas fases sequenciais: o período pré-patogênico e o patogênico. No estágio pré-patogênico, ocorre a interação inicial entre o agente etiológico, o hospedeiro e o meio ambiente; já o estágio patogênico inicia-se com a resposta do organismo ao estímulo, progredindo de alterações subclínicas até a manifestação de sintomas agudos, podendo resultar em cura, invalidez ou morte.",
        "Relação Médico-Paciente e Humanização": "A humanização na saúde foca na construção de vínculos afetivos e no acolhimento de pacientes e familiares, o que reduz conflitos e aumenta a eficácia do tratamento ao escutar ativamente as necessidades do sujeito. O atendimento dialógico permite que o médico compreenda a realidade social e as crenças do paciente, transformando-o em protagonista de seu próprio cuidado, o que é fundamental em modelos de relação contratualista e deliberativa. O papel da equipe multiprofissional, composta por médicos, enfermeiros, fisioterapeutas e outros especialistas, é garantir uma abordagem biopsicossocial que minimize complicações e evite a automedicação. A atenção domiciliar, exemplificada pelo programa 'Melhor em Casa', proporciona cuidado no ambiente familiar, o que diminui o risco de infecções hospitalares comuns em UTIs e melhora a gestão de leitos públicos.",
        "Tecido Adiposo e Patologias": "O tecido adiposo é um tipo de tecido conjuntivo composto por adipócitos, que armazenam energia na forma de triglicerídeos. O tecido unilocular (amarelo) é o mais comum em adultos, atuando como reserva energética, isolante térmico e amortecedor de choques mecânicos, enquanto o tecido multilocular (pardo) é rico em mitocôndrias e especializado na produção de calor, sendo significativo principalmente em recém-nascidos para a termorregulação. A obesidade é caracterizada pelo excesso de gordura depositada nos adipócitos uniloculares, sendo diagnosticada em adultos quando o IMC ultrapassa 30 e podendo ser classificada como abdominal, periférica ou homogênea. Em contraste, a Lipodistrofia Congênita Generalizada é uma doença rara e hereditária que causa a perda severa de tecido adiposo subcutâneo, resultando em complicações graves como resistência extrema à insulina, hepatomegalia e cardiomiopatia hipertrófica."
      }
    }
  ],

  // --- MÓDULO II: PROLIFERAÇÃO E DIFERENCIAÇÃO CELULAR ---
  2: [
    {
      numero: "1", titulo: "Bula de Remédio",
      conteudo: {
        "Água e Homeostase": "A água é o composto mais abundante no organismo, atuando como solvente universal devido à sua polaridade e desempenhando papel crucial na termorregulação e lubrificação de tecidos. Grupos específicos exigem atenção quanto ao equilíbrio hídrico: crianças e idosos possuem menor percepção de sede, enquanto gestantes perdem volumes significativos pela amamentação e sintomas gestacionais. A água total do corpo distribui-se entre o líquido intracelular (LIC), que representa dois terços do total, e o líquido extracelular (LEC), correspondente a um terço. O LEC subdivide-se em líquido intersticial e plasma sanguíneo, mantendo composições iônicas distintas do LIC através da barreira seletiva da membrana celular. A homeostase é o equilíbrio dinâmico do meio interno, mantido por sistemas de controle compostos por receptor, centro de controle e efetor. O feedback negativo é o principal mecanismo homeostático, pois reverte o estímulo inicial para retomar o ponto de ajuste ideal; já o feedback positivo reforça o estímulo, sendo interrompido apenas por um evento externo, como ocorre no trabalho de parto.",
        "Macromoléculas Biológicas": "As proteínas são polímeros de aminoácidos com funções estruturais, reguladoras e imunológicas, organizadas em estruturas que vão da primária à quaternária. Enzimas são proteínas catalisadoras que aceleram reações químicas ao diminuir a energia de ativação necessária. Alterações bruscas de pH ou temperatura podem causar a desnaturação proteica, resultando na perda da estrutura tridimensional e da função biológica. Os carboidratos são a principal fonte de energia celular para a geração de ATP, sendo classificados desde monossacarídeos simples até polissacarídeos complexos de reserva, como o glicogênio. Os lipídios, moléculas apolares, funcionam como reserva energética secundária, isolantes térmicos e componentes estruturais das membranas, destacando-se os fosfolipídios e o colesterol.",
        "Membrana e Transporte Celular": "A membrana plasmática é descrita pelo modelo do mosaico fluido, consistindo em uma bicamada lipídica anfipática com proteínas integrais e periféricas nela inseridas. O glicocálice, formado por glicolipídios e glicoproteínas na face externa, atua como a identidade celular para reconhecimento e resposta imune. O transporte através da membrana pode ser passivo, sem gasto de energia, incluindo difusão simples, difusão facilitada por proteínas e osmose. O transporte ativo exige gasto de ATP para mover solutos contra o gradiente de concentração, como na bomba de sódio-potássio, ou através de processos vesiculares como endocitose e exocitose. A comunicação celular ocorre via sinais químicos que podem atuar localmente (autócrina e parácrina) ou à distância via corrente sanguínea (endócrina). Os receptores podem ser intracelulares para moléculas lipossolúveis ou de superfície, como os acoplados à proteína G e canais iônicos dependentes de ligantes, que desencadeiam respostas rápidas na célula."
      }
    },
    {
      numero: "2", titulo: "Autofagia: O Segredo da Longevidade!",
      conteudo: {
        "Estrutura e Dinâmica Citoplasmática": "O citoplasma é composto pelo hialoplasma, uma matriz fluida e gelatinosa onde ocorrem diversas reações metabólicas e onde as partículas celulares ficam dispersas. Ele pode alternar entre os estados de gel e sol (tixotropismo), permitindo movimentos ameboides. Sustentando essa massa fluida está o citoesqueleto, uma rede dinâmica de filamentos proteicos que controla o posicionamento das organelas e a forma celular. Ele é constituído por filamentos intermediários, que conferem resistência mecânica; microtúbulos, que organizam o transporte intracelular e o fuso mitótico; e filamentos de actina, essenciais para movimentos da superfície celular e manutenção da forma.",
        "Sistema de Endomembranas e Organelas": "O sistema de endomembranas inclui o retículo endoplasmático e o complexo de Golgi, que atuam de forma coordenada na síntese e distribuição de moléculas. O retículo endoplasmático rugoso é o principal sítio de produção de proteínas, enquanto o liso foca na síntese de lipídeos, armazenamento de cálcio e desintoxicação. O complexo de Golgi atua no empacotamento e modificação dessas proteínas, originando vesículas secretoras e lisossomos. Adicionalmente, os proteossomos desempenham um papel crucial na degradação controlada de proteínas defeituosas marcadas por ubiquitina, evitando o acúmulo de resíduos prejudiciais à célula.",
        "Metabolismo Energético e Respiração Celular": "A mitocôndria é a organela central na produção de ATP através da respiração celular, um processo dividido em três etapas principais. A glicólise ocorre no citosol e converte glicose em piruvato, gerando um saldo energético inicial. Na presença de oxigênio, o piruvato entra na matriz mitocondrial para o ciclo de Krebs, onde é oxidado para produzir transportadores de elétrons (NADH e FADH2). Por fim, a fosforilação oxidativa ocorre nas cristas mitocondriais, onde esses elétrons alimentam a cadeia transportadora, criando um gradiente de prótons que ativa a enzima ATP sintase para a produção massiva de energia.",
        "Digestão e Desintoxicação Celular": "A digestão intracelular é realizada pelos lisossomos, que contêm enzimas hidrolíticas capazes de degradar macromoléculas e organelas obsoletas no processo de autofagia. A autofagia funciona como um controle de qualidade celular, essencial para a longevidade, ao remover componentes danificados e reciclar nutrientes. Já a desintoxicação celular envolve a ação coordenada do retículo endoplasmático liso e dos peroxissomos. Os peroxissomos utilizam enzimas oxidativas, como a catalase, para neutralizar substâncias tóxicas (como o álcool) e decompor o peróxido de hidrogênio, protegendo a célula contra danos oxidativos e o envelhecimento precoce."
      }
    },
    {
      numero: "3", titulo: "Autofagia, Raras, Porém Importantes",
      conteudo: {
        "Ácidos Nucleicos e Informação Genética": "O DNA é a molécula que armazena as instruções genéticas essenciais para o desenvolvimento e funcionamento dos seres vivos, sendo composto por uma dupla hélice de nucleótidos unidos por pontes de hidrogénio entre bases complementares. O RNA, geralmente de cadeia simples e menor que o DNA, atua como um intermediário na síntese de proteínas, possuindo ribose como açúcar e a base uracilo em substituição da timina. Enquanto o DNA carrega os genes, o RNA executa funções variadas, destacando-se o RNA mensageiro, que leva a informação do núcleo ao citoplasma; o RNA ribossomal, que compõe os ribossomos; e o RNA transportador, que traduz o código genético em aminoácidos específicos.",
        "Processos Moleculares Fundamentais": "A replicação do DNA é um processo semiconservativo que ocorre antes da divisão celular, onde enzimas como a helicase separam as fitas originais para que a DNA-polimerase sintetize novas cadeias complementares. A transcrição ocorre no núcleo e consiste na síntese de uma molécula de RNA a partir de um molde de DNA, sob o controlo da RNA-polimerase. Após o processamento do RNA (como o splicing para remoção de intrões), este desloca-se para o citoplasma para a tradução. A tradução é a etapa onde o ribossomo lê os códons do RNA mensageiro e, com o auxílio do RNA transportador, monta uma cadeia de aminoácidos que resultará numa proteína funcional. O código genético é a relação entre as trincas de bases nitrogenadas (códons) e os aminoácidos que formam as proteínas.",
        "Mutações e Alterações Celulares": "As mutações são modificações bruscas na estrutura do material genético que podem ser espontâneas ou induzidas por agentes externos como radiação ultravioleta, raios-X ou compostos químicos. Podem ocorrer em células somáticas ou em células germinativas. As mutações génicas podem envolver a substituição, inserção ou deleção de bases, alterando a leitura do DNA e podendo resultar em proteínas não funcionais ou doenças genéticas. Já as mutações cromossómicas são alterações em larga escala que afetam o número ou a estrutura dos cromossomos, impactando significativamente o desenvolvimento do organismo."
      }
    },
    {
      numero: "4", titulo: "A Ajuda das Moscas",
      conteudo: {
        "Divisão Celular e Ciclo Reprodutivo": "O ciclo celular é o processo pelo qual uma célula se duplica e se divide, sendo composto pela interfase e pela fase mitótica. A interfase subdivide-se em G1 (crescimento), S (duplicação do DNA) e G2 (preparação final). A mitose garante que as células-filhas recebam um conjunto idêntico de cromossomos. A meiose ocorre em células germinativas para a formação de gametas, reduzindo o número de cromossomos pela metade através de duas divisões sucessivas. A meiose I é reducional e caracteriza-se pela recombinação genética (crossing-over). A gametogênese é o processo de formação dos gametas masculinos e femininos.",
        "Hereditariedade e Genética Molecular": "A teoria cromossômica da hereditariedade estabelece que os genes estão localizados em posições específicas nos cromossomos. Estudos com a Drosophila melanogaster demonstraram que certas características estão ligadas ao sexo. Os padrões de transmissão genética definem como as características são passadas entre gerações (autossômica dominante, recessiva ou ligada ao X). As mutações cromossômicas podem ser numéricas (aneuploidias e euploidias) ou estruturais (deleções, duplicações, inversões e translocações)."
      }
    },
    {
      numero: "5", titulo: "Teste Genético",
      conteudo: {
        "Ciclo Celular e Suas Fases": "O ciclo celular é o processo fundamental pelo qual as células somáticas se dividem para gerar duas células-filhas idênticas. Ele é dividido em interfase (G1, S, G2) e divisão celular (mitose ou meiose). Algumas células podem entrar em G0. O controle é feito por ciclinas e quinases dependentes de ciclina (CDKs). Pontos de checagem críticos asseguram a integridade do processo (G1/S, G2/M e ponto do fuso). Proteínas como a p53 desempenham papel vital ao interromper o ciclo em caso de danos ao DNA.",
        "Adaptações do Crescimento Celular": "As células podem modificar o seu número, tamanho ou fenótipo em resposta a alterações no ambiente. A hipertrofia consiste no aumento do tamanho das células; a hiperplasia é o aumento no número de células; a atrofia é a redução do tamanho celular. Processos mais complexos incluem a metaplasia (substituição de um tipo de célula adulta por outro) e a displasia (crescimento desordenado que pode preceder uma neoplasia).",
        "Neoplasias e Carcinogênese": "As neoplasias surgem quando há uma perda da regulação normal do ciclo celular. A carcinogênese ocorre em três estágios: iniciação, promoção e progressão. Neoplasias benignas possuem crescimento lento e permanecem localizadas. Malignas (cânceres) têm crescimento acelerado, podem ser anaplásicas e possuem capacidade de invadir tecidos e gerar metástases. Mutações em protooncogenes e genes supressores tumorais (como p53 ou RB) são determinantes. Fatores intrínsecos e extrínsecos (hábitos de vida, radiação, vírus) influenciam o risco."
      }
    }
  ],

  // --- MÓDULO III: FUNÇÕES BIOLÓGICAS I ---
  3: [
    {
      numero: "1", titulo: "Aprendendo com as Séries",
      conteudo: {
        "Fisiologia e Anatomia do Coração": "O sistema cardíaco é essencial para o transporte de oxigénio e nutrientes. O coração é composto por epicárdio, miocárdio e endocárdio. Divide-se em quatro câmaras (átrios e ventrículos) com fluxo unidirecional mantido pelas valvas. A rede vascular inclui artérias (alta pressão), veias (com válvulas para evitar refluxo) e capilares (trocas gasosas e de nutrientes).",
        "Células Cardíacas e Condução Elétrica": "Existem células contráteis (força mecânica) e autorrítmicas (impulsos elétricos). O sistema de condução inicia no nó sinoatrial, passa pelo nó atrioventricular, feixe de His e fibras de Purkinje. O ciclo cardíaco alterna entre sístole (contração) e diástole (relaxamento). No ECG, a onda P representa despolarização atrial, o complexo QRS a ventricular e a onda T a repolarização ventricular.",
        "Sistemas de Regulação e Arritmias": "A atividade cardíaca é modulada pelos sistemas simpático (aumenta força/ritmo) e parassimpático (diminui). Hormônios como adrenalina também atuam. O sistema renina-angiotensina-aldosterona regula a pressão e volume. Falhas na condução ou regulação podem resultar em arritmias (taquicardia, bradicardia ou fibrilação)."
      }
    },
    {
      numero: "2", titulo: "Mapa Conceitual Sob Pressão!",
      conteudo: {
        "Sistema Circulatório e Dinâmica de Fluxo": "O sistema circulatório transporta oxigénio, nutrientes e hormonas. A circulação sistémica leva sangue oxigenado do ventrículo esquerdo para os tecidos e retorna o desoxigenado ao átrio direito. A circulação pulmonar leva o sangue pobre em oxigénio ao pulmão para hematose. As artérias são reservatórios de pressão e as veias de volume.",
        "Pressão Arterial e Homeostase": "A pressão arterial é mantida por feedback negativo. O controle rápido é neural (reflexo barorrecetor e quimiorreflexo). O controle a longo prazo depende de hormonas: SRAA (Renina-Angiotensina-Aldosterona), ADH e Peptídeo Natriurético Atrial. A hipertensão arterial sustentada sobrecarrega o coração e pode levar a lesões vasculares graves e insuficiência cardíaca. A pressão é normal se < 120/80 mmHg."
      }
    },
    {
      numero: "3", titulo: "Muito mais complexo do que eu imaginava...",
      conteudo: {
        "Anatomia e Divisão do Sistema": "O sistema respiratório divide-se em porção condutora (filtra, aquece e umedece o ar) e porção respiratória (alvéolos - troca de gases). Os pulmões são envolvidos pela pleura (parietal e visceral), com líquido pleural para lubrificação. A mecânica baseia-se na Lei de Boyle: a inspiração é ativa (diafragma/intercostais) e a expiração normal é passiva. O controle é feito por redes neuronais no bulbo e na ponte.",
        "Trocas Gasosas e Transporte": "A hematose ocorre nos alvéolos. O oxigênio é transportado pela hemoglobina. O Efeito Bohr descreve como pH/CO2 afetam a afinidade da hemoglobina. A eficiência depende da relação ventilação-perfusão (Zonas de West). O surfactante (células tipo II) reduz a tensão superficial, evitando colapso alveolar. O equilíbrio ácido-base é mantido por sistemas tampão, respiratório (rápido) e renal (potente).",
        "Contexto Clínico e Sobrecarga": "Em casos graves, recorre-se à intubação e ventilação mecânica. Sobrecarga orgânica (exercício ou altitude) exige adaptações rápidas como aumento da ventilação e débito cardíaco. Grandes altitudes causam hipoxia, estimulando hiperventilação e vasoconstrição pulmonar."
      }
    },
    {
      numero: "4", titulo: "REPORTAGEM INTERESSANTE!!!!",
      conteudo: {
        "Mecanismos de Contração e Relaxamento": "A unidade funcional é o sarcómero (actina e miosina). A contração depende de cálcio (do retículo sarcoplasmático) ligando-se à troponina C. O relaxamento exige bomba SERCA e ATP. No músculo liso, a regulação envolve calmodulina e miosina-quinase. A junção neuromuscular usa acetilcolina em recetores nicotínicos.",
        "Biomecânica e Movimento": "Ossos funcionam como alavancas e articulações como fulcros. Músculos podem ser agonistas, antagonistas ou sinergistas. Existem alavancas interfixas, inter-resistentes e interpotentes. Os movimentos dividem-se em reflexos (involuntários), voluntários (planeados) e rítmicos (automáticos como caminhar).",
        "Tipos de Contração e Fadiga": "Contração isotónica (concêntrica/excêntrica) altera o comprimento; isométrica gera tensão sem mudar o comprimento. O ATP provém da fosfocreatina, respiração aeróbia ou anaeróbia. A fadiga muscular pode ser central ou periférica (queda de pH, esgotamento de glicogénio, falha de cálcio)."
      }
    }
  ],

  // --- MÓDULO IV: FUNÇÕES BIOLÓGICAS II ---
  4: [
    {
      numero: "1", titulo: "Depois da primeira dose",
      conteudo: {
        "Organização e Divisão do Sistema Nervoso": "Anatomicamente, o SNC compreende o encéfalo (cérebro, cerebelo e tronco encefálico) protegido pela caixa craniana, e a medula espinhal dentro do canal vertebral. O SNP inclui 12 pares de nervos cranianos, 31 pares de nervos espinhais e seus gânglios associados. Funcionalmente, além da divisão Somática e Autônoma (SNA), o SNA possui um terceiro ramo, o SNA Entérico, que governa o trato gastrointestinal. O Simpático origina-se dos segmentos toracolombares da medula (T1-L2), com gânglios próximos à coluna (cadeia simpática). O Parassimpático tem origem craniossacral (nervos III, VII, IX, X e segmentos S2-S4), com gânglios próximos ou dentro dos órgãos-alvo. A ação do álcool deprime ambos os sistemas, mas seus efeitos autonômicos (como hipotensão) refletem uma supressão do tônus simpático.",
        "Citologia e Glia": "Neurônios são classificados por função: sensoriais (aferentes), motores (eferentes) e interneurônios (90% do total). Astrócitos, além da BHE, removem neurotransmissores (ex: glutamato) da fenda sináptica e fornecem lactato como combustível neuronal. Oligodendrócitos mielinizam múltiplos axônios no SNC; a destruição desta bainha é a base da esclerose múltipla. A microglia atua como apresentadora de antígeno na imunidade CNS. As células de Schwann no SNP mielinizam um único segmento de axônio e são essenciais para a regeneração axonal após lesão, guiando o crescimento via moléculas de adesão celular (ex: N-CAM).",
        "Bioeletrogênese e Potencial de Ação": "O potencial de repouso é mantido pela bomba Na+/K+ ATPase (3 Na+ para fora, 2 K+ para dentro) e pelos canais de K+ de repouso. O limiar de -55mV representa a abertura de um número crítico de canais de Na+ voltagem-dependentes. A fase ascendente atinge +30mV devido à entrada maciça de Na+. A repolarização é seguida por uma hiperpolarização (potencial pós-hiperpolarizador) devido à saída prolongada de K+. Períodos Refratários: Absoluto (nenhum novo PA) e Relativo (estímulo supra-normal necessário). Condução saltatória em fibras mielinizadas pode atingir 120 m/s. O álcool altera a fluidez da membrana, perturbando a função dos canais iônicos.",
        "Sinapses e Farmacologia do Álcool": "Sinapses químicas: potencial de ação pré-sináptico abre canais de Ca2+ voltagem-dependentes; influxo de Ca2+ promove fusão vesicular com a membrana e libertação de neurotransmissores por exocitose. O álcool é um modulador alostérico positivo do receptor GABA-A, aumentando a entrada de Cl-, hiperpolarizando o neurônio. Simultaneamente, antagoniza não competitivamente os receptores NMDA de glutamato (excitatórios), prejudicando a plasticidade sináptica e a memória. A intoxicação aguda causa sedação, ataxia, fala arrastada; a crônica leva à tolerância (downregulation de GABA e upregulation de NMDA) e síndrome de abstinência hiperexcitadora.",
        "Farmacologia do SNC e Anestésicos": "Agentes que deprimem o SNC atuam em diferentes alvos: Benzodiazepínicos (agonistas do sítio GABA-A), Barbitúricos (prolongam a abertura do canal de Cl-), Anestésicos Gerais (ex: Propofol e Halotano) modulam canais GABA e glutamato. A anestesia geral segue estágios: analgesia, excitação, anestesia cirúrgica e paralisia bulbar. O álcool compartilha vias com estes agentes, explicando a potenciação de efeitos depressores.",
        "Plasticidade Neural e Aprendizado": "Base da memória e adaptação. Inclui potenciação de longa duração (LTP) no hipocampo (via receptores NMDA) e depressão de longa duração (LTD). O etanol interfere na LTP, prejudicando a formação de memória. A neurogênese no giro denteado do hipocampo é suprimida pelo consumo crônico de álcool.",
        "Desenvolvimento Embriológico do SNC": "Deriva da placa neural que se dobra formando o tubo neural. A crista neural origina o SNP. Malformações: Espinha bífida (fechamento incompleto) e Anencefalia. A exposição fetal ao álcool causa a Síndrome Alcoólica Fetal, com microcefalia e deficiência cognitiva."
      }
    },
    {
      numero: "2", titulo: "Controlando o corpo com o pensamento",
      conteudo: {
        "Anatomia do SNP e Nervos": "Nervos cranianos: I (olfatório), II (óptico) são tratos do SNC; III, IV, VI controlam motilidade ocular; V (trigêmeo) é misto; VII (facial) controla músculos da face e gustação anterior; VIII (vestibulococlear); IX (glossofaríngeo); X (vago) é o principal nervo parassimpático; XI (acessório); XII (hipoglosso). Nervos espinhais formam plexos (cervical, braquial, lombossacral). A barreira hematoneural no perineuro protege o ambiente iônico dos axônios. Gânglios sensitivos (ex: gânglio da raiz dorsal) contêm corpos celulares pseudounipolares.",
        "Sinapse Neuromuscular e Contração": "Na placa motora, a ACh liga-se a receptores nicotínicos (Na+/K+), gerando um Potencial de Placa Motora (PPM) que é sempre supra-limiar, garantindo contração. A enzima acetilcolinesterase hidrolisa rapidamente a ACh. O bloqueio neuromuscular (ex: por toxina botulínica ou curare) causa paralisia flácida. O acoplamento excitação-contração no músculo esquelético: o potencial de ação nos túbulos T ativa receptores de di-hidropiridina, que mecanicamente abrem receptores de rianodina no retículo sarcoplasmático, liberando Ca2+. A contração segue o modelo dos filamentos deslizantes: a cabeça da miosina liga-se à actina, realiza o 'golpe de força' (power stroke) usando energia do ATP hidrolisado e desliga-se.",
        "Reflexos e Arcos Neurais": "Componentes do arco: Receptor (ex: fuso muscular), Neurônio Aferente (sensitivo), Centro Integrador (interneurônios na medula), Neurônio Eferente (motores alfa), Efetor (músculo). Reflexo Miotático (alongamento): monossináptico, excitatório, mantém o tônus postural. Reflexo Inverso de Alongamento (de Golgi): polissináptico, inibitório, protege contra hiperextensão. Reflexo de Retirada: polissináptico, com interneurônios inibitórios que suprimem antagonistas (inibição recíproca). Reflexos Vegetativos controlam funções viscerais.",
        "Memória e Processos Cognitivos": "Memória de trabalho (córtex pré-frontal), Memória de curto prazo (hipocampo para consolidação), Memória de longo prazo (córtex distribuído). Aprendizado não-associativo: habituação (diminuição resposta a estímulo repetido) e sensibilização (aumento da resposta). Aprendizado associativo: condicionamento clássico e operante. O córtex pré-frontal integra funções executivas: tomada de decisão, controle inibitório e planejamento.",
        "Controle Motor Hierárquico": "Nível mais alto: Córtex pré-motor e suplementar (planejamento). Nível médio: Córtex motor primário (execução), gânglios da base (seleção e iniciação) e cerebelo (coordenação e ajuste fino em tempo real). Lesão no cerebelo causa ataxia e dismetria. Nível mais baixo: circuitos medulares e tronco encefálico (reflexos e padrões rítmicos como marcha).",
        "Sistema Vestibular e Equilíbrio": "Ouvido interno: utrículo, sáculo (detectam aceleração linear) e canais semicirculares (detectam aceleração angular). A informação vestibular viaja pelo nervo VIII para núcleos vestibulares no tronco, que projetam para medula (reflexos posturais), cerebelo (coordenação) e córtex (percepção de movimento). Nistagmo é um reflexo vestíbulo-ocular.",
        "Neurotransmissores e Suas Vias": "Dopamina: via nigroestriatal (controle motor, degenera na Doença de Parkinson), via mesolímbica (recompensa). Serotonina: núcleos da rafe (humor, sono). Noradrenalina: locus coeruleus (vigilância, atenção). Acetilcolina: núcleo de Meynert (cognição, degenera no Alzheimer). Glutamato (principal excitatório) e GABA (principal inibitório)."
      }
    },
    {
      numero: "3", titulo: "Família PROP-1",
      conteudo: {
        "Fisiologia Hormonal e Recetores": "Hormônios hidrossolúveis (peptídeos, catecolaminas) atuam via receptores acoplados à proteína G (GPCRs) ou receptores tirosina quinase (ex: insulina). Os segundos mensageiros incluem cAMP, IP3/DAG e Ca2+. Hormônios lipossolúveis (esteroides, tireoidianos, vitamina D) difundem pela membrana e ligam-se a receptores intracelulares que atuam como fatores de transcrição, regulando a expressão gênica. A meia-vida hormonal varia: minutos (adrenalina) a dias (T4). O feedback negativo é a regra (ex: eixo HHT).",
        "Eixo Hipotálamo-Hipofisário": "Hipotálamo sintetiza hormônios liberadores (GnRH, CRH, TRH, GHRH) e inibidores (somatostatina, dopamina) que viajam pelo sistema porta-hipofisário. Adeno-hipófise (origem ectodermal de Rathke): células acidófilas (GH, prolactina), basófilas (TSH, FSH, LH, ACTH). Neuro-hipófise (extensão neural): armazena ADH (sintetizado nos núcleos supra-ópticos) e ocitocina (núcleos paraventriculares).",
        "GH e Defeito no Gene PROP1": "GH (somatotropina) é pulsátil, liberado à noite. Ações: promove crescimento via IGF-1 hepático (somatomedina C), lipólise, anti-insulinismo. O gene PROP-1 (Prophet of Pit-1) é um fator de transcrição necessário para o desenvolvimento das células da adeno-hipófise. Mutação leva a deficiência combinada de GH, TSH, FSH/LH, PRL e, por vezes, ACTH (pan-hipopituitarismo). Apresentação: nanismo proporcional, atraso puberal, mixedema, hipoglicemia. Tratamento: reposição hormonal.",
        "Glándulas Periféricas Fora do Eixo": "Tireoide: síntese de T3/T4 requer iodo e tireoglobulina; regulada por TSH. Paratireoides: PTH aumenta Ca2+ sérico (reabsorção óssea, reabsorção renal, ativa vitamina D). Pâncreas endócrino: Ilhotas de Langerhans; insulina (células β) promove captação de glicose e lipogênese; glucagon (células α) promove glicogenólise e gliconeogênese. Suprarrenais: Cortex (zona glomerulosa: aldosterona; fasciculada: cortisol; reticular: andrógenos) e Medula (adrenalina/noradrenalina).",
        "Regulação Endócrina do Cálcio": "Três hormônios principais: PTH (aumenta Ca2+), Calcitonina (baixa Ca2+, papel menor em humanos) e Calcitriol (Vitamina D ativa, promove absorção intestinal de Ca2+). O desequilíbrio causa hipocalcemia (tetania, sinal de Trousseau) ou hipercalcemia (fraqueza, cálculos renais).",
        "Ciclo Menstrual e Eixo HPG": "Eixo Hipotálamo-Hipófise-Gonadal. Fase folicular: FSH estimula folículos; estrogênio sobe. Pico de LH causa ovulação. Fase lútea: corpo lúteo secreta progesterona e estrogênio. Deficiência de FSH/LH no pan-hipopituitarismo causa amenorreia e infertilidade.",
        "Estresse e Eixo HHA": "Estímulo estressor ativa hipotálamo (CRH) -> hipófise (ACTH) -> suprarrenal (Cortisol). Cortisol: mobiliza substratos energéticos, anti-inflamatório, imunossupressor. A deficiência de ACTH leva à insuficiência suprarrenal secundária (fraqueza, hipotensão, hipoglicemia)."
      }
    },
    {
      numero: "4", titulo: "Caso Clínico de Doença Renal Crónica",
      conteudo: {
        "Anatomia do Néfron e Filtração": "Néfron: corpúsculo renal (glomérulo + cápsula de Bowman) + túbulo. Glomérulo: capilares fenestrados (barreira de tamanho), membrana basal com carga negativa (barreira de carga), podócitos (fendas de filtração com nefrina). Forças da Filtração: Pressão hidrostática glomerular (PG) favorável (~55 mmHg), contra Pressão coloidosmótica (πG ~30 mmHg) e Pressão hidrostática capsular (PB ~15 mmHg). TFG = Kf * (PG - πG - PB). A TFG normal é ~125 mL/min/1.73m².",
        "Processos Tubulares e Contracorrente": "Túbulo Contorcido Proximal (TCP): reabsorve ~65% do Na+, 100% da glicose (via SGLT2), aminoácidos, HCO3- (trocado por H+). Alça de Henle: ramo descendente fino (permeável a água, impermeável a solutos), ramo ascendente grosso (impermeável a água, reabsorve Na+, K+, Cl- via cotransportador NKCC2). O mecanismo de contracorrente multiplica o gradiente osmótico medular (de 300 a 1200 mOsm/kg).",
        "Sistema Renina-Angiotensina-Aldosterona (SRAA)": "Renina (células justaglomerulares) é libertada por: ↓ pressão de perfusão renal, ↓ [Na+] no TCP, ativação simpática. Angiotensina II: potente vasoconstrictor, estimula sede, libertação de aldosterona (reabsorção de Na+ e secreção de K+/H+ no TCD) e ADH. ECA localizada no endotélio pulmonar. Bloqueadores deste eixo (IECAs, BRAs) são pilares no tratamento da DRC e hipertensão.",
        "Equilíbrio Ácido-Base e Diuréticos": "Rim regula pH reabsorvendo HCO3- e excretando H+ (como H2PO4- ou NH4+). Na acidose tubular renal, há defeito nesta excreção. Diuréticos: Alça (Furosemida) bloqueia NKCC2, potente; Tiazídicos bloqueiam NCC no TCD; Poupa K+ (Espironolactona) bloqueia recetor mineralocorticoide; Osmóticos (Manitol). Na DRC, a perda de néfrons funcionais leva a acidose metabólica, hipercaliemia e hipertensão.",
        "Regulação do Líquido Extracelular e Edema": "O equilíbrio de Na+ determina o volume extracelular. Edema na DRC ocorre por: 1) retenção de Na+ (↓ TFG), 2) hipoalbuminemia (perda urinária de proteínas) que reduz a pressão coloidosmótica capilar, 3) ativação do SRAA. Manifesta-se como edema pedal, anasarca e derrames cavitários.",
        "Hipertensão Arterial e Nefroesclerose": "A hipertensão crônica, causa ou consequência da DRC, leva a nefroesclerose: espessamento da parede arteriolar (hialinose), isquemia glomerular e fibrose. A proteinúria é um marcador de dano glomerular e prognóstico de progressão da DRC.",
        "Estágios da DRC e Terapia Substitutiva": "Estadiado pela TFG (do CKD-EPI) e albuminúria. Estágio 5 (TFG <15): indica diálise (hemodiálise ou peritoneal) ou transplante renal. A diálise remove solutos tóxicos (ureia, K+) e corrige o equilíbrio ácido-base e de fluidos."
      }
    }
  ],

  // --- MÓDULO V: METABOLISMO E NUTRIÇÃO ---
  5: [
    {
      numero: "1", titulo: "Celina canta e seus males não espanta",
      conteudo: {
        "Fisiologia Gástrica e Refluxo": "O EEI é um esfíncter fisiológico (não anatómico) mantido tônico pelo nervo vago. O relaxamento transitório inadequado do EEI é a principal causa do refluxo. Estômago: células parietais bombeiam H+ para o lúmen via H+/K+ ATPase (bomba de protões), criando pH ~1-2. A secreção ácida é estimada por: fase cefálica (visão/cheiro, via vago), fase gástrica (distensão e peptídeos, via gastrina) e fase intestinal. A barreira mucosa (muco, bicarbonato, prostaglandinas) protege contra a autodigestão.",
        "Digestão e Absorção de Nutrientes": "Carboidratos: amilase salivar e pancreática hidrolisa amido em oligossacarídeos; enzimas de bordadura em escova (maltase, lactase, sacarase) produzem monossacarídeos (glicose, galactose, frutose) absorvidos por SGLT1 e GLUT5. Proteínas: pepsina (estômago), tripsina/quimotripsina (pâncreas) e peptidases da bordadura em escova produzem aminoácidos e di/tripeptídeos (absorvidos por cotransportadores). Lípidos: emulsificação por sais biliares; lipase pancreática (com colipase) forma monoglicerídeos e AG; micelas entregam-nos aos enterócitos, onde são reesterificados e incorporados em quilomícrons, entrando na linfa.",
        "Metabolismo Energético e Estados": "Estado Absortivo (4-6h pós-refeição): insulina alta, promove armazenamento (glicogênese hepática/muscular, lipogênese, síntese proteica). Estado Pós-absortivo/Jejum: glucagon e cortisol altos, promovem mobilização (glicogenólise hepática, gliconeogênese, lipólise). O cérebro consome ~120g de glicose/dia; em jejum prolongado, adapta-se a usar corpos cetónicos.",
        "Controle da Fome e Saciedade": "Centro no hipotálamo: núcleo arqueado. Sinalizadores orexigénicos: NPY, AgRP, Grelina (estômago). Sinalizadores anorexigénicos: POMN/CART, Leptina (adipócito), Insulina, PYY, GLP-1 e CCK (intestino). A leptina resistência é comum na obesidade. A cirurgia bariátrica (ex: bypass gástrico) aumenta GLP-1 e PYY, reduzindo apetite.",
        "Motilidade Gastrointestinal": "Controlada pelo SNE. Movimentos de mistura: segmentação no intestino delgado. Movimentos propulsivos: peristaltismo. O complexo motor migratório (MMC) ocorre no jejum, 'limpando' o intestino. A dismotilidade pode causar síndrome do intestino irritável (SII) ou gastroparesia.",
        "Microbiota Intestinal e Saúde": "Bactérias comensais (~10^14) fermentam fibras produzindo AGCC (ácidos gordos de cadeia curta) como butirato (fonte energética para colonócitos, anti-inflamatório). A disbiose (desequilíbrio) está associada a DII, obesidade, e até a doenças neurológicas. Probióticos e prebióticos modulam a microbiota.",
        "Vitaminas e Minerais Essenciais": "Hidrossolúveis (B, C): absorção passiva ou ativa, armazenamento limitado. Lipossolúveis (A, D, E, K): absorvidas com lípidos, armazenadas no fígado. Deficiências comuns: B12 (anemia megaloblástica, neuropatia), Ferro (anemia ferropriva), Vitamina D (raquitismo/osteomalacia)."
      }
    },
    {
      numero: "2", titulo: "Suboclusão duodenal com íleo paralítico",
      conteudo: {
        "Fisiologia Intestinal e Órgãos Anexos": "Duodeno: recebe quimo ácido, secreções pancreáticas (ricas em bicarbonato) e bile. A alça duodenojejunal (ângulo de Treitz) marca transição. Fígado: lobos funcionais (direito/esquerdo) definidos pelo fluxo portal; realiza detoxificação (citocromo P450), síntese proteica (albumina), armazenamento (glicogénio, vitaminas). Vesícula biliar concentra bile por absorção de água. Pâncreas exócrino: ácinos secretam zimogénios inativos (tripsinogénio ativado pela enterocinase).",
        "Patologia e Parasitologia": "Íleo Paralítico: cessação da motilidade intestinal por cirurgia, inflamação (peritonite), desequilíbrios eletrolíticos (hipocaliemia). Apresenta distensão abdominal, vómitos, ausência de ruídos hidroaéreos. *Strongyloides stercoralis*: ciclo pulmonar (L3) -> tosse/deglutição -> intestino (fêmeas partenogenéticas). A autoinfecção interna permite persistência por décadas. Hiperinfecção em imunocomprometidos (corticóides, HTLV-1) pode causar sépsis gram-negativa por translocação bacteriana.",
        "Farmacologia Gastrointestinal": "IBPs (Omeprazol): inibidores irreversíveis da bomba de protões; usados em úlcera péptica, RGE. Anti-H2 (Ranitidina): bloqueiam recetores H2 nas parietais. Antieméticos: antagonistas 5-HT3 (Ondansetrona), antagonistas D2 (Metoclopramida - também procinético), anti-histamínicos (Meclizina para cinetose). Laxantes: formadores de massa (psyllium), osmóticos (lactulose), lubrificantes (óleo mineral).",
        "Síndrome de Má Absorção": "Caracterizada por esteatorreia (fezes gordurosas, fétidas), perda ponderal, deficiências vitamínicas. Causas: doença celíaca (atrofia vilositária por glúten), pancreatite crônica (deficiência de lipase), supercrescimento bacteriano (consome B12, desconjuga sais biliares). Diagnóstico: teste de hidrogénio expirado, dosagem de elastase fecal, biópsia duodenal.",
        "Abdomen Agudo Cirúrgico": "Processo que requer avaliação cirúrgica urgente. Causas: apendicite, diverticulite, obstrução intestinal, úlcera perfurada. Sinais: dor localizada, defesa/rigidez abdominal, febre, leucocitose. A suboclusão duodenal pode ser por bridas, volvo ou tumor.",
        "Fisiopatologia da Diarreia": "Osmótica (substratos não absorvidos, ex: intolerância à lactose). Secretora (toxinas bacterianas, ex: cólera -> ativação de AMPc). Inflamatória (DII, infeções invasivas -> sangue/pus nas fezes). Exsudativa (perda de proteínas, ex: enteropatia perdedora de proteínas)."
      }
    },
    {
      numero: "3", titulo: "Processo Aterosclerótico",
      conteudo: {
        "Dinâmica das Lipoproteínas e Transporte": "Quilomícrons: transportam TG exógenos; contêm ApoB-48; são hidrolisados pela lipoproteína lipase (LPL) endotelial, gerando remanescentes. VLDL: transportam TG endógenos (ApoB-100); perdem TG para tecidos, convertendo-se em IDL e depois LDL. LDL: principal transportador de colesterol para tecidos; liga-se ao recetor LDL (via ApoB-100) e é internalizado por endocitose. Defeito no recetor LDL causa Hipercolesterolemia Familiar. HDL: sintetizada no fígado/intestino (ApoA-1); recolhe colesterol livre dos tecidos via transporte reverso, esterificando-o pela LCAT.",
        "Fisiopatologia da Aterosclerose": "Resposta à Lesão Endotelial (teoria de Ross): 1) Disfunção endotelial (tabagismo, hipertensão, LDL-ox) aumenta permeabilidade e expressão de moléculas de adesão (VCAM-1). 2) Infiltração de monócitos que se diferenciam em macrófagos, fagocitam LDL-ox via recetores scavenger (não regulados), tornando-se células espumosas. 3) Placa ateromatosa: núcleo lipídico necrótico coberto por capa fibrosa (músculo liso e colagénio). 4) Complicações: rutura da placa (expõe material trombogénico, causando trombose oclusiva e enfarte), hemorragia intraplaca, erosão.",
        "Metabolismo Proteico e Ciclo da Ureia": "Transaminação (transaminases) e Desaminação Oxidativa (glutamato desidrogenase) geram amónia (NH3). NH3 é tóxico, especialmente para o cérebro. O ciclo da ureia (Krebs-Henseleit) ocorre no fígado: NH3 + CO2 -> Carbamoil-fosfato (mitocôndria) -> Citrulina -> Argininosuccinato -> Arginina -> Ureia + Ornitina (citossol). Defeitos enzimáticos (ex: deficiência de Ornitina Transcarbamoilase) causam hiperamonémia e encefalopatia.",
        "Epigenética e Metabolismo Intermediário": "Nutrientes fornecem substratos para modificações epigenéticas: Metionina -> SAM (doador de metil para DNA/histonas). Acetil-CoA é doador de grupos acetil para histonas (ativação transcricional). A dieta materna pode programar epigeneticamente o risco de obesidade e diabetes na prole (hipótese de Barker). A obesidade gera um estado de inflamação crónica de baixo grau: adipócitos hipertrofiados libertam citocinas (TNF-α, IL-6) e quimiocinas que recrutam macrófagos M1, perpetuando a resistência à insulina e a disfunção endotelial.",
        "Marcadores de Risco Cardiovascular": "LDL-c: alvo principal. ApoB: reflete o número de partículas aterogénicas. hs-PCR (proteína C reativa de alta sensibilidade): marcador de inflamação. Lp(a): partícula semelhante ao LDL com Apo(a), geneticamente determinada, altamente trombogénica. Homocisteína elevada: fator de risco independente (requer folato, B6, B12 para metabolismo).",
        "Abordagem Terapêutica da Dislipidemia": "Mudança de estilo de vida (dieta, exercício). Estatinas: inibem HMG-CoA redutase (passo limitante da síntese de colesterol), aumentam expressão de recetores LDL. Ezetimiba: inibe absorção intestinal de colesterol. Inibidores de PCSK9 (anticorpos monoclonais): aumentam drasticamente a depuração de LDL. Fibratos: ativam PPAR-α, reduzem TG e aumentam HDL."
      }
    },
    {
      numero: "4", titulo: "Metabolismo em Jejum e Erros Inatos",
      conteudo: {
        "Respostas Metabólicas ao Jejum e Inanição": "Fase 1 (jejum curto, 4-24h): glicogenólise hepática mantém glicemia. Fase 2 (jejum prolongado, dias): gliconeogénese hepática e renal (de lactato, glicerol, alanina) torna-se dominante. Lipólise aumenta, fornecendo AG para oxidação e glicerol para gliconeogénese. Fase 3 (inanição, semanas): cetogénese hepática atinge pico (~150g/dia de corpos cetónicos); cérebro adapta-se, usando 60-70% de cetonas, reduzindo demanda de glicose e poupando proteína muscular. A perda de peso é inicialmente rápida (glicogênio + água), depois mais lenta.",
        "Regulação Hormonal Pancreática e Sensibilidade": "Células β: glucose entra via GLUT2, metabolizada, ↑ ATP/ADP fecha canais K+ sensíveis a ATP, despolarizando a membrana, abrindo canais de Ca2+ e libertando insulina. Insulina: ativa via PI3K/Akt (captação de glicose, síntese) e MAPK (crescimento). Resistência à insulina: defeito pós-recetor na sinalização, comum na obesidade (lipotoxicidade, inflamação). O exercício agudo aumenta a translocação de GLUT4 independentemente da insulina. O exercício extenuante prolongado eleva cortisol e pode causar resistência transitória.",
        "Erros Inatos do Metabolismo e Triagem Neonatal": "EIMs podem ser de: metabolismo de aminoácidos (PKU, doença da urina em xarope de bordo), ácidos orgânicos (acidemias metilmalónicas), ciclo da ureia, glicogenoses (tipo I - von Gierke), doenças de depósito lisossomal (Gaucher). O Teste do Pezinho (triagem bioquímica) comum inclui: TSH (hipotiroidismo congênito), 17-OHP (hiperplasia suprarrenal congênita), tripsina imunorreativa (fibrose cística), fenilalanina (PKU). O Teste da Bochechinha (triagem genética expandida) utiliza PCR e sequenciamento de nova geração para detetar variantes em painéis de genes.",
        "Clínica da Hipoglicemia e Diagnóstico Diferencial": "Hipoglicemia de jejum (orgânica): insulinoma, deficiência de contra-regulação (insuficiência suprarrenal), doenças hepáticas graves, erros inatos (deficiência de glicose-6-fosfatase). Hipoglicemia reativa (pós-prandial): dumping syndrome, hipoglicemia idiopática. Sintomas neuroglicopénicos (confusão, convulsão, coma) são mais graves. A Tríade de Whipple confirma hipoglicemia: sintomas + glicose baixa documentada + resolução com administração de glicose. Em emergências, administra-se glicose IV 50% ou glucagon IM.",
        "Cetose e Acidose Metabólica": "Cetose fisiológica (jejum) vs. Cetoacidose Diabética (CAD). Na CAD, a deficiência absoluta de insulina e excesso de glucagon levam à lipólise descontrolada, cetogénese maciça e acidose metabólica com anion gap elevado (β-hidroxibutirato, acetoacetato). Tratamento: fluidos, insulina, correção de eletrólitos.",
        "Abordagem Diagnóstica dos EIM": "Suspeita clínica: odor característico (urina em xarope de bordo), crises metabólicas desencadeadas por jejum ou proteínas, atraso do desenvolvimento, hepatomegalia. Testes: aminoácidos plasmáticos, ácidos orgânicos urinários, acilcarnitinas, enzimas específicas, análise molecular. Tratamento: restrição dietética do substrato tóxico, suplementação de cofatores, terapia de depleção (ex: benzoato de sódio para hiperamonémias)."
      }
    },
    {
      numero: "5", titulo: "Doença Hepática Gordurosa e Síndrome Metabólica",
      conteudo: {
        "Fisiopatologia da DHGNA e Esteato-hepatite": "Esteatose (acúmulo de TG) ocorre quando a entrada de AG no fígado (lipólise periférica + dieta) excede sua oxidação ou exportação como VLDL. A resistência à insulina é o motor central: promove lipólise no tecido adiposo visceral (via inibição da lipase sensível a hormonas) e aumenta a *de novo* lipogênese (DNL) no fígado. O 'segundo impacto' da NASH envolve: estresse do RE, produção de espécies reativas de oxigénio (ROS), ativação de vias inflamatórias (NF-κB, NLRP3 inflamassoma) e apoptose hepatocitária. A ativação das células estreladas hepáticas (HSCs) por TGF-β leva à fibrogênese e cirrose.",
        "Síndrome Metabólica e Dislipidemias": "Critérios (NCEP ATP III): ≥3 de: Obesidade abdominal (cintura >102cm M, >88cm F), TG ≥150 mg/dL, HDL <40 mg/dL M (<50 F), PA ≥130/85, Glicemia de jejum ≥100 mg/dL. A dislipidemia aterogénica da síndrome metabólica: TG elevados, HDL baixo, LDL pequeno e denso (mais oxidável), e aumento de remanescentes. A adiponectina (hormônio adiposo anti-inflamatório e sensibilizador de insulina) está diminuída.",
        "Metabolismo do Etanol e Toxicidade Hepática": "Via principal (citossol): ADH metaboliza etanol a acetaldeído, oxidando NAD+ a NADH. O alto NADH/NAD+ inibe a gluconeogénese (risco de hipoglicemia) e desvia o metabolismo do piruvato para lactato (acidose láctica). O acetaldeído, tóxico, é metabolizado pela aldeído desidrogenase (ALDH) a acetato. A via MEOS (CYP2E1) é indutível, gera ROS e consome NADPH. Toxicidade: acetaldeído forma adutos proteicos que danificam microtúbulos (corpos de Mallory), promovem peroxidação lipídica e ativam HSCs. Evolução: esteatose → esteato-hepatite alcoólica → fibrose → cirrose.",
        "Avaliação Laboratorial e Antropométrica do Fígado": "Testes de função hepática: ALT > AST na DHGNA; AST > ALT (razão >2) sugere hepatite alcoólica. Fosfatase alcalina e GGT elevadas indicam colestase ou indução enzimática (álcool, drogas). Albumina e tempo de protrombina refletem função sintética. Métodos de imagem: US (esteatose), elastografia transitória (FibroScan) avalia rigidez/fibrose. Biópsia hepática é padrão-ouro para estadiar fibrose e grau de esteato-hepatite.",
        "Papel do Intestino na DHGNA e SIBO": "O supercrescimento bacteriano do intestino delgado (SIBO) e a disbiose aumentam a produção de endotoxina (LPS). A LPS, via circulação porta, ativa células de Kupffer no fígado (recetores TLR4), libertando TNF-α e outras citocinas pró-inflamatórias, contribuindo para a inflamação hepática da NASH. A permeabilidade intestinal aumentada ('intestino gotejante') pode ser um fator perpetuador.",
        "Abordagem Terapêutica da DHGNA": "Perda de peso (5-10% do peso corporal reverte esteatose, >10% pode melhorar fibrose). Exercício físico, mesmo sem perda de peso, melhora sensibilidade à insulina. Farmacoterapia: Pioglitazona (sensibilizador de insulina), Vitamina E (antioxidante), agonistas do GLP-1 (Liraglutida, Semaglutida) promovem perda de peso. Em cirrose descompensada, avaliação para transplante hepático."
      }
    },
    {
      numero: "6", titulo: "Nosso segundo cérebro é o intestino",
      conteudo: {
        "Sistema Nervoso Entérico e Plexos": "O SNE contém ~100 milhões de neurônios, funcionando de forma autónoma. O Plexo Mientérico (de Auerbach) controla a motilidade: neurônios motores excitatórios (liberam ACh e Substância P) e inibitórios (liberam NO, VIP). Interneurônios coordenam os padrões. O Plexo Submucoso (de Meissner) regula secreção e fluxo sanguíneo. As células intersticiais de Cajal são os marcapassos intestinais, gerando ondas lentas de despolarização (potenciais elétricos lentos) que ditam a frequência das contrações.",
        "Eixo Intestino-Cérebro e Neuroquímica": "Comunicação via: 1) Nervo Vago (aferências sensitivas 80-90%). 2) Medula espinhal (vias simpáticas). 3) Via humoral (citocinas, hormonas). 4) Via microbiana (metabolitos bacterianos como AGCC). Serotonina intestinal (95% do total) é produzida pelas células enterocromafins (EC); atua localmente em recetores 5-HT4 (motilidade) e 5-HT3 (náusea). Dopamina, GABA e acetilcolina também são produzidos no intestino. Disbiose altera a produção destes neurotransmissores, impactando o humor e cognição.",
        "Impacto do Estresse e Síndrome de Adaptação Geral": "Fase de Alerta: ativação simpática (via locus coeruleus), libertação de adrenalina e CRH/ACTH/cortisol. Fase de Resistência: cortisol mantido elevado mobiliza energia, mas suprime imune e crescimento. Fase de Exaustão: depleção de catecolaminas, atrofia do timo, ulceras gástricas (por redução de prostaglandinas protetoras), falência adrenal. O estresse crónico altera a permeabilidade intestinal ('intestino gotejante') e a composição da microbiota.",
        "Emoções e Fisiologia Gastrointestinal": "Ansiedade ativa o eixo HHA e o sistema simpático, inibindo a motilidade (paralisando o SNE) e reduzindo o fluxo sanguíneo esplâncnico, podendo causar dor abdominal e constipação. Depressão pode estar associada a níveis reduzidos de serotonina periférica e central. O SII é um modelo de distúrbio da interação eixo-intestino-cérebro, com hipersensibilidade visceral e alteração da motilidade. Técnicas mente-corpo (terapia cognitivo-comportamental, hipnose) são efetivas no manejo.",
        "Microbiota e Saúde Mental": "O conceito de 'psicobióticos': probióticos (ex: *Lactobacillus*, *Bifidobacterium*) que, ao modular a microbiota, melhoram sintomas de ansiedade e depressão. Mecanismos: produção de AGCC (butirato tem efeitos neuroprotetores), modulação do triptofano (precursor da serotonina), redução da inflamação sistêmica.",
        "Motilidade Complexa e Reflexos Entéricos": "Reflexo Peristáltico: distensão ativa neurônios sensoriais → interneurônios ascendentes (liberam ACh/Substância P) causam contração proximal → interneurônios descendentes (liberam NO/VIP) causam relaxamento distal, propelindo o bolo. Reflexo Íleo-Cecal: alimento no íleo terminal relaxa a válvula ileocecal. Reflexo Gastro-Cólico: distensão gástrica estimula motilidade colónica (necessidade de defecação pós-refeição)."
      }
    }
  ],

  // --- MÓDULO VI: MECANISMO DE AGRESSÃO E DEFESA ---
  6: [
    {
      numero: "1", titulo: "Neutropenia e Inflamação",
      conteudo: {
        "Hematopoiese e Linhagens Celulares": "A célula-tronco hematopoiética (CD34+) diferencia-se em progenitores mieloides e linfoides sob influência de fatores de crescimento (ex: EPO para eritrócitos, TPO para plaquetas, G-CSF para neutrófilos). O rhG-CSF (Filgrastim) liga-se a recetores em progenitores mieloides, promovendo proliferação, diferenciação e libertação de neutrófilos da medula. Usado em quimioterapia, transplante de medula e neutropenia idiopática. A medula óssea também é um órgão linfoide primário.",
        "Fisiologia dos Neutrófilos e Neutropenia": "Neutrófilos marginais (aderidos ao endotélio) e circulantes. Vida curta (6-8h no sangue). Migração: rolamento (selectinas), adesão firme (integrinas como LFA-1 a ICAM-1), diapedese, quimiotaxia (para IL-8, C5a, LTB4). No foco: fagocitose (opsonização por IgG/C3b), formação do fagolisossomo, morte por explosão oxidativa (NADPH oxidase gera ânion superóxido, convertido em H2O2 e ácido hipocloroso) e libertação de grânulos (mieloperoxidase, defensinas, colagenase). Neutropenia <1500/µL, grave <500/µL. Causas: produção diminuída (quimioterapia, leucemia, deficiência de B12/folato), destruição aumentada (autoimune), sequestração.",
        "Inflamação Aguda e Sinais Cardinais": "Mediadores: Aminas Vasoativas (histamina de mastócitos/basófilos/plaquetas; serotonina de plaquetas). Cininas (bradicinina → dor, vasodilatação). Produtos do Complemento (C3a, C5a). Ácido Araquidónico: via ciclooxigenase (COX) → prostaglandinas (PGE2: dor/febre; PGI2: vasodilatação); via lipoxigenase → leucotrienos (LTB4: quimiotaxia; LTC4, LTD4: vasoconstrição, broncoconstrição). Citocinas (TNF-α, IL-1). Exsudato inflamatório: rico em proteínas, células e debris. A resolução envolve macrófagos que fagocitam neutrófilos apoptóticos.",
        "Inflamação Crónica e Reparo Tecido": "Células: Macrófagos (derivados de monócitos, ativados por IFN-γ para fenótipo M1 ou por IL-4/IL-13 para M2 reparador), Linfócitos (T e B), Plasmócitos (produzem Ac), Células gigantes (fusão de macrófagos). Granuloma: agrupamento de macrófagos epitelioides, cercado por linfócitos e fibroblastos; típico de TB, sarcoidose. Reparo: angiogênese (VEGF, FGF), fibrogênese (TGF-β ativa fibroblastos para produzir colagénio tipo III depois I). Cicatrização primária (ferida limpa suturada) vs. secundária (com perda tecidual e granulação).",
        "Febre e Resposta de Fase Aguda": "Pirógenos exógenos (LPS) estimulam macrófagos a libertar pirógenos endógenos (IL-1, IL-6, TNF-α). Estes atuam no hipotálamo anterior, elevando o ponto de ajuste termostático. Prostaglandina E2 (PGE2) é o mediador final. Resposta de fase aguda: proteínas de fase aguda produzidas pelo fígado (PCR, amiloide A sérico, fibrinogênio) sob influência de IL-6. A neutropenia grave pode atenuar a resposta febril.",
        "Morte Celular na Inflamação": "Necrose: morte não programada, liberta de conteúdos celulares (DAMPs) que perpetuam a inflamação. Apoptose: morte programada, células encolhem e são fagocitadas sem causar inflamação. Piroptose: morte celular inflamatória programada via inflamassoma, liberta IL-1β e IL-18. Netose: neutrófilos libertam redes extracelulares de DNA (NETs) contendo histonas e enzimas, para prender patógenos, mas podem danificar tecidos."
      }
    },
    {
      numero: "2", titulo: "Influenzas e Hipersensibilidade",
      conteudo: {
        "Virologia e Patogénese do Influenza": "Vírus Influenza A (mais variável) possui hemaglutinina (HA, para entrada) e neuraminidase (NA, para libertação). A 'tempestade de citocinas' é caracterizada por níveis extremamente elevados de IFN-γ, TNF-α, IL-6, que causam dano alveolar difuso (DAD), permeabilidade vascular aumentada e síndrome do desconforto respiratório agudo (SDRA). A citotoxicidade direta causa descamação do epitélio ciliado respiratório, expondo a membrana basal. Complicações bacterianas secundárias (ex: *S. pneumoniae*, *S. aureus*) são comuns.",
        "Imunidade Antiviral e Mecanismos Efetores": "Imunidade inata: células infectadas produzem IFN-α/β que induz estado antiviral em células vizinhas (ativa PKR, que inibe tradução viral). Células NK destroem células com baixa expressão de MHC I ('missing self') via balanço de recetores ativadores/inibidores. Imunidade adaptativa: Linfócitos T CD8+ citotóxicos reconhecem péptidos virais no MHC I e matam via perforinas/granzimas ou Fas/FasL. Linfócitos T CD4+ auxiliam na ativação de B (geração de Ac neutralizantes contra HA) e macrófagos. Memória imunológica é de longa duração para a mesma estirpe, mas a deriva antigénica ('drift') permite escape.",
        "Classificação das Reações de Hipersensibilidade": "Tipo I (Atópica/Alérgica): IgE específica ligada a mastócitos; re-exposição ao alérgeno causa degranulação (histamina, triptase, leucotrienos). Ex: anafilaxia, rinite alérgica, asma alérgica. Teste: prick test, IgE específica. Tipo II (Citotóxica): Ac IgG/IgM contra antígenos intrínsecos da célula ou matriz. Mecanismos: ativação do complemento (lise), opsonização, ADCC, interferência na função (ex: Ac anti-recetor). Ex: anemia hemolítica autoimune, doença de Graves (Ac estimulantes do TSH-R). Tipo III (Imunocomplexos): complexos depositados ativam complemento (C5a) recrutando neutrófilos que libertam enzimas líticas. Ex: doença do soro, lupus (glomerulonefrite), vasculite. Tipo IV (Tardia): mediada por células T CD4+ (Th1, Th17) ou CD8+. Ex: dermatite de contacto (nickel), tuberculina, doença celíaca, rejeição de enxerto.",
        "Citotoxidade Imune e Autoimunidade": "Citotoxicidade por CTLs é essencial para controlar vírus intracelulares e tumores. A regulação imune envolve células T reguladoras (Tregs FoxP3+), deleção clonal no timo e anergia periférica. A autoimunidade surge por quebra de tolerância: mimetismo molecular (estreptococo → cardite reumática), libertação de antígenos sequestrados, polimorfismos em genes HLA (ex: HLA-B27 na espondilite anquilosante). As doenças autoimunes são frequentemente sistémicas (lupus) ou órgão-específicas (tiroidite de Hashimoto).",
        "Imunopatologia das Infeções Virais": " Muitos danos são causados pela resposta imune, não pelo vírus. Ex: Hepatite B (CTLs destroem hepatócitos infectados), dengue (anticorpos não neutralizantes facilitam entrada em macrófagos - ADE), COVID-19 (tempestade de citocinas). Vacinas visam induzir imunidade protetora sem causar imunopatologia.",
        "Diagnóstico e Terapia das Alergias": "Diagnóstico: história clínica, testes cutâneos, IgE específica no soro (RAST). Tratamento: evitar alérgenos, anti-histamínicos H1 (Loratadina), corticosteroides (inalados/tópicos/sistémicos), antagonistas de leucotrienos (Montelucaste). Imunoterapia (vacinas para alergia): administração de doses crescentes do alérgeno para induzir tolerância e promover uma mudança de resposta para IgG4 bloqueadora e Tregs."
      }
    },
    {
      numero: "3", titulo: "Nocardiose e Tipos de Imunidade",
      conteudo: {
        "Patogénese da Nocardiose e Agentes Infecciosos": "*Nocardia* spp. são bactérias filamentosas, gram-positivas, fracamente BAAR (devido a ácidos micólicos na parede). São ubíquas no solo. A infeção pulmonar por inalação produz pneumonia necrotizante supurativa, frequentemente com formação de abcesso e tendência para disseminação hematogénica (25-30% para SNC, causando abcesso cerebral). A supuração (pus) é resultado da atração de neutrófilos, mas a bactéria é resistente à fagocitose (devido ao filamento e cord factor). Defesas do hospedeiro dependem de imunidade celular (macrófagos ativados por linfócitos T). Imunocomprometidos (transplantados, SIDA, uso crônico de corticosteroides) são os mais afetados.",
        "Classificação da Imunidade Adquirida Ativa e Passiva": "Ativa: exposição a antígeno → resposta imune lenta (dias/semanas) → produção de células de memória e imunidade duradoura (anos/vida). Passiva: transferência de anticorpos prontos → proteção imediata (horas) → imunidade temporária (semanas/meses) sem memória. Exemplos: Ativa Natural: sarampo. Ativa Artificial: vacina tríplice viral. Passiva Natural: IgG transplacentária, IgA no colostro. Passiva Artificial: soro antiofídico, imunoglobulinas para hepatite A ou raiva pós-exposição. A imunidade passiva pode interferir com a ativa (ex: vacinação em bebés com Ac maternos).",
        "Estratégias de Evasão Imunitária em Patógenos Complexos": "Bactérias: cápsula (impede fagocitose, ex: *S. pneumoniae*), variação antigénica (ex: *Neisseria gonorrhoeae*), produção de leucocidinas. Vírus: downregulation do MHC I (ex: CMV), interferência com IFN, latência (ex: HSV). Fungos: dimorfismo (levedura a 37°C, difícil de fagocitar), cápsula de polissacarídeo (ex: *Cryptococcus*). Protozoários: variação antigénica (ex: *Trypanosoma brucei* com VSG), invasão intracelular (ex: *Leishmania* em macrófagos). Helmintos: superfície anti-aderente, produção de enzimas que degradam anticorpos, indução de resposta Th2 (menos eficaz para grandes parasitas).",
        "Imunidade em Mamíferos e Importância do Colostro": "O colostro (primeiro leite) é rico em IgA secretora (proteção mucosa local), IgG, células imunes (linfócitos, macrófagos), fatores de crescimento e oligossacarídeos (prebióticos). Em espécies com placenta hemocorial (humano), a transferência passiva é principalmente transplacentária (IgG). Em ruminantes (placenta sindesmocorial), a transferência é exclusivamente via colostro. A falha na ingestão de colostro (agalactia, rejeição) leva à síndrome do bezerro/borreguero falhado, com infeções bacterianas graves e mortalidade elevada.",
        "Imunodeficiências Primárias e Secundárias": "Primárias (congênitas): defeitos genéticos em componentes do sistema imune. Ex: SCID (deficiência de ADA), Agamaglobulinemia de Bruton (defeito na tirosina quinase de Bruton, sem B), Síndrome de DiGeorge (ausência do timo, sem T). Secundárias (adquiridas): desnutrição (principal causa mundial), HIV (depleção de CD4+), quimioterapia, queimaduras extensas, diabetes. A Nocardiose é um marcador de imunodeficiência celular.",
        "Resposta Imune a Fungos": "Imunidade inata: reconhecimento por recetores TLR e lectinas tipo C (Dectin-1 para β-glucano). Fagocitose por neutrófilos e macrófagos. A imunidade Th1 e Th17 são protetoras. A imunidade Th2 pode ser deletéria (ex: cromoblastomicose). Deficiências na via IL-12/IFN-γ ou na via STAT3 (Síndrome de Job/HIES) predispõem a infeções fúngicas graves."
      }
    },
    {
      numero: "4", titulo: "Nada abala a confiança de Caio!",
      conteudo: {
        "Reparação vs Regeneração e Cicatrização": "Regeneração completa ocorre em tecidos lábeis (epitélios, medula óssea) e estáveis (fígado, pâncreas). Tecidos permanentes (neurônios, músculo cardíaco) apenas reparam por fibrose. Fases da cicatrização: 1) Hemostasia e inflamação (0-3 dias). 2) Proliferação (3-21 dias): tecido de granulação (fibroblastos, novos capilares), reepitelização, contração da ferida. 3) Remodelação (21 dias-2 anos): deposição e reorganização do colagénio (tipo III -> tipo I), ganho de força tensil. A nutrição (proteínas, vitamina C para hidroxilação do colagénio, Zn) é crucial.",
        "Hemostasia e Cascata de Coagulação": "Hemostasia primária: lesão endotelial → exposição do colagénio subendotelial → plaquetas aderem via GPIb a fator de von Willebrand (vWF) → ativação plaquetária (mudança de forma, libertação de grânulos) → agregação (ligação GPIIb/IIIa ao fibrinogénio) → tampão plaquetário inicial. Hemostasia secundária: cascata amplificada na superfície fosfolipídica das plaquetas ativadas. A trombina é a enzima central: converte fibrinogénio em fibrina, ativa fatores V, VIII, XI, XIII e agrega mais plaquetas. O anticoagulante natural antitrombina III inibe trombina e fator Xa (potenciado pela heparina).",
        "Sistema Complemento e Mecanismos Efetores": "Via clássica: iniciada por complexos Ag-Ac (IgG ou IgM). C1qrs cliva C4 e C2, formando C3 convertase (C4b2a). Via das lectinas: MBL liga-se a manose microbiana, ativando MASP-1/2 que clivam C4 e C2. Via alternativa: hidrólise espontânea de C3 (C3(H2O)) liga-se ao fator B, clivado pelo fator D, formando C3 convertase alternativa (C3bBb) que é estabilizada pela properdina. Amplificação: ambas as vias convergem na clivagem de C3 (ponto central), gerando C3b (opsonina) e C3a. C3b gera C5 convertase, clivando C5 em C5b (inicia MAC) e C5a (potente quimiotático). Regulação: Proteínas da membrana (DAF, CD59) protegem células próprias.",
        "Resposta Imune a Parasitas Helmintos e Protozoários": "Protozoários: resposta celular Th1 crucial. Ex: *Leishmania*: macrófagos ativados por IFN-γ produzem NO para matar o parasita intracelular. *Plasmodium*: resposta humoral (Ac neutralizantes contra esporozoítos e merozoítos) e celular (contra formas hepáticas). Helmintos: resposta Th2 dominante. IL-4 e IL-13 promovem produção de IgE por B, e diferenciamento de eosinófilos. IL-5 é o principal fator de crescimento e ativação de eosinófilos. IgE liga-se a recetores de alta afinidade (FcεRI) em mastócitos e eosinófilos. A degranulação de eosinófilos liberta proteína básica majoritária (MBP) e peroxidase, danificando o tegumento do verme. A resposta Th2 também aumenta motilidade intestinal, produção de muco e contração muscular para expulsar o parasita.",
        "Trombose e Tromboembolismo": "Trombose é coagulação patológica in vivo. Tríade de Virchow: 1) Estase (imobilização, ICC), 2) Lesão endotelial (aterosclerose, tabaco), 3) Hipercoagulabilidade (mutação do fator V Leiden, défice de proteína C/S). Trombo vs. Coágulo pós-morte. Embolia: deslocação do trombo; pulmonar (TVP) ou sistémica (FA → AVC embólico).",
        "Imunidade Mucosa e Sistema MALT": "Sistema Imunitário das Mucosas Associado ao Tecido Linfoide (MALT). Inclui GALT (intestino), BALT (brônquios), tonsilas. Caracterizado pela produção de IgA secretora (dímero com componente secretório) que neutraliza patógenos no lúmen sem causar inflamação. As células M (células microdobradas) no epitélio sobre as placas de Peyer transportam antígenos para as células dendríticas, iniciando resposta imune mucosa. A tolerância oral é um mecanismo de supressão da resposta a antígenos alimentares."
      }
    }
  ],

  // --- ASE 7: CONCEPÇÃO E GESTAÇÃO ---
  7: [
    {
      numero: "1", titulo: "Navegando pelas Escolhas",
      conteudo: {
        "Controle Hormonal": "O ciclo menstrual feminino é regulado pelo eixo hipotálamo-hipófise-ovariano. O hipotálamo secreta o GnRH de forma pulsátil, estimulando a hipófise anterior a liberar FSH e LH. A fase folicular (1º-14º dia) é marcada pelo FSH promovendo crescimento folicular e estrogênio preparando o útero. O pico de LH causa a ovulação no 14º dia. A fase lútea (14º-28º dia) é estável devido à progesterona do corpo lúteo.",
        "Planejamento Familiar": "Garantido pela Lei nº 9.263/96, baseia-se na autonomia reprodutiva e acesso à informação. Na Atenção Primária, envolve aconselhamento individualizado e oferta de múltiplos métodos contraceptivos, avaliando história clínica e preferências pessoais.",
        "Métodos Contraceptivos": "Hormonais: Pílulas combinadas (estrogênio+progestágeno), minipílulas (lactantes), injetáveis e implantes (subcutâneo 3 anos). Barreira: Preservativos (únicos que previnem ISTs), diafragma e espermicidas. DIUs: Cobre (10 anos, inflamatório local) e Hormonal (5 anos, levonorgestrel). Definitivos: Laqueadura e Vasectomia (Lei 14.443/2022). Emergência: Pílula do dia seguinte (levonorgestrel 1,5mg) até 72h.",
        "Infecções Sexualmente Transmissíveis (ISTs)": "Sífilis (Treponema pallidum): tratada com Penicilina Benzatina; fases primária, secundária e terciária. HIV: diagnóstico por testes rápidos e ELISA; prevenção via PEP e PrEP. HPV: vacinação e rastreio via Papanicolau para prevenir câncer cervical. Clamídia e Gonorreia: causas frequentes de corrimento e infertilidade."
      }
    },
    {
      numero: "2", titulo: "Superando uma Perda",
      conteudo: {
        "Fertilização": "Envolve capacitação espermática no trato feminino, reação acrossômica (enzimas hialuronidase/acrosina) para penetrar a zona pelúcida e fusão de gametas que dispara a reação cortical impedindo poliespermia. O zigoto diploide inicia clivagens 30h após fertilização.",
        "Embriogênese": "Etapas: Clivagem (mórula), Blastocisto (5º dia) e Implantação (6º-7º dia). Na 3ª semana ocorre a Gastrulação formando Ectoderme (SN/Epiderme), Mesoderme (Músculos/Ossos/Coração) e Endoderme (GI/Respiratório). A Neurulação forma o tubo neural entre 4ª-5ª semana. Período crítico de organogênese (4ª-8ª semana).",
        "Abortamento": "Interrupção antes de 20-22 semanas ou <500g. Classificações: Ameaça (colo fechado), Inevitável (sangramento+dilatação), Completo, Incompleto (restos ovulares - requer AMIU/Curetagem), Retido (óbito sem expulsão) e Infectado (febre+sepse). Causas: 50-60% anomalias cromossômicas.",
        "Teratogênese": "Agentes ambientais causam danos estruturais permanentes. Organogênese é o período de maior vulnerabilidade. Teratógenos: Álcool (Síndrome Alcoólica Fetal), Isotretinoína (malformações graves), Ácido Valproico (tubo neural) e o grupo STORCH+Z (Sífilis, Toxoplasmose, Rubéola, CMV, Herpes, HIV, Zika). Prevenção: Ácido fólico 400mcg/dia."
      }
    },
    {
      numero: "3", titulo: "Preparando para Gerar uma Nova Vida",
      conteudo: {
        "Assistência Pré-Natal": "Mínimo 6 consultas. Suplementação obrigatória de Ferro (40mg/dia) e Ácido Fólico (5mg/dia até 14 sem). Exames do 1º tri: Hemograma, Tipagem, Glicemia, VDRL, HIV, Urina, USG. 2º tri: Teste de Tolerância à Glicose (24-28 sem). 3º tri: Cultura de Estreptococo B.",
        "Alterações Fisiológicas da Gestação": "Cardiovasculares: aumento volemia 50% e débito cardíaco 40%. Respiratórias: hiperventilação compensada por alcalose. Renais: hidronefrose fisiológica e aumento TFG. Gastrointestinais: pirose (relaxamento EEI) e náuseas (hCG). Metabólicas: resistência insulínica progressiva.",
        "Idade Gestacional e Risco": "Naegele (DPP = DUM + 7 dias - 3 meses). USG de 1º trimestre é o mais preciso. Fatores de risco: idade extremos (<15 ou >35), doenças crônicas (HAS/DM), multiparidade e histórico de pré-eclâmpsia.",
        "Tipos de Parto": "Vaginal é a via preferencial. Cesariana indicada para desproporção cefalopélvica, sofrimento fetal, placenta prévia e herpes genital ativo. A humanização exige respeito à autonomia e contato pele-a-pele imediato."
      }
    },
    {
      numero: "4", titulo: "Chegando ao Mundo na Correria",
      conteudo: {
        "Estática Fetal": "Atitude (flexão habitual), Situação (longitudinal/transversa), Apresentação (cefálica 95%) e Posição (relação dorso com lado materno). A variedade de posição define o ponto de referência (ex: OEA - occipito-esquerda-anterior).",
        "Mecanismo do Parto Vaginal": "1. Insinuação (passagem pelo estreito superior); 2. Descida (planos de De Lee); 3. Rotação Interna (alinhamento anteroposterior); 4. Deflexão (saída da cabeça usando o púbis como hipomóclio); 5. Rotação Externa (restituição) e Desprendimento das espáduas.",
        "Fases Clínicas do Trabalho de Parto": "1º Período: Dilatação (fase latente até 5cm; fase ativa >6cm). 2º Período: Expulsivo (puxos espontâneos). 3º Período: Dequitação placentária (Mecanismos Baudelocque-Schultze ou Duncan). 4º Período: Greenberg (1ª hora pós-parto, vigilância intensa da hemostasia).",
        "Distocias e Bacia": "Bacia Ginecoide é a ideal. Distocias dinâmicas (contratilidade) requerem ocitocina. Distocias mecânicas (desproporção) indicam cesárea. Hemostasia pós-parto depende do miotamponamento (Ligaduras de Pinard) e trombotamponamento."
      }
    },
    {
      numero: "5", titulo: "Hora da Prova",
      conteudo: {
        "Fisiologia do Puerpério": "Involução uterina (1cm/dia, intrapélvico no 10º dia). Lóquios: Rubra (1-3 dias), Fuscus (4-10 dias) e Alba (pós-10 dias). Apojadura (descida do leite) entre 2º-5º dia. Amamentação exclusiva causa amenorreia lactacional (método LAM).",
        "Hemorragia Pós-Parto (HPP)": "Perda >500ml vaginal ou >1000ml cesárea. Regra dos 4 Ts: Tônus (Atonia uterina 70% - tratar com massagem e ocitocina), Trauma (Lacerações), Tecido (Retenção placentária) e Trombina (Coagulopatias).",
        "Saúde Mental Puerperal": "Blues Puerperal: labilidade leve, choro fácil, 50-85%, autolimitado (2 semanas). Depressão Pós-Parto: anedonia, culpa, anseios graves, pico 4-6 semanas. Psicose Puerperal: emergência psiquiátrica com confusão e risco de infanticídio.",
        "Mortalidade Materna e Complicações": "Óbito até 42 dias pós-parto. Causas diretas: Hipertensão (Eclâmpsia) e Hemorragia. Causas indiretas: Cardiopatias. Near Miss: sobrevida a complicação grave. Endometrite e Mastite são infecções comuns tratadas com antibióticos específicos."
      }
    }
  ],

  // --- ASE 8: CRESCIMENTO E DESENVOLVIMENTO INFANTIL ---
  8: [
    {
      numero: "1", titulo: "Segurança do Paciente ao Nascer",
      conteudo: {
        "Reanimação Neonatal": "Fluxograma SBP para RN ≥34 sem. Minuto de Ouro: estabelecer ventilação efetiva. Passos: Aquecer, Posicionar, Aspirar (se obstruído) e Secar. VPP se FC <100bpm ou apneia em ar ambiente inicialmente. Massagem cardíaca (3:1) se FC <60bpm após VPP adequada.",
        "Anamnese e Boletim APGAR": "Dados obstétricos (sorologias, RPMO >18h, corioamnionite) antecipam riscos. APGAR avalia 1º e 5º min (FC, respiração, tônus, reflexo, cor). Não determina início de reanimação, mas sim resposta às manobras.",
        "Profilaxias e Vacinas": "Vitamina K (1mg IM) previne doença hemorrágica. Profilaxia ocular (Nitrato Prata 1% ou Eritromicina) previne oftalmia gonocócica. Vacinas: Hep B (<12h) e BCG (>2kg).",
        "Triagem Neonatal": "Teste do Pezinho (48h-5 dias) detecta fenilcetonúria, hipotiroidismo, anemia falciforme, etc. Teste da Orelhinha (audição), Olhinho (catarata), Coraçãozinho (oximetria pré/pós-ductal) e Linguinha (frênulo)."
      }
    },
    {
      numero: "3", titulo: "Crescendo com Saúde",
      conteudo: {
        "Crescimento e Antropometria": "Crescimento é quantitativo; Desenvolvimento é qualitativo. Peso dobra aos 4-5 meses, triplica aos 12 meses. Estatura cresce 25cm no 1º ano. Perímetro Cefálico reflete crescimento cerebral (micro/macrocefalia). Curvas OMS (escore-z e percentis).",
        "Marcos do Desenvolvimento": "2 meses: sorriso social. 6 meses: senta momentaneamente. 9 meses: pinça inferior e estranha desconhecidos. 12 meses: anda com apoio e fala 'mama/papa' com significado. Sinais de alerta: perda de habilidades em qualquer idade.",
        "Puericultura e Orientações": "Calendário de consultas sistemáticas. Orientações sobre sono seguro (decúbito dorsal), prevenção de acidentes e introdução alimentar pós-6 meses. Suplementação de Ferro (3-24m) e Vitamina D (0-18m).",
        "Imunização e Nutrição": "Calendário PNI: Penta, VIP, Pneumo, Rota, Meningo. Aleitamento exclusivo até 6 meses. Desnutrição (Estatura/Idade <-2DP) vs Obesidade (IMC/Idade >+2DP). Anemia ferropriva é a carência mais comum (pico 6-24m)."
      }
    },
    {
      numero: "4", titulo: "Peculiaridades do Desenvolvimento",
      conteudo: {
        "Marcos aos 3 Anos": "Motor: pedala triciclo, sobe escadas alternando pés. Cognitivo: pensamento simbólico (faz-de-conta). Linguagem: frases de 3-5 palavras, 'por quês'. Social: brincadeira associativa e afirmação da autonomia ('eu sozinho!').",
        "Estatuto da Criança e do Adolescente (ECA)": "Doutrina da Proteção Integral e Prioridade Absoluta. Notificação Compulsória de maus-tratos é obrigatória para profissionais de saúde (Suspeita fundamentada basta). Rede de proteção: Conselho Tutelar, MP e Judiciário.",
        "SINASE e Medidas Socioeducativas": "Lei 12.594/2012. Medidas para adolescentes: Advertência, Prestação de Serviços, Liberdade Assistida, Semiliberdade e Internação (máximo 3 anos). Enfoque pedagógico e ressocializador.",
        "Alienação Parental": "Lei 12.318/2010. Interferência na formação psicológica para repudiar genitor. Causa ansiedade, depressão e problemas de identidade. Papel do pediatra: identificação precoce e acolhimento."
      }
    },
    {
      numero: "5", titulo: "Mais um 5 pra Ele",
      conteudo: {
        "Fisiopatologia da Obesidade Infantil": "Tecido adiposo como órgão endócrino ativo. Inflamação crônica de baixo grau e resistência à insulina (Acantose nigricans). Risco cardiovascular precoce, esteatose hepática e apneia do sono.",
        "Indicadores de Crescimento": "Velocidade de crescimento é crucial (cm/ano). Alvo genético (Média pais +/- 6,5cm). Baixa estatura: investigar se velocidade <4cm/ano ou cruzamento descendente de percentis.",
        "Causas Hormonais e Medicamentosas": "Endocrinopatias raras: Hipotireoidismo (baixa velocidade linear), Snd. Cushing (obesidade centrípeta+estrias), Deficiência de GH e Prader-Willi (hiperfagia extrema). Medicamentos: Corticoides e Antipsicóticos atípicos.",
        "Tratamento e Prevenção": "Mudança de estilo de vida familiar. 60 min atividade física/dia. Limitar telas (<2h escolares). Farmacoterapia (Orlistat/Liraglutida) reservada para casos graves refratários em adolescentes."
      }
    },
    {
      numero: "6", titulo: "Mudanças na Puberdade",
      conteudo: {
        "Fisiologia da Puberdade": "Ativação do eixo HPG (GnRH/LH/FSH). Adrenarca (andrógenos adrenais) causa pubarca e odor. Estadiamento de Tanner: M2 (Telarca) marca início feminino; G2 (Aumento testicular >4ml) marca início masculino.",
        "Estirão Puberal": "Pico 12 anos (F) e 14 anos (M). Ganho médio 20-30cm. Esteroides sexuais promovem crescimento inicial e posterior fusão epifisária (estrogênio é o principal fechador de epífises).",
        "Aspectos Psicossociais": "Desbalanço entre sistema límbico (emoções) e córtex pré-frontal (controle). Vulnerabilidade a transtornos alimentares (Anorexia/Bulimia), depressão e comportamentos de risco (álcool/drogas).",
        "Abordagem Clínica": "Acolhimento confidencial, exame físico respeitoso e rastreio de saúde mental (PHQ-A/GAD-7). Orientação sobre sexualidade, consentimento e ISTs."
      }
    }
  ],

  // --- ASE 9: VIDA ADULTA E ENVELHECIMENTO ---
  9: [
    {
      numero: "1", titulo: "Caminhos do Tempo",
      conteudo: {
        "Senescência vs Senilidade": "Senescência: envelhecimento fisiológico com redução de reserva funcional mas autonomia mantida. Senilidade: envelhecimento patológico por doenças crônicas (HAS/DM/Demência) gerando dependência funcional.",
        "Alterações Endócrinas": "Menopausa: falência folicular, queda de estrogênio, sintomas vasomotores e risco ósseo. DAEM (Andropausa): queda gradual de testosterona, perda de massa muscular (sarcopenia) e queda de libido.",
        "Nutrição no Idoso": "Hipogeusia (paladar) e hiposmia (olfato). Redução de sede (risco desidratação). Necessidade proteica aumentada (1,0-1,2 g/kg/dia) para evitar sarcopenia. Suplementação de Cálcio e Vitamina D.",
        "Teorias do Envelhecimento": "Estocásticas: Radicais livres e glicação (AGEs). Programadas: Encurtamento de telômeros (Limite de Hayflick) e imunossenescência (Inflammaging). Estatuto do Idoso (Lei 10.741/2003) garante direitos e proteção."
      }
    },
    {
      numero: "2", titulo: "Impactos do Envelhecimento",
      conteudo: {
        "Neurobiologia": "Atrofia cerebral seletiva e leucoaraiose. Alzheimer: acúmulo de Beta-amiloide e proteína Tau. Parkinson: degeneração dopaminérgica e corpos de Lewy. Rastreio cognitivo via MEEM, MoCA e Teste do Relógio.",
        "Sarcopenia": "Perda de força (handgrip) e massa muscular. Critérios EWGSOP2. Manejo via treinamento resistido (musculação) e aporte proteico adequado. Aumenta risco de quedas e hospitalização.",
        "Osteoporose": "Deterioração da microarquitetura óssea. Diagnóstico via Densitometria (T-score <= -2.5). Fraturas de quadril têm alta mortalidade. Tratamento com bisfosfonatos e prevenção de quedas.",
        "Envelhecimento Cognitivo": "Esquecimento fisiológico (lentificação) vs Patológico (Demência). Comprometimento Cognitivo Leve (CCL) é transicional com 10-15% conversão anual para demência."
      }
    },
    {
      numero: "3", titulo: "Entre Jardins e Cuidados",
      conteudo: {
        "Fisiologia Renal": "Queda de 1ml/min/ano da TFG pós-40 anos. Creatinina pode ser normal mesmo com função reduzida. Risco de toxicidade por AINES (nefrotoxicidade e úlceras) e necessidade de ajuste de drogas de eliminação renal.",
        "Síndromes Geriátricas": "As 5 Is: Instabilidade/Quedas (TUG test), Incontinência urinária, Imobilidade, Insuficiência Cognitiva e Iatrogenia. Quedas são marcadores de fragilidade.",
        "Avaliação Geriátrica Ampla (AGA)": "Multidimensional. Avalia funcionalidade (Índices Katz e Lawton), cognição, humor, estado nutricional e rede social. Prioriza a função sobre o diagnóstico.",
        "Polifarmácia e Iatrogenia": "Uso de >=5 medicamentos. Alterações farmacocinéticas (menor depuração). Critérios de Beers identificam medicamentos inapropriados (ex: benzodiazepínicos). Desprescrição é estratégia vital."
      }
    },
    {
      numero: "4", titulo: "Manutenção da Saúde no Idoso",
      conteudo: {
        "Prevenção e Imunização": "Humanização no atendimento para combater o etarismo. Vacinas essenciais: Influenza (anual), Pneumocócica (VPC13/VPP23), Herpes Zoster e dT. Exercício físico multicomponente (aeróbico+força+equilíbrio).",
        "Prevenção de AVE": "HAS é o fator mais importante. Controle de FA (CHA2DS2-VASc para anticoagulação). Escala SAMU para reconhecimento precoce (Tempo é cérebro).",
        "Prevenção de Quedas": "Adequação ambiental (remover tapetes, melhorar iluminação). Revisão de psicotrópicos. Suplementação de Vitamina D se deficiente. Tai Chi Chuan melhora o equilíbrio."
      }
    },
    {
      numero: "5", titulo: "Dilemas Éticos",
      conteudo: {
        "Terminalidade": "Ortotanásia (respeito à morte natural) vs Eutanásia (ativa) vs Distanásia (obstinação inútil). Cuidados Paliativos focam no alívio do sofrimento total (físico, psíquico e espiritual).",
        "Bioética e DAV": "Diretivas Antecipadas de Vontade (Testamento Vital). Proporcionalidade terapêutica em pacientes terminais. Decisão compartilhada entre equipe, paciente e família."
      }
    }
  ],

  // --- MÓDULO 10: PERCEPÇÃO, CONSCIÊNCIA E EMOÇÕES ---
  10: [
    {
      numero: "1", titulo: "Sistemas Somatossensoriais e Dor",
      conteudo: {
        "Recetores e Fibras": "A transdução converte energia física em sinais elétricos. Mecanorrecetores (Meissner, Merkel, Pacini, Ruffini). Fibras Aβ (tato), Aδ (dor rápida) e Fibras C (dor lenta/crónica). Canais TRPV1 na nocicepção.",
        "Vias Ascendentes": "Via DCML (tato fino e proprioceção): decussação no bolbo. Via Espinotalâmica (dor e temperatura): decussação imediata na medula. Convergência no Núcleo Ventral Posterior do Tálamo e Córtex Primário (Homúnculo).",
        "Modulação da Dor": "Anestésicos locais bloqueiam canais de Na+. Teoria da Comporta: ativação de fibras Aβ inibe nocicepção na medula. Modulação descendente via PAG e núcleos da rafe usando opioides endógenos (encefalinas)."
      }
    },
    {
      numero: "2", titulo: "Controlo Espinal do Movimento",
      conteudo: {
        "Unidade Motora": "Neurónio motor alfa e fibras musculares. Coativação Alfa-Gama mantém sensibilidade do fuso durante contração. Junção Neuromuscular usa Acetilcolina em recetores nicotínicos.",
        "Reflexos Medulares": "Miotático (fusos, monossináptico) para tônus. Miotático Inverso (Golgi, polissináptico) para proteção. Trato corticoespinhal (piramidal) executa movimento fino.",
        "Neuropatia Diabética": "Hiperglicemia ativa via do poliol (sorbitol) gerando estresse oxidativo, edema axonal e desmielinização. Manifesta-se como parestesia em 'bota e luva'."
      }
    },
    {
      numero: "3", titulo: "Sistema Visual",
      conteudo: {
        "Fototransdução": "Corrente de escuro: altos níveis de cGMP mantêm Na+ aberto. Luz ativa Rodopsina -> PDE degrada cGMP -> Hiperpolarização. Processamento por células bipolares e ganglionares.",
        "Organização Retiniana": "Inibição lateral realça contrastes. Cones (cores, fóvea) e Bastonetes (sensibilidade, periferia). Vias: Ventral (Temporal, 'O Quê') e Dorsal (Parietal, 'Onde').",
        "Perceção de Cor": "Teoria Tricromática e Teoria dos Processos Oponentes (Vermelho vs Verde). Explica pós-imagens negativas por fadiga de canais."
      }
    },
    {
      numero: "4", titulo: "Sistemas Auditivo e Vestibular",
      conteudo: {
        "Mecânica Coclear": "Endolinfa rica em K+ (+80mV). Deflexão dos estereocílios abre canais mecanosensíveis. Tonotopia: base (agudos), ápice (graves). Prestina permite eletromotilidade das células ciliadas externas.",
        "Sistema Vestibular": "Canais semicirculares (aceleração angular) e Utriculo/Sáculo (linear). Reflexo Vestíbulo-Ocular (RVO) estabiliza imagem na fóvea durante movimento da cabeça.",
        "Localização Sonora": "Complexo Olivar Superior usa ITD (tempo) para baixas frequências e IID (intensidade) para altas frequências. Integração no Colículo Inferior."
      }
    },
    {
      numero: "5", titulo: "Sentidos Químicos",
      conteudo: {
        "Gustação e Olfação": "Salgado/Azedo (canais iônicos) vs Doce/Umami/Amargo (GPCR). Olfação: glomérulos no bulbo olfativo; único sentido que acede ao córtex (piriforme) sem filtragem talâmica.",
        "Integração Límbica": "Efeito Proust: cheiros disparam memórias emocionais intensas via Amígdala e Hipocampo. Sabor integra gustação, retro-olfamação e textura (Nervo Trigémeo)."
      }
    },
    {
      numero: "6", titulo: "Ciclo Sono-Vigília",
      conteudo: {
        "Regulação Circadiana": "Núcleo Supraquiasmático (NSQ) sincronizado pela luz (melanopsina). Pineal libera Melatonina. Adenosina aumenta pressão do sono.",
        "Arquitetura do Sono": "Modelo Flip-Flop (VLPO inibe alerta via GABA). Sono N3 (ondas lentas) limpa beta-amiloide (Sistema Glinfático). Sono REM consolida memória emocional.",
        "Emoções": "Amígdala (ameaças) vs Córtex Pré-Frontal (inibição). Desequilíbrio sob estresse crônico causa burnout e ansiedade patológica."
      }
    }
  ],

  // --- MÓDULO 11: FEBRE, INFLAMAÇÃO E INFECÇÃO ---
  11: [
    {
      numero: "1", titulo: "Hipertermia e Febre",
      conteudo: {
        "Fisiopatologia da Febre": "Pirogénios (LPS) -> citocinas (IL-1/IL-6) -> COX-2 no hipotálamo -> PGE2 aumenta set-point. Respostas: vasoconstrição e calafrios. Antipiréticos inibem a COX.",
        "Hipertermia": "Set-point normal, mas dissipação falha (ex: insolação). Não responde a antipiréticos. Causa desnaturação proteica e aumento drástico da taxa metabólica basal.",
        "Convulsão Febril": "Comum em crianças (6m-5a) por imaturidade de mielinização. Superantigénios e citocinas baixam o limiar convulsivo. Aspirina contraindicada (Síndrome de Reye)."
      }
    },
    {
      numero: "2", titulo: "Inflamação e Imunossupressão",
      conteudo: {
        "Inflamação Aguda": "Eventos vasculares (histamina/NO) e recrutamento leucocitário (selectinas/integrinas). Ácido araquidónico: via COX (prostaglandinas) e via LOX (leucotrienos).",
        "Farmacologia": "Corticosteroides (Prednisona) inibem NF-κB e fosfolipase A2. Terapias biológicas bloqueiam citocinas específicas. Uso crônico inibe o eixo HPA.",
        "Imunossupressão": "Compromete vigilância, permitindo reativação de patógenos latentes (Herpes/TB). Neutropenia mascara sinais clássicos (formação de pus)."
      }
    },
    {
      numero: "3", titulo: "Sepsis e Choque Séptico",
      conteudo: {
        "Definição Sepsis-3": "Sepsis: disfunção orgânica (Score SOFA >= 2). Choque: hipotensão persistente + lactato > 2 mmol/L. Lactato é marcador de hipóxia tecidual.",
        "Fisiopatologia": "LPS ativa TLR4. Superantigénios ativam 20% dos linfócitos T causando tempestade de citocinas. Disfunção endotelial e CIVD (microtrombos e hemorragia por consumo).",
        "Vigilância": "Lista de Notificação Compulsória (LNC). Planeamento em saúde foca em protocolos 'Surviving Sepsis' e vacinação preventiva."
      }
    },
    {
      numero: "4", titulo: "Virologia e Carcinogénese",
      conteudo: {
        "HIV e Hepatites": "HIV liga-se ao CD4 via gp120. Terapia HAART usa inibidores de transcriptase, integrase e protease. Hepatites B/C causam inflamação crônica gerando Carcinoma Hepatocelular.",
        "AIDS": "Transição com CD4 < 200/mm³. Perda de coordenação Th1/Th2. Neoplasias oportunistas como Sarcoma de Kaposi (HHV8)."
      }
    },
    {
      numero: "5", titulo: "Parasitoses Graves",
      conteudo: {
        "Patogenia": "E. histolytica causa úlceras em 'botão de camisa' e abscesso hepático. Ascaris faz ciclo pulmonar (Síndrome de Löffler). Aglomeração de vermes causa obstrução mecânica.",
        "Imunidade": "MALT protege mucosas via IgA secretora. Resposta contra helmintos é Th2 (IgE, Eosinófilos, IL-5). Parasitas usam mimetismo e tolerância imune (IL-10/TGF-β) para sobreviver.",
        "Impacto Pediátrico": "Infecções crônicas causam anemia, hipoalbuminemia e défice estatural (stunting). Requer abordagem de 'Saúde Única'."
      }
    }
  ],

  // --- MÓDULO 12: HEMATOLOGIA E NUTRIÇÃO ---
  12: [
    {
      numero: "1", titulo: "Anemia Megaloblástica",
      conteudo: {
        "Metabolismo B12 e B9": "B12 requer Proteína R, Fator Intrínseco e absorção no íleo terminal. Folato (B9) no jejuno. Carência de B12 causa 'aprisionamento de folato' e danos neurológicos por acúmulo de metilmalonil-CoA.",
        "Fisiopatologia": "Defeito na síntese de DNA com RNA preservado (assincronia núcleo-citoplasma). Hemograma: macrocitose (VCM > 100), neutrófilos hipersegmentados e ovalócitos. Hemólise intramedular.",
        "Vascular": "Homocisteína elevada é fator de risco independente para eventos vasculares (estresse oxidativo endotelial). Vitamina B6 atua na via da transulfuração."
      }
    },
    {
      numero: "2", titulo: "Anemia Ferropénica e Doença Celíaca",
      conteudo: {
        "Metabolismo do Ferro": "Absorção no duodeno (DMT1), regulada pela Hepcidina. Depleção: queda de ferritina -> queda ferro -> anemia microcítica e hipocrómica. Clínica: glossite, queilite e pica.",
        "Doença Celíaca": "Enteropatia autoimune ao glúten (HLA-DQ2/8). Atrofia das vilosidades causa síndrome disabsortiva. Anemias ferropénica e megaloblástica refratárias são comuns.",
        "Plaquetas": "Trombocitopenia (destruição imune/sepse) vs Trombocitose reativa (ferropenia/inflamação). EPO pode estimular megacariocitopoiese na carência de ferro."
      }
    },
    {
      numero: "3", titulo: "Anemias Hemolíticas",
      conteudo: {
        "Hereditárias": "Anemia Falciforme: HbS polimeriza em hipóxia gerando drepanócitos e crises vaso-oclusivas. Talassemias: redução de síntese de globina e precipitação de cadeias.",
        "Laboratório": "Anemias regenerativas (reticulócitos > 2%). Bilirrubina indireta e LDH elevados. Icterícia neonatal patológica pode causar Kernicterus (toxicidade cerebral). Fototerapia é padrão."
      }
    },
    {
      numero: "4", titulo: "Síndrome Consumptiva na AIDS",
      conteudo: {
        "Wasting Syndrome": "Perda > 10% peso + febre/diarreia > 30 dias. Citocinas (TNF-α/IL-1) induzem proteólise e lipólise via ubiquitina-proteassoma. Enteropatia pelo HIV reduz absorção.",
        "Metabolismo": "Resistência ao GH e baixos níveis de IGF-1. Hipogonadismo e hipercortisolismo de estresse. Desafio nutricional requer dietas hiperproteicas e controle da carga viral via TARV."
      }
    }
  ]
};

const PBLView: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'info' | 'resumos'>('info');
  const [selectedProblemNum, setSelectedProblemNum] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedProblemNum, selectedModule, activeTab]);

  const modules = [
    { id: 1, title: 'ASE 1 — Introdução ao Estudo da Medicina', hasSummaries: true, color: 'border-blue-500' },
    { id: 2, title: 'ASE 2 — Proliferação e Diferenciação Celular', hasSummaries: true, color: 'border-blue-400' },
    { id: 3, title: 'ASE 3 — Funções Biológicas 1', hasSummaries: true, color: 'border-cyan-500' },
    { id: 4, title: 'ASE 4 — Funções Biológicas 2', hasSummaries: true, color: 'border-violet-500' },
    { id: 5, title: 'ASE 5 — Metabolismo e Nutrição', hasSummaries: true, color: 'border-emerald-500' },
    { id: 6, title: 'ASE 6 — Mecanismo de Agressão e Defesa', hasSummaries: true, color: 'border-orange-500' },
    { id: 7, title: 'ASE 7 — Concepção e Gestação', hasSummaries: true, color: 'border-rose-500' },
    { id: 8, title: 'ASE 8 — Crescimento e Desenvolvimento', hasSummaries: true, color: 'border-yellow-500' },
    { id: 9, title: 'ASE 9 — Vida Adulta e Envelhecimento', hasSummaries: true, color: 'border-amber-600' },
    { id: 10, title: 'ASE 10 — Percepção e Emoções', hasSummaries: true, color: 'border-indigo-500' },
    { id: 11, title: 'ASE 11 — Febre e Infecção', hasSummaries: true, color: 'border-red-500' },
    { id: 12, title: 'ASE 12 — Hematologia e Nutrição', hasSummaries: true, color: 'border-pink-600' },
    { id: 13, title: 'ASE 13 — Disúria, Edema e Proteinúria', hasSummaries: false, color: 'border-neutral-800' },
  ];

  const handleModuleClick = (id: number) => {
    setSelectedModule(id);
    const mod = modules.find(m => m.id === id);
    if (mod?.hasSummaries) {
      setActiveTab('resumos');
      const moduleSummaries = GLOBAL_SUMMARIES[id];
      if (moduleSummaries && moduleSummaries.length > 0) {
        setSelectedProblemNum(moduleSummaries[0].numero);
      }
    }
  };

  const renderRecursiveContent = (content: any): React.ReactNode => {
    // FIX: Se for string, renderiza como bloco de texto contínuo em vez de quebrar por letra
    if (typeof content === 'string') {
      return (
        <p className="text-neutral-300 text-sm leading-[1.8] font-light text-justify mb-6 whitespace-pre-line">
          {content}
        </p>
      );
    }
    
    // Se for objeto, itera sobre as chaves mantendo a estrutura lógica
    if (content && typeof content === 'object') {
      return (
        <div className="space-y-8 w-full">
          {Object.entries(content).map(([label, sub]: [string, any], i) => (
            <div key={i} className="space-y-3 w-full animate-in fade-in slide-in-from-left-2 duration-300">
              <h5 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em] flex items-center gap-3">
                 <div className="w-2 h-2 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                 {label}
              </h5>
              <div className="pl-6 border-l-2 border-neutral-800/50">
                {renderRecursiveContent(sub)}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  if (selectedModule) {
    const currentModule = modules.find(m => m.id === selectedModule);
    const summaries = GLOBAL_SUMMARIES[selectedModule] || [];
    const accentBg = currentModule?.color.replace('border', 'bg') || 'bg-blue-600';
    const accentText = currentModule?.color.replace('border', 'text') || 'text-blue-500';

    return (
      <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-7xl mx-auto px-4">
        <button 
          onClick={() => { setSelectedModule(null); setSelectedProblemNum(null); }} 
          className="mb-8 flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-sm font-medium uppercase tracking-widest">Voltar para Grade</span>
        </button>

        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className={`${accentBg} text-white text-[11px] font-black px-3 py-1.5 rounded-lg shadow-xl`}>ASE {currentModule?.id}</span>
            <h1 className="text-3xl font-black text-white tracking-tighter">{currentModule?.title}</h1>
          </div>
        </header>

        <div className="flex gap-2 bg-neutral-900/50 p-1 rounded-2xl mb-12 w-fit border border-neutral-800/50 shadow-2xl">
          <button 
            onClick={() => setActiveTab('info')}
            className={`px-8 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'info' ? 'bg-neutral-800 text-white shadow-xl' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            Sobre o Módulo
          </button>
          {currentModule?.hasSummaries && (
            <button 
              onClick={() => setActiveTab('resumos')}
              className={`px-8 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === 'resumos' ? `${accentBg} text-white shadow-2xl` : 'text-neutral-500 hover:text-neutral-300'}`}
            >
              Resumos de Tutoria
            </button>
          )}
        </div>

        {activeTab === 'info' ? (
          <div className="bg-neutral-900/30 border border-neutral-800 p-12 rounded-[3rem] max-w-4xl shadow-inner">
            <h3 className="text-2xl font-black text-white mb-6 italic tracking-tight">Visão Acadêmica</h3>
            <p className="text-neutral-400 text-lg font-light leading-relaxed mb-12">
              Este módulo integra a grade curricular fundamental da metodologia PBL, focado no desenvolvimento de competências clínicas através da resolução de problemas reais.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-neutral-950/60 rounded-3xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <span className={`text-[10px] font-black ${accentText} uppercase tracking-widest block mb-2`}>Status</span>
                <p className="text-sm text-neutral-200 font-medium">{currentModule?.hasSummaries ? "Material Integral Disponível" : "Em preparação técnica"}</p>
              </div>
              <div className="p-8 bg-neutral-950/60 rounded-3xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <span className={`text-[10px] font-black ${accentText} uppercase tracking-widest block mb-2`}>Fase</span>
                <p className="text-sm text-neutral-200 font-medium">{currentModule?.id && currentModule.id <= 12 ? "Ciclo Básico" : "Ciclo Clínico"}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar de Problemas */}
            <aside className="lg:col-span-3 space-y-4 lg:sticky lg:top-24 h-fit">
              <h3 className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em] px-3 mb-6">Problemas do Módulo</h3>
              <div className="flex flex-col gap-3">
                {summaries.map((p) => (
                  <button
                    key={p.numero}
                    onClick={() => setSelectedProblemNum(p.numero)}
                    className={`w-full text-left p-5 rounded-[2rem] border transition-all duration-300 flex flex-col gap-2 ${
                      selectedProblemNum === p.numero 
                        ? `${currentModule?.color} bg-neutral-900/80 text-white shadow-2xl scale-[1.02]` 
                        : 'bg-neutral-950/40 border-neutral-800/60 text-neutral-500 hover:border-neutral-700 hover:bg-neutral-900/30'
                    }`}
                  >
                    <span className={`text-[9px] font-black uppercase tracking-widest opacity-60`}>Problema {p.numero}</span>
                    <span className="text-sm font-bold leading-tight">{p.titulo}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Conteúdo Central */}
            <main className="lg:col-span-9 space-y-12 pb-32">
              {selectedProblemNum ? (
                (() => {
                  const prob = summaries.find(s => s.numero === selectedProblemNum);
                  if (!prob) return null;
                  return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full">
                      {/* Header do Problema */}
                      <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-12 rounded-[4rem] mb-16 shadow-2xl w-full">
                        <div className="flex items-center gap-4 mb-6">
                           <div className={`h-1 w-12 ${accentBg} rounded-full`}></div>
                           <span className={`text-[11px] font-black ${accentText} uppercase tracking-[0.5em]`}>Material de Estudo Consolidado</span>
                        </div>
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-tight">
                          {prob.numero}. {prob.titulo}
                        </h2>
                      </div>

                      {/* Blocos de Conteúdo */}
                      <div className="space-y-16 w-full">
                        {Object.entries(prob.conteudo).map(([sectionTitle, content]: [string, any], idx) => (
                          <div key={idx} className="group w-full">
                            <div className="flex items-center gap-6 mb-10">
                              <h4 className="text-sm font-black text-white uppercase tracking-[0.4em] whitespace-nowrap">
                                {sectionTitle}
                              </h4>
                              <div className="h-[1px] w-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
                            </div>
                            <div className="w-full bg-neutral-900/10 p-10 rounded-[3rem] border border-neutral-800/40 hover:bg-neutral-900/20 transition-all">
                              {renderRecursiveContent(content)}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-24 text-center">
                        <p className="text-neutral-700 text-[10px] font-black uppercase tracking-[0.8em]">NexusBQ &bull; Academia Médica PBL</p>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="flex flex-col items-center justify-center py-48 border-2 border-dashed border-neutral-800/50 rounded-[4rem] text-neutral-600 bg-neutral-900/5">
                  <div className="w-20 h-20 bg-neutral-900/50 rounded-3xl flex items-center justify-center mb-8 border border-neutral-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
                  </div>
                  <h4 className="text-white text-xl font-bold tracking-tight mb-2">Selecione um Problema</h4>
                  <p className="text-sm font-light max-w-xs text-center leading-relaxed">Selecione um dos problemas ao lado para carregar o conteúdo integral enviado pelos relatórios de tutoria.</p>
                </div>
              )}
            </main>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-600 max-w-7xl mx-auto px-4">
      <header className="mb-16">
        <h2 className="text-5xl font-black text-white mb-6 tracking-tighter italic">Resumos PBL</h2>
        <p className="text-neutral-400 text-xl font-light max-w-2xl leading-relaxed">
          Central de conhecimento consolidado. Acesse todos os relatórios de tutoria do ciclo básico para revisão estratégica e aprofundamento.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-32">
        {modules.map((module) => (
          <div 
            key={module.id}
            onClick={() => handleModuleClick(module.id)}
            className={`bg-neutral-900/40 border-2 p-8 rounded-[2.5rem] transition-all group cursor-pointer flex flex-col justify-between hover:scale-[1.03] active:scale-[0.98] h-64 ${
              module.hasSummaries ? `${module.color} hover:bg-neutral-900 shadow-2xl` : 'border-neutral-800/30 opacity-40 cursor-not-allowed'
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${module.hasSummaries ? 'text-blue-400' : 'text-neutral-600'}`}>ASE {module.id}</span>
                {module.hasSummaries && (
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></span>
                )}
              </div>
              <h4 className={`text-lg font-bold leading-tight ${module.hasSummaries ? 'text-neutral-100 group-hover:text-white' : 'text-neutral-600'}`}>{module.title}</h4>
            </div>
            
            {module.hasSummaries ? (
               <div className="flex items-center gap-3 text-blue-500 text-[10px] font-black uppercase tracking-widest group-hover:gap-5 transition-all">
                  Explorar Relatórios
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
               </div>
            ) : (
              <span className="text-[10px] text-neutral-800 font-black uppercase tracking-widest">Disponível em breve</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PBLView;
