import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {searchByName} from '../../Redux/Action/Action'
import style from './searchname.module.css';

export const SearchName = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        dispatch(searchByName(name))
    }

    function handleInput(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name)
    }


  return (
    <>
    <div className={style.raza}>
     <form onSubmit={(e)=>handleSubmit(e)} className={style.form}>
         <input
         placeholder="Buscar raza"
         onChange={e=>handleInput(e)}
             />
         <button type="submit">
         🔍
         </button>
     </form>

    </div>
    </>
)
}
export default SearchName;

