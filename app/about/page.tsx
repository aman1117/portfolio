import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-2 mb-2 w-full h-full ">
      <section className="mb-4 ">
        <h2 className="md:text-4xl text-4xl font-semibold mr-8 mb-3">About</h2>
        <p className="md:text-lg md:leading-5 leading-tight ">
          I&apos;m Aman Sharma, a Computer Science & Engineering student at NSUT, Delhi.
        </p>
        <p className="md:text-lg md:leading-5 my-4 leading-tight">
          I&apos;m passionate about software development, with a focus on full-stack web projects and competitive programming.
        </p>
        <p className="md:text-lg md:leading-5 my-4 leading-tight">
          I&apos;ve built applications like ShareCode and Growing Buddies, and<br/> I&apos;m proficient in C++, Golang, React, Nextjs and various web technologies.
        </p>
        <p className="md:text-lg md:leading-5 leading-tight">
          Here&apos;s a copy of my <a href="/Aman.pdf" className="text-indigo-900 underline" download>resume.</a>
        </p>
      </section>

      <section className="mb-4">
        <h2 className="md:text-2xl text-xl  font-bold mb-1">Interests</h2>
        <p className="md:text-lg md:leading-5 leading-tight">
          I enjoy graphic design, philosophical literature, origami, and calligraphy. I lead the design team for my university&apos;s fine arts society. Here&apos;s some <br/><a href="/about/interests" className="text-indigo-900 underline"> Stuff I Like</a>
        </p>
      </section>

      <section className="mb-4">
        <h2 className="md:text-2xl text-xl font-bold mb-1">Find me online</h2>
        <div className="flex ml-8">
          <ul className="list-disc list-inside md:text-lg md:leading-5 leading-tight">
            <li>
              I am <a href="https://github.com/aman1117" target="_blank" className="text-indigo-900 underline">aman1117</a> on GitHub
            </li>
            <li>
              I am <a href="https://leetcode.com/u/aman1117/" target="_blank" className="text-indigo-900 underline">aman1117</a> on Leetcode
            </li>
            <li>
              I am <a href="https://www.linkedin.com/in/aman1117/" target="_blank" className="text-indigo-900 underline">aman1117</a> on LinkedIn
            </li>
            <li>
              I am <a href="https://www.instagram.com/_aman1117_/" target="_blank" className="text-indigo-900 underline underline-offset-2">_aman1117_</a> on Instagram
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="md:text-2xl text-xl font-bold mb-1">The Site</h2>
        <p className="md:text-lg md:leading-5 leading-tight">
          This site is written in React18 using Typescript, Tailwind and Nextjs as framework.<br /> Currently, I am hosting this site on Vercel. The site is deployed to Vercel automatically as I push to GitHub.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;