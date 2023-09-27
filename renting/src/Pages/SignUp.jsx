import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-2a items-center'>
        <input
          className='border border-gray-400 rounded-md w-80 h-10 px-2 my-2'
          type='text'
          placeholder='username'
          id='username'
        />
        <input
          className='border border-gray-400 rounded-md w-80 h-10 px-2 my-2'
          type='email'
          placeholder='email'
          id='email'
        />
        <input
          className='border border-gray-400 rounded-md w-80 h-10 px-2 my-2'
          type='password'
          placeholder='password'
          id='password'
        />
        <input
          className='border border-gray-400 rounded-md w-80 h-10 px-2 my-2'
          type='password'
          placeholder='confirm password'
          id='confirmPassword'
        />

        <button className='bg-slate-700 hover:opacity-90 uppercase  text-white disabled:opacity-80 font-bold p-3 w-[320px] mt-[30px] rounded-lg'> 
          Sign Up
        </button>
      </form>

      <div className="px-[33px] my-2 mt-5 ">
        <Link to={"/sign-in"}><span>Have an account?</span> <span className='text-blue-700 ml-1'>Sign in</span> </Link>
        
      </div>




    </div>
  )
}

export default SignUp
