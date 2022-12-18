import React from 'react'
import {Link} from 'react-router-dom';
import style from './Landing.module.css'
import img from '../../img/a.jpg'
export const Landing = () => {
  return (
    <div className={style.landing}>
        <h1>Bienvenidos</h1>
        <h2>Food Api Dogs</h2>
        <img src={img}/>
        <div className={style.b}>
        <button className={style.button}>
        <Link to='/home' className={style.but}>Ingresar</Link>
        </button>
        </div>
    </div>
  )
}
