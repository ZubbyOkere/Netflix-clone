import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, logIn } = UserAuth()
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // create a new user logic

  const handleLogin = async (e) => {
    e.preventDefault()
    setError()
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }
  return (
    <div className='w-full h-screen  '>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/5e2801e9-d76f-4e77-a8ea-7dba0d187459/NG-en-20230417-popsignuptwoweeks-perspective_alpha_website_small.jpg'
        alt='/'
      />
      <div className='fixed w-full h-screen top-0 left-0 bg-black/60'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='text-white  mx-auto bg-black/80 max-w-[450px] h-[600px]'>
          <div className='mx-auto max-w-[320px] py-16'>
            <h1
              className='text-center font-bold
            text-2xl'
            >
              Sign In
            </h1>
            {error ? (
              <p className='text-red-600 text-center'>
                Invalid email or password
              </p>
            ) : (
              ''
            )}
            <form
              action=''
              onClick={handleLogin}
              className='w-full flex flex-col  py-4'
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='enter your email'
                className='p-3 my-2 bg-gray-700 rouded'
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='enter your password'
                className='p-3 my-2 bg-gray-700 rouded'
              />
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                Sign In
              </button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input className='mr-2' type='checkbox' />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'>
                <span className='text-gray-600 mr-2'>New to Netflix?</span>
                <Link to='/signup'>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
