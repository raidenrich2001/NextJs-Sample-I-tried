import React from 'react'

export default function layout({ children }) {
  return (
    <div>
        <h1 className='text-6xl mb-1 font-semibold'>Our Works</h1>
        {children}
    </div>
  )
}
