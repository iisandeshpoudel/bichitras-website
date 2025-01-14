import React from 'react';
import { useNavigate } from 'react-router-dom';

const InternshipPreview = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Start your<br />
            Virtual<br />
            <span className="text-[var(--accent-secondary)]">Internships</span><br />
            journey
          </h2>
          <p className="text-lg mb-8 text-[var(--text-secondary)]">
            Unlock your potential with our virtual internship and be ready for the real world
            job experience.
          </p>
          <button 
            onClick={() => {
              navigate('/internship');
              window.scrollTo(0, 0);
            }}
            className="bg-[var(--accent-primary)] text-white px-8 py-3 rounded-full hover:bg-[var(--accent-secondary)] transition-colors"
          >
            Enroll Now
          </button>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-20 blur-xl rounded-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Available Tracks</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent-secondary)]">✓</span>
                  <span>Flutter Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent-secondary)]">✓</span>
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent-secondary)]">✓</span>
                  <span>Backend Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent-secondary)]">✓</span>
                  <span>Frontend Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent-secondary)]">✓</span>
                  <span>Full Stack Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent-secondary)]">✓</span>
                  <span>AI/ML Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipPreview;
