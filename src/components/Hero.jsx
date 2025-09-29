
import { useState, useEffect, useRef } from "react";

import html from "../assets/img/html.svg";
import java from "../assets/img/java.svg";
import react from "../assets/img/react.svg";
import javascript from "../assets/img/javascript.svg";
import css from "../assets/img/css.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import python from "../assets/img/python.svg";
import "./Hero.css";

export default function Hero() {
    const [theme, setTheme] = useState(false);
    const canvasRef = useRef(null);

    //efecto de colores de fondo
    useEffect(() => {
        if (theme) {
            document.body.classList.add("theme");
        } else {
            document.body.classList.remove("theme");
        }
    }, [theme]);


    //efecto de la card con logos
 useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = canvas.width;
    let H = canvas.height;


    // iconos:
    const icons = [
        { name: "Html", distance: 150, radius: 27, angle: 4.7, speed: 0.0096, img: html},
        { name: "React", distance: 150, radius: 27, angle: 6.3, speed: 0.0096, img: react },
        { name: "Java", distance: 150, radius: 27, angle: 7.8, speed: 0.0096, img: java },
        { name: "Javascript", distance: 150, radius: 27, angle: 3, speed: 0.0096, img: javascript },
        { name: "Css", distance: 85, radius: 23, angle: 0, speed: 0.016, img: css },
        { name: "Bootstrap", distance: 85, radius: 19, angle: 2, speed: 0.016, img: bootstrap },
        { name: "Python", distance: 85, radius: 23, angle: 4, speed: 0.016, img: python}
    ];

    // Precargar imágenes
    icons.forEach(p => {
        if (p.img) {
            const image = new Image();
            image.src = p.img;
            p.imageObj = image; 
        }
    });


    function drawIcons() {
        icons.forEach((p) => {
            const x = W / 2 + Math.cos(p.angle) * p.distance;
            const y = H / 2 + Math.sin(p.angle) * p.distance;

            // Órbita
            ctx.beginPath();
            ctx.arc(W / 2, H / 2, p.distance, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(255,255,255,0.2)";
            ctx.stroke();

            if (p.imageObj) {
              
                ctx.drawImage(p.imageObj, x - p.radius, y - p.radius, p.radius * 2, p.radius * 2);
            } else if (p.color) {
                //colores
                ctx.beginPath();
                ctx.arc(x, y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            }

            p.angle += p.speed;
        });
    }

    function animate() {
        ctx.clearRect(0, 0, W, H);
    
        drawIcons();
        requestAnimationFrame(animate);
    }

    animate();
}, []);

    return (

        <>
            <section className="container container-hero py-5 mt-5">
                <div className="row content">
                    <div className="presentation col-md-7">
                        
                        <button
                            onClick={() => setTheme(!theme)}
                            className="btn-color">Fondo</button>
                        <h1 className="title"> Web Junior <span className="text-dev">Developer</span></h1>
                        <div className='animate-container'>
                            <p className="animate">Desarrollo de Sistemas de Información.</p>
                        </div>
                        <span className='intro'>
                            <p className="textt">Creando sitios web, funcionales y fáciles de usar 
                                para soluciones digitales.</p>
                        </span>

                        <div className='btn-grup'>
                            <button className="btn-project me-2" onClick={() => { window.location.href = "#proyectos"; }} >Proyectos</button>
                            <button className="btn-contac">Contacto</button>
                        </div>

                    </div>

                    <div className="orbits col-md-5" >
                        <canvas
                            ref={canvasRef}
                            width={400}
                            height={400}
                            className="marco"
                        />

                    </div>
                </div>
            </section>


        </>

    );
}