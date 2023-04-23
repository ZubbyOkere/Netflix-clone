import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovies(res.data.results)
    })
  }, [fetchUrl])
  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <>
      <h2 className='text-white font-bold md:text-xl  p-4'>{title}</h2>
      <div className=' relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white  left-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
        />
        <div
          id={'slider' + rowId}
          className='w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white rounded-full right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
        />
      </div>
    </>
  )
}

export default Row
