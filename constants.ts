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
    title: 'Vertriebsmitarbeiter (m/w/d) Maschinenbau und Fertigungstechnik',
    company: 'Berner + Straller GmbHSofort-Bewerbung',
    location: 'Nürnberg',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-26'
  },
  {
    id: 2,
    title: 'Sachbearbeiter/in (m/w/d) KAT 3 BK',
    company: 'Berufsgenossenschaft Rohstoffe und chemische Industrie (BG RCI)',
    location: 'Ober-Olm',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-26'
  },
  {
    id: 3,
    title: 'Sachbearbeiter/in (m/w/d) KAT 3 BK',
    company: 'Berufsgenossenschaft Rohstoffe und chemische Industrie (BG RCI)',
    location: 'Heidelberg',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-26'
  },
  {
    id: 4,
    title: 'Bürokaufmann / Assistenz (m/w/d) Immobilienunternehmen in Schönefeld bei Berlin',
    company: 'Vasto GmbH',
    location: 'Schönefeld',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-19'
  },
  {
    id: 5,
    title: 'Ausbildung Prüfingenieur/-in (m/w/d) bzw. Sachverständige/-r (m/w/d) für den Tätigkeitsbereich Fahrzeugprüfung und Fahrerlaubnisprüfung',
    company: 'TÜV Technische Überwachung Hessen GmbH',
    location: 'Frankenberg/Eder',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-19'
  },
  {
    id: 6,
    title: 'Ausbildung Prüfingenieur/-in (m/w/d) bzw. Sachverständige/-r (m/w/d) für den Tätigkeitsbereich Fahrzeugprüfung und Fahrerlaubnisprüfung',
    company: 'TÜV Technische Überwachung Hessen GmbH',
    location: 'Korbach',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-19'
  },
  {
    id: 7,
    title: 'Senior Specialist HR Business Partner (m/w/d) - Elternzeitvertretung',
    company: 'UPM - The Biofore Company',
    location: 'Hamburg',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-19'
  },
  {
    id: 8,
    title: 'Senior Specialist HR Business Partner (m/w/d) - Elternzeitvertretung',
    company: 'UPM - The Biofore Company',
    location: 'Augsburg',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-19'
  },
  {
    id: 9,
    title: 'Arzt/Ärztin (m/w/d) im Amtsärztlichen Dienst als Leitung der medizinischen Dienste des Gesundheitsamtes',
    company: 'Kreis EuskirchenSofort-Bewerbung',
    location: 'Euskirchen',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-19'
  },
  {
    id: 10,
    title: 'Pflegefachkraft (Altenpfleger:in oder Krankenpfleger:in/Gesundheits- u. Krankenpfleger:in o. Kinderkrankenpfleger:in) (m/w/d)',
    company: 'AZURIT Seniorenzentrum Bautzner BergSofort-Bewerbung',
    location: 'Kamenz',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-12'
  },
  {
    id: 11,
    title: 'Fahrzeuglackierer (m/w/d) für mobile Kfz-Lackierarbeiten im Außendienst in Vollzeit',
    company: 'Einzelunternehmen Andreas SchmitzSofort-Bewerbung',
    location: 'Köln',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-12'
  },
  {
    id: 12,
    title: 'Fahrzeuglackierer (m/w/d) für mobile Kfz-Lackierarbeiten im Außendienst in Vollzeit',
    company: 'Einzelunternehmen Andreas SchmitzSofort-Bewerbung',
    location: 'Bonn',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-12'
  },
  {
    id: 13,
    title: 'Fahrzeuglackierer (m/w/d) für mobile Kfz-Lackierarbeiten im Außendienst in Vollzeit',
    company: 'Einzelunternehmen Andreas SchmitzSofort-Bewerbung',
    location: 'Leverkusen',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-12'
  },
  {
    id: 14,
    title: 'Fahrzeuglackierer (m/w/d) für mobile Kfz-Lackierarbeiten im Außendienst in Vollzeit',
    company: 'Einzelunternehmen Andreas SchmitzSofort-Bewerbung',
    location: 'Brühl/Rheinland',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-12'
  },
  {
    id: 15,
    title: 'Vorarbeiter Reinigung in Vollzeit (m/w/d)',
    company: 'Albert Schweitzer Stiftung - Wohnen & Betreuen',
    location: 'Berlin',
    type: 'Vollzeit',
    tags: [],
    posted: '2026-04-12'
  },
  {
    id: 16,
    title: 'Verkäufer Handwerk  (m/w/d)',
    company: 'I.K. Hofmann GmbH Regensburg II',
    location: 'Schierling',
    type: 'Vollzeit',
    tags: ['Verkaufsberater/in'],
    posted: '2026-04-10'
  },
  {
    id: 17,
    title: 'Handwerker m/w/d',
    company: 'NIHS GmbH',
    location: 'Lilienthal bei Bremen',
    type: 'Vollzeit',
    tags: ['Isolierer/in'],
    posted: '2026-04-10'
  },
  {
    id: 18,
    title: 'Betriebsassistent/in - Handwerk',
    company: 'Oldtimer Restaurant Betriebsgesellschaft m.b.H.',
    location: 'Unterauerling',
    type: 'Vollzeit',
    tags: ['Betriebsassistent/in - Handwerk'],
    posted: '2026-04-09'
  },
  {
    id: 19,
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG',
    location: 'Amt Wachsenburg',
    type: 'Vollzeit',
    tags: ['Bodenleger/in'],
    posted: '2026-04-09'
  },
  {
    id: 20,
    title: 'Maler im Handwerk (m/w/d)',
    company: 'ARWA Personaldienstleistungen GmbH',
    location: 'Rodewisch',
    type: 'Vollzeit',
    tags: ['Maler/in und Lackierer/in - Maler/in'],
    posted: '2026-04-09'
  },
  {
    id: 21,
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG',
    location: 'Gera',
    type: 'Vollzeit',
    tags: ['Maler/in und Lackierer/in - Gestaltung und Instandhaltung'],
    posted: '2026-04-09'
  },
  {
    id: 22,
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG Projekt- u. Baumanagement',
    location: 'Chemnitz, Sachsen',
    type: 'Vollzeit',
    tags: ['Maler/in und Lackierer/in - Gestaltung und Instandhaltung'],
    posted: '2026-04-09'
  },
  {
    id: 23,
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG Heinrich Schmid GmbH & Co. KG Heinrich Schmid GmbH & Co. KG',
    location: 'Zwickau',
    type: 'Vollzeit',
    tags: ['Maler/in und Lackierer/in - Gestaltung und Instandhaltung'],
    posted: '2026-04-09'
  },
  {
    id: 24,
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG',
    location: 'Tann (Rhön)',
    type: 'Vollzeit',
    tags: ['Maler/in und Lackierer/in - Gestaltung und Instandhaltung'],
    posted: '2026-04-09'
  },
  {
    id: 25,
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG',
    location: 'Suhl',
    type: 'Vollzeit',
    tags: ['Maler/in und Lackierer/in - Gestaltung und Instandhaltung'],
    posted: '2026-04-09'
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