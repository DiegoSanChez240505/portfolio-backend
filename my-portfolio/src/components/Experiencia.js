import React from 'react';

const Experiencia = () => (
  <div className="animate-fade-in">
    <h1 className="text-3xl font-bold text-primary-800 mb-6">Experiencia</h1>
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-xl font-semibold text-primary-700 mb-2">Desarrollo de Aplicaciones Web y APIs</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Desarrollo con .NET y ASP.NET Core</li>
          <li>Diseño e implementación de API RESTful</li>
          <li>Microservicios con Docker</li>
          <li>Integración de APIs de terceros</li>
          <li>Conocimientos básicos en Angular</li>
        </ul>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold text-primary-700 mb-2">Bases de Datos y Servicios en la Nube</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>MySQL, SQL Server, PostgreSQL</li>
          <li>Diseño y desarrollo de bases de datos SQL</li>
          <li>Servicios Azure</li>
        </ul>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold text-primary-700 mb-2">Optimización y Escalabilidad</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Escalabilidad con Docker</li>
          <li>Pruebas automatizadas</li>
        </ul>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold text-primary-700 mb-2">Desarrollo Móvil</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Flutter y Dart</li>
          <li>Integración de APIs</li>
          <li>Optimización y escalabilidad</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Experiencia;