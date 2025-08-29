import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactIcon from "../assets/img/react.svg";
import JsIcon from "../assets/img/javascript.svg";
import HtmlIcon from "../assets/img/html.svg";
import CssIcon from "../assets/img/css.svg";
import JavaIcon from "../assets/img/java.svg";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./Home.css";
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
  if (!vantaEffect) {
    setVantaEffect(
      GLOBE({
        el: vantaRef.current,
        THREE, // Le pasas el objeto THREE que importaste
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 100.0,
        minWidth: 100.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,
        backgroundColor: 0x000000,
      })
    );
  }

  return () => {
    if (vantaEffect) vantaEffect.destroy();
  };
}, [vantaEffect]);

const renderStars = (level) => (
  <div className="stars">
    {[...Array(5)].map((_, i) =>
      i < level ? <FaStar key={i} className="star-filled" /> : <FaRegStar key={i} className="star-empty" />
    )}
  </div>
);



  return (
    <div ref={vantaRef} style={{ width: "100%", minHeight: "100vh" }}>
      <div className="home">
        {/* ... Tu contenido normal aquí ... */}
        <div className="col-md-6 text-start title-2">
          <p>Desarrollador Front-End</p>
        </div>

        <div>
          <p className="nombre">Frank Alexis Amorin Navarro.</p>
        </div>

        <div className="col-md-6 text-start text">
          <p>
            Con conocimientos en el diseño e implementación de interfaces de usuario modernas, responsivas y accesibles.
            Manejo de tecnologías como HTML5, CSS3, JavaScript y frameworks como ReactJs y Angular/Vue. Interesado en mejorar
            la experiencia del usuario (UX/UI), asegurar la compatibilidad entre dispositivos.
            Comprometido con el aprendizaje continuo y con la capacidad para colaborar eficazmente en equipos de trabajo ágiles,
            integrándome con áreas de diseño y desarrollo backend.
          </p>
        </div>

        <div>
          <p className="title-tech">Tecnologías:</p>
        </div>

        <div className="logo-wrapper">
          {[ReactIcon, JsIcon, HtmlIcon, CssIcon, JavaIcon].map((icon, idx) => (
            <div key={idx} className="logo-card">
              <div
                className={`tech-logo ${["react", "javascript", "html", "css", "java"][idx]}`}
                title={["React", "JScript", "HTML", "CSS", "Java"][idx]}
              >
                <img src={icon} alt="" />
                <span className="logo-label">{["React", "JScript", "HTML", "CSS", "Java"][idx]}</span>
                {renderStars(3)}
              </div>
            </div>
          ))}
        </div>

        <div className="btn-container">
          <Link to="/projects" className="btn btn-primary mt-4 btn-proyectos">
            Ver Proyectos
          </Link>
        </div>
      </div>
    </div>
  );
}

 