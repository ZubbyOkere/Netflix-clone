import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbaar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  // console.log(user)
  return (
    <div className='flex items-center justify-between p-3 z-[100] w-full absolute'>
      <Link to={'/'}>
        <h1 className='text-red-600 text-xl sm:text-4xl font-bold cursor-pointer'>
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to={'/account'}>
            <button className='text-white pr-4'>Account</button>
          </Link>

          <Link to={'/signup'}>
            <button
              onClick={handleLogout}
              className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
            >
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div className='flex justify-between items-center'>
          <Link to={'/login'}>
            <button className='text-white pr-4'>Sign In</button>
          </Link>

          <Link to={'/signup'}>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbaar
