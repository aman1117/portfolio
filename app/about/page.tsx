import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-2 mb-2 w-full h-full ">
      <section className="mb-4">
        <h2 className="text-4xl font-bold mb-3">About</h2>
        <p className="text-lg leading-5">
        I'm Aman Sharma, a Computer Science & Engineering student at NSUT, Delhi.
        </p>
        <p className="text-lg leading-5 my-4">
        I'm passionate about software development, with a focus on full-stack web projects and competitive programming.
        </p>
        <p className="text-lg leading-5 my-4">
        I've built applications like ShareCode and Growing Buddies, and<br/> I'm proficient in C++, Golang, React, Nextjs and various web technologies.
        </p>
        <p className="text-lg leading-5">
        Here's a copy of my <a href="/Aman.pdf" className="text-indigo-900 underline" download>resume.</a>
        </p>
      </section>

      <section className="mb-4">
      <h2 className="text-2xl font-bold mb-1">Interests</h2>
        <p className="text-lg leading-5">
        I enjoy graphic design, philosophical literature, origami, and calligraphy. I lead the design team for my university's fine arts society. Here's some<span className="text-indigo-900 underline"> Stuff I Like</span>
        </p>
      </section>

      <section className="mb-4">
      <h2 className="text-2xl font-bold mb-1">Find me online</h2>
      <div className="flex ml-8">
          <ul className="list-disc list-inside text-lg leading-5">
            <li>
              I am <span  className="text-indigo-900 underline">aman1117</span> on GitHub
            </li>
            <li>
              I am <span  className="text-indigo-900 underline">aman1117</span> on Leetcode
            </li>
            <li>
              I am <span  className="text-indigo-900 underline">aman1117</span> on LinkedIn
            </li>
            
            <li>
              I am <span  className="text-indigo-900 underline underline-offset-2">_aman1117_</span> on Instagram
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-4">
      <h2 className="text-2xl font-bold mb-1">The Site</h2>
        <p className="text-lg leading-5 ">
          This site is written in React18 using Typescript and Tailwind and Nextjs as framework.<br/> Currently, I am hosting this site on Vercel. The site is deployed to Vercel automatically as<br/> I push to GitHub.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;