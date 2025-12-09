import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Häufig gestellte Fragen</h2>
          <p className="mt-4 text-gray-500">Alles was Sie über die Jobsuche und Personalgewinnung im Handwerk wissen müssen.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl border transition-all duration-300 ${
                openIndex === index ? 'border-brand-500 shadow-md ring-1 ring-brand-100' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-brand-700' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-600 flex-shrink-0 ml-4" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;