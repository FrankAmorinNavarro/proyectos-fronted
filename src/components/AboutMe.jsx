import { Download } from "lucide-react";
import ProfileCard from '../snnipets/ProfileCard';
import "./AboutMe.css";
import profile from "../assets/img/profile.png";
import miCV from '../assets/cv/Frank_Amorin_CV.pdf';

export default function AboutMe() {

    return (

        <section className="container container-about py-5 ">
            <div className="subtitle">
                <h2 className="title2" id='sobremi'>Sobre Mí</h2>
                <p className="subtext">Creando soluciones digitales que transforman ideas en tecnología.</p>
            </div>

            <div className="row">
                <div className="profile-card col-md-6" >
                    <ProfileCard
                        name="Frank Amorin"
                        handle="frankcode"
                        status="Online"
                        contactText="¡Contactame!"
                        avatarUrl={profile}
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => window.open("https://wa.me/974697110", "_blank")} />
                </div>

                <div className='section-text col-md-6'>
                    <div className='container-text'>
                        <h2 className='name'>Hola, Soy Frank</h2>
                        <p className='text2'>Un estudiante de Sistemas de Información con un gran interés en el mundo del desarrollo de sitios web,
                            la tecnología digital y la innovación tecnológica. Me gusta explorar cómo la tecnología puede ser aplicada para
                            resolver problemas reales y crear soluciones útiles. Actualmente, continúo aprendiendo y desarrollándome en el campo
                            del desarrollo web y en el mundo digital de una forma más amplia.</p>

                        <div className='btns'>
                            <button
                                className='btn-descargar'
                                onClick={() => {
                                    const link = document.createElement("a");
                                    link.href = miCV;
                                    link.download = "Frank_Amorin_CV.pdf";
                                    document.body.appendChild(link);
                                    link.click();                              
                                    document.body.removeChild(link);
                                }}
                            >
                                Descargar CV <Download size={24} />
                            </button>
                        </div>
                    </div>
                </div>


            </div>

        </section>

    );
}