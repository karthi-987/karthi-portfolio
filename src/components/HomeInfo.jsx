import React from 'react';
import { Link } from 'react-router-dom';

const HomeInfo = ({ currentStage }) => {
  const info = {
    1: {
      title: 'Hi, I’m Karthi',
      text: 'I build modern web experiences with React and 3D visuals.'
    },
    2: {
      title: 'About Me',
      text: 'I design and develop user-focused products with a strong eye for detail.',
      buttonText: 'Learn More',
      link: '/about'
    },
    3: {
      title: 'My Projects',
      text: 'Explore the apps, interfaces, and experiments I’ve built.',
      buttonText: 'Visit My Portfolio',
      link: '/projects'
    },
    4: {
      title: 'Let’s Connect',
      text: 'I’m open to freelance work, collaborations, and new opportunities.',
      buttonText: 'Let’s talk',
      link: '/contact'
    }
  };

  const currentInfo = info[currentStage] || info[1];

  return (
    <div className="max-w-sm rounded-xl border border-white/20 bg-slate-900/40 p-4 text-white shadow-lg backdrop-blur-sm">
      <div className="flex flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Stage {currentStage}</p>
        <h2 className="mt-2 text-2xl font-semibold">{currentInfo.title}</h2>
        <p className="mt-2 text-sm text-slate-200">{currentInfo.text}</p>

        {currentInfo.buttonText && (
          <Link
            to={currentInfo.link}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-cyan-300"
          >
            {currentInfo.buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomeInfo;