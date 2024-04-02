"use client";
import { createContext, useState } from 'react';

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [tabDefault, setTabDefault] = useState('Business');

  return (
    <TabContext.Provider value={{ tabDefault, setTabDefault }}>
      {children}
    </TabContext.Provider>
  );
};