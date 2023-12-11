type EducationTimelineProps = {
    title: string;
    institution: string;
    period: string;
    description: string;
  };
  
  const EducationTimeline: React.FC<EducationTimelineProps & { align: string }> = ({ title, institution, period, description, align }) => {
    return (
      <div className={`timeline-item ${align === 'left' ? 'left' : 'right'}`}>
        <div className="border p-4 rounded shadow-md mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-md font-semibold">{institution}</p>
          <p className="text-sm mb-2">{period}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  
  export default EducationTimeline;