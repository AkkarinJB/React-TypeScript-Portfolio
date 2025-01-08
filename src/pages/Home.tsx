import React from 'react';
import { useNavigate } from 'react-router-dom';

const programmingIcons = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Neovim', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
];

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative h-screen bg-gradient-to-b from-black to-indigo-800 overflow-hidden">
            {/* Hero Section */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                <h1 className="text-4xl sm:text-6xl font-bold">
                    Welcome <span className="text-yellow-400">I'm Aekarin</span>
                </h1>
                <p className="mt-4 text-lg sm:text-xl">
                    Software Developer 
                </p>
                <button
                    onClick={() => navigate('/about')}
                    className="mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition duration-300"
                >
                    About Me
                </button>
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
                {programmingIcons.map((icon, index) => (
                    <img
                        key={index}
                        src={icon.icon}
                        alt={icon.name}
                        className={`absolute w-12 h-12 sm:w-16 sm:h-16 opacity-20 animate-float icon-${index}`}
                        style={{
                            top: `${Math.random() * 80}%`,
                            left: `${Math.random() * 80}%`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>

            {/* Background Animation */}
            <style>
                {`
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-20px);
                        }
                    }
                    .animate-float {
                        animation: float 5s ease-in-out infinite;
                    }
                `}
            </style>
        </div>
    );
};

export default Home;