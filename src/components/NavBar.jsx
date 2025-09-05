import { NavLink } from 'react-router';
import style from '../styles/NavBar.module.scss';
const NavBar = () => {
  return (
    <div className={style.container}>
        <NavLink to='/' className={({isActive}) => `${isActive ? style.actives : ''}`}>Home</NavLink>
      <NavLink to='/create' className={({isActive}) => `${isActive ? style.actives : ''}`}>Create</NavLink>
      <NavLink to='/about' className={({isActive}) => `${isActive ? style.actives : ''}`}>About</NavLink>
      <NavLink to='/fav' className={({isActive}) => `${isActive ? style.actives : ''}`}>Favorite</NavLink>
    </div>
  )
}

export default NavBar