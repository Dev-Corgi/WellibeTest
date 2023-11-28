import React, { createContext, useState } from 'react';

const ScreenNameContext = createContext();

const ScreenNameProvider = ({ children }) => {
  const [screenName, setScreenName] = useState(null);

  return (
    <ScreenNameContext.Provider value={{ screenName, setScreenName }}>
      {children}
    </ScreenNameContext.Provider>
  );
};

export { ScreenNameContext, ScreenNameProvider };