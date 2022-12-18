import React from 'react'
import {Link} from 'react-router-dom';
import style from './NavBar.module.css';
import logo from '../../img/dog-logo-illustration-free-vector.jpg'
export const NavBar = () => {
  return (
    <>
        <div className={style.title}>
          <Link to={`/home`}>
           <img src={logo}/>
          </Link>
        </div>
    </>
  )
}

export default NavBar;