"use client"
import React from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

export default function Login() {
  const session = useSession();
  const router = useRouter();
  if(session.status === 'loading'){
    return <p>Loading...</p>
  }
  if(session.status === 'authenticated'){
    router?.push("/dashboard")
  }

  const handleSubmit = async (e) =>{
      e.preventDefault();
      
      const email = e.target[0].value;
      const password = e.target[1].value;
      
      signIn('credentials', {email, password})
  }

  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
    <form className='flex flex-col gap-5 w-[300px]' onSubmit={handleSubmit}>
      <input type="email" placeholder='email' className='px-2 py-3 bg-transparent border border-slate-400 rounded-md text-lg' required></input>
      <input type="password" placeholder='password' className='px-2 py-3 bg-transparent border border-slate-400 rounded-md text-lg' required></input>
      <button type='submit' className='p-3 bg-green-400 border-0 rounded-md text-white'>Login</button>
    </form>
    <button className='p-3 bg-green-400 border-0 rounded-md text-white' onClick={() => signIn('google')}>Login with Google</button>
  </div>
  )
}
