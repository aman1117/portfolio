import { Dot } from 'lucide-react';
import React from 'react';

const TechnicalSkill: React.FC = () => {
  const skills: { [key: string]: string[] } = {
    'Programming Languages': ['Problem Solving,', 'C++,', 'Golang,', 'Python'],
    'Web Development': ['HTML/CSS,', 'TypeScript,', 'ReactJS,', 'Node.js,', 'NextJS'],
    'Databases': ['MySQL,', 'Google Firebase,', 'MongoDB,', 'PostgreSQL'],
    'Version Control': ['Git,', 'GitHub,'],
    'Coursework': ['OOPS,', 'DBMS,', 'OS,', 'CN'],
  };

  return (
    <div className="max-w-2xl mx-auto mt-3 mb-4">
      <h2 className="text-4xl font-bold mb-2">Technical Skills</h2>
      {Object.keys(skills).map((category, index) => (
        <div key={index} className=" flex items-center ">
            <Dot size={32} className="inline-block -mb-1" />
          <h3 className="md:text-lg text-xs font-semibold md:mr-4 mr-2 -mb-1">{category}:</h3>

            {skills[category].map((skill, i) => (
              <p key={i} className= "md:text-lg text-xs md:mr-2 mr-1 -mb-1">{skill}</p>
            ))}

        </div>
      ))}
    </div>
  );
};

export default TechnicalSkill;