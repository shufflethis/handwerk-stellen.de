import React from 'react';
import { LATEST_JOBS } from '../constants';
import { MapPin, Clock, Euro, Building2 } from 'lucide-react';

const JobTeaser: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Aktuelle Top-Jobs</h2>
            <p className="text-gray-600">Die neuesten Premium-Stellenangebote unserer Partnerbetriebe.</p>
          </div>
          <button className="text-brand-600 font-semibold border-b-2 border-brand-600 hover:text-brand-800 hover:border-brand-800 transition-all pb-1">
            Alle Stellen ansehen
          </button>
        </div>

        <div className="grid gap-4">
          {LATEST_JOBS.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-300 hover:shadow-lg transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-brand-50 text-brand-700 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-brand-100">
                    {job.type}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {job.posted}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-1">
                  {job.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" /> {job.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </span>
                  {job.salary_range && (
                    <span className="flex items-center gap-1 text-green-600 font-medium">
                      <Euro className="w-4 h-4" /> {job.salary_range}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="hidden lg:flex gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full md:w-auto bg-white border border-gray-300 hover:border-brand-500 hover:text-brand-600 text-gray-700 font-medium py-2 px-6 rounded-lg transition-all whitespace-nowrap">
                  Details
                </button>
                <button className="w-full md:w-auto bg-brand-600 hover:bg-brand-500 text-white font-medium py-2 px-6 rounded-lg transition-all shadow-md">
                  Bewerben
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobTeaser;