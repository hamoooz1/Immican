"use client";
import { createContext, useState } from "react";
// Create a context
export const ModalStateContext = createContext();

export const ModalStateProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalStateContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalStateContext.Provider>
  );
};