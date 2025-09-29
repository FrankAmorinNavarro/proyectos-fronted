
import { useState, useRef, useEffect } from 'react';
import './Projects.css';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import primerportada from '../assets/img/primerportada.png';

export default function Projects() {

  const [showModal, setShowModal] = useState(false);

  const [activeCardId, setActiveCardId] = useState(null);
  const handleCardClick = (e, project) => {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) return; // En PC, dejar que funcione normal

  e.preventDefault(); // SIEMPRE evitar navegación predeterminada

  if (activeCardId === project.id) {
    window.open(project.link, '_blank');
  } else {
    setActiveCardId(project.id);
  }
};

  const containerRef = useRef();
  // Detecta clics fuera de las tarjetas
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveCardId(null); // Reinicia para forzar dos toques otra vez
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const projects = [
    {
      id: 1,
      title: 'Shoes Cleaning',
      image: primerportada,
      description: 'Una página web responsive con Login de usario (necesario crear cuenta para ver la página), una empresa que ofrece el servicio de limpieza de calzados.',
      link: 'https://frankamorinnavarro.github.io/shoes-cleaning/'
    },
    {
      id: 2,
      title: 'Proyecto 2',
      image: 'proyecto2.jpg',
      description: 'Descripción breve del proyecto 2.',
      link: '/proyecto2'
    },
    {
      id: 3,
      title: 'Proyecto 3',
      image: 'proyecto3.jpg',
      description: 'Descripción breve del proyecto 3.',
      link: '/proyecto3'
    },
    {
      id: 4,
      title: 'Proyecto 4',
      image: 'proyecto4.jpg',
      description: 'Descripción breve del proyecto 4.',
      link: '/proyecto4'
    },

    {
      id: 5,
      title: 'Proyecto 5',
      image: 'proyecto4.jpg',
      description: 'Descripción breve del proyecto 5.',
      link: '/proyecto5'
    },
  ];

  return (

    <div className='fondo-project' id='proyectos'>
      <div className="container py-5 text-center">

        <div className="title-3 mb-4 title1">
          <h2>Mis Proyectos</h2>
        </div>

        <div>
          <p className="front">Proyectos Front-end</p>
        </div>

        <div ref={containerRef} className="projects-grid">

          {projects.map((project) => (
            
            <div key={project.id} className="grid-item">
              {/*enlace ahora está DENTRO, y solo envuelve la tarjeta*/}
              <a
                href={project.link || '#'}
                target={project.link ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="project-card-link"
                onClick={(e) => handleCardClick(e, project)}
              >
                <div className={`card project-card proyecto-${project.id} ${activeCardId === project.id ? 'is-active' : ''}`}>
                  <img src={project.image} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}

        </div>

        <div className='btns-redes'>
          <div>
            <a href="https://wa.me/974697110" className='btn btn-wsp' target='_blank' rel='noopener noreferrer'>
              <FaWhatsapp className='me-2 icon-wsp'></FaWhatsapp>Whatsapp</a>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/frank-alexis-amorin-navarro-8233a92b2/" className='btn btn-linkedin' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='me-2 icon-linkedin'></FaLinkedin>Linkedin</a>
          </div>

          <div>
            <a href="https://github.com/FrankAmorinNavarro" className='btn btn-github' rel='noopener noreferrer' target='_blank'>
              <FaGithub className='me-2 icon-github'></FaGithub>Github</a>
          </div>
        </div>


        {showModal && (
          <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center" style={{ zIndex: 1050 }}>
    

          </div>
        )}

      </div>
    </div>

  );
}