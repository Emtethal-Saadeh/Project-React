import React, { createContext, useState } from 'react';

interface ContextType {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<ContextType>({
  text: '',
  setText: () => {},
});

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [text, setText] = useState<string>('');

  return (
    <MyContext.Provider value={{ text, setText }}>
      {children}
    </MyContext.Provider>
  );
};
