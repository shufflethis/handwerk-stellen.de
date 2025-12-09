import React from 'react';
import { SEO_CONTENT } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const ContentSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <article className="prose prose-lg prose-slate mx-auto mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ihr Partner für Handwerkskarrieren</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
                handwerk-stellen.de ist mehr als nur eine Jobbörse. Wir sind die zentrale Schnittstelle für das deutsche Handwerk im digitalen Zeitalter. Unsere Mission ist es, dem Fachkräftemangel durch intelligente Matching-Technologie entgegenzuwirken und handwerkliche Berufe wieder attraktiv für junge Talente und erfahrene Profis zu machen.
            </p>
        </article>

        <div className="space-y-20">
          {SEO_CONTENT.map((section, index) => (
            <div key={index} className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-brand-100 text-brand-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                {section.title}
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex}>
                    {paragraph.split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-slate-900 font-semibold">{part}</strong> : part
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="bg-brand-600 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-4">Warum handwerk-stellen.de?</h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-brand-200" />
                        <span>Spezialisierung auf gewerbliche Berufe</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-brand-200" />
                        <span>GEO-optimierte Auffindbarkeit</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-brand-200" />
                        <span>Direkter Kontakt zum Arbeitgeber</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-brand-200" />
                        <span>Kostenlos für Bewerber</span>
                    </li>
                </ul>
            </div>
            <div className="border-2 border-dashed border-gray-200 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Noch Fragen?</h3>
                <p className="text-gray-500 mb-6">Unser Support-Team hilft gerne weiter.</p>
                <button className="text-brand-600 font-semibold hover:text-brand-700 hover:underline">
                    Zum Kontaktformular
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ContentSection;