import React from 'react';

const projects = [
    {
        title: "SHARECODE",
        technologies: "Next.js 13, Golang, PostgreSQL, CloudFlare R2, Redis, Tailwind",
        links: { live: "#", github: "#" },
        details: [
            "Developed a file-sharing service with a backend using Go and PostgreSQL, implementing JWT authentication and integrating Cloudflare R2 for file storage.",
            "Created a CLI client in Python for seamless interaction with the service, enabling terminal-based file upload, download, and sharing.",
            "Launched a web interface for public file viewing and downloading, allowing link-based sharing with customizable permissions.",
            "Implemented subscription-based access control with daily read and write limits, using cron jobs to reset limits, enhancing user experience and service reliability."
        ]
    },
    {
        title: "GROWING BUDDIES",
        technologies: "Next.js 13, React, Convex, Tailwind",
        links: { live: "#", github: "#" },
        details: [
            "Developed a full-stack Notion clone with a Notion-style editor, cover images, nested documents, public publishing, and real-time updates.",
            "Real-time Database Integration: Integrated a real-time database for dynamic data updates.",
            "Notion-Style Editor: Developed a user-friendly editor for content creation and organization.",
            "Mobile Responsiveness: Designed a responsive interface for smartphones and tablets.",
            "File Management: Enabled file upload, delete, replace, and recovery features."
        ]
    },
    {
        title: "AUTO ANALYTICS",
        technologies: "ReactJS, MUI, ChartJS, Flask, Pandas",
        links: { live: "#", github: "#" },
        details: [
            "Developed a full-stack web application with React.js and Flask, featuring:",
            "Dashboard: Summarized data with tables and graphics.",
            "Data Analyser: Provided filters and sorting tools with visual representations like line and bar charts.",
            "Sales Forecaster: Implemented ARIMA model for time series analysis to forecast future sales."
        ]
    }
];

const Projects = () => {
    return (
        <div className=" mx-auto max-w-2xl ">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            {projects.map((project, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                    <p className="text-sm mb-3 italic">{project.technologies}</p>
                    <div className="flex space-x-4 mb-3">
                        <a href={project.links.live} className="text-indigo-900  underline underline-offset-2">Live</a>
                        <a href={project.links.github} className="text-indigo-900  underline underline-offset-2">Github</a>
                    </div>
                    <ul className="list-disc list-inside">
                        {project.details.map((detail, idx) => (
                            <li key={idx} className="mb-2 leading-5 text-lg">{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Projects;