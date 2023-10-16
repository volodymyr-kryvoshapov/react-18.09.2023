import React from "react";

export const ThemeContext = React.createContext('light');

export function ThemeProvider({children}: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  )
}