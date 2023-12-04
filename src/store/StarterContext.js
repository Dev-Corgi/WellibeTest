//나중에 없앨것
import React, { createContext, useState } from 'react';

const StarterContext = createContext();

const StarterProvider = ({ children }) => {
  const [isStarter, setIsStarter] = useState(null);

  return (
    <StarterContext.Provider value={{ isStarter, setIsStarter }}>
      {children}
    </StarterContext.Provider>
  );
};

export { StarterContext , StarterProvider};