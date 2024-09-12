import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex bg-zinc-700 justify-around w-full'>
        <Link href='/'>Home</Link>
        <Link href='/posts'>Posts</Link>  
        <Link href='/forum'>Forum</Link>  
        <Link href='/about'>About</Link>
    </header>
  )
}
