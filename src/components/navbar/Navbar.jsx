"use client"
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css'
import { Darkmode } from '../darkmode/Darkmode';
import { signOut, useSession } from 'next-auth/react';

export default function Navbar() {
    const session = useSession();
    const links = [
        {
            id:1,
            title:"Home",
            url:"/"
        },
        {
            id:1,
            title:"About",
            url:"/about"
        },
        {
            id:1,
            title:"Blog",
            url:"/blog"
        },
        {
            id:1,
            title:"Portfolio",
            url:"/portfolio"
        },
        {
            id:1,
            title:"Contact",
            url:"/contact"
        },
        {
            id:1,
            title:"Dashboard",
            url:"/dashboard"
        },
    ]
  return (
    <nav className={styles.container}>
        <div>
            <Link href="/" className='font-semibold text-xl'>Richard</Link>
        </div>
        <div className='flex items-center gap-6'>
            <Darkmode></Darkmode>
            {links.map((link, index) => (
                <div key={index}><Link  href={link.url} >{link.title}</Link></div>
            ))}
       {session.status === "authenticated" && ( <button onClick={() => {signOut()}} className='py-2 px-4 border-0 bg-green-400 text-white cursor-pointer rounded-md'>
            Logout
        </button>)}
        </div>
     
    </nav>
  )
}
