import React from 'react';
import { TrendingUp, GraduationCap, Award, Euro, ArrowRight } from 'lucide-react';

const CareerInfo: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-brand-600 uppercase tracking-wide mb-2">Karriere im Handwerk</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Karrierewege, Gehälter und Perspektiven
          </h3>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Das Handwerk bietet vielfältige Karrieremöglichkeiten mit überdurchschnittlichen Zukunftsaussichten. Hier finden Sie alle wichtigen Informationen für Ihre berufliche Planung.
          </p>
        </div>

        {/* Career Paths */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
            <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Ausbildung</h4>
            <p className="text-sm text-gray-600 mb-3">
              2-3,5 Jahre duale Ausbildung. Vergütung zwischen 800 und 1.200 EUR/Monat je nach Gewerk und Lehrjahr.
            </p>
            <span className="text-xs font-semibold text-blue-700 bg-blue-200 px-2 py-1 rounded-full">Einstieg</span>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
            <Award className="w-10 h-10 text-green-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Gesellenbrief</h4>
            <p className="text-sm text-gray-600 mb-3">
              Nach bestandener Prüfung: Einstiegsgehalt 2.500-3.500 EUR brutto. Spezialisierung und Berufserfahrung steigern den Verdienst deutlich.
            </p>
            <span className="text-xs font-semibold text-green-700 bg-green-200 px-2 py-1 rounded-full">Fachkraft</span>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
            <TrendingUp className="w-10 h-10 text-amber-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Meister / Techniker</h4>
            <p className="text-sm text-gray-600 mb-3">
              Der Meisterbrief öffnet Türen: 3.500-5.500 EUR brutto. Berechtigung zur Ausbildung und Betriebsgründung. Gleichwertig mit Bachelor-Abschluss (DQR 6).
            </p>
            <span className="text-xs font-semibold text-amber-700 bg-amber-200 px-2 py-1 rounded-full">Führung</span>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
            <Euro className="w-10 h-10 text-purple-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Selbstständigkeit</h4>
            <p className="text-sm text-gray-600 mb-3">
              Eigener Betrieb mit unbegrenztem Verdienstpotenzial. Viele Handwerksmeister verdienen 60.000-100.000+ EUR jährlich als Unternehmer.
            </p>
            <span className="text-xs font-semibold text-purple-700 bg-purple-200 px-2 py-1 rounded-full">Unternehmer</span>
          </div>
        </div>

        {/* Salary Overview */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200 mb-16">
          <h4 className="text-2xl font-bold text-gray-900 mb-8">Gehaltsübersicht nach Gewerk (Brutto/Monat)</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { trade: 'Elektroniker/in', entry: '2.800', experienced: '3.800', master: '4.800' },
              { trade: 'SHK-Anlagenmechaniker/in', entry: '2.700', experienced: '3.600', master: '4.600' },
              { trade: 'Tischler/in & Schreiner/in', entry: '2.400', experienced: '3.200', master: '4.200' },
              { trade: 'Maler/in & Lackierer/in', entry: '2.300', experienced: '3.000', master: '4.000' },
              { trade: 'Maurer/in & Betonbauer/in', entry: '2.800', experienced: '3.500', master: '4.500' },
              { trade: 'KFZ-Mechatroniker/in', entry: '2.600', experienced: '3.400', master: '4.400' },
              { trade: 'Metallbauer/in & Schweißer/in', entry: '2.700', experienced: '3.500', master: '4.500' },
              { trade: 'Dachdecker/in', entry: '2.600', experienced: '3.400', master: '4.600' },
            ].map((item) => (
              <div key={item.trade} className="flex items-center justify-between bg-white rounded-xl p-4 border border-slate-100">
                <span className="font-semibold text-gray-900 text-sm">{item.trade}</span>
                <div className="flex gap-3 text-xs">
                  <span className="text-gray-400">{item.entry} EUR</span>
                  <ArrowRight className="w-3 h-3 text-gray-300 mt-0.5" />
                  <span className="text-brand-600 font-semibold">{item.experienced} EUR</span>
                  <ArrowRight className="w-3 h-3 text-gray-300 mt-0.5" />
                  <span className="text-green-600 font-bold">{item.master} EUR</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            * Durchschnittswerte. Tatsächliche Gehälter variieren je nach Region, Betriebsgröße und individueller Qualifikation. Stand: 2026.
          </p>
        </div>

        {/* Career Tips */}
        <div className="bg-brand-900 rounded-2xl p-8 md:p-12 text-white">
          <h4 className="text-2xl font-bold mb-6">5 Tipps für Ihre Karriere im Handwerk</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Weiterbildung nutzen',
                text: 'Meisterkurse, Technikerausbildung oder Spezialisierungen (z.B. Hochvolttechnik, Smart-Home) steigern Ihren Marktwert erheblich.'
              },
              {
                title: 'Regional vergleichen',
                text: 'Gehälter und Arbeitsbedingungen unterscheiden sich stark nach Region. Süddeutschland zahlt oft mehr, aber auch die Lebenshaltungskosten sind höher.'
              },
              {
                title: 'Netzwerk aufbauen',
                text: 'Innungen, Handwerkskammern und Branchenveranstaltungen bieten wertvolle Kontakte für Karriereschritte und Aufträge.'
              },
              {
                title: 'Digitale Skills entwickeln',
                text: 'BIM, CAD, Smart-Home-Technik und digitale Bauplanung werden immer wichtiger. Wer sich hier weiterbildet, hat klare Vorteile.'
              },
              {
                title: 'Verhandeln Sie aktiv',
                text: 'Der Fachkräftemangel stärkt Ihre Position. Scheuen Sie sich nicht, über Gehalt, Benefits und Arbeitszeiten zu verhandeln.'
              },
              {
                title: 'Spezialisierung wählen',
                text: 'Nischen-Expertise wie Denkmalschutz, Energieberatung oder E-Mobilität macht Sie als Fachkraft besonders wertvoll und gefragt.'
              },
            ].map((tip, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                <h5 className="font-bold text-brand-200 mb-2">{tip.title}</h5>
                <p className="text-sm text-slate-300 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerInfo;
