import React from 'react';

const Habilidades = () => (
  <div className="animate-fade-in">
    <h1 className="text-3xl font-bold text-primary-800 mb-6">Habilidades</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="card hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl font-semibold text-primary-700 mb-4">Herramientas y Frameworks</h2>
        <div className="flex flex-wrap gap-2">
          {['Visual Studio', 'VS Code', 'Azure DevOps', 'NodeJS', 'Flutter', 'GitHub', 'Docker', 'Postman'].map((tool) => (
            <span 
              key={tool} 
              className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      
      <div className="card hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl font-semibold text-primary-700 mb-4">Lenguajes de Programación</h2>
        <div className="space-y-3">
          {[
            { name: 'C#', level: 90 },
            { name: 'JavaScript', level: 85 },
            { name: 'Python', level: 75 },
            { name: 'Dart', level: 70 },
          ].map((lang) => (
            <div key={lang.name} className="space-y-1">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">{lang.name}</span>
                <span className="text-gray-500">{lang.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-600 h-2 rounded-full transition-all duration-1000" 
                  style={{ width: `${lang.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
      <div className="card hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl font-semibold text-primary-700 mb-4">Bases de Datos</h2>
        <div className="flex flex-wrap gap-2">
          {['SQL', 'MySQL', 'SQL Server', 'PostgreSQL', 'PL/SQL', 'T-SQL'].map((db) => (
            <span 
              key={db} 
              className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {db}
            </span>
          ))}
        </div>
      </div>
      
      <div className="card hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl font-semibold text-primary-700 mb-4">Habilidades Blandas</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            'Trabajo en equipo', 
            'Colaboración', 
            'Resolución de conflictos', 
            'Adaptabilidad', 
            'Inteligencia emocional', 
            'Gestión del tiempo', 
            'Responsabilidad',
            'Comunicación'
          ].map((skill) => (
            <div key={skill} className="flex items-center">
              <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="card hover:shadow-lg transition-all duration-300 md:col-span-2">
        <h2 className="text-xl font-semibold text-primary-700 mb-4">Idiomas</h2>
        <div className="flex flex-wrap gap-4">
          <div className="space-y-1">
            <div className="flex items-center">
              <span className="font-medium text-gray-700 mr-2">Español</span>
              <span className="text-xs bg-primary-100 text-primary-800 px-2 py-0.5 rounded">Nativo</span>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-6 h-2 bg-primary-600 mr-0.5 rounded-sm"></div>
              ))}
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center">
              <span className="font-medium text-gray-700 mr-2">Inglés</span>
              <span className="text-xs bg-primary-100 text-primary-800 px-2 py-0.5 rounded">A2</span>
            </div>
            <div className="flex">
              {[1, 2].map((i) => (
                <div key={i} className="w-6 h-2 bg-primary-600 mr-0.5 rounded-sm"></div>
              ))}
              {[3, 4, 5].map((i) => (
                <div key={i} className="w-6 h-2 bg-gray-300 mr-0.5 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Habilidades;