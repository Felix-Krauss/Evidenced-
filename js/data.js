// ===== Supplements Data =====
const supplements = {
  basics: [
    {
      id: 'omega-3',
      name: 'Omega-3',
      icon: 'assets/icons/omega-3.svg',
      description: 'Reduziert Entzündungen, verbessert die Herzgesundheit und unterstützt die kognitive Funktion. Besonders wichtig bei unausgewogener Ernährung.',
      price: '0,15 €',
      dailyPrice: 0.15,
      category: 'Fettsäuren',
      evidence: 'stark',
      details: {
        summary: 'Omega-3-Fettsäuren (EPA und DHA) sind essentielle Fettsäuren, die der Körper nicht selbst produzieren kann.',
        benefits: [
          'Reduziert Triglyceride im Blut um 15-30%',
          'Senkt Entzündungsmarker (CRP)',
          'Unterstützt die Gehirnfunktion und kann das Risiko für kognitive Beeinträchtigungen verringern',
          'Kann den Blutdruck leicht senken',
          'Unterstützt die Augengesundheit'
        ],
        dosage: '1000-2000 mg EPA+DHA pro Tag',
        sources: [
          { name: 'Meta-Analyse: Omega-3 und kardiovaskuläre Gesundheit', year: 2019, link: '#' },
          { name: 'Cochrane Review: Omega-3 für kognitive Funktion', year: 2021, link: '#' }
        ],
        recommendation: 'Mindestens 1000 mg EPA+DHA täglich. Hochwertige Präparate mit Triglycerid-Form (rTG) bevorzugen.'
      }
    },
    {
      id: 'vitamin-d3-k2',
      name: 'Vitamin D3 + K2',
      icon: 'assets/icons/vitamin-d.svg',
      description: 'Vitamin D3 für Immunsystem und Knochen, K2 für die richtige Verteilung von Calcium. Besonders wichtig bei wenig Sonnenexposition.',
      price: '0,10 €',
      dailyPrice: 0.10,
      category: 'Vitamine',
      evidence: 'stark',
      details: {
        summary: 'Vitamin D3 (Cholecalciferol) wird durch Sonnenlicht in der Haut gebildet. Vitamin K2 aktiviert Proteine, die Calcium in Knochen und Zähne einbauen.',
        benefits: [
          'Stärkt das Immunsystem',
          'Fördert die Knochengesundheit',
          'Verbessert die Stimmung und kann Depressionen vorbeugen',
          'Unterstützt die Muskelkraft',
          'K2 verhindert Calciumablagerungen in den Arterien'
        ],
        dosage: '1000-4000 IE Vitamin D3 + 100-200 µg K2 pro Tag',
        sources: [
          { name: 'Meta-Analyse: Vitamin D und Immunfunktion', year: 2020, link: '#' },
          { name: 'Studie: Vitamin K2 und kardiovaskuläre Gesundheit', year: 2015, link: '#' }
        ],
        recommendation: 'Bluttest machen! Optimaler Spiegel: 40-60 ng/ml. Bei Mangel: 4000 IE täglich für 8 Wochen, dann 1000-2000 IE Erhaltung.'
      }
    },
    {
      id: 'magnesium',
      name: 'Magnesium',
      icon: 'assets/icons/magnesium.svg',
      description: 'Unterstützt über 300 enzymatische Prozesse, reduziert Muskelkrämpfe und verbessert den Schlaf. Wichtig bei Stress und Sport.',
      price: '0,08 €',
      dailyPrice: 0.08,
      category: 'Mineralstoffe',
      evidence: 'stark',
      details: {
        summary: 'Magnesium ist an über 300 enzymatischen Reaktionen beteiligt und wird für Muskel- und Nervenfunktion benötigt.',
        benefits: [
          'Reduziert Muskelkrämpfe und Verspannungen',
          'Verbessert die Schlafqualität',
          'Unterstützt die Stressresistenz',
          'Fördert die Knochengesundheit',
          'Kann Migräne vorbeugen'
        ],
        dosage: '300-400 mg pro Tag (vorzugsweise abends)',
        sources: [
          { name: 'Meta-Analyse: Magnesium und Schlafqualität', year: 2018, link: '#' },
          { name: 'Studie: Magnesium bei Muskelkrämpfen', year: 2020, link: '#' }
        ],
        recommendation: 'Magnesiumcitrat oder -bisglycinat bevorzugen. Nicht mit Calcium zusammen einnehmen (Konkurrenz bei der Aufnahme).'
      }
    },
    {
      id: 'zink',
      name: 'Zink',
      icon: 'assets/icons/zink.svg',
      description: 'Stärkt das Immunsystem, fördert die Wundheilung und unterstützt die Testosteronproduktion. Wichtig bei häufigen Infekten.',
      price: '0,05 €',
      dailyPrice: 0.05,
      category: 'Mineralstoffe',
      evidence: 'stark',
      details: {
        summary: 'Zink ist ein essentielles Spurenelement, das für Immunfunktion, DNA-Synthese und Zellteilung wichtig ist.',
        benefits: [
          'Stärkt das Immunsystem und verkürzt Erkältungen',
          'Fördert die Wundheilung',
          'Unterstützt die Testosteronproduktion',
          'Verbessert Haut, Haare und Nägel',
          'Wirkt antioxidativ'
        ],
        dosage: '15-30 mg pro Tag',
        sources: [
          { name: 'Meta-Analyse: Zink und Immunfunktion', year: 2021, link: '#' },
          { name: 'Studie: Zink bei Erkältungen', year: 2015, link: '#' }
        ],
        recommendation: 'Zinkcitrat oder -bisglycinat bevorzugen. Nicht dauerhaft hochdosiert einnehmen (Kupfermangel-Risiko).'
      }
    },
    {
      id: 'kreatin',
      name: 'Kreatin',
      icon: 'assets/icons/kreatin.svg',
      description: 'Erhöht Kraft, Muskelmasse und Ausdauer. Eines der am besten erforschten Supplements für Sportler. Auch für das Gehirn vorteilhaft.',
      price: '0,20 €',
      dailyPrice: 0.20,
      category: 'Leistung',
      evidence: 'stark',
      details: {
        summary: 'Kreatin ist eine natürliche Substanz, die in Muskelzellen Energie bereitstellt. Es wird auch im Gehirn benötigt.',
        benefits: [
          'Erhöht die Kraft um 5-15%',
          'Fördert den Muskelaufbau',
          'Verbessert die Ausdauerleistung',
          'Unterstützt die kognitive Funktion',
          'Kann die Erholung beschleunigen'
        ],
        dosage: '3-5 g pro Tag',
        sources: [
          { name: 'Meta-Analyse: Kreatin und Kraftleistung', year: 2012, link: '#' },
          { name: 'Studie: Kreatin und kognitive Funktion', year: 2018, link: '#' }
        ],
        recommendation: 'Kreatin-Monohydrat ist die beste Form. Ladephase (20 g/Tag für 5-7 Tage) optional. Wirkung tritt auch ohne Ladephase ein.'
      }
    },
    {
      id: 'protein',
      name: 'Proteinpulver',
      icon: 'assets/icons/protein.svg',
      description: 'Praktische Proteinquelle für Muskelaufbau und Sättigung. Besonders nützlich nach dem Training oder als Mahlzeitenersatz.',
      price: '0,50 €',
      dailyPrice: 0.50,
      category: 'Ernährung',
      evidence: 'stark',
      details: {
        summary: 'Proteinpulver ist eine konzentrierte Proteinquelle, die hilft, den täglichen Proteinbedarf zu decken.',
        benefits: [
          'Fördert den Muskelaufbau und die Regeneration',
          'Erhöht die Sättigung und kann beim Abnehmen helfen',
          'Praktisch für unterwegs oder nach dem Training',
          'Unterstützt die Immunfunktion'
        ],
        dosage: '20-40 g pro Portion (je nach Bedarf)',
        sources: [
          { name: 'Meta-Analyse: Protein und Muskelaufbau', year: 2018, link: '#' },
          { name: 'Studie: Protein und Sättigung', year: 2020, link: '#' }
        ],
        recommendation: 'Whey Protein für schnelle Aufnahme, Casein für langsame Aufnahme (z.B. vor dem Schlaf). Pflanzenbasierte Optionen: Erbsenprotein oder Reis-Hanf-Mix.'
      }
    },
    {
      id: 'multivitamin',
      name: 'Multivitamin',
      icon: 'assets/icons/multivitamin.svg',
      description: 'Deckung von Mikronährstofflücken für optimale Gesundheit. Besonders sinnvoll bei unausgewogener Ernährung oder erhöhtem Bedarf.',
      price: '0,25 €',
      dailyPrice: 0.25,
      category: 'Vitamine',
      evidence: 'mittel',
      details: {
        summary: 'Ein Multivitaminpräparat kann helfen, Mikronährstofflücken zu schließen, besonders bei unausgewogener Ernährung.',
        benefits: [
          'Füllt Mikronährstofflücken',
          'Unterstützt das Immunsystem',
          'Fördert die allgemeine Gesundheit',
          'Kann die Energielevel verbessern'
        ],
        dosage: '1 Tablette/Kapsel pro Tag',
        sources: [
          { name: 'Studie: Multivitamine und allgemeine Gesundheit', year: 2020, link: '#' }
        ],
        recommendation: 'Qualitativ hochwertige Präparate mit aktiven Formen (z.B. Methylcobalamin für B12, P-5-P für B6) bevorzugen.'
      }
    }
  ],
  hypeCheck: [
    {
      id: 'ashwagandha',
      name: 'Ashwagandha',
      icon: 'assets/icons/ashwagandha.svg',
      description: 'Adaptogen, das angeblich Stress reduziert und Testosteron erhöht. Die wissenschaftliche Evidenz ist jedoch begrenzt und widersprüchlich.',
      price: '0,30 €',
      dailyPrice: 0.30,
      category: 'Adaptogene',
      evidence: 'schwach',
      details: {
        summary: 'Ashwagandha (Withania somnifera) ist ein Adaptogen aus der ayurvedischen Medizin, das angeblich Stress reduziert und die Testosteronproduktion erhöht.',
        claimedBenefits: [
          'Reduziert Stress und Angst',
          'Erhöht Testosteron',
          'Verbessert die Schlafqualität',
          'Fördert die kognitive Funktion'
        ],
        actualEvidence: [
          'Einige kleine Studien zeigen leichte Effekte auf Stressreduktion',
          'Keine überzeugenden Belege für Testosteron-Erhöhung bei gesunden Männern',
          'Wirkmechanismus nicht vollständig verstanden',
          'Qualität der Studien oft niedrig'
        ],
        dosage: '300-600 mg Extrakt (5% Withanolide) pro Tag',
        sources: [
          { name: 'Systematic Review: Ashwagandha für Angst und Stress', year: 2022, link: '#' },
          { name: 'Meta-Analyse: Ashwagandha und Testosteron', year: 2021, link: '#' }
        ],
        recommendation: 'Keine Empfehlung aufgrund unzureichender Evidenz. Bei Stress: Magnesium und Schlafhygiene bevorzugen.'
      }
    },
    {
      id: 'bcaa',
      name: 'BCAAs / EAAs',
      icon: 'assets/icons/bcaa.svg',
      description: 'Verzweigtkettige Aminosäuren, die angeblich die Muskelproteinsynthese fördern und Muskelabbau verhindern. Für die meisten Menschen unnötig.',
      price: '0,40 €',
      dailyPrice: 0.40,
      category: 'Aminosäuren',
      evidence: 'schwach',
      details: {
        summary: 'BCAAs (Leucin, Isoleucin, Valin) sind essentielle Aminosäuren, die in vielen Proteinquellen enthalten sind.',
        claimedBenefits: [
          'Fördert die Muskelproteinsynthese',
          'Verhindert Muskelabbau während des Trainings',
          'Reduziert Muskelkater',
          'Verbessert die Ausdauerleistung'
        ],
        actualEvidence: [
          'Kein zusätzlicher Nutzen gegenüber normaler Proteinzufuhr',
          'Leucin ist der wichtigste Faktor, aber in ausreichender Menge in normaler Ernährung enthalten',
          'Kann sogar die Proteinsynthese hemmen, wenn isoliert eingenommen',
          'Keine Studien zeigen langfristige Vorteile'
        ],
        dosage: '5-10 g pro Portion',
        sources: [
          { name: 'Meta-Analyse: BCAAs und Muskelaufbau', year: 2017, link: '#' },
          { name: 'Studie: BCAAs vs. Placebo bei Krafttraining', year: 2018, link: '#' }
        ],
        recommendation: 'Nicht empfehlenswert. Besser: Ausreichend Protein aus der Ernährung oder Proteinpulver.'
      }
    },
    {
      id: 'fatburner',
      name: 'Fatburner',
      icon: 'assets/icons/fatburner.svg',
      description: 'Kombinationen aus Stimulanzien und anderen Substanzen, die angeblich die Fettverbrennung erhöhen. Meist unwirksam oder sogar gefährlich.',
      price: '0,60 €',
      dailyPrice: 0.60,
      category: 'Gewichtsverlust',
      evidence: 'schwach',
      details: {
        summary: 'Fatburner sind Supplement-Kombinationen, die angeblich die Fettverbrennung erhöhen, den Stoffwechsel anregen oder den Appetit unterdrücken.',
        claimedBenefits: [
          'Erhöht die Fettverbrennung',
          'Unterdrückt den Appetit',
          'Erhöht die Energielevel',
          'Verbessert die Ausdauerleistung'
        ],
        actualEvidence: [
          'Koffein kann leicht den Stoffwechsel erhöhen (3-11%)',
          'Grüner Tee Extrakt kann minimal die Fettoxidation erhöhen',
          'Die meisten Inhaltsstoffe haben keine nachgewiesene Wirkung',
          'Können gefährliche Nebenwirkungen haben (Herzrasen, Bluthochdruck)'
        ],
        dosage: 'Variiert je nach Produkt',
        sources: [
          { name: 'Meta-Analyse: Fatburner und Gewichtsverlust', year: 2019, link: '#' },
          { name: 'Studie: Sicherheit von Fatburnern', year: 2020, link: '#' }
        ],
        recommendation: 'Nicht empfehlenswert. Besser: Kaloriendefizit, Krafttraining und ausreichend Protein.'
      }
    },
    {
      id: 'testo-booster',
      name: 'Testo-Booster',
      icon: 'assets/icons/testo-booster.svg',
      description: 'Natürliche oder synthetische Substanzen, die angeblich den Testosteronspiegel erhöhen. Die meisten haben keine nachgewiesene Wirkung.',
      price: '0,50 €',
      dailyPrice: 0.50,
      category: 'Hormone',
      evidence: 'schwach',
      details: {
        summary: 'Testosteron-Booster sind Supplements, die angeblich den natürlichen Testosteronspiegel erhöhen.',
        claimedBenefits: [
          'Erhöht den Testosteronspiegel',
          'Fördert den Muskelaufbau',
          'Verbessert die Libido',
          'Erhöht die Energielevel'
        ],
        actualEvidence: [
          'Zink und Vitamin D können bei Mangel den Testosteronspiegel normalisieren',
          'D-Aspartinsäure zeigt in einigen Studien leichte Effekte',
          'Die meisten pflanzlichen Inhaltsstoffe (Tribulus, Fenugreek) haben keine nachgewiesene Wirkung',
          'Keine langfristigen Studien zeigen signifikante Effekte'
        ],
        dosage: 'Variiert je nach Produkt',
        sources: [
          { name: 'Meta-Analyse: Natürliche Testosteron-Booster', year: 2021, link: '#' },
          { name: 'Studie: Zink und Testosteron', year: 2015, link: '#' }
        ],
        recommendation: 'Nicht empfehlenswert. Besser: Ausreichend Schlaf, Stressmanagement, Krafttraining und ausgewogene Ernährung.'
      }
    }
  ]
};

// ===== Stacks Data =====
const stacks = [
  {
    id: 'diet',
    name: 'Diät & Abnehmen',
    icon: 'assets/icons/diet.svg',
    description: 'Kombination aus Supplements, die beim Abnehmen unterstützen, ohne die Gesundheit zu gefährden.',
    price: '0,85 €',
    dailyPrice: 0.85,
    category: 'Gewichtsmanagement',
    supplements: ['protein', 'omega-3', 'magnesium', 'vitamin-d3-k2'],
    details: {
      summary: 'Diese Kombination unterstützt den Fettabbau, erhält Muskelmasse und verbessert die allgemeine Gesundheit während einer Diät.',
      benefits: [
        'Proteinpulver: Erhält Muskelmasse und erhöht die Sättigung',
        'Omega-3: Reduziert Entzündungen und unterstützt die Herzgesundheit',
        'Magnesium: Reduziert Muskelkrämpfe und verbessert den Schlaf',
        'Vitamin D3+K2: Unterstützt Immunsystem und Knochengesundheit'
      ],
      recommendation: 'Kombiniere mit einem moderaten Kaloriendefizit (300-500 kcal/Tag) und Krafttraining 3-4x pro Woche.'
    }
  },
  {
    id: 'sleep',
    name: 'Schlaf & Erholung',
    icon: 'assets/icons/sleep.svg',
    description: 'Supplements, die die Schlafqualität verbessern und die Regeneration fördern.',
    price: '0,63 €',
    dailyPrice: 0.63,
    category: 'Erholung',
    supplements: ['magnesium', 'zink', 'omega-3'],
    details: {
      summary: 'Diese Kombination unterstützt die Schlafqualität, reduziert Stress und fördert die nächtliche Regeneration.',
      benefits: [
        'Magnesium: Beruhigt das Nervensystem und verbessert die Schlafqualität',
        'Zink: Unterstützt die Melatoninproduktion',
        'Omega-3: Reduziert Entzündungen und kann die Schlafqualität verbessern'
      ],
      recommendation: 'Magnesium 30-60 Minuten vor dem Schlafengehen einnehmen. Konsistente Schlafenszeiten einhalten.'
    }
  },
  {
    id: 'vegan',
    name: 'Veganer & Vegetarier',
    icon: 'assets/icons/vegan.svg',
    description: 'Essentielle Nährstoffe, die bei veganer oder vegetarischer Ernährung oft fehlen.',
    price: '0,58 €',
    dailyPrice: 0.58,
    category: 'Ernährung',
    supplements: ['vitamin-d3-k2', 'omega-3', 'zink', 'multivitamin'],
    details: {
      summary: 'Diese Kombination deckt die häufigsten Nährstofflücken bei veganer oder vegetarischer Ernährung ab.',
      benefits: [
        'Vitamin D3+K2: Wichtig für Knochen und Immunsystem (veganes D3 aus Flechten)',
        'Omega-3: Algenöl als vegane Quelle für EPA und DHA',
        'Zink: Wichtig für Immunsystem und Stoffwechsel',
        'Multivitamin: Deckung von Mikronährstofflücken (besonders B12, Eisen, Jod)'
      ],
      recommendation: 'Regelmäßige Bluttests machen, um Nährstoffstatus zu überprüfen. Besonders wichtig: B12, Eisen, Ferritin, Vitamin D.'
    }
  },
  {
    id: 'aging',
    name: '50+ / Healthy Aging',
    icon: 'assets/icons/aging.svg',
    description: 'Supplements, die den Alterungsprozess verlangsamen und die Gesundheit im Alter unterstützen.',
    price: '0,78 €',
    dailyPrice: 0.78,
    category: 'Langlebigkeit',
    supplements: ['omega-3', 'vitamin-d3-k2', 'magnesium', 'kreatin'],
    details: {
      summary: 'Diese Kombination unterstützt die kognitive Funktion, Knochengesundheit, Muskelmasse und allgemeine Vitalität im Alter.',
      benefits: [
        'Omega-3: Unterstützt Gehirnfunktion und Herzgesundheit',
        'Vitamin D3+K2: Beugt Osteoporose vor und unterstützt das Immunsystem',
        'Magnesium: Fördert Muskelentspannung und Schlafqualität',
        'Kreatin: Erhält Muskelmasse und unterstützt die kognitive Funktion'
      ],
      recommendation: 'Kombiniere mit regelmäßiger Bewegung (Krafttraining + Ausdauer) und ausgewogener Ernährung.'
    }
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
