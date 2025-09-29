import React from 'react';

import Header from './components/Header'; 
import Projects from './components/Projects';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';

export const FrontApp = () => {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <AboutMe />
        <Projects />
        
      </main>
    </>
  );
};