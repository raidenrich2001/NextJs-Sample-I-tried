"use client"
import React, { useState } from 'react'
import styles from './pages.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default  function Register() {
  const [Err, setErr] = useState()
  const router = useRouter()
  const handleSubmit= async (e) => {
    e.preventDefault();
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    try{
      const res = await fetch('/api/auth/register',{
        method : "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      res.status === 201 &&  router.push('/dashboard/login?success=Account has been created')
    }
    catch(err){
      setErr(true)
    }
  }
  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
      <form className='flex flex-col gap-5 w-[300px]' onSubmit={handleSubmit}>
        <input type="text" placeholder='username' className='px-2 py-3 bg-transparent border border-slate-400 rounded-md text-lg' required></input>
        <input type="email" placeholder='email' className='px-2 py-3 bg-transparent border border-slate-400 rounded-md text-lg' required></input>
        <input type="password" placeholder='password' className='px-2 py-3 bg-transparent border border-slate-400 rounded-md text-lg' required></input>
        <button type='submit' className='p-3 bg-green-400 border-0 rounded-md text-white'>Register</button>
      </form>
      {Err && "Something went wrong"}
      <Link href={'/dashboard/login'}>Login with an existing account</Link>
    </div>
  )
}
