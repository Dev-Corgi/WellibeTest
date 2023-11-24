import React, { createContext, useState } from 'react';

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [imageUri, setImageUri] = useState(null);

  return (
    <ImageContext.Provider value={{ imageUri, setImageUri }}>
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageProvider };