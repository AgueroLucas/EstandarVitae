import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './../estilos/estilocv.css';
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

function CV() {
  const mainStyle = {
    backgroundColor: '#f5cdc0',
  };

  

  return (
    <div style={mainStyle}>
      <Header />
      <div className="row justify-content-center">
      <div className="col-md-9 ">
  <div className="row align-items-center">
    <div className="col-lg-5">
      <div className="resume-base p-4" style={{ backgroundColor: '#34375a', border: '3px solid #34375a', borderRadius: '10px', position: 'relative' }}>
        <div className="profile">
          <div className="jobster-user-info d-flex align-items-center">
            <div className="profile-avatar">
              <img className="img-fluid" src="https://i.pinimg.com/736x/4e/d1/61/4ed161a97e0f206b455529eff86b980e.jpg" alt="" />
            </div>
            <div className="profile-avatar-info mt-3 " style={{ marginLeft: '20px' }} >
              <h5 className="text-white">XXXXX XXXXXX</h5>
              <div className="d-flex" style={{ gap: '6px' }}>
                <a className="text-body-white" href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp style={{ fontSize: '3rem', color: '#25D366' }} />
                </a>

                <a className="text-body-white" href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin style={{ fontSize: '3rem', color: '#7289DA' }} />
                </a>
              </div>
              {/* Botón para descargar con enlace */}
              <a href="URL_DEL_ARCHIVO" download target="_blank" rel="noopener noreferrer" className="text-dark btn btn-dark" style={{ position: 'absolute', top: '8%', right: '10px', transform: 'translateY(-50%)',backgroundColor: '#f5cdc0',fontWeight: 'bold' ,transition: 'background-color 0.3s ease', // Añadido para suavizar la transición
  }}
  // Pseudo-clases para el hover
  onMouseEnter={(e) => e.target.style.backgroundColor = '#FEF9E7'}
  onMouseLeave={(e) => e.target.style.backgroundColor = '#f5cdc0'}>Descargar</a>
            
                      
  
                    </div>
                  </div>
                  
                </div>
                <div className="about-candidate border-top">
                  <div className="candidate-info">
                    <h6 className="text-white">Email:</h6>
                    <p className="text-white">XXXXXXX_XXXXXXXXX@hotmail.com</p>
                  </div>
                  <div className="candidate-info">
                    <h6 className="text-white">Teléfono:</h6>
                    <p className="text-white">+(XX) XXXXXXXXXX</p>
                  </div>
                  <div className="candidate-info">
                    <h6 className="text-white">Domicilio:</h6>
                    <p className="text-white">XXXXXX XXX-XX XXXXX.XXXX</p>
                  </div>
                  <div className="candidate-info">
                    <h6 className="text-white">Idioma:</h6>
                    <p className="text-white">Español: Nativo</p>
                    <p className="text-white">Ingles: Nivel Avanzado</p>
                  </div>
                
                </div>
                <div className="mt-3">
                  <h5 className="text-white">Competencias:</h5>
                  <ul>
                    <li className="text-white" >Buen trabajo en equipo</li>
                    <li className="text-white">Disciplinado</li>
                    <li className="text-white">Responsable</li>
                    <li className="text-white">Rápido aprendizaje</li>
                    <li className="text-white">Organizado</li>
                    <li className="text-white">Manejo de la tecnología</li>
                    <li className="text-white">Buena comunicación</li>
                    <li className="text-white">Manejo de inglés</li>
                  </ul>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-7" style={{ padding: '20px'}}>
              <div className="resume-experience p-4" style={{ border: '2px solid #34375a', borderRadius: '10px' }}>
              <div className="timeline-box" >
                  <h5 className="resume-experience-title" style={{ marginLeft: '18px' }}>Educación:</h5>
                  <div className="jobster-candidate-timeline">
                    <div className="jobster-timeline-item">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">20XX - Actualidad</span>
                          <h6 className="mb-2">Nombre de la Carrera</h6>
                          <span>-Nombre de Universidad</span>
                        </div>
                      </div>
                    </div>
                    <div className="jobster-timeline-item mb-0">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">20XX - 20XX</span>
                          <h6 className="mb-2">Nombre de la Carrera</h6>
                          <span>-Nombre de la Escuela</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-box mt-5">
                  <h5 className="resume-experience-title" style={{ marginLeft: '18px' }}>Experiencia Laboral:</h5>
                  <div className="jobster-candidate-timeline">
                    <div className="jobster-timeline-item">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">20XX - Actualidad</span>
                          <h6 className="mb-2">Puesto Laboral</h6>
                          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sint reiciendis iusto facilis rerum quaerat </p>
                        </div>
                      </div>
                    </div>
                    <div className="jobster-timeline-item mb-0">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">2022 - 2023</span>
                          <h6 className="mb-2">Puesto Laboral</h6>
                          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sint reiciendis iusto facilis rerum quaerat</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-box mt-4">
                  <h5 className="resume-experience-title" style={{ marginLeft: '18px' }}>Capacitaciones:</h5>
                  <div className="jobster-candidate-timeline">
                    <div className="jobster-timeline-item">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">20XX</span>
                          <h6 className="mb-2">Curso Realizados</h6>
                        </div>
                      </div>
                    </div>
                    <div className="jobster-timeline-item mb-0">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info ">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">20XX</span>
                          <h6 className="mb-2">Cursos Realizados</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CV;