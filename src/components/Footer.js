import React from 'react';
import { FaBook, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";

const Footer = () => {
  return (
    
    <div className="container">
      <hr className="featurette-divider" />
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-0 " style={{ borderTopColor: 'black' }}>
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-black text-decoration-none lh-1">
            <HiUserAdd style={{ fontSize: '3rem', marginRight: '0.5rem' }} />
            <svg className="bi" width="30" height="24"></svg>
          </a>
          <span className="mb-3 mb-md-0 text-black">&copy; 2023 AgezCode,Technology. Derechos reservados </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
  <li className="ms-3">
    <a className="text-body-white" href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin style={{ fontSize: '3rem', color: '#7289DA' }} />
    </a>
  </li>
  <li className="ms-3">
    <a className="text-body-white" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <FaInstagram style={{ fontSize: '3rem', color: '#E4405F' }} />
    </a>
  </li>
  <li className="ms-3">
    <a className="text-body-white" href="https://wa.me/" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp style={{ fontSize: '3rem', color: '#25D366' }} />
    </a>
  </li>
</ul>
      </footer>
    </div>
  );
}

export default Footer;
