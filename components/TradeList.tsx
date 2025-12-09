import React from 'react';
import { TRADES } from '../constants';
import * as LucideIcons from 'lucide-react';

const TradeList: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-brand-600 uppercase tracking-wide mb-2">Gewerke Übersicht</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Dein Handwerk. Deine Zukunft.
          </h3>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Wähle deinen Fachbereich und entdecke hunderte Stellenangebote, die perfekt zu deinen Fähigkeiten passen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRADES.map((trade) => {
            // Dynamically resolve icon component
            // @ts-ignore
            const IconComponent = LucideIcons[trade.icon] || LucideIcons.Hammer;

            return (
              <div key={trade.id} className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image Header */}
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                  <img 
                    src={trade.image} 
                    alt={trade.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg z-20 shadow-sm">
                    <IconComponent className="w-6 h-6 text-brand-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {trade.name}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {trade.description}
                  </p>
                  <a href={`#${trade.slug}`} className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700">
                    Stellen anzeigen <span className="ml-1">&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TradeList;