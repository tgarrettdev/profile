const SkillItem = ({ skill, refSetter, index }) => {
    const renderSkillLevel = (level) => {
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
  