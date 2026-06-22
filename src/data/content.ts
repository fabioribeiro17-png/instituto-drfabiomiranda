export const FAQ_CATEGORIES = [
  'Gastroplastia Endoscópica (ESG / Apollo)',
  'Balão Intragástrico (Spatz3 e Convencionais)',
  'Plasma de Argônio + TORe',
  'Medicações GLP-1 / GIP',
  'Protocolos Venosos',
  'Calorimetria Indireta',
]

export const FAQS = [
  {
    id: 'g1',
    category: 'Gastroplastia Endoscópica (ESG / Apollo)',
    question: 'O que é a Gastroplastia Endoscópica?',
    answer:
      'Procedimento minimamente invasivo realizado por endoscopia utilizando o sistema Overstitch™. Ele sutura o estômago internamente, reduzindo seu volume em até 70%, sem a necessidade de cortes externos.',
  },
  {
    id: 'g2',
    category: 'Gastroplastia Endoscópica (ESG / Apollo)',
    question: 'Qual o tempo de recuperação?',
    answer:
      'A recuperação é rápida, geralmente os pacientes retornam às atividades normais em 3 a 5 dias, seguindo protocolos alimentares rigorosos.',
  },
  {
    id: 'g3',
    category: 'Gastroplastia Endoscópica (ESG / Apollo)',
    question: 'É um procedimento reversível?',
    answer:
      'Sim, os fios podem ser removidos caso haja necessidade clínica, embora seja planejado para ter efeitos duradouros no controle de peso.',
  },
  {
    id: 'g4',
    category: 'Gastroplastia Endoscópica (ESG / Apollo)',
    question: 'Quanto peso posso perder?',
    answer:
      'Os pacientes perdem, em média, de 15% a 20% do peso corporal total ao longo de 12 a 18 meses, aliado ao acompanhamento 360 do Instituto.',
  },
  {
    id: 'b1',
    category: 'Balão Intragástrico (Spatz3 e Convencionais)',
    question: 'Qual a diferença do balão Spatz3?',
    answer:
      'É o único balão do mundo que permite o ajuste de volume durante o tratamento, estendendo sua permanência para 12 meses e otimizando a perda de peso nos momentos de platô.',
  },
  {
    id: 'b2',
    category: 'Balão Intragástrico (Spatz3 e Convencionais)',
    question: 'Sinto dor após a colocação?',
    answer:
      'Nas primeiras 48 a 72 horas, é comum sentir náuseas e cólicas à medida que o estômago se adapta, mas isso é controlado com medicação prescrita pela nossa equipe.',
  },
  {
    id: 'a1',
    category: 'Plasma de Argônio + TORe',
    question: 'Como funciona o Plasma de Argônio para reganho de peso?',
    answer:
      'Atua reduzindo o diâmetro da anastomose por meio de cauterização térmica, devolvendo a sensação de saciedade precoce a pacientes que tiveram reganho após cirurgia bariátrica.',
  },
  {
    id: 'm1',
    category: 'Medicações GLP-1 / GIP',
    question: 'Qual a diferença entre Mounjaro e Ozempic?',
    answer:
      'Mounjaro (Tirzepatida) atua em dois receptores (GLP-1 e GIP), oferecendo resultados de perdas superiores a 20% do peso, enquanto o Ozempic (Semaglutida) atua apenas no GLP-1. A indicação depende da avaliação clínica.',
  },
  {
    id: 'p1',
    category: 'Protocolos Venosos',
    question: 'O que são os protocolos de soroterapia para emagrecimento?',
    answer:
      'São infusões intravenosas de vitaminas, minerais e aminoácidos que otimizam o metabolismo, melhoram a disposição e corrigem deficiências nutricionais cruciais no Método 360.',
  },
  {
    id: 'c1',
    category: 'Calorimetria Indireta',
    question: 'Para que serve a calorimetria?',
    answer:
      'Mede o seu metabolismo basal com exatidão através da respiração, permitindo à nossa equipe prescrever uma dieta e treinos milimetricamente ajustados ao seu gasto calórico real.',
  },
]

export const BLOG_CATEGORIES = [
  'Endobariátrica de Vanguarda',
  'Emagrecimento 360',
  'Ciência e Inovação',
  'Vida Pós-Procedimento',
  'Casos de Sucesso',
]

export const BLOG_POSTS = [
  {
    slug: 'revolucao-tirzepatida-emagrecimento',
    title: 'A Revolução da Tirzepatida no Emagrecimento Moderno',
    category: 'Ciência e Inovação',
    date: '15 de Outubro de 2026',
    readTime: '4 min read',
    excerpt:
      'Entenda como a dupla ação GIP e GLP-1 está redefinindo os padrões de tratamento da obesidade em nível global.',
    image: 'https://img.usecurling.com/p/800/400?q=laboratory&color=blue',
    content: `
      <h2>O Novo Padrão Ouro</h2>
      <p>A chegada de medicações análogas de hormônios intestinais mudou drasticamente o cenário da endocrinologia e do tratamento da obesidade. O destaque atual é a Tirzepatida, comercializada como Mounjaro.</p>
      <h3>Mecanismo de Ação Dual</h3>
      <p>Diferente de seus antecessores, a Tirzepatida simula dois hormônios: GIP e GLP-1. Isso potencializa não apenas a saciedade central no cérebro, mas melhora significativamente a sensibilidade à insulina.</p>
      <ul>
        <li>Redução acentuada do apetite</li>
        <li>Maior queima de gordura visceral</li>
        <li>Resultados que rivalizam com intervenções cirúrgicas em alguns cenários clínicos</li>
      </ul>
      <div class="my-6 p-4 bg-muted border-l-4 border-secondary rounded-r-md">
        <strong class="text-primary font-serif">Referência Científica:</strong>
        <p class="text-sm mt-1 text-muted-foreground">Estudos publicados no <em>New England Journal of Medicine</em> demonstram perdas superiores a 20% do peso corporal total após 72 semanas de tratamento.</p>
      </div>
      <p>No Instituto Dr. Fábio Miranda Ribeiro, aplicamos essas inovações dentro do nosso <strong>Método 360</strong>, garantindo não apenas a prescrição, mas o acompanhamento integral para sustentabilidade dos resultados.</p>
    `,
  },
  {
    slug: 'gastroplastia-endoscopica-futuro',
    title: 'Gastroplastia Endoscópica: O Futuro sem Cortes',
    category: 'Endobariátrica de Vanguarda',
    date: '02 de Setembro de 2026',
    readTime: '5 min read',
    excerpt:
      'Como a sutura gástrica via endoscopia está substituindo a bariátrica tradicional para pacientes selecionados.',
    image: 'https://img.usecurling.com/p/800/400?q=surgery&color=blue',
    content: `
      <h2>Redução de Estômago Minimamente Invasiva</h2>
      <p>Procedimento minimamente invasivo realizado por endoscopia utilizando o sistema Overstitch™... reduzindo volume em 70%.</p>
      <p>Com menor tempo de internação e retorno rápido às atividades, a ESG (Endoscopic Sleeve Gastroplasty) tornou-se a escolha primária de executivos e pessoas com rotinas dinâmicas.</p>
      <h3>Vantagens Competitivas</h3>
      <ul>
        <li>Ausência de cicatrizes abdominais</li>
        <li>Menor risco de deficiências nutricionais graves a longo prazo</li>
        <li>Preservação da anatomia gástrica básica</li>
      </ul>
    `,
  },
  {
    slug: 'spatz-3-ajuste-inteligente',
    title: 'Spatz3: O Balão Intragástrico Ajustável',
    category: 'Ciência e Inovação',
    date: '28 de Agosto de 2026',
    readTime: '3 min read',
    excerpt:
      'Único balão do mundo que permite o ajuste de volume, estendendo o tratamento para 12 meses.',
    image: 'https://img.usecurling.com/p/800/400?q=medical%20device&color=cyan',
    content: `
      <h2>Vencendo o Efeito Platô</h2>
      <p>Historicamente, balões intragástricos perdem sua eficácia após 3 a 4 meses de implante. O Spatz3 resolve essa limitação através da capacidade de ajuste endoscópico.</p>
      <p>Quando o paciente para de perder peso, ajustamos o volume para cima, reiniciando o processo de saciedade precoce.</p>
    `,
  },
  {
    slug: 'sucesso-metodo-360',
    title: 'A Importância do Acompanhamento Multidisciplinar',
    category: 'Emagrecimento 360',
    date: '10 de Agosto de 2026',
    readTime: '4 min read',
    excerpt:
      'Por que intervenções isoladas falham e como o Método 360 garante a manutenção do peso.',
    image: 'https://img.usecurling.com/p/800/400?q=doctors%20talking&color=blue',
    content: `
      <h2>Muito Além do Procedimento</h2>
      <p>A obesidade é uma doença crônica, multifatorial e recidivante. Acreditar que apenas um balão, uma sutura ou uma medicação resolverão o problema isoladamente é um equívoco.</p>
      <p>Nosso Método 360 integra nutrição avançada, psicologia do comportamento alimentar, e otimização metabólica através de protocolos venosos e calorimetria indireta.</p>
    `,
  },
]
