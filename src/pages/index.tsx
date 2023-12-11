// src/pages/timeline.tsx
import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TimelineItem from '../components/TimelineItem';
import AnimatedHeader from '../components/AnimatedHeader';
import Image from 'next/image';
import SkillsComponent from '../components/SkillsComponent';

// Assuming you have defined your TimelineEntry type and timelineData array
type TimelineEntry = {
  type: 'experience' | 'education';
  title: string;
  organization: string;
  period: string;
  startDate: Date;
  description: string[];
  projectLink?: string;
};

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

const timelineData: TimelineEntry[] = [
    {
      type: 'experience',
      title: "Senior Developer",
      organization: "IPOP Digital",
      period: "November 2023 - Present",
      startDate: new Date('2023-10-01'),
      description: [
        "Led the development of advanced web applications, focusing on scalability and performance optimization.",
        "Collaborated with cross-functional teams to integrate new technologies and methodologies.",
        "Mentored junior developers, fostering a culture of continuous learning and excellence."
      ],
    },
    {
      type: 'experience',
      title: "Technical Founder",
      organization: "Docudynamics",
      period: "November 2022 - November 2023",
      startDate: new Date('2022-10-01'),
      description: [
        "Established and managed a tech startup specializing in document dynamics solutions.",
        "Oversaw product development from concept to launch, ensuring alignment with market needs.",
        "Cultivated strategic partnerships to expand business reach and technology integration."
      ],
    },
    {
      type: 'experience',
      title: "Lead Developer",
      organization: "Penco, Dublin City, Ireland",
      period: "December 2019 - November 2022",
      startDate: new Date('2019-12-01'),
      description: [
        "Directed a team of developers in creating innovative software solutions for various clients.",
        "Played a key role in project planning, ensuring timely delivery and quality standards.",
        "Implemented new technologies and frameworks to enhance product functionality and user experience."
      ],
      projectLink: "https://whichmortgage.ie",
    },
    {
      type: 'experience',
      title: "Front End Developer",
      organization: "Gambling.com Group, Dublin City, Ireland",
      period: "January 2019 - December 2019",
      startDate: new Date('2019-01-01'),
      description: [
        "Developed and maintained responsive web interfaces, optimizing user experience and performance.",
        "Collaborated closely with UX/UI designers to translate design visions into functional websites.",
        "Utilized modern JavaScript frameworks to create interactive and dynamic web elements."
      ],
      projectLink: "https://gambling.com",
    },
    {
      type: 'experience',
      title: "UX/UI Designer",
      organization: "GRID Finance, Dublin City, Ireland",
      period: "June 2018 - January 2019",
      startDate: new Date('2018-06-01'),
      description: [
        "Led the design of user interfaces, focusing on usability, aesthetics, and user engagement.",
        "Conducted user research and testing to inform design decisions and improve user experience.",
        "Collaborated with development teams to ensure accurate implementation of design specifications."
      ],
      projectLink: "https://gridfinance.ie",
    },
    {
        type: 'experience',
        title: "Multimedia Designer",
        organization: "Associated Newspapers, Dublin City, Ireland",
        period: "June 2016 - September 2016",
        startDate: new Date('2016-06-01'),
        description: [
          "Developed innovative multimedia content for various digital platforms, enhancing audience engagement.",
          "Collaborated with editorial teams to align multimedia strategies with overall content goals.",
          "Managed time-sensitive projects, ensuring high-quality deliverables under tight deadlines."
        ],
      },
      {
        type: 'experience',
        title: "Multimedia Intern",
        organization: "Cauldron Studios, Dublin City, Ireland",
        period: "June 2013 - September 2013",
        startDate: new Date('2013-06-01'),
        description: [
          "Gained hands-on experience in multimedia production, supporting various client projects.",
          "Assisted in editing and producing digital content, including video and graphic design.",
          "Participated in creative brainstorming sessions, contributing to concept development."
        ],
      },
      {
        type: 'education',
        title: "New Frontiers Program",
        organization: "Technological University Dublin",
        period: "November 2022 - May 2023",
        startDate: new Date('2022-11-01'),
        description: [
          "Completed a comprehensive entrepreneurship program with a focus on innovative business strategies.",
          "Developed a viable business model, encompassing market research and financial planning.",
          "Engaged in mentorship and networking, gaining insights from seasoned industry professionals."
        ],
      },
      {
        type: 'education',
        title: "Level 8 Certificate in Computer Programming",
        organization: "Dublin City University",
        period: "September 2020 - June 2021",
        startDate: new Date('2020-09-01'),
        description: [
          "Acquired in-depth knowledge in advanced computer programming and software development.",
          "Completed various hands-on projects, demonstrating proficiency in multiple programming languages.",
          "Collaborated with peers on software development projects, enhancing team-working skills."
        ],
      },
      {
        type: 'education',
        title: "Advanced Diploma in Digital Marketing and Social Media",
        organization: "Waterford Institute of Technology",
        period: "September 2018 - June 2019",
        startDate: new Date('2018-09-01'),
        description: [
          "Specialized in digital marketing techniques, gaining expertise in online advertising and social media.",
          "Implemented real-world marketing campaigns, applying knowledge of SEO and content marketing.",
          "Analyzed digital marketing metrics, using data to inform and improve marketing strategies."
        ],
      },
      {
        type: 'education',
        title: "BA(Hons) in Visual Art Practise Digital Arts",
        organization: "Dún Laoghaire Institute of Art Design and Technology",
        period: "September 2013 - June 2017",
        startDate: new Date('2013-09-01'),
        description: [
          "Studied various aspects of digital art, blending traditional techniques with contemporary digital tools.",
          "Participated in collaborative art projects, showcasing creativity and innovation in digital media.",
          "Developed a strong theoretical and practical foundation in art history and digital arts production."
        ],
      },
      {
        type: 'education',
        title: "Leaving Certificate",
        organization: "Belvedere College SJ",
        period: "September 2004 - June 2011",
        startDate: new Date('2004-09-01'),
        description: [
          "Successfully completed secondary education, achieving high academic standards.",
          "Engaged actively in extracurricular activities, developing teamwork and leadership skills.",
          "Laid a solid academic foundation, excelling in subjects that paved the way for higher education."
        ],
      },
    ];
  


  const Timeline: NextPage = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [isNewCardAdded, setIsNewCardAdded] = useState(false);
  
    useEffect(() => {
      const timelineElements = timelineRef.current ? Array.from(timelineRef.current.children) : [];
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
              });
              observer.unobserve(entry.target);

              setIsNewCardAdded(true);
            }
          });
        },
        { threshold: 0.5 } // Trigger when half of the item is visible
      );
  
      timelineElements.forEach((el) => {
        gsap.set(el, { autoAlpha: 0, y: 30 }); // Initial state
        observer.observe(el);
      });
  
      return () => timelineElements.forEach((el) => observer.unobserve(el)); // Clean up
    }, []);
  
    timelineData.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  
    return (
      <>
        <Head>
          <title>Timeline | Tom Garretts Bio</title>
        </Head>
        <Navbar />
        <AnimatedHeader />
        <div id="bio" className='mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-platinum'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row items-center md:space-x-4'>
                    <Image 
                    src="/profile.png"
                    alt="Profile" 
                    className="rounded-full object-cover mb-4 md:mb-0" 
                    width={128}
                    height={128} 
                    layout="fixed"
                    />
                    <h2 className='color-onyx'>Bio</h2>
                    <p className='text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl color-onyx sm:pl-8'>
                    Since October 2023, I have been leading the development of advanced web applications at IPOP Digital, focusing on scalability and performance optimization, and fostering a culture of continuous learning among junior developers. My career journey includes founding Docudynamics, where I managed product development and established key partnerships. Academically, I hold a Level 8 Certificate in Computer Programming from Dublin City University and a BA (Hons) in Visual Art Practice Digital Arts from Dún Laoghaire Institute of Art Design and Technology, equipping me with a blend of traditional and digital skills. My diverse roles, including Lead Developer at Penco and Front End Developer at Gambling.com Group, have honed my abilities in digital marketing, UX/UI design, and multimedia, reflecting my adaptability and dedication to innovation in technology.
                    </p>
                </div>
            </div>
            </div>
      <div id="timeline" className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-4 text-center text-white">Timeline</h1>
        <div className="timeline" ref={timelineRef}>
          {timelineData.map((entry, index) => (
            <TimelineItem
              key={index}
              type={entry.type}
              title={entry.title}
              organization={entry.organization}
              period={entry.period}
              description={entry.description}
              projectLink={entry.type === 'experience' ? entry.projectLink : undefined}
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
      <SkillsComponent skills={skills} />
      <Footer />
    </>
  );
};

export default Timeline;