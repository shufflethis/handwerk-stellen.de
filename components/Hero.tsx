import React, { useState } from 'react';
import { Search, MapPin, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [jobQuery, setJobQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/175/1920/1080" 
          alt="Handwerker auf Baustelle" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-32 text-center md:text-left">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Wir bauen deine <span className="text-brand-500">Zukunft</span>. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-500 to-yellow-500">
              Jobs für echte Macher.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Deutschlands spezialisierte Jobbörse für das Handwerk. Über 15.000 offene Stellen für Gesellen, Meister, Techniker und Azubis. Direkt, lokal und ohne Umwege.
          </p>

          {/* Search Box */}
          <div className="bg-white p-3 rounded-2xl shadow-xl flex flex-col md:flex-row gap-2 max-w-3xl">
            <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-200 transition-all">
              <Search className="text-gray-400 w-5 h-5 mr-3" />
              <input 
                type="text" 
                placeholder="Beruf, Begriff oder Firma" 
                className="bg-transparent border-none outline-none w-full text-gray-800 placeholder-gray-400 font-medium"
                value={jobQuery}
                onChange={(e) => setJobQuery(e.target.value)}
              />
            </div>
            <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-200 transition-all">
              <MapPin className="text-gray-400 w-5 h-5 mr-3" />
              <input 
                type="text" 
                placeholder="PLZ oder Ort" 
                className="bg-transparent border-none outline-none w-full text-gray-800 placeholder-gray-400 font-medium"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
              />
            </div>
            <button className="bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              Jobs finden
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400 font-medium justify-center md:justify-start">
            <span>Beliebte Suchanfragen:</span>
            <span className="text-white hover:text-brand-400 cursor-pointer underline decoration-slate-600 underline-offset-4">Elektroniker/in</span>
            <span className="text-white hover:text-brand-400 cursor-pointer underline decoration-slate-600 underline-offset-4">SHK Anlagenmechaniker</span>
            <span className="text-white hover:text-brand-400 cursor-pointer underline decoration-slate-600 underline-offset-4">Bauleiter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;