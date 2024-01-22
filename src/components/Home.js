import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import './../estilos/estilos.css';

const TabContent = ({  content }) => (
  <div className="tab-content text-center" style={{ marginLeft: '90px',marginTop: '-20px' }}>
    <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-home-tab">
      {content}
    </div>
  </div>
);
const Home = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScroll(currentScrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main>
        <div
        className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
        style={{
          backgroundImage: `url('https://images.inc.com/uploaded_files/image/1920x1080/getty_960610660_20001333181884380490_365559.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '20px',
          border: "2px solid black",
          
        }}
      >
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal" >XXXXX XXXXX </h1>
          <p className="lead fw-normal" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sint reiciendis iusto facilis rerum quaerat
          </p>
          <a
            className="btn btn-dark btn-lg"
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#34375a', fontWeight: 'bold',transition: 'background-color 0.3s ease', // Añadido para suavizar la transición
          }}
          // Pseudo-clases para el hover
          onMouseEnter={(e) => e.target.style.backgroundColor = '#744c71'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#34375a'}
          >
            Whatsapp
          </a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>


  

    {/* Segundo bloque de código */}
    <nav className='p-3 p-md-5 m-md-4'>
  <div className="nav nav-tabs" id="nav-tab" role="tablist" style={{ borderBottom: '2px solid #34375a' }}>
    <button
      className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
      onClick={() => handleTabClick('home')}
      style={{
        backgroundColor: activeTab === 'home' ? '#34375a' : '#229954',
        color: 'white',
        borderBottom: '2px solid #34375a'
      }}
    >
      Sobre Mi
    </button>
  </div>
</nav>

      {activeTab === 'home' && (
        <TabContent  title="Home" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      )}
      

      {showScroll && (
        <div
          className="scroll-to-top"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </div>
      )}
  
  
    </main>
  );
}

export default Home;