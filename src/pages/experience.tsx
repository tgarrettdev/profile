// src/pages/experience.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExperienceCard from '../components/ExperienceCard';

const experienceData = [
    {
        title: "Senior Developer",
        company: "POP Digital",
        period: "June 2023 - Present",
        points: [
          "Designed, developed, and optimized web applications for multiple clients.",
          "Streamlined mortgage application processes for fintech startups.",
          // ...more points
        ],
        projectLink: "https://ashbe.ipop.je",
      },
  {
    title: "Ruby on Rails Developer",
    company: "Independent",
    period: "November 2022 - June 2023",
    points: [
      "Designed, developed, and optimized web applications for multiple clients.",
      "Streamlined mortgage application processes for fintech startups.",
      // ...more points
    ],
  },
  {
    title: "Lead Software Developer",
    company: "Penco",
    period: "November 2022 - June 2023",
    points: [
      "Designed, developed, and optimized web applications for multiple clients.",
      "Streamlined mortgage application processes for fintech startups.",
      // ...more points
    ],
    projectLink: "https://whichmortgage.ie",
  },
  {
    title: "Front End Developer",
    company: "Gambling.com",
    period: "November 2022 - June 2023",
    points: [
      "Designed, developed, and optimized web applications for multiple clients.",
      "Streamlined mortgage application processes for fintech startups.",
      // ...more points
    ],
    projectLink: "https://gambling.com",
  },
  {
    title: "GIRD Financer",
    company: "UX/UI Designer",
    period: "November 2022 - June 2023",
    points: [
      "Designed, developed, and optimized web applications for multiple clients.",
      "Streamlined mortgage application processes for fintech startups.",
      // ...more points
    ],
    projectLink: "https://gridfinance.ie",
  },
  {
    title: "Mulitmedia Designer",
    company: "Associated Newspapers",
    period: "November 2022 - June 2023",
    points: [
      "Designed, developed, and optimized web applications for multiple clients.",
      "Streamlined mortgage application processes for fintech startups.",
      // ...more points
    ],
  },
];

const Experience: NextPage = () => {
    return (
      <>
              <Head>
        <title>Tom Garrett | Developer Portfolio</title>
      </Head>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-4">Professional Experience</h1>
        <div className="timeline">
          {experienceData.map((job, index) => (
            <ExperienceCard
              key={index}
              title={job.title}
              company={job.company}
              period={job.period}
              projectLink={job.projectLink}
              points={job.points}
              align={index % 2 === 0 ? 'left' : 'right'} // Add this line
            />
          ))}
        </div>
      </div>
      <Footer />
      </>
    );
  };
  
export default Experience;
