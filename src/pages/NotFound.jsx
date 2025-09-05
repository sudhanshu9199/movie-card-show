import React from 'react'
import notFound from '../assets/notFound.png';
import style from '../styles/NotFound.module.scss'
const NotFound = () => {
  return (
    <div className={style.container}>
        <img src={notFound} alt="" />
    </div>
  )
}

export default NotFound