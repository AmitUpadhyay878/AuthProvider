'use client'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import {signOut, useSession} from 'next-auth/react'

const Navbar = () => {
  const {data:session} = useSession()

console.log(session,"session");
    const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () =>{
    setToggleMenu(!toggleMenu)
  }
  return (
    <header>
      <div className="px-4 py-2 text-white flex  justify-between bg-blue-900">
        <h1>LOGO</h1>
        <div className={toggleMenu ? "md:flex  md:pt-0 pt-10 w-full md:w-auto" : "hidden md:flex"} id="menu">
        <ul>
          <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3"><Link href="/">Home</Link></li>
          <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3"><Link href="/about-us">AboutUs</Link></li>
          <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3"><Link href="/contact-us">ContactUs</Link></li>
          {
            session ? 
            <>
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">{session?.data?.admin?.firstName}</li>
          <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3"><Link href="/api/auth/signout?callbackUrl=/">Signout</Link></li>
            </>
            :
            <>
          <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3"><Link href="/api/auth/signin">Login</Link></li>
          <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3"><Link href="/register">Sign-Up</Link></li>
          </>
          }
        </ul>
        </div>
        <div className= "cursor-pointer md:hidden">
          <input className="menu-btn hidden" type="checkbox" id="menu-btn"/>
          <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
            <span onClick={handleToggle} className="navicon bg-white-darkest flex items-center relative"></span>
          </label>
      </div>
      </div>
    </header>
    
  )
}

export default Navbar