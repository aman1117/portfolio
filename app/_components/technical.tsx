import { Dot } from 'lucide-react';
import React from 'react';

const TechnicalSkill: React.FC = () => {
  const skills: { [key: string]: string[] } = {
    'Programming Languages': ['Problem Solving,', 'C++,', 'Golang,', 'Python'],
    'Web Development': [ 'HTML/CSS','TypeScript,', 'ReactJS,', 'Node.js,', 'NextJS'],
    'Databases': ['MySQL,', ' Google Firebase,', 'MongoDB,', 'PostgreSQL'],
    'Version Control': ['Git,', 'GitHub'],
    'Coursework': ['OOPS,', 'DBMS,', 'OS,', 'CN'],
  };

  return (
    <div className="max-w-2xl mx-auto mt-3 mb-4">
      <h2 className="md:text-4xl text-4xl font-semibold mb-3"> Technical Skills</h2>
      {
        Object.keys(skills).map((skill, index) => (
          <div key={index} className="flex items-start mb-2">
            <Dot size={32} className="inline-block" />
            <div>
              <h3 className="text-black md:text-lg md:leading-5 leading-tight font-semibold">
                {skill}
              </h3>
              <p className="text-black md:text-lg text-sm md:leading-5 leading-tight">
                {skills[skill].join(' ')}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default TechnicalSkill;