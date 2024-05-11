/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useEffect, useState } from 'react';

const CACHE_KEY = 'username';
const CACHE_KEY_ROLE = 'username';


interface ContextType {
  username: string;
  setusername: React.Dispatch<React.SetStateAction<string>>;
  role: string;
  setrole: React.Dispatch<React.SetStateAction<string>>;
}

const AppStoreContext = createContext<ContextType>({
  username: '',
  setusername: () => {},
  role: '',
  setrole: () => {},
});

export const useAppStore = () => useContext(AppStoreContext);

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cachedName = sessionStorage.getItem(CACHE_KEY);
  const cachedRole = sessionStorage.getItem(CACHE_KEY_ROLE);

  const [username, setusername] = useState<string>(cachedName ?? ''); 
  const [role, setrole] = useState<string>(cachedRole ?? '');

  useEffect(() => {
    if (username.length > 0) {
      sessionStorage.setItem(CACHE_KEY, username);
      console.log(username);
    } else {
      sessionStorage.removeItem(CACHE_KEY);
    }
  }, [username]);

  useEffect(() => {
    if (role.length > 0) {
      sessionStorage.setItem(CACHE_KEY_ROLE, role);
      console.log(role);
    } else {
      sessionStorage.removeItem(CACHE_KEY_ROLE);
    }
  }, [role]);
  
  return React.createElement(AppStoreContext.Provider, { value: { username, setusername , role, setrole} }, children);
};
