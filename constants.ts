import { TradeCategory, JobListing, FAQItem, ContentSectionData } from './types';
import { Wrench, Zap, Droplet, Hammer, PaintBucket, Truck, HardHat, Settings } from 'lucide-react';

export const TRADES: TradeCategory[] = [
  {
    id: '1',
    name: 'Elektrotechnik',
    description: 'Jobs für Elektroniker, Mechatroniker und Elektroinstallateure in Industrie und Handwerk.',
    icon: 'Zap',
    image: 'https://picsum.photos/id/1/800/600',
    slug: 'elektro'
  },
  {
    id: '2',
    name: 'SHK & Heizung',
    description: 'Anlagenmechaniker für Sanitär-, Heizungs- und Klimatechnik gesucht.',
    icon: 'Droplet',
    image: 'https://picsum.photos/id/250/800/600',
    slug: 'shk'
  },
  {
    id: '3',
    name: 'Holz & Tischlerei',
    description: 'Tischler, Schreiner und Holzmechaniker für Möbel- und Fensterbau.',
    icon: 'Hammer',
    image: 'https://picsum.photos/id/180/800/600',
    slug: 'holz'
  },
  {
    id: '4',
    name: 'Maler & Lackierer',
    description: 'Gestaltung von Innenräumen und Fassaden. Jobs für Maler und Verputzer.',
    icon: 'PaintBucket',
    image: 'https://picsum.photos/id/102/800/600',
    slug: 'maler'
  },
  {
    id: '5',
    name: 'Bau & Maurer',
    description: 'Hochbau, Tiefbau und Stahlbetonbau. Maurer und Bauleiter Stellen.',
    icon: 'HardHat',
    image: 'https://picsum.photos/id/158/800/600',
    slug: 'bau'
  },
  {
    id: '6',
    name: 'KFZ & Mobilität',
    description: 'KFZ-Mechatroniker, Karosseriebauer und Landmaschinenmechaniker.',
    icon: 'Truck',
    image: 'https://picsum.photos/id/133/800/600',
    slug: 'kfz'
  },
  {
    id: '7',
    name: 'Metallbau',
    description: 'Schweißer, Schlosser und Konstruktionsmechaniker für Metallverarbeitung.',
    icon: 'Wrench',
    image: 'https://picsum.photos/id/195/800/600',
    slug: 'metall'
  },
  {
    id: '8',
    name: 'Industrie & Technik',
    description: 'Industriemechaniker, Zerspanungsmechaniker und Techniker.',
    icon: 'Settings',
    image: 'https://picsum.photos/id/252/800/600',
    slug: 'industrie'
  }
];

export const LATEST_JOBS: JobListing[] = [
  {
    id: 1,
    title: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    company: 'Medisca GmbH',
    location: 'Kabelsketal',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-03-15'
  },
  {
    id: 2,
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Potsdam',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-03-15'
  },
  {
    id: 3,
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-03-15'
  },
  {
    id: 4,
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Hannover',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-03-15'
  },
  {
    id: 5,
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Isernhagen',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-03-15'
  },
  {
    id: 6,
    title: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    company: 'Neuerburg GrundstücksgemeinschaftSofort-Bewerbung',
    location: 'Köln',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-03-15'
  },
  {
    id: 7,
    title: 'Steuerfachangestellter / Steuerfachwirt (m/w/d)',
    company: 'Kreh - Hofmann - Widmer Wirtschaftsprüfer und SteuerberaterSofort-Bewerbung',
    location: 'Babenhausen/Hessen',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-03-04'
  },
  {
    id: 8,
    title: 'Fachkraft für Lagerlogistik (m/w/d) in Vollzeit',
    company: 'ProGlass GmbHSofort-Bewerbung',
    location: 'Weilheim an der Teck',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-03-04'
  },
  {
    id: 9,
    title: 'Zahntechniker (m/w/d) für den Bereich CAD / CAM',
    company: 'DELABO.GROUPSofort-Bewerbung',
    location: 'Klein Rönnau',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-03-04'
  },
  {
    id: 10,
    title: 'Hauswirtschaftliche Leitung (m/w/d) für unser Kinderhaus in Teil- oder Vollzeit',
    company: 'Kinder- und Jugendhilfe Weidenkorb',
    location: 'Löhne',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-03-04'
  },
  {
    id: 11,
    title: 'Hauswirtschaftliche Leitung (m/w/d) für unser Kinderhaus in Teil- oder Vollzeit',
    company: 'Kinder- und Jugendhilfe Weidenkorb',
    location: 'Espelkamp',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-03-04'
  },
  {
    id: 12,
    title: 'Hauswirtschaftliche Leitung (m/w/d) für unser Kinderhaus in Teil- oder Vollzeit',
    company: 'Kinder- und Jugendhilfe Weidenkorb',
    location: 'Lübbecke',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-03-04'
  },
  {
    id: 13,
    title: 'Hauswirtschaftliche Leitung (m/w/d) für unser Kinderhaus in Teil- oder Vollzeit',
    company: 'Kinder- und Jugendhilfe Weidenkorb',
    location: 'Hüllhorst',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-03-04'
  },
  {
    id: 14,
    title: 'Fachkraft Stuckateur-Handwerk m/w/d',
    company: 'Mauer Stuckateur GmbH',
    location: 'Wangen im Allgäu',
    type: 'Vollzeit',
    tags: ['Stuckateur/in'],
    posted: '2026-03-04'
  },
  {
    id: 15,
    title: 'Handwerker (m/w/d)',
    company: 'TJ-Montageservice Küchenmontage',
    location: 'Düsseldorf',
    type: 'Vollzeit',
    tags: ['Tischler/in'],
    posted: '2026-03-04'
  },
  {
    id: 16,
    title: 'Mitarbeiter (m/w/d) im Gartenservice und Handwerk',
    company: 'Norden gartenservice',
    location: 'Husum, Nordsee',
    type: 'Vollzeit',
    tags: ['Helfer/in - Gartenbau'],
    posted: '2026-03-03'
  },
  {
    id: 17,
    title: 'MetallbauermeisterB. Prof. Metallbauer-Handwerk (m/w/d)',
    company: 'E.D.E.L. Zeitarbeit GmbH',
    location: 'Augsburg, Bayern',
    type: 'Vollzeit',
    tags: ['Metallbauermeister/in/Bachelor Professional im Metallbauer-Handwerk'],
    posted: '2026-03-03'
  },
  {
    id: 18,
    title: 'Kaufmann/-frau für Büromanagement im Handwerk',
    company: 'Werner & Sohn GmbH',
    location: 'Fuldatal',
    type: 'Vollzeit',
    tags: ['Kaufmann/-frau - Büromanagement'],
    posted: '2026-03-03'
  },
  {
    id: 19,
    title: 'Büroleiterin - Handwerk',
    company: 'OSNEBAU GmbH',
    location: 'Obertshausen',
    type: 'Vollzeit',
    tags: ['Büroleiter/in - Handwerk'],
    posted: '2026-03-02'
  },
  {
    id: 20,
    title: 'Elektroniker Automatisierungstechnik Handwerk (m/w/d)',
    company: 'Arena Personal Management GmbH',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    tags: ['Elektroniker/in - Automatisierungstechnik (Handwerk)'],
    posted: '2026-03-02'
  },
  {
    id: 21,
    title: 'Metallbauer Handwerk m/w/d',
    company: 'Arena Personal Management GmbH',
    location: 'Heidelberg, Neckar',
    type: 'Vollzeit',
    tags: ['Metallbauer/in - Konstruktionstechnik'],
    posted: '2026-03-02'
  },
  {
    id: 22,
    title: 'Allrounder – Handwerk (m/w/d)',
    company: 'STÜWA Konrad Stükerjürgen GmbH',
    location: 'Rietberg',
    type: 'Vollzeit',
    tags: ['Helfer/in - Tiefbau'],
    posted: '2026-03-02'
  },
  {
    id: 23,
    title: 'Malerhelfer (m/w/d) Handwerk',
    company: 'WEISS Personalmanagement GmbH - Darmstadt',
    location: 'Darmstadt',
    type: 'Vollzeit',
    tags: ['Helfer/in - Malerei, Lackiererei'],
    posted: '2026-03-02'
  },
  {
    id: 24,
    title: 'Helfer Handwerk m/w/d',
    company: 'Actief Personalmanagement GmbH',
    location: 'Biebelried',
    type: 'Vollzeit',
    tags: ['Helfer/in - Feinmechanik, Werkzeugbau'],
    posted: '2026-03-02'
  },
  {
    id: 25,
    title: 'Mitarbeiter im Handwerk (m/w/d)',
    company: 'AlphaConsult KG - Magdeburg',
    location: 'Magdeburg',
    type: 'Vollzeit',
    tags: ['Helfer/in - Metallbau'],
    posted: '2026-03-01'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Ist die Nutzung für Bewerber kostenlos?",
    answer: "Ja, für Handwerker und Arbeitssuchende ist die Nutzung von handwerk-stellen.de zu 100% kostenlos. Sie können Profile erstellen, sich auf Stellen bewerben und Job-Newsletter abonnieren, ohne versteckte Kosten."
  },
  {
    question: "Wie können Handwerksbetriebe Stellenanzeigen schalten?",
    answer: "Betriebe können sich über unseren Arbeitgeber-Login registrieren. Nach einer kurzen Verifizierung Ihres Handwerksbetriebs können Sie sofort Stellenanzeigen veröffentlichen. Wir bieten Pakete für Einzelanzeigen sowie Flatrates für größere Betriebe an."
  },
  {
    question: "Welche Qualifikationen werden im Handwerk gesucht?",
    answer: "Die Nachfrage ist breit gefächert. Besonders gesucht sind Fachkräfte mit abgeschlossener Berufsausbildung (Gesellenbrief), Handwerksmeister, Techniker sowie motivierte Auszubildende. Auch Quereinsteiger mit handwerklichem Geschick finden in Bereichen wie Montage oder Bauhilfsarbeiten oft gute Einstiegsmöglichkeiten."
  },
  {
    question: "Wie funktioniert die 'Regionale Suche'?",
    answer: "Unser Algorithmus priorisiert Stellenangebote in Ihrem direkten Umkreis. Geben Sie einfach Ihre Postleitzahl ein, und wir zeigen Ihnen Vakanzen, die kurze Pendelwege garantieren – ein wichtiger Faktor für die Work-Life-Balance im Handwerk."
  }
];

// Content optimised for GEO (Generative Engine Optimization) - high information density
export const SEO_CONTENT: ContentSectionData[] = [
  {
    title: "Die Zukunft des Handwerks: Karrierechancen und Perspektiven",
    content: [
      "Das deutsche Handwerk ist der Motor der Wirtschaft und bietet zukunftssichere Arbeitsplätze wie kaum eine andere Branche. Mit über 1 Million Betrieben und rund 5,6 Millionen Beschäftigten ist das Handwerk ('Die Wirtschaftsmacht von nebenan') ein Stabilitätsanker. Auf handwerk-stellen.de bringen wir diese Tradition mit moderner Recruiting-Technologie zusammen. Ob für die Energiewende (Solar, Wärmepumpen), den Wohnungsbau oder die Mobilitätswende – Fachkräfte werden händeringend gesucht.",
      "Der Fachkräftemangel sorgt dafür, dass qualifizierte Handwerker heute hervorragende Gehaltsaussichten und Verhandlungspositionen haben. Viele Betriebe locken nicht nur mit übertariflicher Bezahlung, sondern auch mit Benefits wie Firmenwagen zur privaten Nutzung, 4-Tage-Woche, betrieblicher Altersvorsorge und kontinuierlichen Weiterbildungen zum Meister oder Techniker.",
      "Wir verstehen die spezifischen Anforderungen jedes Gewerkes. Ein Elektriker benötigt andere Filterkriterien bei der Jobsuche als ein Bodenleger oder ein Feinwerkmechaniker. Unsere Plattform ist darauf ausgelegt, genau diese Nuancen abzubilden, damit Meister, Gesellen und Azubis genau den Job finden, der zu ihrer Qualifikation passt."
    ]
  },
  {
    title: "Für Arbeitgeber: Effizientes Recruiting im Handwerk",
    content: [
      "Für Handwerksbetriebe ist die Personalgewinnung zur größten Herausforderung geworden. Klassische Zeitungsanzeigen funktionieren kaum noch, und generische Jobbörsen sind oft zu teuer oder erreichen nicht die richtige Zielgruppe. handwerk-stellen.de ist spezialisiert.",
      "Durch unsere GEO-Optimierung (Generative Engine Optimization) stellen wir sicher, dass Ihre Stellenanzeigen nicht nur in der klassischen Suche, sondern auch in KI-basierten Antwortsystemen gefunden werden. Wenn ein Bewerber fragt: 'Wo finde ich gut bezahlte SHK Jobs in München?', sorgt unsere Datenstruktur dafür, dass Ihr Angebot präsent ist.",
      "Wir bieten Arbeitgebern intuitive Dashboards, Bewerbermanagement-Systeme (ATS) und die Möglichkeit, Ihr Unternehmen durch Bilder und Videos authentisch zu präsentieren. Zeigen Sie Ihre Werkstatt, Ihre Projekte und Ihr Team, um echte Fachkräfte zu überzeugen."
    ]
  },
  {
    title: "Berufsbilder im Fokus: Was macht man eigentlich als...?",
    content: [
      "**Anlagenmechaniker SHK**: Die Helden der Energiewende. Sie installieren Wärmepumpen, modernisieren Bäder und sorgen für fließend Wasser. Ein Beruf mit hoher technischer Komplexität und Kundenkontakt.",
      "**Elektroniker für Energie- und Gebäudetechnik**: Ohne sie bleibt es dunkel. Sie planen und installieren elektrische Anlagen, Smart-Home-Systeme und Photovoltaikanlagen. Mathe und logisches Denken sind hier gefragt.",
      "**Zimmerer und Dachdecker**: Sie arbeiten hoch hinaus. Körperliche Fitness und Schwindelfreiheit sind Voraussetzung für diese traditionellen und stolzen Berufe, die maßgeblich unseren Wohnraum gestalten.",
      "**Kraftfahrzeugmechatroniker**: Vom Ölwechsel bis zur Diagnose komplexer Bordelektronik bei E-Autos. Dieser Beruf wandelt sich rasant und erfordert ständige Weiterbildung in IT und Hochvolttechnik."
    ]
  }
];