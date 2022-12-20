import React from 'react'
import {Link} from 'react-router-dom';
import style from './Landing.module.css'
import logo from '../../img/depositphotos_180617216-stock-illustration-german-shepherd-dog-isolated-outlined (1).jpg'

export const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.landing1}>
        <h2>Bienvenidos</h2>
        <h1>Food Api Dogs</h1>
        {/* <img src={img}/> */}
        {/* <div className={style.b}> */}
        <button className={style.button}>
        <Link to='/home' className={style.but}>Ingresar</Link>
        </button>
        {/* </div> */}
      </div>
      <div className={style.landing2}>
        <img src={logo}/>
      </div>
    </div>
  )
}
