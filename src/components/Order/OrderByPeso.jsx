import React from 'react'
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {orderWeigthmin} from '../../Redux/Action/Action'
import style from '../Filter/Filter.module.css';
import styles from './OrderAlfabetico'

export const OrderByPeso = () => {

    const dispatch =useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState('')

    function handlewidth(e){
        e.preventDefault();
        dispatch(orderWeigthmin(e.target.value))

    }
  return (
    <>
        <div className={style.raza}>
          {/* <h5 >Order by weight</h5> */}
          {/* <h4>Order by weigth</h4> */}
          <select
            onChange={(e) => {
              handlewidth(e);
            }}
          >
            <option defaultValue value="all" hidden>
              Buscar por peso
            </option>
            <option value="asc">Heaviest 1º</option>
            <option value="desc">Lightest 1º</option>
          </select>
        </div>
    </>
  )
}
export default OrderByPeso;
