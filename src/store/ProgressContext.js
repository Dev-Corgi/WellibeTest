import React, { createContext, useState } from 'react';

const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(null);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export { ProgressContext, ProgressProvider };