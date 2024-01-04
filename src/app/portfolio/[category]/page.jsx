import Button from '@component/components/button/Button'
import Image from 'next/image'
import React from 'react'

export default function Category({ params }) {
    console.log(params)
  return (
    <div className=''>
        <h1 className='text-green-300 text-2xl'>{params.category}</h1>
        <div className='flex gap-5 mt-4 mb-6'>
          <div className='flex-1 flex flex-col justify-center gap-4'>
            <h1 className='text-xl'>Test</h1>
            <p className='text-lg'>Description</p>
            <Button text="See More" url='#'></Button>
          </div>
          <div className='flex-1 h-[400px] relative'>
              <Image fill={true} src="" alt="">

              </Image>
          </div>
        </div>
    </div>
  )
}
