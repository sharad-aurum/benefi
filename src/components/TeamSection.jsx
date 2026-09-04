import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Sharad Ingule',
    title: 'Co-Founder & CEO',
    photo: '/team/Sharad.jpg',
    linkedin: 'https://www.linkedin.com/in/sharadi/',
    background: 'Fintech builder (GoldUno, Pokkt), UNO Bank, BCG, Reliance, SONY, Network 18',
  },
  {
    name: 'Prafull Babar',
    title: 'Co-Founder & COO',
    photo: '/team/Prafull.jpg',
    linkedin: 'https://www.linkedin.com/in/prafull-babar-01543816/',
    background: 'Ex-Nielsen IQ, Unilever, General Mills, STAR, NIVEA, NIQ',
  },
];

function TeamSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="team" ref={ref} className="py-24 px-6 bg-gradient-to-br from-[#f0faff] to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Built by operators who've lived the fintech and HR space across Asia's largest markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pt-16 w-full max-w-sm"
            >
              {/* Avatar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-[#2D9B9B] to-[#1E3A5F]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.classList.add('flex', 'items-center', 'justify-center');
                      const initials = document.createElement('span');
                      initials.className = 'text-white text-3xl font-bold';
                      initials.textContent = member.name.split(' ').map(n => n[0]).join('');
                      e.target.parentNode.appendChild(initials);
                    }}
                  />
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-[#c8eaf0] pt-16 pb-8 px-8 text-center">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-1">{member.name}</h3>
                <p className="text-gray-600 italic mb-4">{member.title}</p>

                <div className="border-t border-gray-200 my-4" />

                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {member.background}
                </p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2D9B9B] hover:text-[#1E3A5F] font-medium text-sm transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
