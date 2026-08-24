import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationCerts: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-paper-200 dark:border-paper-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-paper-500">
            <span className="px-1.5 py-0.5 rounded-[2px] font-extrabold text-[10px] bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
              GET
            </span>
            <span>/education</span>
            <span>→</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">200 OK</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-bold text-paper-950 dark:text-paper-50 tracking-tight">
            Education &amp; certifications
          </h2>
          
          <p className="text-paper-600 dark:text-paper-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Formal foundations in computer science paired with continuous industry credentials.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-7 rounded-[4px] bg-white dark:bg-paper-850 border border-paper-200 dark:border-paper-800 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-[4px] bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-paper-950 dark:text-paper-50">
                    Formal Education
                  </h3>
                  <p className="text-[11px] font-mono text-paper-500">Accredited Engineering Degree</p>
                </div>
              </div>

              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="font-display text-base sm:text-lg font-bold text-paper-950 dark:text-paper-50 leading-snug">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-2.5 text-xs text-paper-500 dark:text-paper-400 pt-1 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-paper-400" />
                      {edu.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-paper-400" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.score && (
                    <div className="mt-3 inline-block px-2.5 py-1 rounded-[2px] bg-paper-100 dark:bg-paper-900 text-paper-700 dark:text-paper-300 font-mono text-[11px]">
                      {edu.score}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-paper-100 dark:border-paper-800 text-[11px] font-mono text-paper-500">
              Core Coursework: Data Structures &amp; Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering.
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.08 }}
            className="p-6 sm:p-7 rounded-[4px] bg-white dark:bg-paper-850 border border-paper-200 dark:border-paper-800 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-[4px] bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-paper-950 dark:text-paper-50">
                    Certifications &amp; Credentials
                  </h3>
                  <p className="text-[11px] font-mono text-paper-500">Industry Validated</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {portfolioData.certifications.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-[2px] bg-paper-50 dark:bg-paper-900 border border-paper-200/80 dark:border-paper-800 hover:border-blue-400 dark:hover:border-blue-500 transition group"
                  >
                    <div className="flex items-start gap-2.5 min-w-0">
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-paper-950 dark:text-paper-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition truncate">
                          {cert.title}
                        </p>
                        <p className="text-[11px] text-paper-500 dark:text-paper-400 truncate">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5 rounded-[2px] bg-white dark:bg-paper-850 text-paper-600 dark:text-paper-300 border border-paper-200 dark:border-paper-700 shrink-0 ml-2">
                      {cert.badge || 'VERIFIED'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-paper-100 dark:border-paper-800 text-[11px] font-mono text-paper-500">
              Actively pursuing advanced AWS Solutions Architect &amp; Spring Enterprise credentials.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
