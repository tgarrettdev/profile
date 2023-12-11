// src/pages/education.tsx

import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EducationTimeline from '../components/EducationTimeline'; // Import the component

// Sample education data
const educationData = [
  {
    title: "Level 8 Certificate in Computer Programming",
    institution: "Dublin City University",
    period: "2020 - 2021",
    description: "Ongoing - Due to complete in 2025",
    startDate: new Date('2020-06-01'),
  },
  {
    title: "Level 7 Certificate in Digital MArketing",
    institution: "Dublin City University",
    period: "2019 - 2020",
    description: "Ongoing - Due to complete in 2025",
    startDate: new Date('2019-06-01'),
  },
  {
    title: "BA(Hons) in Art",
    institution: "IADT",
    period: "2013 - 2017",
    description: "Ongoing - Due to complete in 2025",
    startDate: new Date('2013-06-01'),
  },
  {
    title: "Leaving Certificate",
    institution: "Belvedere College SJ",
    period: "2004 - 2011",
    description: "Ongoing - Due to complete in 2025",
    startDate: new Date('2004-06-01'),
  },
];

const Education: NextPage = () => {
    return (
      <>
        <Head>
          <title>Education | Tom Garretts Portfolio</title>
        </Head>
        <Navbar />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold my-4">Education</h2>
          <div className="timeline">
            {educationData.map((education, index) => (
              <EducationTimeline
                key={index}
                title={education.title}
                institution={education.institution}
                period={education.period}
                description={education.description}
                align={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export default Education;
