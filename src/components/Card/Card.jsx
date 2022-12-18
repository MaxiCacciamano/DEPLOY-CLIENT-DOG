import React from 'react'
import {Link} from 'react-router-dom'
import style from './Card.module.css';

export const Card = ({id,name,height,weight,life_span,img,description,temperaments, }) => {


  return (
      <div className = {style.main}>
          <div  className = {style.box}>
              <div className = {style.content}>
                  <img src={img} alt="img not found" />
                  <h1>{name}</h1>
                  {/* <p>Temperaments:</p> */}
                  <p>{temperaments}</p>
                  {/* <p>weight:</p>
                  <p>{weight}</p> */}
                  <Link to={`/detail/${id}`}>
                    saber mas
                  </Link>
                  {/* <br/> */}
              </div>
          </div>
      </div>
  )
}
