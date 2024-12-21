import React from 'react';

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen  bg-gradient-to-b from-black to-indigo-800 text-white overflow-hidden">
      {/*Header*/}
      <div className="flex flex-col items-center justify-center h-[20vh] text-center px-6">
        <h1 className="text-4xl sm:text-6xl font-bold">
          About <span className="text-yellow-400">Me</span>
        </h1>
      </div>

      {/*Content*/}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/*Skills*/}
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-yellow-400 text-center">My Skills</h2>
          <ul className="mt-6 text-center space-y-2">
            <li className="text-lg">⚡ React & TypeScript</li>
            <li className="text-lg">⚡ Node.js & Express</li>
            <li className="text-lg">⚡ CSS & TailwindCSS</li>
            <li className="text-lg">⚡ Database Management (MySQL, MongoDB)</li>
          </ul>
        </div>

        {/*Hobbies*/}
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-400 text-center">Hobbies</h2>
          <ul className="mt-6 text-center space-y-2">
            <li className="text-lg">🌟 Coding & Problem Solving</li>
            <li className="text-lg">🌟 Reading Tech Blogs</li>
            <li className="text-lg">🌟 Playing Video Games</li>
            <li className="text-lg">🌟 Take a Photo</li>
          </ul>
        </div>
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-indigo-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
      </div>
    </div>
  );
};

export default About;