

import { useState } from "react";
import "./Contact.css";

import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
export default function Contact() {

    //estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [status, setStatus] = useState('Enviar');

    //funcion para manejar el envio del formulario
    const enviarFormulario = async (e) =>{
       e.preventDefault();
        setStatus('Enviando...');
    

    //se preparan los datos para enviar al formulario
   const formData = {
            nombre: nombre,
            email: email,
            mensaje: mensaje,
        };

   try{
    const respuesta = await fetch('https://formsubmit.co/ajax/frankalexisamorinnavarro@gmail.com', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    const result = await respuesta.json();

    if(result.success === 'true'){
        setStatus('Enviado :D');
        setNombre('');
        setEmail('');
        setMensaje('');
        
        setTimeout(() => setStatus('Enviar'),2000);
    } else{
        throw new Error (result.message || 'Hubo un problema para enviar los datos');
    }
   } catch (error){
    console.error('Error al enviar el formulario', error);
    setStatus('ERROR ❌');

    setTimeout(() => setStatus('Enviar'), 2000);
   }

};

    return (


        <>
            <section className="seccion-contact" id="contacto">
                <h2 className="title-contact">Contactar</h2>
                <div className="row p-5">
                    <div className="links-sociales col-md-7">
                        <ul>
                            <li><span>Dirección:</span></li>
                            <p>Lima, Lima, Perú.</p>
                            <li><span>Correo:</span></li>
                            <p>frankalexisamorinnavarro@gmail.com</p>
                            <li><span>Celular:</span></li>
                            <p>974-697-110</p>
                            <li><span>Redes Sociales:</span></li>
                            
                                    <div className='btns-redes'>
                                      <a href="https://wa.me/974697110" className='btn btn-wsp' target='_blank' rel='noopener noreferrer'>
                                        <FaWhatsapp className='me-2 icon-wsp'></FaWhatsapp>Whatsapp</a>
                            
                                      <a href="https://www.linkedin.com/in/frank-alexis-amorin-navarro-8233a92b2/" className='btn btn-linkedin' target='_blank' rel='noopener noreferrer'>
                                        <FaLinkedin className='me-2 icon-linkedin'></FaLinkedin>Linkedin</a>
                            
                                      <a href="https://github.com/FrankAmorinNavarro" className='btn btn-github' rel='noopener noreferrer' target='_blank'>
                                        <FaGithub className='me-2 icon-github'></FaGithub>Github</a>
                                    </div>
                        </ul>
                    </div>

                    <div className="contenedor-formulario col-md-5">
                        <form  onSubmit={enviarFormulario} className="formulario">
                            <h3 className="titulo-formu">Formulario de Contacto</h3>
                            <div className="form-control">
                                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required placeholder=" "/>
                                <label>
                                    {
                                        "Nombre:".split("").map((letra, i) => (
                                            <span key={i} style={{ transitionDelay: `${i * 40}ms` }}>
                                                {letra}
                                            </span>
                                        ))
                                    }
                                </label>
                            </div>

                            <div className="form-control">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder=" "/>
                                <label>
                                    {
                                        "De:".split("").map((letra, i) => (
                                            <span key={i} style={{ transitionDelay: `${i * 40}ms` }}>
                                                {letra}
                                            </span>
                                        ))
                                    }
                                </label>
                            </div>

                            <div className="form-control">
                                <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} required placeholder=" "/>
                                <label>
                                    {
                                        "Mensaje:".split("").map((letra, i) => (
                                            <span key={i} style={{ transitionDelay: `${i * 40}ms` }}>
                                                {letra}
                                            </span>
                                        ))
                                    }
                                </label>
                            </div>

                            <button className="btn-enviar" disabled={status !== 'Enviar' && status !== 'Error'} >{status}</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}