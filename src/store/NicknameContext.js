import React, { createContext, useState } from 'react';

const NicknameContext = createContext();

const NicknameProvider = ({ children }) => {
  const [nickName, setNickName] = useState(null);

  return (
    <NicknameContext.Provider value={{nickName,  setNickName }}>
      {children}
    </NicknameContext.Provider>
  );
};

export { NicknameContext, NicknameProvider };