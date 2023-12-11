// src/components/SkillCard.tsx

import styles from './SkillCard.module.css'; // Assume you have CSS modules set up

type SkillCardProps = {
  name: string;
  level: string; // e.g., 'Beginner', 'Intermediate', 'Expert'
};

const SkillCard: React.FC<SkillCardProps> = ({ name, level }) => {
  return (
    <div className={styles.skillCard}>
      <h3>{name}</h3>
      <p>Proficiency: {level}</p>
    </div>
  );
};

export default SkillCard;
