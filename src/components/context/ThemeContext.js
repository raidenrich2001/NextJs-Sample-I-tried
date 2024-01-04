"use client"
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
    const [mode, setMode] = useState("dark");
    const toggle = () => {
        setMode( prev => prev === "dark" ? "light" : "dark");
    }
  return (
    <ThemeContext.Provider value={{ toggle, mode}}>
        <div className={mode + ' ' + 'transition-all ease duration-1000'}>{children}</div>
    </ThemeContext.Provider>
  )
}
