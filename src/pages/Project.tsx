import React from 'react';

const project = [
  {
    name: "Personal Portfolio",
    description: "A modern portfolio showcasing my skills and projects using React and TailwindCSS.",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    name: "E-commerce Website",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    name: "Chat Application",
    description: "A real-time chat application using Socket.io and Node.js.",
    link: "https://github.com/yourusername/chat-app",
  },
  {
    name: "Weather App",
    description: "A weather forecasting app using OpenWeatherMap API.",
    link: "https://github.com/yourusername/weather-app",
  },
];

const Project: React.FC = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-black to-indigo-800 text-white py-10 px-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg">
          Here are some of the projects I've worked on. Click the links to explore more!
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.map((project, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">{project.name}</h2>
            <p className="text-gray-200 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline hover:text-yellow-400 transition duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;