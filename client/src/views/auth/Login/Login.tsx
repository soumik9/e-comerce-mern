import Link from 'next/link'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='h-screen md:flex'>

      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-primary to-primary-700 i justify-around items-center hidden">
        <div>
          <h1 className="font-sans text-4xl font-bold text-white">E-Commerce</h1>
          {/* <Link href="/">
            <button type="submit" className="block w-1/2 bg-white text-[#0C134F] mt-4 py-2 rounded-2xl font-bold mb-2">Back to Home</button>
          </Link> */}
        </div>
        <div className="absolute border-4 border-t-8 rounded-full -bottom-32 -left-40 w-80 h-80 border-opacity-30"></div>
        <div className="absolute border-4 border-t-8 rounded-full -bottom-40 -left-20 w-80 h-80 border-opacity-30"></div>
        <div className="absolute border-4 border-t-8 rounded-full -top-40 -right-0 w-80 h-80 border-opacity-30"></div>
        <div className="absolute border-4 border-t-8 rounded-full -top-20 -right-20 w-80 h-80 border-opacity-30"></div>
      </div>

      <div className="flex items-center justify-center py-10 bg-white md:w-1/2">
        hello
      </div>

    </div>
  )
}

export default Login