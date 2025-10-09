

import "./Header.css";

export default function Header() {

    
    return (

         <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    {/* Logo o nombre mi sitio */}
                    <a className="navbar-brand logo" href="#">Frank AN</a>

                    {/* Botón hamburguesa para móviles */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menú */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#sobremi">Sobre Mí</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#proyectos">Proyectos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};