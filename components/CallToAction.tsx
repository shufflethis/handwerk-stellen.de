import React from 'react';
import { Briefcase, UserPlus } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-brand-900 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-800 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-brand-600 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            Egal ob Sie einen Job suchen oder Fachkräfte einstellen möchten – wir haben die passende Lösung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Employee CTA */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="bg-brand-100 p-4 rounded-full mb-6">
              <UserPlus className="w-8 h-8 text-brand-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Für Bewerber</h3>
            <p className="text-gray-500 mb-8 flex-grow">
              Erstellen Sie Ihr Profil in 2 Minuten und lassen Sie sich von Top-Arbeitgebern finden. Kostenlos.
            </p>
            <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl transition-colors">
              Kostenlos registrieren
            </button>
          </div>

          {/* Employer CTA */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl border border-gray-700 hover:scale-105 transition-transform duration-300">
             <div className="bg-gray-700 p-4 rounded-full mb-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Für Arbeitgeber</h3>
            <p className="text-gray-400 mb-8 flex-grow">
              Schalten Sie Ihre Stellenanzeige dort, wo die Profis suchen. Faire Preise, maximale Reichweite.
            </p>
            <button className="w-full bg-safety-600 hover:bg-safety-500 text-white font-bold py-4 rounded-xl transition-colors">
              Jetzt Stelle schalten
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;