import React, { useContext } from 'react'
import Cards from '../components/Cards'
import { movieContext } from '../context/MovieContext'
const Home = () => {
  const {data} = useContext(movieContext);
  const cardRendering = data.map(movie => <Cards key={movie.id} movie={movie} />)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
      {cardRendering}
    </div>
  )
}

export default Home