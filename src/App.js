import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Banner from './components/Banner';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import AboutPage from './components/AboutPage';



const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThemeToggle />
      <Header />
      <Banner />
      <About />
      <Projects />
     <AboutPage />
     <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;



