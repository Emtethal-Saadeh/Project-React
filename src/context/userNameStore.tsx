
import React, { createContext, useEffect, useState } from 'react';

const CACHE_KEY = 'username';

interface ContextType {
  username: string;
  setusername: React.Dispatch<React.SetStateAction<string>>;
}

export const useAppStore = createContext<ContextType>({
  username: '',
  setusername: () => {},
});

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cachedName = sessionStorage.getItem(CACHE_KEY);
  const [username, setusername] = useState<string>(cachedName ?? ''); 

  useEffect(() => {
    if (username.length > 0) {
      sessionStorage.setItem(CACHE_KEY, username);
      console.log(username);
    } else {
      sessionStorage.removeItem(CACHE_KEY);
    }
  }, [username]);

  return (
    <useAppStore.Provider value={{ username, setusername }}>
      {children}
    </useAppStore.Provider>
  );
};
