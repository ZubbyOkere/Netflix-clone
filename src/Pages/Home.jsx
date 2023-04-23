import React from 'react'
import Main from './Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowId='1' title='Upcoming' fetchUrl={requests.requestUpcoming} />
      <Row rowId='2' title='Horror' fetchUrl={requests.requestHorror} />
      <Row rowId='3' title='Top Rated' fetchUrl={requests.requestTopRated} />
      <Row rowId='4' title='Popular' fetchUrl={requests.requestPopular} />
      <Row rowId='5' title='Trending' fetchUrl={requests.requestTrending} />
    </div>
  )
}

export default Home
