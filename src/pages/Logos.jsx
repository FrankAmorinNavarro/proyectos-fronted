
import './Home.css';


export default function Logos() {

  const logos = [
    { id: 1, src: 'react.svg', alt: 'React' },
    { id: 2, src: 'javascript.svg', alt: 'JavaScript' },
    { id: 3, src: 'html.svg', alt: 'HTML' },
    { id: 4, src: 'css.svg', alt: 'CSS' },
    { id: 5, src: 'java.svg', alt: 'Java' },
  ];



  return (
    /* Es un renderizado de la lista */
    <div className="container-logos">
      {logos.map((logo) => (
        <div key={logo.id} className="logo-card">
          <div className="tech-logo">
            <img src={logo.src} alt={logo.alt} />
          </div>
          <span className="logo-label">{logo.alt}</span>
        </div>
      ))}
    </div>
  );

}

