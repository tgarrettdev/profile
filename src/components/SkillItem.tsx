import React from 'react';

// Assuming the Skill interface looks like this
interface Skill {
  name: string;
  level: number;
}

// Props type definition for the SkillItem component
interface SkillItemProps {
  skill: Skill;
  refSetter: (el: HTMLDivElement, index: number) => void;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, refSetter, index }) => {
  const renderSkillLevel = (level: number) => {
    return (
      <div className="skill-dots" ref={el => refSetter(el, index)}>
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className={`dot ${idx < level ? 'filled' : 'unfilled'}`}></div>
        ))}
      </div>
    );
  };

  return (
    <div className="skill">
      <span className="skill-name">{skill.name}</span>
      {renderSkillLevel(skill.level)}
    </div>
  );
};

export default SkillItem;
