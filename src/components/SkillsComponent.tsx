import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface Skill {
  name: string;
  level: number;
}

interface SkillsProps {
  skills: Record<string, Skill[]>;
}

const SkillsComponent: React.FC<SkillsProps> = ({ skills }) => {
  const skillsRef = useRef<HTMLDivElement[]>([]);

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
  }, [skills]);

  const renderSkillLevel = (level: number, skillIndex: number) => {
    return (
      <div
        className="skill-dots"
        ref={(el) => {
          if (el) skillsRef.current[skillIndex] = el;
        }}
      >
        {[...Array(10)].map((_, index) => (
          <div
            key={`${skillIndex}-${index}`} // Unique key for each dot
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
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <div key={category} className={`skills-section ${categoryIndex % 2 === 0 ? 'left' : 'right'}`}>
              <h3>{category}</h3>
              {skillList.map((skill, skillIndex) => (
                <div key={skill.name} className="skill">
                  <span className="skill-name">{skill.name}</span>
                  {renderSkillLevel(skill.level, categoryIndex * 100 + skillIndex)} 
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
