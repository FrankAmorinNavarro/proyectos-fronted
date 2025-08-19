

import{FaFacebook} from 'react-icons/fa';



export default function HomeTwo() {



    return (

        <>
            <header className="headerScrolled">
                <ul className="menu">
                    <li className="logo-contenedor">
                        <a href="#" className="logo-link">
                            <img src="" alt="Logo" className="logo-img" />
                            <span className="logo-text">Frase de la marca</span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="#">
                            Nosotros
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="#">
                            Servicios
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="#">
                            Proyectos
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="#">
                            Testimonios
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="#">
                            Contacto
                        </a>
                    </li>
                </ul>
            </header>

            <div  id="inicio" className="cuerpo container py-5">
                <div className="row align-items-center justify-content-center">
                    <p className='display-2 fw-bold text-inicio'>
                        Texto de presentacion
                    </p>

                    <div className="d'flex justify-content-center justify-content-lg-start gap-3 mt-4">
                        <a href="#" className='btn btn-facebook d-flex align-items-center px-4 py-2'>
                            <FaFacebook className='me-2'/>Facebook
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}