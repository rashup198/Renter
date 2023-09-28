import { useSelector } from 'react-redux'
import React from 'react'

const Profile = () => {
  const {currentUser} = useSelector(state => state.user)

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className=' text-center text-3xl font-semibold my-7'>profile</h1>
      <form className="flex flex-col gap-4">
        <img src={currentUser.avatar} alt='profile' className='rounded-full object-cover h-24 w-24 cursor-pointer self-center mt-2'></img>

        <input type='text' placeholder='username' id="username" className='border border-gray-200 rounded-lg px-2 py-1 focus:outline-none'></input>
        <input type='email' placeholder='email' id="email" className='border border-gray-200 rounded-lg px-2 py-1 focus:outline-none'></input>
        <input type='text' placeholder='password' id="password" className='border border-gray-200 rounded-lg px-2 py-1 focus:outline-none'></input>

        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-80 disabled:opacity-70 ">
          update
        </button>
      </form>

      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <sp className="text-red-700 cursor-pointer">Sign out</sp  an>
      </div>
    </div>
  )
}

export default Profile
