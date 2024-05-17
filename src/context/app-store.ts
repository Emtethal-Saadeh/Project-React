/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useEffect, useState } from 'react';

const CACHE_KEY = 'username';
const CACHE_KEY_ROLE = 'role';
const CACHE_KEY_CURRENCY = 'currency';
const CACHE_KEY_LANGUAGE = 'language';
const CACHE_KEY_SIGN = 'sing';


interface ContextType {
  username: string;
  setusername: React.Dispatch<React.SetStateAction<string>>;
  role: string;
  setrole: React.Dispatch<React.SetStateAction<string>>;
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  currencySign: string;
  setCurrencySign: React.Dispatch<React.SetStateAction<string>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const AppStoreContext = createContext<ContextType>({
  username: '',
  setusername: () => {},
  role: '',
  setrole: () => {},
  currency: '',
  setCurrency: () => {},
  currencySign: '',
  setCurrencySign: () => {},
  language: '',
  setLanguage: () => {},
});

export const useAppStore = () => useContext(AppStoreContext);

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cachedName = sessionStorage.getItem(CACHE_KEY);
  const cachedRole = sessionStorage.getItem(CACHE_KEY_ROLE);
  const cachedCurrency = localStorage.getItem(CACHE_KEY_CURRENCY) ?? '';
  const cachedLanguage = localStorage.getItem(CACHE_KEY_LANGUAGE) ?? '';

  const [username, setusername] = useState<string>(cachedName ?? ''); 
  const [role, setrole] = useState<string>(cachedRole ?? '');
  const [currency, setCurrency] = useState<string>(cachedCurrency);
  const [currencySign, setCurrencySign] = useState<string>('');
  const [language, setLanguage] = useState<string>(cachedLanguage);

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

  useEffect(() => {
    if (currency.length > 0) {
      localStorage.setItem(CACHE_KEY_CURRENCY, currency);
      localStorage.setItem(CACHE_KEY_SIGN, currencySign); 
      switch (currency) {
        case 'Shekel':
          setCurrencySign('₪');
          break;
        case 'Jordan Dinar':
          setCurrencySign('د');
          break;
        case 'US Dollar':
          setCurrencySign('$');
          break;
        default:
          setCurrencySign('');
      }
    } else {
      localStorage.removeItem(CACHE_KEY_CURRENCY);
      localStorage.removeItem(CACHE_KEY_SIGN); 
    }
  }, [currency, currencySign]);
  
  useEffect(() => {
    if (language.length > 0) {
      localStorage.setItem(CACHE_KEY_LANGUAGE, language);
    } else {
      localStorage.removeItem(CACHE_KEY_LANGUAGE);
    }
  }, [language]);
  
  return React.createElement(AppStoreContext.Provider, { value: { username, setusername , role, setrole ,currency,
    setCurrency,
    currencySign,
    setCurrencySign,
    language,
    setLanguage} }, children);
};
