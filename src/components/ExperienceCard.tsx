// src/components/ExperienceCard.tsx

type ExperienceCardProps = {
    title: string;
    company: string;
    period: string;
    points: string[];
    projectLink?: string;
  };
  

  const ExperienceCard: React.FC<ExperienceCardProps & { align: string }> = ({ title, company, period, points, align, projectLink }) => {
    return (
      <div className={`timeline-item ${align === 'left' ? 'left' : 'right'}`}>
        <div className="border p-4 rounded shadow-md mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-md font-semibold">{company}</p>
          <p className="text-sm mb-2">{period}</p>
          <ul className="list-disc list-inside">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          {projectLink && (
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              View Related Project
            </a>
          )}
        </div>
      </div>
    );
  };
  
  export default ExperienceCard;
  
