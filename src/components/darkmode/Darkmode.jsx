"use client"
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const Darkmode = () => {
  const {toggle, mode} = useContext(ThemeContext)

  return (
    <div className='border border-green-300 w-14 rounded-full flex justify-between items-center px-1 py-0.5 relative cursor-pointer' onClick={toggle}>23
      <div>🌙</div>
      <div>☀️</div>
      <div className={`w-[20px] h-[20px] bg-green-400 absolute ${mode === "dark" ? 'left-1' : 'right-1'} rounded-full`} ></div>
    </div>
  )
}
