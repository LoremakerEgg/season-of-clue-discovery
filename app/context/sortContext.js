"use client";
import { useContext, createContext, useState } from "react";

const SortContext = createContext();

export function SortWrapper({ children }) {
  const [sortDisplay, setSortDisplay] = useState();
  return (
    <SortContext.Provider value={{ sortDisplay, setSortDisplay }}>
      {children}
    </SortContext.Provider>
  );
}

export function useSortContext() {
  return useContext(SortContext);
}
