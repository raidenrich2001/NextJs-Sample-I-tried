import React from 'react'
import styles from './pages.module.css'
import Image from 'next/image'
import Button from '@component/components/button/Button'
export default function Contact() {
  return (
    <div>
      <h2 className='text-4xl mb-10 text-center'>Let's Keep in touch</h2>
      <div className='flex items-center gap-5'>
        <div className='h-[500px] relative flex-1'>
          <Image src='./contact.svg' fill={true} className='motion-safe:animate-pulse'></Image>
        </div>
        <form className='flex-1 flex flex-col gap-10'>
          <input type="text" placeholder='name' className='p-2 bg-transparent border-2 focus:ring-0 font-semibold'></input>
          <input type="text"  placeholder='name' className='p-2 bg-transparent border-2 focus:ring-0 font-semibold'></input>
          <textarea placeholder ="message"  className='p-2 bg-transparent border-2 focus:ring-0 font-semibold' cols='30' rows='7'></textarea>
          <Button url='#' text="Send"></Button>
        </form>
      </div>
    </div>
  )
}
