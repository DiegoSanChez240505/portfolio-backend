import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="space-y-6 animate-fade-in">
    <section className="text-center py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary-800 mb-4 animate-slide-down">Diego Sánchez Ek</h1>
      <p className="text-xl text-gray-600 mb-8 animate-slide-up">TSU en Desarrollo de Software Multiplataforma</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/experiencia" className="btn btn-primary">Ver Experiencia</Link>
        <Link to="/proyectos" className="btn btn-secondary">Ver Proyectos</Link>
      </div>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="card hover:bg-primary-50 animate-slide-up" style={{animationDelay: "0.1s"}}>
        <h2 className="text-xl font-bold mb-3 text-primary-700">Experiencia</h2>
        <p className="text-gray-600 mb-4">Desarrollo de aplicaciones web, APIs y más.</p>
        <Link to="/experiencia" className="text-primary-600 hover:text-primary-800 font-medium">Leer más →</Link>
      </div>
      
      <div className="card hover:bg-primary-50 animate-slide-up" style={{animationDelay: "0.2s"}}>
        <h2 className="text-xl font-bold mb-3 text-primary-700">Proyectos</h2>
        <p className="text-gray-600 mb-4">Conoce mis proyectos destacados y repositorios.</p>
        <Link to="/proyectos" className="text-primary-600 hover:text-primary-800 font-medium">Leer más →</Link>
      </div>
      
      <div className="card hover:bg-primary-50 animate-slide-up" style={{animationDelay: "0.3s"}}>
        <h2 className="text-xl font-bold mb-3 text-primary-700">Habilidades</h2>
        <p className="text-gray-600 mb-4">Tecnologías, lenguajes y frameworks.</p>
        <Link to="/habilidades" className="text-primary-600 hover:text-primary-800 font-medium">Leer más →</Link>
      </div>
      
      <div className="card hover:bg-primary-50 animate-slide-up" style={{animationDelay: "0.4s"}}>
        <h2 className="text-xl font-bold mb-3 text-primary-700">Certificados</h2>
        <p className="text-gray-600 mb-4">Certificaciones y formación continua.</p>
        <Link to="/certificados" className="text-primary-600 hover:text-primary-800 font-medium">Leer más →</Link>
      </div>
      
      <div className="card hover:bg-primary-50 animate-slide-up" style={{animationDelay: "0.5s"}}>
        <h2 className="text-xl font-bold mb-3 text-primary-700">Galería</h2>
        <p className="text-gray-600 mb-4">Fotos de proyectos y eventos profesionales.</p>
        <Link to="/galeria" className="text-primary-600 hover:text-primary-800 font-medium">Leer más →</Link>
      </div>
      
      <div className="card hover:bg-primary-50 animate-slide-up" style={{animationDelay: "0.6s"}}>
        <h2 className="text-xl font-bold mb-3 text-primary-700">Contacto</h2>
        <p className="text-gray-600 mb-4">Información de contacto profesional.</p>
        <Link to="/contacto" className="text-primary-600 hover:text-primary-800 font-medium">Leer más →</Link>
      </div>
    </div>
  </div>
);

export default Home;