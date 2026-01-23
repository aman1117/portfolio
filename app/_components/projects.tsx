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
      name: 'GrowthTracker',
      description: 'Built a scalable habit tracking PWA with Go backend, React 19 frontend, real-time WebSocket notifications, and cloud integrations.',
      link: 'https://trackgrowth.in',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-2 mb-2 w-full h-full">
      <h2 className="text-4xl font-bold mb-3">View my work</h2>
      <p className="text-black md:text-lg md:leading-5 leading-tight mb-3">links to projects here and elsewhere</p>
      {projects.map((project, index) => (
        <div key={index} className="flex items-start mb-2">
          <Dot size={32} className="flex-shrink-0" />
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