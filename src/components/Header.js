import React from 'react';
import { HiUserAdd } from "react-icons/hi";

// Importa el estilo de letra desde Google Fonts
const headerStyle = {
  background: '#34375a',
  padding: '18px',
  fontFamily: 'Kanit, sans-serif', // Aplica el estilo de letra personalizado
  textAlign: 'center', // Centra el contenido horizontalmente
};

// Estilos para los enlaces
const linkStyle = {
  fontSize: '2rem',
   // Agrega negrita directamente aquí
  color: 'black',
  textDecoration: 'none',
  margin: '5px 8px', // Ajusta el margen horizontal según tus necesidades
  borderRadius: '20px', // Añade bordes redondeados
  padding: '10px 20px', // Añade relleno interno para dar espacio al texto
  transition: 'box-shadow 0.3s, transform 0.3s', // Agrega transición a la sombra y la transformación
};

const Header = () => {
  return (
    <header style={headerStyle} className="text-black">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <HiUserAdd style={{ fontSize: '5rem', marginRight: '0.5rem', marginTop:"-15px" }} />
            <svg className="bi me-1" width="20" height="32" role="img" aria-label="Bootstrap"></svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-1 justify-content-center mb-md-4">
            {/* Aplica la clase 'custom-link' a los enlaces */}
            <li>
              <a
                href="/"
                className="nav-link px-2 text-white custom-link"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                  e.target.style.transform = 'scale(1.15)'; // Hace que sobresalga ligeramente
                }}
                onMouseOut={(e) => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'scale(1)'; // Restaura el tamaño original
                }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/cv"
                className="nav-link px-2 text-white custom-link"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                  e.target.style.transform = 'scale(1.15)';
                }}
                onMouseOut={(e) => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Curriculum Vitae
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;