import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className=''> 
      <h1 className='my-5'> Choose a gallery</h1>
      <div className='flex gap-5'>
        <Link href='/portfolio/illustration' className='border-2 rounded-sm w-48 h-64 relative hover:text-green-400' style={{background: `url('/illustration.jpg')`, backgroundSize:'cover'}}>
          <span className='absolute right-2 bottom-2 text-xl'>Illustration</span>
        </Link>
        <Link href='/portfolio/website' className='border-2 rounded-sm w-48 h-64 relative text-black hover:text-green-400' style={{background: `url('/website.svg')`, backgroundSize:'cover',}}>
          <span className='absolute right-2 bottom-2 text-xl'>Website</span>
        </Link>
        <Link href='/portfolio/application' className='border-2 rounded-sm w-48 h-64 relative hover:text-green-400' style={{background: `url('/application.svg')`, backgroundSize:'cover'}}>
          <span className='absolute right-2 bottom-2 text-xl'>Application</span>
        </Link>
      </div>
    </div>
  )
}
