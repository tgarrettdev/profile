import React, { useRef } from 'react';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';

type TimelineItemProps = {
  title: string;
  organization: string;
  period: string;
  description: string[];
  projectLink?: string;
  align: string;
  type: 'experience' | 'education';
};

const TimelineItem: React.FC<TimelineItemProps> = ({ title, organization, period, description, projectLink, align, type }) => {
  const itemRef = useRef(null);
  const Icon = type === 'experience' ? FaBriefcase : FaUniversity;

  return (
    <div ref={itemRef} className={`timeline-item ${align === 'left' ? 'left' : 'right'}`}>
      <div className="border p-4 rounded shadow-md mb-4 bg-platinum rounded-lg">
        <div className="flex items-center mb-2">
          <Icon className="mr-2 text-xl" />
          <h3 className="text-xl font-bold color-onyx">{title}</h3>
        </div>
        <p className="text-md font-semibold color-onyx">{organization}</p>
        <p className="text-sm mb-2 color-onyx">{period}</p>
        {description.map((point, index) => (
          <div key={index} className="description-point lg:flex hidden">
            {point}
          </div>
        ))}
        {projectLink && (
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            View Related Project
          </a>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
