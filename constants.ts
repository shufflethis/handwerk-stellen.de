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
    title: 'Diabetesberater / Diabetesberaterin (m/w/d) - planbare Zeiten & weniger Stress',
    company: 'Vantis MVZ GmbH',
    location: 'Düsseldorf',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-05-03'
  },
  {
    id: 2,
    title: 'Gruppenhelfer im pädagogischen Bereich (m/w/d)',
    company: 'Werkstätten Hainbachtal gemeinnützige GmbHSofort-Bewerbung',
    location: 'Offenbach/Main',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-05-03'
  },
  {
    id: 3,
    title: 'Gruppenhelfer im pädagogischen Bereich (m/w/d)',
    company: 'Werkstätten Hainbachtal gemeinnützige GmbHSofort-Bewerbung',
    location: 'Rödermark',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-05-03'
  },
  {
    id: 4,
    title: 'Lagerlogistik / Experte für SAP EWM (m/w/d)',
    company: 'Pfeifer & Langen Logistik GmbHSofort-Bewerbung',
    location: 'Könnern',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-05-03'
  },
  {
    id: 5,
    title: 'Lagerlogistik / Experte für SAP EWM (m/w/d)',
    company: 'Pfeifer & Langen Logistik GmbHSofort-Bewerbung',
    location: 'Elsdorf/Rheinland',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-05-03'
  },
  {
    id: 6,
    title: 'Helfer - Handwerk (m/w/d)',
    company: 'iperdi AHR GmbH - Niederlassung Stade',
    location: 'Stade, Niederelbe',
    type: 'Vollzeit',
    tags: ['Lager- und Transportarbeiter/in'],
    posted: '2026-05-01'
  },
  {
    id: 7,
    title: 'Mitarbeiter (m/w/d) im Handwerk',
    company: 'Stewe Personalservice GmbH & Co. KG - Niederlassung Wissen',
    location: 'Wissen, Sieg',
    type: 'Vollzeit',
    tags: ['Helfer/in - Ausbau'],
    posted: '2026-05-01'
  },
  {
    id: 8,
    title: 'Helfer - Handwerk (m/w/d)',
    company: 'Tempton Personaldienstleistungen GmbH NL Münster',
    location: 'Münster, Westfalen',
    type: 'Vollzeit',
    tags: ['Helfer/in - Glasherstellung und -verarbeitung'],
    posted: '2026-05-01'
  },
  {
    id: 9,
    title: 'Maler im Handwerk (m/w/d) dringend',
    company: 'ARWA Personaldienstleistungen GmbH',
    location: 'Ebersdorf bei Coburg',
    type: 'Vollzeit',
    tags: ['Maler/in und Tapezierer/in'],
    posted: '2026-05-01'
  },
  {
    id: 10,
    title: 'Bürofachkraft im Handwerk m/w/d',
    company: 'Hans Frey Rolladen & Sonnenschutz GmbH',
    location: 'Fellbach, Württemberg',
    type: 'Vollzeit',
    tags: ['Kaufmännische Fachkraft'],
    posted: '2026-04-30'
  },
  {
    id: 11,
    title: 'Helfer - Handwerk (m/w/d)',
    company: 'iperdi AHR GmbH - Niederlassung Harburg',
    location: 'Hamburg',
    type: 'Vollzeit',
    tags: ['Helfer/in - Feinmechanik, Werkzeugbau'],
    posted: '2026-04-30'
  },
  {
    id: 12,
    title: 'Helfer (m/w/d) Handwerk',
    company: 'akut... Kompetente Lösungen GmbH',
    location: 'Salzgitter',
    type: 'Vollzeit',
    tags: ['Helfer/in - Malerei, Lackiererei'],
    posted: '2026-04-30'
  },
  {
    id: 13,
    title: 'Maler im Handwerk (m/w/d)',
    company: 'ARWA Personaldienstleistungen GmbH',
    location: 'Ilmenau, Thüringen',
    type: 'Vollzeit',
    tags: ['Maler/in und Lackierer/in - Maler/in'],
    posted: '2026-04-29'
  },
  {
    id: 14,
    title: 'Maler im Handwerk (m/w/d)',
    company: 'ARWA Personaldienstleistungen GmbH',
    location: 'Montabaur',
    type: 'Vollzeit',
    tags: ['Maler/in und Lackierer/in - Maler/in'],
    posted: '2026-04-29'
  },
  {
    id: 15,
    title: 'Handwerk Allrounder (m/w/d)',
    company: 'Lehmann Personalmanagement GmbH',
    location: 'München',
    type: 'Vollzeit',
    tags: ['Fachkraft - Gebäudetechnik'],
    posted: '2026-04-28'
  },
  {
    id: 16,
    title: 'Vertriebsmitarbeiter, Handwerk Handels GmbH',
    company: 'Handwerk Handels GmbH',
    location: 'Apolda',
    type: 'Vollzeit',
    tags: ['Vertriebsassistent/in'],
    posted: '2026-04-27'
  },
  {
    id: 17,
    title: 'Vertriebsmitarbeiter (m/w/d) Maschinenbau und Fertigungstechnik',
    company: 'Berner + Straller GmbHSofort-Bewerbung',
    location: 'Nürnberg',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-26'
  },
  {
    id: 18,
    title: 'Sachbearbeiter/in (m/w/d) KAT 3 BK',
    company: 'Berufsgenossenschaft Rohstoffe und chemische Industrie (BG RCI)',
    location: 'Ober-Olm',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-26'
  },
  {
    id: 19,
    title: 'Sachbearbeiter/in (m/w/d) KAT 3 BK',
    company: 'Berufsgenossenschaft Rohstoffe und chemische Industrie (BG RCI)',
    location: 'Heidelberg',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-26'
  },
  {
    id: 20,
    title: 'Bürokaufmann / Assistenz (m/w/d) Immobilienunternehmen in Schönefeld bei Berlin',
    company: 'Vasto GmbH',
    location: 'Schönefeld',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-19'
  },
  {
    id: 21,
    title: 'Ausbildung Prüfingenieur/-in (m/w/d) bzw. Sachverständige/-r (m/w/d) für den Tätigkeitsbereich Fahrzeugprüfung und Fahrerlaubnisprüfung',
    company: 'TÜV Technische Überwachung Hessen GmbH',
    location: 'Frankenberg/Eder',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-19'
  },
  {
    id: 22,
    title: 'Ausbildung Prüfingenieur/-in (m/w/d) bzw. Sachverständige/-r (m/w/d) für den Tätigkeitsbereich Fahrzeugprüfung und Fahrerlaubnisprüfung',
    company: 'TÜV Technische Überwachung Hessen GmbH',
    location: 'Korbach',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-19'
  },
  {
    id: 23,
    title: 'Senior Specialist HR Business Partner (m/w/d) - Elternzeitvertretung',
    company: 'UPM - The Biofore Company',
    location: 'Hamburg',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-19'
  },
  {
    id: 24,
    title: 'Senior Specialist HR Business Partner (m/w/d) - Elternzeitvertretung',
    company: 'UPM - The Biofore Company',
    location: 'Augsburg',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-19'
  },
  {
    id: 25,
    title: 'Arzt/Ärztin (m/w/d) im Amtsärztlichen Dienst als Leitung der medizinischen Dienste des Gesundheitsamtes',
    company: 'Kreis EuskirchenSofort-Bewerbung',
    location: 'Euskirchen',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-19'
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