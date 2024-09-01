import { Dot } from 'lucide-react';
import React from 'react';

interface Project {
  name: string;
  description: string;
  link: string;
}

const ProjectsList: React.FC = () => {
  // Define your projects using an array of objects
  const projects: Project[] = [
    {
      name: 'ShareCode',
      description: 'Created a file-sharing app using Go and PostgreSQL, Added JWT auth and Cloudflare R2 for storage.',
      link: 'https://shc-frontend-two.vercel.app/',
    },
    {
      name: 'Growing Buddies',
      description: 'Built a Notion-like app with rich text editing, nested docs, public sharing, and live updates.',
      link: 'https://growing-buddies-seven.vercel.app/',
    },
    {
      name: 'Auto Analytics',
      description: 'Built a React and Flask web app with a data dashboard, analysis tools featuring charts, and ARIMA-based sales forecasting.',
      link: 'https://autoanalytics.vercel.app/',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-2 mb-2 w-full h-full">
      <h2 className="text-4xl font-bold mb-3">View my work</h2>
      <p className="text-black md:text-lg md:leading-5 leading-tight mb-3">links to projects here and elsewhere</p>
      {projects.map((project, index) => (
        <div key={index} className="flex items-start mb-2">
          <Dot size={32} className="inline-block" />
          <div>
            <h3 className="text-black md:text-lg md:leading-5 leading-tight ">
              <a href={project.link} className="text-indigo-900 underline">{project.name}</a>
            </h3>
            <p className="text-black md:text-lg md:leading-5 leading-tight">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;