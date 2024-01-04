import Link from 'next/link'
import React from 'react'

export default function Button({ text, url }) {
  return (
    <Link href={url} className={'p-3 bg-green-400 border-0 rounded-md max-w-fit text-white'}>{text}</Link>
  ) 
}
