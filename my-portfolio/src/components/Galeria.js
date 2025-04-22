import React, { useState } from 'react';

const Galeria = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  
  // Sample images - in a real application these would come from a database or storage
  const sampleImages = [
    '/logo192.png',
    '/logo512.png'
  ];
  
  const handleFileChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles([...selectedFiles, ...filesArray]);
      
      const imagesPreviews = filesArray.map(file => URL.createObjectURL(file));
      setPreviewImages([...previewImages, ...imagesPreviews]);
    }
  };
  
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      const filesArray = Array.from(e.dataTransfer.files);
      setSelectedFiles([...selectedFiles, ...filesArray]);
      
      const imagesPreviews = filesArray.map(file => URL.createObjectURL(file));
      setPreviewImages([...previewImages, ...imagesPreviews]);
    }
  };
  
  const removeImage = (index) => {
    // Release object URL to avoid memory leaks
    URL.revokeObjectURL(previewImages[index]);
    
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
    
    const newPreviews = [...previewImages];
    newPreviews.splice(index, 1);
    setPreviewImages(newPreviews);
  };
  
  const uploadImages = () => {
    // In a real application, you would upload the files to a server here
    alert(`${selectedFiles.length} imágenes listas para subir. En una aplicación real, estas se enviarían a un servidor.`);
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-primary-800 mb-6">Galería de Fotos</h1>
      
      <div className="card mb-8">
        <h2 className="text-xl font-semibold text-primary-700 mb-4">Subir Nuevas Fotos</h2>
        
        <div 
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragging ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => document.getElementById('photo-upload').click()}
        >
          <input 
            type="file" 
            id="photo-upload" 
            className="hidden"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          
          <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          
          <p className="mt-2 text-gray-600">Arrastra y suelta imágenes aquí, o haz clic para seleccionar archivos</p>
          <p className="text-sm text-gray-500 mt-1">Formatos: JPG, PNG, GIF</p>
        </div>
        
        {previewImages.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Imágenes seleccionadas ({previewImages.length})</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {previewImages.map((image, index) => (
                <div key={index} className="relative group">
                  <img 
                    src={image} 
                    alt={`Vista previa ${index + 1}`} 
                    className="w-full h-32 object-cover rounded shadow-md"
                  />
                  <button
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(index);
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <button 
                className="btn btn-primary"
                onClick={uploadImages}
              >
                Subir {previewImages.length} {previewImages.length === 1 ? 'Foto' : 'Fotos'}
              </button>
            </div>
          </div>
        )}
      </div>
      
      <h2 className="text-xl font-semibold text-primary-700 mb-4">Mis Fotos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Muestra imágenes de ejemplo y cualquier imagen de vista previa */}
        {[...sampleImages, ...previewImages].map((image, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="relative overflow-hidden aspect-square">
              <img 
                src={image} 
                alt={`Foto ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-3">
              <p className="text-gray-700 text-sm">Foto {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;