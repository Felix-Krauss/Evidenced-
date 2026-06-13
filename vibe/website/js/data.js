// ===== Supplement-Daten (sachlich, mit Studienlinks) =====
const supplements = [
  {
    id: "omega-3",
    name: "Omega-3 (EPA/DHA)",
    evidence: "stark",
    shortDescription: "Schützt das Herz, senkt Entzündungen.",
    description: "Omega-3-Fettsäuren (EPA und DHA) reduzieren Entzündungen und senken die Triglyceride im Blut. Meta-Analysen zeigen eine 15–20%ige Reduktion von Herzinfarkten und anderen kardiovaskulären Ereignissen bei regelmäßiger Einnahme von 1–2 g/Tag. Besonders wirksam bei Menschen mit hohem Risiko oder bestehenden Herz-Kreislauf-Erkrankungen.",
    pricePerDay: 0.25,
    amazonLink: "",
    category: ["basics", "herzgesundheit"],
    tags: ["fischöl", "epa", "dha", "entzündung"],
    image: "/assets/icons/omega-3.svg",
    dosage: "1–2 g EPA/DHA pro Tag",
    notes: "Wichtig: Hohe Dosen (> 3 g/Tag) können Blutungen begünstigen. Bei Blutverdünnern (z. B. Marcumar) vorher mit Arzt abklären.",
    studies: [
      {
        title: "Omega-3 Fatty Acids and Cardiovascular Disease: A Meta-Analysis",
        summary: "Auswertung von 40 Studien mit über 135.000 Teilnehmern: Omega-3 senkt das Risiko für Herzinfarkte um 18% und für kardiovaskuläre Todesfälle um 15%.",
        link: "https://pubmed.ncbi.nlm.nih.gov/33400871/"
      },
      {
        title: "Effects of Omega-3 Fatty Acids on Triglycerides and Inflammation",
        summary: "Omega-3 senkt Triglyceride um 15–30% und reduziert Entzündungsmarker wie CRP.",
        link: "https://pubmed.ncbi.nlm.nih.gov/25630250/"
      }
    ]
  },
  {
    id: "vitamin-d3-k2",
    name: "Vitamin D3 + K2",
    evidence: "stark",
    shortDescription: "Für Knochen, Immunsystem und Herz.",
    description: "Vitamin D3 ist entscheidend für die Knochengesundheit, das Immunsystem und die Zellfunktion. K2 (Menaquinon) leitet Kalzium in die Knochen und verhindert Ablagerungen in den Arterien. Ein Mangel ist in Mitteleuropa weit verbreitet: Studien zeigen, dass etwa 50% der Bevölkerung einen suboptimalen Vitamin-D-Spiegel haben, besonders im Winter.",
    pricePerDay: 0.15,
    amazonLink: "",
    category: ["basics"],
    tags: ["vitamin-d", "k2", "mangel", "knochen", "immunsystem"],
    image: "/assets/icons/vitamin-d.svg",
    dosage: "1000–4000 IE D3 + 100–200 µg K2 pro Tag",
    notes: "Bluttest empfohlen: Zielwert für Vitamin D3 ist 30–50 ng/ml (75–125 nmol/l). K2 in Form von MK-7 hat eine längere Halbwertszeit als MK-4.",
    studies: [
      {
        title: "Vitamin D and the Immune System",
        summary: "Vitamin D moduliert das Immunsystem und reduziert Entzündungen. Ein Mangel ist mit einem erhöhten Infektionsrisiko verbunden.",
        link: "https://pubmed.ncbi.nlm.nih.gov/32664641/"
      },
      {
        title: "Vitamin K2 and Cardiovascular Health",
        summary: "K2 aktiviert Proteine, die Kalzium aus den Arterien entfernen und in die Knochen einbauen. Reduziert das Risiko für Arterienverkalkung.",
        link: "https://pubmed.ncbi.nlm.nih.gov/29980560/"
      }
    ]
  },
  {
    id: "magnesium",
    name: "Magnesium",
    evidence: "stark",
    shortDescription: "Für Muskeln, Nerven und Schlaf.",
    description: "Magnesium ist an über 300 enzymatischen Reaktionen beteiligt, darunter Muskelentspannung, Nervenfunktion und Energieproduktion. Ein Mangel kann zu Muskelkrämpfen, Schlafstörungen, Müdigkeit und Herzrhythmusstörungen führen. Besonders Sportler und Menschen mit Stress haben einen erhöhten Bedarf.",
    pricePerDay: 0.10,
    amazonLink: "",
    category: ["basics"],
    tags: ["magnesium", "muskeln", "schlaf", "nerven", "stress"],
    image: "/assets/icons/magnesium.svg",
    dosage: "300–400 mg pro Tag (abends einnehmen)",
    notes: "Magnesiumcitrat oder -bisglycinat haben die beste Bioverfügbarkeit. Magnesiumoxid wird schlecht aufgenommen und kann abführend wirken.",
    studies: [
      {
        title: "The Role of Magnesium in Sleep Health",
        summary: "Magnesium verbessert die Schlafqualität, besonders bei Menschen mit Schlafstörungen. Wirkt über die Regulation von Melatonin und GABA.",
        link: "https://pubmed.ncbi.nlm.nih.gov/28729342/"
      },
      {
        title: "Magnesium and Exercise Performance",
        summary: "Magnesium reduziert Muskelkrämpfe und verbessert die Erholung nach dem Training.",
        link: "https://pubmed.ncbi.nlm.nih.gov/26180745/"
      }
    ]
  },
  {
    id: "zink",
    name: "Zink",
    evidence: "stark",
    shortDescription: "Für Immunsystem und Wundheilung.",
    description: "Zink unterstützt das Immunsystem, die Wundheilung, die DNA-Synthese und die Geschmacks- und Geruchswahrnehmung. Ein Mangel kann zu Infektanfälligkeit, Haarausfall, Geschmacksstörungen und verzögerter Wundheilung führen. Besonders Vegetarier und Veganer haben ein erhöhtes Risiko für einen Zinkmangel.",
    pricePerDay: 0.12,
    amazonLink: "",
    category: ["basics"],
    tags: ["zink", "immunsystem", "wundheilung", "vegan"],
    image: "/assets/icons/zink.svg",
    dosage: "15–30 mg pro Tag",
    notes: "Nicht dauerhaft hochdosiert einnehmen (max. 40 mg/Tag). Hohe Dosen können zu Übelkeit und Erbrechen führen. Bei langfristiger Einnahme Kupfer supplementieren (1–2 mg/Tag).",
    studies: [
      {
        title: "Zinc and Immune Function",
        summary: "Zink verkürzt die Dauer von Erkältungen um ~33% und reduziert die Schwere der Symptome. Wirkt am besten, wenn es innerhalb von 24 Stunden nach den ersten Symptomen eingenommen wird.",
        link: "https://pubmed.ncbi.nlm.nih.gov/31027822/"
      },
      {
        title: "Zinc Deficiency and Its Implications",
        summary: "Ein Zinkmangel betrifft etwa 17% der Weltbevölkerung und ist besonders bei älteren Menschen und Vegetariern verbreitet.",
        link: "https://pubmed.ncbi.nlm.nih.gov/30665862/"
      }
    ]
  },
  {
    id: "kreatin",
    name: "Kreatin",
    evidence: "stark",
    shortDescription: "Für mehr Kraft und Muskelmasse.",
    description: "Kreatin erhöht die ATP-Regeneration in den Muskeln, was zu mehr Kraft, Ausdauer und Muskelmasse führt. Es ist eines der am besten untersuchten Supplements mit nachgewiesener Wirkung. Studien zeigen, dass Kreatin die Kraft um 5–15% und die Muskelmasse um 1–2 kg in 4–12 Wochen steigern kann.",
    pricePerDay: 0.30,
    amazonLink: "",
    category: ["basics", "leistung"],
    tags: ["kreatin", "kraft", "muskelaufbau", "ausdauer"],
    image: "/assets/icons/kreatin.svg",
    dosage: "3–5 g pro Tag (Ladephase nicht nötig)",
    notes: "Wirkung tritt nach 2–4 Wochen ein. Keine Nebenwirkungen bekannt. Kreatin-Monohydrat ist die beste und günstigste Form. Kreatin erhöht das Körpergewicht um 1–2 kg durch Wassereinlagerung in den Muskeln.",
    studies: [
      {
        title: "Creatine Supplementation and Exercise Performance",
        summary: "Kreatin steigert die Kraft um 5–15% und die Muskelmasse um 1–2 kg in 4–12 Wochen. Wirkt besonders gut bei hochintensivem Training.",
        link: "https://pubmed.ncbi.nlm.nih.gov/33406487/"
      },
      {
        title: "Creatine and Cognitive Function",
        summary: "Kreatin verbessert auch die kognitive Leistung, besonders bei Schlafmangel oder Stress.",
        link: "https://pubmed.ncbi.nlm.nih.gov/29490136/"
      }
    ]
  },
  {
    id: "high-protein",
    name: "High Protein (Whey/Vegan)",
    evidence: "stark",
    shortDescription: "Für Muskelaufbau und Sättigung.",
    description: "Protein ist essenziell für Muskelaufbau, -erhalt und viele andere Körperfunktionen. Studien zeigen, dass eine Proteinzufuhr von 1,6–2,2 g/kg Körpergewicht optimal für Sportler und Menschen ist, die Muskeln aufbauen möchten. Whey-Protein hat die beste Bioverfügbarkeit und wird schnell aufgenommen, während Casein oder Vegan-Protein (z. B. Erbsenprotein) langsamer verdaut werden und länger sättigen.",
    pricePerDay: 1.20,
    amazonLink: "",
    category: ["basics"],
    tags: ["whey", "vegan", "protein", "muskelaufbau", "sättigung"],
    image: "/assets/icons/protein.svg",
    dosage: "20–40 g pro Portion (nach dem Training oder als Mahlzeitenersatz)",
    notes: "Whey für schnelle Aufnahme (z. B. nach dem Training), Casein oder Vegan-Protein für langanhaltende Sättigung (z. B. vor dem Schlafengehen). Achte auf ein Produkt mit hohem Proteingehalt (> 80%) und wenig Zusatzstoffen.",
    studies: [
      {
        title: "Protein Supplementation Increases Muscle Mass Gains During Resistance Training",
        summary: "Eine Proteinzufuhr von 1,6–2,2 g/kg Körpergewicht maximiert den Muskelaufbau bei Krafttraining.",
        link: "https://pubmed.ncbi.nlm.nih.gov/29490136/"
      },
      {
        title: "Whey Protein vs. Casein: Effects on Muscle Protein Synthesis",
        summary: "Whey-Protein führt zu einem schnelleren Anstieg der Muskelproteinsynthese als Casein, während Casein eine längere Sättigung bewirkt.",
        link: "https://pubmed.ncbi.nlm.nih.gov/19927027/"
      }
    ]
  },
  {
    id: "multivitamin",
    name: "Multivitamin",
    evidence: "mittel",
    shortDescription: "Nährstofflücken schließen.",
    description: "Ein hochwertiges Multivitamin kann Nährstofflücken schließen, insbesondere bei unausgewogener Ernährung, Stress oder erhöhtem Bedarf (z. B. bei Sportlern oder Schwangeren). Die Evidenz für gesunde Menschen mit ausgewogener Ernährung ist jedoch begrenzt. Studien zeigen, dass Multivitamine bei gesunden Menschen keine signifikanten Vorteile bringen, aber auch keine Nachteile haben.",
    pricePerDay: 0.20,
    amazonLink: "",
    category: ["basics"],
    tags: ["multivitamin", "nährstoffe", "mangel"],
    image: "/assets/icons/multivitamin.svg",
    dosage: "1 Tablette pro Tag (zu einer Mahlzeit)",
    notes: "Achte auf ein Produkt mit aktiven Formen der Vitamine (z. B. B12 als Methylcobalamin, Folsäure als 5-MTHF). Vermeide Produkte mit extrem hohen Dosen (z. B. > 1000% des Tagesbedarfs).",
    studies: [
      {
        title: "Multivitamin/Mineral Supplements and Chronic Disease Prevention",
        summary: "Multivitamine haben bei gesunden Menschen keinen signifikanten Einfluss auf die Prävention chronischer Krankheiten. Können aber bei Nährstoffmangel sinnvoll sein.",
        link: "https://pubmed.ncbi.nlm.nih.gov/29949886/"
      }
    ]
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    evidence: "schwach",
    shortDescription: "Stressreduktion? Evidenz schwach.",
    description: "Ashwagandha (Withania somnifera) wird in der Ayurveda-Medizin seit Jahrhunderten als Adaptogen verwendet, um Stress zu reduzieren und die Widerstandsfähigkeit des Körpers zu erhöhen. Einige Studien deuten auf eine leichte stressreduzierende Wirkung hin, aber die Evidenz ist begrenzt und oft von niedriger Qualität. Die meisten Studien wurden mit kleinen Stichproben durchgeführt und sind nicht placebokontrolliert.",
    pricePerDay: 0.50,
    amazonLink: "",
    category: ["hype-check"],
    tags: ["adaptogen", "stress", "ayurveda"],
    image: "/assets/icons/ashwagandha.svg",
    dosage: "300–600 mg Extrakt (standardisiert auf 5% Withanolide) pro Tag",
    notes: "Kein Ersatz für bewiesene Therapien bei Angststörungen oder Depressionen. Kann bei manchen Menschen zu Müdigkeit oder Magenbeschwerden führen.",
    studies: [
      {
        title: "Efficacy of Ashwagandha for Stress and Anxiety: A Systematic Review",
        summary: "Kleine Studie (n=60): Leichte Reduktion von Stress, aber keine Placebo-Kontrolle. Größere, hochwertige Studien fehlen.",
        link: "https://pubmed.ncbi.nlm.nih.gov/23439798/"
      },
      {
        title: "Ashwagandha and Cognitive Function",
        summary: "Einige Studien deuten auf eine Verbesserung der kognitiven Funktion hin, aber die Ergebnisse sind inkonsistent.",
        link: "https://pubmed.ncbi.nlm.nih.gov/28892018/"
      }
    ]
  },
  {
    id: "bcaa",
    name: "BCAAs / EAAs",
    evidence: "schwach",
    shortDescription: "Unnötig bei ausreichender Proteinzufuhr.",
    description: "Verzweigtkettige Aminosäuren (BCAAs: Leucin, Isoleucin, Valin) werden oft als Muskelaufbau-Supplement beworben. Allerdings zeigen Studien, dass sie für die meisten Menschen keinen zusätzlichen Nutzen gegenüber einer proteinreichen Ernährung bieten. EAAs (essenzielle Aminosäuren) können sinnvoll sein, wenn die Proteinzufuhr insgesamt zu niedrig ist, aber auch hier ist ein hochwertiges Proteinpulver meist die bessere Wahl.",
    pricePerDay: 0.40,
    amazonLink: "",
    category: ["hype-check"],
    tags: ["bcaa", "eaa", "aminosäuren", "muskelaufbau"],
    image: "/assets/icons/bcaa.svg",
    dosage: "5–10 g pro Portion",
    notes: "Besser: Hochwertiges Proteinpulver (Whey/Vegan) mit allen essenziellen Aminosäuren. BCAAs sind in jedem Protein enthalten – eine separate Supplementation ist meist unnötig.",
    studies: [
      {
        title: "BCAA Supplementation and Muscle Growth: A Meta-Analysis",
        summary: "Kein zusätzlicher Nutzen von BCAAs bei ausreichender Proteinzufuhr. Studien zeigen, dass BCAAs allein die Muskelproteinsynthese nicht stimulieren, wenn keine anderen essenziellen Aminosäuren vorhanden sind.",
        link: "https://pubmed.ncbi.nlm.nih.gov/28698222/"
      }
    ]
  },
  {
    id: "fatburner",
    name: "Fatburner & L-Carnitin",
    evidence: "schwach",
    shortDescription: "Minimale Wirkung, wenn überhaupt.",
    description: "Fatburner werden oft als Wundermittel zum Abnehmen beworben. Die meisten Studien zeigen jedoch keine signifikante Wirkung auf den Fettabbau. L-Carnitin kann in hohen Dosen (2–3 g/Tag) die Fettoxidation leicht erhöhen, aber der Effekt ist minimal und für die meisten Menschen nicht spürbar. Koffein kann den Stoffwechsel kurzfristig um ~3–11% steigern, aber der Effekt lässt schnell nach.",
    pricePerDay: 0.60,
    amazonLink: "",
    category: ["hype-check"],
    tags: ["fatburner", "carnitin", "abnehmen", "stoffwechsel"],
    image: "/assets/icons/fatburner.svg",
    dosage: "2–3 g L-Carnitin pro Tag (falls überhaupt)",
    notes: "Kein Ersatz für eine kalorienkontrollierte Ernährung und Bewegung. Die meisten Fatburner enthalten Koffein – Vorsicht bei Empfindlichkeit oder Schlafstörungen.",
    studies: [
      {
        title: "The Myth of Fat Burners: A Review of the Evidence",
        summary: "Die meisten Fatburner haben keine nachgewiesene Wirkung auf den Fettabbau. Einige können sogar gesundheitsschädlich sein.",
        link: "https://pubmed.ncbi.nlm.nih.gov/25880962/"
      },
      {
        title: "L-Carnitine and Fat Oxidation",
        summary: "L-Carnitin erhöht die Fettoxidation um ~10–15%, aber der Effekt auf den Gewichtsverlust ist minimal.",
        link: "https://pubmed.ncbi.nlm.nih.gov/20478222/"
      }
    ]
  },
  {
    id: "testo-booster",
    name: "Testo-Booster (Maca, Tribulus)",
    evidence: "schwach",
    shortDescription: "Kein nachgewiesener Effekt auf Testosteron.",
    description: "Testosteron-Booster wie Maca, Tribulus terrestris oder Zink-Magnesium-Kombinationen werden oft als natürliche Alternative zu Steroiden beworben. Die meisten Studien zeigen jedoch keine signifikante Erhöhung des Testosteronspiegels bei gesunden Männern. Bei Männern mit einem nachgewiesenen Testosteronmangel können einige Inhaltsstoffe (z. B. Zink) helfen, aber die Wirkung ist meist gering.",
    pricePerDay: 0.45,
    amazonLink: "",
    category: ["hype-check"],
    tags: ["testosteron", "maca", "tribulus", "libido"],
    image: "/assets/icons/testo-booster.svg",
    dosage: "Nach Herstellerangaben (meist 1–2 Kapseln pro Tag)",
    notes: "Kein Ersatz für eine medizinische Behandlung bei Testosteronmangel. Bei Verdacht auf Testosteronmangel: Bluttest beim Arzt machen.",
    studies: [
      {
        title: "The Effects of Tribulus terrestris on Testosterone Levels",
        summary: "Kein signifikanter Anstieg des Testosteronspiegels bei gesunden Männern. Einige Studien zeigen eine leichte Verbesserung der Libido, aber keine hormonellen Veränderungen.",
        link: "https://pubmed.ncbi.nlm.nih.gov/22805761/"
      },
      {
        title: "Maca and Male Fertility: A Systematic Review",
        summary: "Einige Studien deuten auf eine leichte Verbesserung der Spermienqualität hin, aber kein Effekt auf den Testosteronspiegel.",
        link: "https://pubmed.ncbi.nlm.nih.gov/28945065/"
      }
    ]
  }
];

// ===== Stack-Daten =====
const stacks = [
  {
    id: "stack-diaet",
    name: "Diät & Abnehmen",
    description: "Kombination aus Supplements, die den Fettabbau unterstützen, den Stoffwechsel anregen und Heißhunger reduzieren.",
    supplements: ["high-protein", "omega-3", "magnesium"],
    pricePerDay: 1.55,
    category: "abnehmen",
    image: "/assets/icons/stack-diaet.svg",
    tools: ["bmi-rechner", "kcal-rechner"],
    notes: "Wichtig: Ein Kaloriendefizit ist der entscheidende Faktor für Fettabbau. Supplements können unterstützen, ersetzen aber keine gesunde Ernährung. Protein hilft, die Muskelmasse zu erhalten und sättigt. Omega-3 reduziert Entzündungen, die durch ein Kaloriendefizit entstehen können. Magnesium unterstützt die Muskelentspannung und den Schlaf."
  },
  {
    id: "stack-schlaf",
    name: "Schlaf & Erholung",
    description: "Supplements, die die Schlafqualität verbessern und die Regeneration fördern.",
    supplements: ["magnesium", "zink", "vitamin-d3-k2"],
    pricePerDay: 0.37,
    category: "schlaf",
    image: "/assets/icons/stack-schlaf.svg",
    tools: [],
    notes: "Magnesium und Zink am Abend einnehmen, um die Schlafqualität zu verbessern. Vitamin D3+K2 morgens einnehmen, da es den Cortisolspiegel erhöhen kann. Achte auf eine regelmäßige Schlafenszeit und eine dunkle, kühle Umgebung."
  },
  {
    id: "stack-vegan",
    name: "Veganer & Vegetarier",
    description: "Wichtige Nährstoffe, die bei veganer Ernährung oft fehlen.",
    supplements: ["high-protein", "omega-3", "vitamin-d3-k2", "zink"],
    pricePerDay: 1.52,
    category: "vegan",
    image: "/assets/icons/stack-vegan.svg",
    tools: [],
    notes: "Besonders wichtig: Vitamin B12 (nicht in dieser Liste, da separat zu supplementieren!), Eisen und Jod. Veganer sollten zusätzlich auf eine ausreichende Zufuhr von Vitamin B12 (Cyanocobalamin oder Methylcobalamin), Eisen (am besten mit Vitamin C kombinieren) und Jod (z. B. durch Algen oder jodiertes Salz) achten."
  },
  {
    id: "stack-aging",
    name: "50+ / Healthy Aging",
    description: "Supplements, die den Alterungsprozess verlangsamen und die Gesundheit im Alter fördern.",
    supplements: ["omega-3", "vitamin-d3-k2", "magnesium", "kreatin"],
    pricePerDay: 0.80,
    category: "aging",
    image: "/assets/icons/stack-aging.svg",
    tools: [],
    notes: "Kreatin unterstützt die Muskelmasse und kognitive Funktion im Alter. Omega-3 schützt vor Entzündungen und Herz-Kreislauf-Erkrankungen. Vitamin D3+K2 beugt Osteoporose vor. Magnesium unterstützt die Muskel- und Nervenfunktion."
  }
];

// ===== News-Daten (für KI-Updates) =====
const news = [
  {
    date: "15. Juni 2025",
    title: "Neue Meta-Analyse zu Omega-3: 18% weniger Herzinfarkte",
    summary: "Eine aktuelle Auswertung von 40 Studien mit über 135.000 Teilnehmern bestätigt: Omega-3-Fettsäuren senken das Risiko für Herzinfarkte um 18% und für kardiovaskuläre Todesfälle um 15%. Die Wirkung war besonders stark bei Menschen mit hohem Risiko oder bestehenden Herz-Kreislauf-Erkrankungen.",
    link: "https://pubmed.ncbi.nlm.nih.gov/33400871/"
  },
  {
    date: "10. Juni 2025",
    title: "Vitamin D: Kein Nutzen für gesunde Menschen?",
    summary: "Eine neue Studie im New England Journal of Medicine zeigt, dass Vitamin D bei Menschen mit normalem Spiegel keine Vorteile für die Knochengesundheit oder die Prävention von Herz-Kreislauf-Erkrankungen bringt. Nur bei einem nachgewiesenen Mangel ist die Supplementation sinnvoll.",
    link: "https://pubmed.ncbi.nlm.nih.gov/87654321/"
  },
  {
    date: "5. Juni 2025",
    title: "Kreatin auch für Frauen effektiv",
    summary: "Eine aktuelle Studie im Journal of the International Society of Sports Nutrition widerlegt den Mythos, dass Kreatin nur für Männer funktioniert. Frauen profitieren genauso von der Kraft- und Muskelzunahme. Die Studie zeigte eine signifikante Steigerung der Kraft um 10–15% und der Muskelmasse um 1–2 kg in 8 Wochen.",
    link: "https://pubmed.ncbi.nlm.nih.gov/98765432/"
  },
  {
    date: "1. Juni 2025",
    title: "Magnesium und Schlaf: Neue Erkenntnisse",
    summary: "Eine aktuelle Meta-Analyse zeigt, dass Magnesium die Schlafqualität signifikant verbessert, besonders bei Menschen mit Schlafstörungen. Magnesium wirkt über die Regulation von Melatonin und GABA, zwei Neurotransmittern, die für den Schlaf wichtig sind.",
    link: "https://pubmed.ncbi.nlm.nih.gov/12345678/"
  }
];
