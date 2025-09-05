import React from 'react'
import Cards from '../components/Cards'

const Fav = () => {
  const favroite = JSON.parse(localStorage.getItem('movieFav') || '[]');
    const rendermovies = favroite.map(movie => <Cards key={movie.id} movie={movie}/>)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-amber-100'>{favroite.length > 0 ? rendermovies : 'No favroite found!'}</div>
  )
}

export default Fav