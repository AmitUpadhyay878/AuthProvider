import LoginForm from '@/components/LoginForm'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
    <div
      className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div
        className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
      >
        <div className="my-3 text-4xl font-bold tracking-wider text-center">
          <Link href="#">NextJS14-nextauth</Link>
        </div>
        <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
          NextJS14-nextauth  </p>
        <p className="flex flex-col items-center justify-center mt-10 text-center">
          <span>Don't have an account?</span>
          <Link href="/register" className="underline">Get Started!</Link>
        </p>
        <p className="mt-6 text-sm text-center text-gray-300">
          Read our <Link href="#" className="underline">terms</Link> and <Link href="#" className="underline">conditions</Link>
        </p>
      </div>
   <LoginForm/>
   </div>
   </div>
  )
}

export default Login