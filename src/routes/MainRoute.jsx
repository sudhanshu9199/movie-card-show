import React from 'react'
import {Route, Routes} from 'react-router'
import Home from '../pages/Home'
import Create from '../pages/Create'
import About from '../pages/About'
import Fav from '../pages/Fav'
import SingleMovie from '../pages/SingleMovie'
import NotFound from '../pages/NotFound'

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/detail/:id' element={<SingleMovie />}/>
      <Route path='/create' element={<Create />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/fav' element={<Fav />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default MainRoute