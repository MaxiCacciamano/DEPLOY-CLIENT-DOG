import React from 'react'
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {orderByName} from '../../Redux/Action/Action'
import style from '../Filter/Filter.module.css';
export const OrderAlfabetico = () => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState('')

    function handleName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordeando${e.target.value}`)
    }
  return (
    <>  
    <div className={style.raza}>
      <select onChange={e=>handleName(e)} >
           <option defaultValue value="all" hidden>
              Buscar por orden
          </option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
      </select>
    </div>
    </>
  )
}
export default OrderAlfabetico
