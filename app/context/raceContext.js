"use client";
import { useContext, createContext, useState } from "react";

const RaceContext = createContext();

export function RaceWrapper({ children }) {
  const [activeRace, setActiveRace] = useState();
  return (
    <RaceContext.Provider value={{ activeRace, setActiveRace }}>
      {children}
    </RaceContext.Provider>
  );
}

export function useRaceContext() {
  return useContext(RaceContext);
}
