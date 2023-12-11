import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface Skill {
  name: string;
  level: number;
}

const SkillsComponent: React.FC<{ skills: Record<string, Skill[]> }> = ({ skills }) => {
  const skillsRef = useRef<HTMLDivElement[]>([]);
  let globalIndex = 0; // Global index for all skills

  useEffect(() => {
    skillsRef.current.forEach((skill, index) => {
      if (skill) {
        gsap.to(skill.querySelectorAll('.filled'), {
          duration: 0.5,
          opacity: 1,
          stagger: 0.1,
          ease: 'power1.inOut',
          delay: index * 0.5, // Adjust delay for each skill
        });
      }
    });
  }, []);

  const renderSkillLevel = (level: number) => {
    const skillIndex = globalIndex++; // Use and increment the global index
    return (
      <div
        className="skill-dots"
        ref={(el) => {
          if (el) skillsRef.current[skillIndex] = el;
        }}
      >
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`dot ${index < level ? 'filled' : ''}`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div id="skills" className='mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-platinum'>
      <div className='container mx-auto color-onyx'>
        <div className='text-center'><h2>SKILLS</h2></div>
        <div className="skills-columns">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={category} className={`skills-section ${index % 2 === 0 ? 'left' : 'right'}`}>
              <h3>{category}</h3>
              {skillList.map((skill, index) => (
                <div key={skill.name} className="skill">
                  <span className="skill-name">{skill.name}</span>
                  {renderSkillLevel(skill.level)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
