
import React, { use, useEffect } from "react";
import Header from './components/Header'; 
import Projects from './components/Projects';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

export const FrontApp = () => {

  useEffect(() => {
    const observador = new IntersectionObserver((entradas, obs) =>{
      entradas.forEach((entrada) =>{
        if(entrada.isIntersecting){
          entrada.target.classList.add("mostrar");
          obs.unobserve(entrada.target);
        }
      });
    }, {threshold: 0.2, rootMargin: "0px 0px -50px 0px"});

    const elementos = document.querySelectorAll(".animar");
    elementos.forEach((el => observador.observe(el)));

    return () =>{
      elementos.forEach((el => observador.observe(el)));
      observador.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero/>
        <AboutMe />
        <Projects />
        <Contact />
        
      </main>
    </>
  );
};