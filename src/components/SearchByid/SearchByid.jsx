import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {getDogsById, removeDetail} from '../../Redux/Action/Action';
import NavBar from '../NavBar/NavBar';
import style from './SearchByid.module.css'

export const SearchByid = (props) => {

  const dispatch = useDispatch();
  const {id} = useParams()
  console.log(id)
  
  useEffect(()=>{
    dispatch(getDogsById(id));
    return (()=>{
      dispatch(removeDetail())
    })
  },[dispatch])

  const allDetail = useSelector((state)=>state.detail)
  
  return (
    <div className={style.general}>
    <header>
      <NavBar/>
    </header>
    {
    allDetail.length > 0?(
    <div className={style.cargando}>
    <div className={style.i}>
    <div className={style.tarje}>
        <h1>{allDetail[0].name}</h1>
     </div>
      <img src={allDetail[0].image}/>
    </div>
    <div className={style.prop}>
    <div>
        <h2>height:</h2>
        <p> {allDetail[0].height}</p>
    </div>
    <div>
      <h2>weight:</h2>
      <p>{allDetail[0].weight}</p>
    </div>
      </div>
    <div className={style.sub}>
    <div>
      <h2>life span:</h2>
      <p> {allDetail[0].life_span}</p>
    </div>
    <div className={style.temp}>
      <h2>Temperaments:</h2>
      {
         <p>
            {allDetail[0].createdInDB
            ? allDetail[0]?.temperaments?.map((el) => el.name).join(", ")
            : allDetail[0].temperament}
         </p>
      }
    </div>
    </div>
    </div>

    )
    :(
    <div className={style.cc}>
        <h1>CARGANDO...</h1>                  
    </div>
    )
  }
    <div className={style.but}>
      <Link to="/home"><button>Back</button></Link>
    </div> 
    </div>
  )
}
export default SearchByid
