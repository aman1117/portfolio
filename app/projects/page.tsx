import React from "react";

const projects = [
  {
    title: "GROWTHTRACKER",
    technologies:
      "React, TypeScript, Go, PostgreSQL, Redis, WebSocket, Docker, Azure",
    links: {
      live: "#",
      github: "#",
    },
    details: [
      "Built a scalable Go backend using clean architecture (handlers/services/repositories) for clear separation of concerns.",
      "Developed a responsive React 19 + TypeScript PWA with Zustand state management and push notifications.",
      "Designed REST APIs in Go (Fiber) with JWT auth, middleware (CORS, rate limiting), and OpenAPI docs.",
      "Implemented real-time notifications via WebSockets with Redis-backed connection/session tracking.",
      "Built a reliable push pipeline using Web Push and Azure Service Bus for message delivery.",
      "Integrated cloud storage (Azure Blob) and Neon PostgreSQL (serverless) with Redis caching.",
      "Implemented structured logging with Axiom for centralized observability and production debugging.",
      "Shipped engagement features including streaks, badges, and social interactions (follow/like/feeds).",
      "Containerized local dev with Docker Compose for consistent PostgreSQL/Redis/Azurite environments.",
    ],
  },
];

const Projects = () => {
  return (
    <div className=" mx-auto max-w-2xl mt-1 ">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
          <p className="text-sm  mb-2 italic">{project.technologies}</p>
          <div className="flex space-x-4 mb-3">
            <a
              href={project.links.live}
              className="text-indigo-900  underline underline-offset-2"
            >
              Live
            </a>
            <a
              href={project.links.github}
              className="text-indigo-900  underline underline-offset-2"
            >
              Github
            </a>
          </div>
          <ul className="list-disc list-inside">
            {project.details.map((detail, idx) => (
              <li
                key={idx}
                className="mb-2 text-black md:text-lg md:leading-5 leading-tight"
              >
                {detail}
              </li>
            ))}
          </ul>
          {index < projects.length - 1 && <hr className="border-gray-100" />}
        </div>
      ))}
    </div>
  );
};

export default Projects;
