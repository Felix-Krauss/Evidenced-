// ===== Supplements Data =====
// This data is used for pillbox functionality and future pages
const supplements = {
  basics: [
    {
      id: 'omega-3',
      name: 'Omega-3',
      icon: 'assets/icons/omega-3.svg',
      description: 'Reduziert Entzündungen, verbessert die Herzgesundheit und unterstützt die kognitive Funktion.',
      price: '0,15 €',
      dailyPrice: 0.15,
      category: 'Fettsäuren',
      evidence: 'stark'
    },
    {
      id: 'vitamin-d3-k2',
      name: 'Vitamin D3 + K2',
      icon: 'assets/icons/vitamin-d.svg',
      description: 'Vitamin D3 für Immunsystem und Knochen, K2 für die richtige Verteilung von Calcium.',
      price: '0,10 €',
      dailyPrice: 0.10,
      category: 'Vitamine',
      evidence: 'stark'
    },
    {
      id: 'magnesium',
      name: 'Magnesium',
      icon: 'assets/icons/magnesium.svg',
      description: 'Unterstützt über 300 enzymatische Prozesse, reduziert Muskelkrämpfe und verbessert den Schlaf.',
      price: '0,08 €',
      dailyPrice: 0.08,
      category: 'Mineralstoffe',
      evidence: 'stark'
    },
    {
      id: 'zink',
      name: 'Zink',
      icon: 'assets/icons/zink.svg',
      description: 'Stärkt das Immunsystem, fördert die Wundheilung und unterstützt die Testosteronproduktion.',
      price: '0,05 €',
      dailyPrice: 0.05,
      category: 'Mineralstoffe',
      evidence: 'stark'
    },
    {
      id: 'kreatin',
      name: 'Kreatin',
      icon: 'assets/icons/kreatin.svg',
      description: 'Erhöht Kraft, Muskelmasse und Ausdauer. Eines der am besten erforschten Supplements.',
      price: '0,20 €',
      dailyPrice: 0.20,
      category: 'Leistung',
      evidence: 'stark'
    },
    {
      id: 'protein',
      name: 'Proteinpulver',
      icon: 'assets/icons/protein.svg',
      description: 'Praktische Proteinquelle für Muskelaufbau und Sättigung.',
      price: '0,50 €',
      dailyPrice: 0.50,
      category: 'Ernährung',
      evidence: 'stark'
    },
    {
      id: 'multivitamin',
      name: 'Multivitamin',
      icon: 'assets/icons/multivitamin.svg',
      description: 'Deckung von Mikronährstofflücken für optimale Gesundheit.',
      price: '0,25 €',
      dailyPrice: 0.25,
      category: 'Vitamine',
      evidence: 'mittel'
    }
  ],
  hypeCheck: [
    {
      id: 'ashwagandha',
      name: 'Ashwagandha',
      icon: 'assets/icons/ashwagandha.svg',
      description: 'Adaptogen, das angeblich Stress reduziert und Testosteron erhöht.',
      price: '0,30 €',
      dailyPrice: 0.30,
      category: 'Adaptogene',
      evidence: 'schwach'
    },
    {
      id: 'bcaa',
      name: 'BCAAs / EAAs',
      icon: 'assets/icons/bcaa.svg',
      description: 'Verzweigtkettige Aminosäuren, die angeblich die Muskelproteinsynthese fördern.',
      price: '0,40 €',
      dailyPrice: 0.40,
      category: 'Aminosäuren',
      evidence: 'schwach'
    },
    {
      id: 'fatburner',
      name: 'Fatburner',
      icon: 'assets/icons/fatburner.svg',
      description: 'Kombinationen aus Stimulanzien, die angeblich die Fettverbrennung erhöhen.',
      price: '0,60 €',
      dailyPrice: 0.60,
      category: 'Gewichtsverlust',
      evidence: 'schwach'
    },
    {
      id: 'testo-booster',
      name: 'Testo-Booster',
      icon: 'assets/icons/testo-booster.svg',
      description: 'Natürliche oder synthetische Substanzen, die angeblich den Testosteronspiegel erhöhen.',
      price: '0,50 €',
      dailyPrice: 0.50,
      category: 'Hormone',
      evidence: 'schwach'
    }
  ]
};

// ===== Stacks Data =====
const stacks = [
  {
    id: 'diet',
    name: 'Diät & Abnehmen',
    icon: 'assets/icons/diet.svg',
    description: 'Kombination aus Supplements, die beim Abnehmen unterstützen.',
    price: '0,85 €',
    dailyPrice: 0.85,
    category: 'Gewichtsmanagement',
    supplements: ['protein', 'omega-3', 'magnesium', 'vitamin-d3-k2']
  },
  {
    id: 'sleep',
    name: 'Schlaf & Erholung',
    icon: 'assets/icons/sleep.svg',
    description: 'Supplements, die die Schlafqualität verbessern und die Regeneration fördern.',
    price: '0,63 €',
    dailyPrice: 0.63,
    category: 'Erholung',
    supplements: ['magnesium', 'zink', 'omega-3']
  },
  {
    id: 'vegan',
    name: 'Veganer & Vegetarier',
    icon: 'assets/icons/vegan.svg',
    description: 'Essentielle Nährstoffe, die bei veganer oder vegetarischer Ernährung oft fehlen.',
    price: '0,58 €',
    dailyPrice: 0.58,
    category: 'Ernährung',
    supplements: ['vitamin-d3-k2', 'omega-3', 'zink', 'multivitamin']
  },
  {
    id: 'aging',
    name: '50+ / Healthy Aging',
    icon: 'assets/icons/aging.svg',
    description: 'Supplements, die den Alterungsprozess verlangsamen und die Gesundheit im Alter unterstützen.',
    price: '0,78 €',
    dailyPrice: 0.78,
    category: 'Langlebigkeit',
    supplements: ['omega-3', 'vitamin-d3-k2', 'magnesium', 'kreatin']
  }
];

// ===== News Data ===== 
const news = [
  {
    id: 'news-1',
    date: '15. Juni 2024',
    title: 'Neue Meta-Analyse bestätigt: Omega-3 senkt Herzinfarkt-Risiko',
    summary: 'Eine aktuelle Meta-Analyse mit über 130.000 Teilnehmern zeigt, dass die Einnahme von Omega-3-Fettsäuren das Risiko für Herzinfarkte um 8% senken kann.',
    link: '#',
    category: 'Herzgesundheit'
  },
  {
    id: 'news-2',
    date: '10. Juni 2024',
    title: 'Vitamin D und COVID-19: Neue Erkenntnisse',
    summary: 'Eine aktuelle Studie untersucht den Zusammenhang zwischen Vitamin D-Spiegel und dem Schweregrad von COVID-19-Infektionen.',
    link: '#',
    category: 'Immunsystem'
  },
  {
    id: 'news-3',
    date: '5. Juni 2024',
    title: 'Kreatin: Nicht nur für Sportler',
    summary: 'Neue Forschung zeigt, dass Kreatin auch für ältere Erwachsene Vorteile bietet, insbesondere für die kognitive Funktion und Knochengesundheit.',
    link: '#',
    category: 'Kognitive Gesundheit'
  },
  {
    id: 'news-4',
    date: '1. Juni 2024',
    title: 'Magnesium und Schlaf: Was sagt die Wissenschaft?',
    summary: 'Ein systematischer Review analysiert die aktuellen Erkenntnisse über die Wirkung von Magnesium auf die Schlafqualität.',
    link: '#',
    category: 'Schlaf'
  }
];

// ===== Export =====
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { supplements, stacks, news };
}
