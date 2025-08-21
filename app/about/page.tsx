import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-2 mb-2 w-full h-full">
      <section className="mb-4">
        <h2 className="md:text-4xl text-4xl font-semibold mr-8 mb-3">About</h2>
        <p className="md:text-lg md:leading-5 leading-tight">
          I&apos;m <strong>Aman Sharma</strong>, a <strong>2025 graduate</strong> with a <strong>B.Tech in Computer Science & Engineering</strong> from <strong>NSUT, Delhi</strong>.
        </p>
        <p className="md:text-lg md:leading-5 my-4 leading-tight">
          I&apos;m passionate about <strong>software development</strong>, with a focus on <strong>full-stack web projects</strong> and <strong>competitive programming</strong>.
        </p>
        <p className="md:text-lg md:leading-5 my-4 leading-tight">
          At <strong>Shipsy</strong>, I developed <strong>finance and logistics modules</strong>, <strong>optimized API performance by 3x</strong>, and delivered real-time solutions for clients like <strong>Flipkart and Movin</strong>.
        </p>
        <p className="md:text-lg md:leading-5 my-4 leading-tight">
          Currently at <strong>Ethos</strong>, I&apos;m <strong>streamlining backend workflows</strong> for feature launches using <strong>Optimizely</strong>.
        </p>
        <p className="md:text-lg md:leading-5 my-4 leading-tight">
          I&apos;ve built apps like <strong>ShareCode</strong> and <strong>Growing Buddies</strong>, and I&apos;m proficient in <strong>C++, Golang, React, Next.js, and modern web tech</strong>.
        </p>
        <p className="md:text-lg md:leading-5 leading-tight">
          Here&apos;s a copy of my <a href="/Aman.pdf" className="text-primary underline" download>resume.</a>
        </p>
      </section>

      <hr className="my-2 border-border" />
      <section className="mb-4">
        <h2 className="md:text-2xl text-xl  font-bold mb-1">Interests</h2>
        <p className="md:text-lg md:leading-5 leading-tight">
          I enjoy graphic design, philosophical literature, origami, and calligraphy. I lead the design team for my university&apos;s fine arts society. Here&apos;s some <br /><a href="/about/interests" className="text-primary underline"> Stuff I Like</a>
        </p>
      </section>
      <hr className="my-2 border-border" />
      <section className="mb-4">
        <h2 className="md:text-2xl text-xl font-bold mb-1">Find me online</h2>
        <div className="flex ml-8">
          <ul className="list-disc list-inside md:text-lg md:leading-5 leading-tight">
            <li>
              I am <a href="https://github.com/aman1117" target="_blank" className="text-primary underline">aman1117</a> on GitHub
            </li>
            <li>
              I am <a href="https://leetcode.com/u/aman1117/" target="_blank" className="text-primary underline">aman1117</a> on Leetcode
            </li>
            <li>
              I am <a href="https://codeforces.com/profile/aman1117" target="_blank" className="text-primary underline underline-offset-2">aman1117</a> on Codeforces
            </li>
            <li>
              I am <a href="https://www.linkedin.com/in/aman1117/" target="_blank" className="text-primary underline">aman1117</a> on LinkedIn
            </li>
            <li>
              I am <a href="https://www.instagram.com/_aman1117_/" target="_blank" className="text-primary underline underline-offset-2">_aman1117_</a> on Instagram
            </li>
          </ul>
        </div>
      </section>
      <hr className="my-2 border-border" />
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