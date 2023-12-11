// src/pages/skills.tsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface Skill {
  name: string;
  level: number;
}

const SkillsComponent: React.FC = () => {
  const skills = {
    programming: [
      { name: 'JavaScript', level: 5 },
      { name: 'React', level: 5 },
      { name: 'Node.js & Express', level: 4.5 },
      { name: 'HTML/CSS', level: 4.5 },
      { name: 'Java', level: 4 },
      { name: 'Python', level: 4 },
      { name: 'SQL', level: 4 },
      { name: 'TypeScript', level: 3.5 },
      { name: 'GraphQL', level: 3 },
      { name: 'RESTful APIs', level: 4 },
      { name: 'Redux', level: 3.5 },
    ],
    operatingSystems: [
      { name: 'Linux', level: 4 },
      { name: 'Windows', level: 3.5 },
      { name: 'macOS', level: 3.5 },
    ],
    tools: [
      { name: 'Git', level: 4 },
      { name: 'Docker', level: 3 },
      { name: 'JIRA', level: 3.5 },
      { name: 'Webpack', level: 3 },
      { name: 'ESLint', level: 3 },
      { name: 'NPM', level: 4 },
      { name: 'Yarn', level: 3.5 },
      { name: 'Visual Studio Code', level: 4 },
      { name: 'Figma', level: 3.5 },
    ],
  };  

  useEffect(() => {
    skillsRef.current.forEach((skill, index) => {
      gsap.to(skill.querySelectorAll('.filled'), {
        duration: 0.5,
        opacity: 1,
        stagger: 0.1,
        ease: 'power1.inOut',
        delay: index * 0.5 // Adjust delay for each skill
      });
    });
  }, []);

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
          delay: index * 0.5 // Adjust delay for each skill
        });
      }
    });
  }, []);
  

  const renderSkillLevel = (level: number) => {
    const skillIndex = globalIndex++; // Use and increment the global index
    return (
      <div className="skill-dots" ref={el => {
        if (el) skillsRef.current[skillIndex] = el;
      }}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className={`dot ${index < level ? 'filled' : ''}`}></div>
        ))}
      </div>
    );
  };

  return (
    <div className="skills-container">
      <h2>SKILLS</h2>
      <div className="skills-section">
        <h3>Programming</h3>
        {skills.programming.map((skill, index) => (
          <div key={skill.name} className="skill">
            <span className="skill-name">{skill.name}</span>
            {renderSkillLevel(skill.level, index)}
          </div>
        ))}
        <h3>Operating Systems</h3>
        {skills.operatingSystems.map((skill, index) => (
          <div key={skill.name} className="skill">
            <span className="skill-name">{skill.name}</span>
            {renderSkillLevel(skill.level, index)}
          </div>
        ))}
        <h3>Tools</h3>
        {skills.tools.map((skill, index) => (
          <div key={skill.name} className="skill">
            <span className="skill-name">{skill.name}</span>
            {renderSkillLevel(skill.level, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;