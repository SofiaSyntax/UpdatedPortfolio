import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <header className="animated-gradient flex flex-col items-center justify-center min-h-[30vh] px-6 py-16 text-white shadow-lg relative overflow-hidden">
      <h1 className="slide-up-scale text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide drop-shadow-md mb-4 font-name">
        SOFIA BACKEHOLT
      </h1>
      <p className="slide-up-scale text-lg md:text-xl max-w-xl text-center mb-6 font-body">
        Full Stack Developer
      </p>
     

    </header>
  );
};

export default Header;

