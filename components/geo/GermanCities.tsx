import React from 'react';
import { MapPin } from 'lucide-react';

interface CityData {
  name: string;
  slug: string;
  jobCount: number;
  region: string;
}

const GERMAN_CITIES: CityData[] = [
  { name: 'Berlin', slug: 'berlin', jobCount: 1240, region: 'Berlin' },
  { name: 'Hamburg', slug: 'hamburg', jobCount: 890, region: 'Hamburg' },
  { name: 'München', slug: 'muenchen', jobCount: 1150, region: 'Bayern' },
  { name: 'Köln', slug: 'koeln', jobCount: 720, region: 'Nordrhein-Westfalen' },
  { name: 'Frankfurt am Main', slug: 'frankfurt', jobCount: 680, region: 'Hessen' },
  { name: 'Stuttgart', slug: 'stuttgart', jobCount: 810, region: 'Baden-Württemberg' },
  { name: 'Düsseldorf', slug: 'duesseldorf', jobCount: 540, region: 'Nordrhein-Westfalen' },
  { name: 'Leipzig', slug: 'leipzig', jobCount: 420, region: 'Sachsen' },
  { name: 'Dortmund', slug: 'dortmund', jobCount: 480, region: 'Nordrhein-Westfalen' },
  { name: 'Essen', slug: 'essen', jobCount: 390, region: 'Nordrhein-Westfalen' },
  { name: 'Bremen', slug: 'bremen', jobCount: 350, region: 'Bremen' },
  { name: 'Dresden', slug: 'dresden', jobCount: 380, region: 'Sachsen' },
  { name: 'Hannover', slug: 'hannover', jobCount: 460, region: 'Niedersachsen' },
  { name: 'Nürnberg', slug: 'nuernberg', jobCount: 510, region: 'Bayern' },
  { name: 'Duisburg', slug: 'duisburg', jobCount: 310, region: 'Nordrhein-Westfalen' },
  { name: 'Bochum', slug: 'bochum', jobCount: 280, region: 'Nordrhein-Westfalen' },
  { name: 'Wuppertal', slug: 'wuppertal', jobCount: 260, region: 'Nordrhein-Westfalen' },
  { name: 'Bielefeld', slug: 'bielefeld', jobCount: 290, region: 'Nordrhein-Westfalen' },
  { name: 'Bonn', slug: 'bonn', jobCount: 320, region: 'Nordrhein-Westfalen' },
  { name: 'Mannheim', slug: 'mannheim', jobCount: 340, region: 'Baden-Württemberg' },
  { name: 'Karlsruhe', slug: 'karlsruhe', jobCount: 310, region: 'Baden-Württemberg' },
  { name: 'Augsburg', slug: 'augsburg', jobCount: 290, region: 'Bayern' },
  { name: 'Wiesbaden', slug: 'wiesbaden', jobCount: 270, region: 'Hessen' },
  { name: 'Münster', slug: 'muenster', jobCount: 300, region: 'Nordrhein-Westfalen' },
  { name: 'Freiburg', slug: 'freiburg', jobCount: 250, region: 'Baden-Württemberg' },
  { name: 'Aachen', slug: 'aachen', jobCount: 230, region: 'Nordrhein-Westfalen' },
  { name: 'Kiel', slug: 'kiel', jobCount: 210, region: 'Schleswig-Holstein' },
  { name: 'Lübeck', slug: 'luebeck', jobCount: 190, region: 'Schleswig-Holstein' },
  { name: 'Magdeburg', slug: 'magdeburg', jobCount: 200, region: 'Sachsen-Anhalt' },
  { name: 'Rostock', slug: 'rostock', jobCount: 170, region: 'Mecklenburg-Vorpommern' },
  { name: 'Erfurt', slug: 'erfurt', jobCount: 220, region: 'Thüringen' },
  { name: 'Mainz', slug: 'mainz', jobCount: 240, region: 'Rheinland-Pfalz' },
  { name: 'Saarbrücken', slug: 'saarbruecken', jobCount: 160, region: 'Saarland' },
  { name: 'Potsdam', slug: 'potsdam', jobCount: 180, region: 'Brandenburg' },
  { name: 'Regensburg', slug: 'regensburg', jobCount: 230, region: 'Bayern' },
  { name: 'Kassel', slug: 'kassel', jobCount: 210, region: 'Hessen' },
];

const GermanCities: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-bold text-brand-600 uppercase tracking-wide mb-2">Regionale Jobsuche</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Handwerk-Jobs in deiner Stadt
          </h3>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Finde Handwerker-Stellenangebote in allen großen deutschen Städten. Ob Elektriker in Berlin, SHK-Fachkraft in München oder Tischler in Hamburg - wir haben die passenden Jobs in deiner Nähe.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {GERMAN_CITIES.map((city) => (
            <a
              key={city.slug}
              href={`#jobs-${city.slug}`}
              className="group flex flex-col items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-300 hover:bg-brand-50 hover:shadow-md transition-all duration-200"
            >
              <MapPin className="w-5 h-5 text-brand-500 mb-2 group-hover:text-brand-600" />
              <span className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 text-center">
                {city.name}
              </span>
              <span className="text-xs text-gray-400 mt-1">
                {city.jobCount}+ Stellen
              </span>
            </a>
          ))}
        </div>

        {/* SEO text block for geo relevance */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Handwerk-Stellenangebote in ganz Deutschland</h4>
          <div className="text-gray-600 leading-relaxed space-y-3 text-sm">
            <p>
              Deutschland sucht Handwerker - und zwar überall. In <strong>Berlin</strong> und <strong>Hamburg</strong> boomen Bauprojekte und die Nachfrage nach Elektrikern, Maurern und SHK-Fachkräften ist enorm. In <strong>München</strong> und <strong>Stuttgart</strong> sorgen Industrie und Wohnungsbau für tausende offene Stellen im Handwerk. Das Ruhrgebiet mit <strong>Dortmund</strong>, <strong>Essen</strong> und <strong>Duisburg</strong> bietet zahlreiche Karrieremöglichkeiten in Metallbau und Industriehandwerk.
            </p>
            <p>
              Auch in mittelgroßen Städten wie <strong>Freiburg</strong>, <strong>Regensburg</strong>, <strong>Kassel</strong> und <strong>Kiel</strong> werden qualifizierte Handwerker dringend gesucht. Die Gehälter im Handwerk steigen kontinuierlich - besonders Meister und Techniker profitieren vom Fachkräftemangel. Ob Gesellenbrief, Meisterprüfung oder Ausbildungsplatz: Auf handwerk-stellen.de finden Sie regional passende Angebote mit kurzen Anfahrtswegen.
            </p>
            <p>
              In Ostdeutschland wächst der Bedarf ebenfalls stark: <strong>Leipzig</strong>, <strong>Dresden</strong>, <strong>Erfurt</strong> und <strong>Magdeburg</strong> investieren massiv in Infrastruktur und Gebäudesanierung. Nutzen Sie unsere regionale Suche, um Handwerk-Jobs in Ihrer Nähe zu entdecken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GermanCities;
