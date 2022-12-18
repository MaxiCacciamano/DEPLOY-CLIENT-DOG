import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom';

// import {getAll} from '../../Redux/Action/Action'
import {Card} from '../Card/Card';
import {Paginado} from '../Paginado/Paginado'
import FilterByTemperament from '../Filter/FilterByTemperament';
import FilterByRaza from '../Filter/FilterByRaza';
import OrderAlfabetico from '../Order/OrderAlfabetico.jsx';
import OrderByPeso from '../Order/OrderByPeso.jsx';
import SearchName from '../SearchName/SearchName';
import NavBar from '../NavBar/NavBar.jsx';
import style from './Home.module.css';
import l from '../../img/a.jpg'
import e from '../../img/expand_more_FILL0_wght400_GRAD0_opsz48.png'

import {getAll} from '../../Redux/Action/Action'

export const Home = () => {
    const dispatch= useDispatch();
    const {dogs} = useSelector(state => state);
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage] = useState(8)
    const indexLastDogs = currentPage * dogsPerPage;
    const indexFirstDogs = indexLastDogs - dogsPerPage;
    const currentDogs = dogs.slice(indexFirstDogs, indexLastDogs)

    const pagination=(e)=>{
        setCurrentPage(e)
    }

    function handleRefresh(e){
        e.preventDefault();
        dispatch(getAll())
    }

        // <div>
            {/* <button onClick={e=>handleRefresh(e)}> */}
              {/* Refresh */}
            {/* </button> */}
        {/* </div > */}
  return (
      <>
      <header>
        <NavBar/>
        {/* <div className={style.title}>
          <Link to={`/home`}>
          <a>Fan page DOGS</a>
          </Link>
        </div>
        <div className={style.create}>
           <Link to='/Create_Dogs'>
                 Create Dogs
            </Link>
        </div> */}
      </header>
        <div className={style.filtros}>
             <div className={style.temperament}>
               <FilterByTemperament/>
             </div>

             <div className={style.raza}>
              <FilterByRaza/>
             </div>

            <div className={style.alfabetico}>
               <OrderAlfabetico/>
            </div>
             <div className={style.peso}>
               <OrderByPeso/>
             </div>
             <div className={style.Search}>
              <SearchName/>
              {/* {
                currentDogs.name?(e=>(

                  <Card img={e.image} name={e.name}/>
                )
                ):
                <p>esperando perro</p>
              } */}
             </div>
             <div className={style.create}>
             <Link to='/Create_Dogs'>
                 Create Dogs
              </Link>
        </div>
        </div>
      <section>
        <div className={style.cardscontainer}>
            {
                currentDogs.length > 0 ? (
                  currentDogs.map(e=>(
                        <Card name={e.name} img={e.image}  temperaments={e.temperament} weight={e.weight} id={e.id} key={e.id}/>
                  ))): currentDogs === false?(
                      <div>
                          {/* <img src={Notfound} añt="img not found"/> */}
                          <h1>no anda</h1>
                      </div>
                  ):(
                      <div>
                          <h1 className={style.cargando}>Cargando...</h1>
                      </div>
                  )
              }
        </div>
        <div>
            <Paginado
            dogsPerPage={dogsPerPage}
            dogs={dogs.length}
            pagination={pagination}
            />
        </div>
      </section>
      </>
  )
}
