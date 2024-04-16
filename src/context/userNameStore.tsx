import React, { createContext, useState } from 'react';

interface ContextType {
  username: string;
  setusername: React.Dispatch<React.SetStateAction<string>>;
}

export const useNameStore = createContext<ContextType>({
  username: '',
  setusername: () => {},
});

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setusername] = useState<string>('');

  return (
    <useNameStore.Provider value={{ username, setusername }}>
      {children}
    </useNameStore.Provider>
  );
};
