import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Movie = ({ item }) => {
  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState(false)
  const { user } = UserAuth()
  const movieId = doc(db, 'users', `${user?.email}`)

  const savedMovie = async () => {
    if (user?.email) {
      setLike(!like)
      setSaved(!true)
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      })
    } else {
      alert('kindly login before performing this action')
    }
  }
  return (
    <div className='w-[160px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 relative'>
      <img
        className='w-full  h-auto block'
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt=''
      />
      <div className='absolute top-0 left-0 hover:bg-black/80 opacity-0 text-white hover:opacity-100 w-full h-full text-white'>
        <p className='white-space-normal font-bold  flex justify-center items-center h-full text-xs md:text-sm'>
          {item?.title}
        </p>
        <p onClick={savedMovie}>
          {like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300' />
          ) : (
            <FaRegHeart className='absolute top-2 left-2 text-gray-300' />
          )}
        </p>
      </div>
    </div>
  )
}

export default Movie
