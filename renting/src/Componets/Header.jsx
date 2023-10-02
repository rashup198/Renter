import React, { useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'


const Header = () => {
  const {currentUser} = useSelector(state => state.user)
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);

  }
  
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchtermFromUrl = urlParams.get('searchTerm');
    if(searchtermFromUrl){
      setSearchTerm(searchtermFromUrl);
    }
  }, [location.search]); 

  return (
    <header className='bg-slate-200 shadow-lg'>
        <div className=" flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to='/'>
        <h1 className=' font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Sage</span>
        <span className='text-slate-700'></span>
      </h1>
      </Link>
      <form onSubmit={handleSubmit} className='flex flex-wrap bg-slate-100 p-3 rounded-lg '>
        <input
            type='text'
            placeholder='Search...'
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className='border border-gray-200 rounded-l px-1 py-1 focus:outline-none w-[70px] sm:w-[250px]'
        />
        <button className='bg-slate-500 text-white px-1 py-0.5 rounded-r focus:outline-none'>
            Search
        </button>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>  
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
            </Link>

            <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
        </div>
    </header>
  )
}
export default Header
