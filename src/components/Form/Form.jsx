
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {postDogs, getTemperaments } from '../../Redux/Action/Action';
import style from './Form.module.css';



export const Form = () => {
  const dispatch = useDispatch()

  const temperaments = useSelector((state)=> state.temperaments).sort(
    function(a,b){
      if(a>b) return -1
      return 1
    }
  );
  const [errors, setErrors] = useState(true);
  const [input, setInput] = useState({
    name:"", 
    img:"",
    height:"",
    weight:"",
    life_span:"",
    temperaments:[]
  })

  useEffect(()=>{
    dispatch(getTemperaments())
  },[dispatch])
  
  function validate(input){
    let regexheightWeight = /\d{1,2}/gi;
    let regexName = /[a-zA-Z0-9:-\s’']/;
    let regexDescription = /^.{1,300}$/;

    let errors = {};
    if(input.name.trim()){
      errors.name = "A names is required"
    }else if(!regexName.test(input.name.trim())){
      errors.name = "The name field only accepts letters, numbers and characters"
    }

    if(input.height.trim()){
      errors.height = "A heigth is required"
    }else if(!regexheightWeight.test(input.height)){
      errors.height = "Height must have min values. Example: '25'"
    }

    if(input.weight.trim()){
      errors.weight = "A weight is required"
    }else if(!regexheightWeight.test(input.weight)){
      errors.weight = "Weight must have min values. Example: '25'"
    }

    // if(input.description.trim()){
    //   errors.description = "A description is required"
    // }else if(!regexDescription.test(input.description.trim())){
    //   errors.description = "It must not exceed 300 characters"
    // }
    return errors;

  }

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]:e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }



  function handleDelete(e){
    setInput({
      ...input,
      temperaments: input.temperaments.filter((temper)=> temper !== e)
    })
  }

  function handleTemperaments(t){
    !input.temperaments.includes(t.target.value)?
   setInput({
      ...input,
      temperaments:[...input.temperaments, t.target.value]
    }): alert("no se permites temperamentos repetidos");
  }

  function handleSubmit(e){
    e.preventDefault();
    if(
      input.name.length>0&&
      input.height.length>0&&
      input.weight.length>0&&
      input.description.length>0
      ){
        alert("Dog created successfully")
       dispatch(postDogs(input))
        setInput({
          name:"",
          img:"",
          height:"",
          weight:"",
          life_span:"",
          description:"",
          temperaments:[]
        });
      }else{
       return alert("You must complete some fields before submitting the information")
      }
  }

  return (
    <>
    <div >
      <Link to="/home"><button className={style.buton}>Back</button></Link>
    </div>
    <div>
    <h1>Create Dogs</h1>
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div>
        <p className={style.input}>Name</p>
        <input
        className={style.texto}
        type="text"
        value={input.name}
        name="name" 
        placeholder={errors.name}
        onChange={e=>handleChange(e)}

        />
      </div>
      <div>
        <p className={style.input}>Image url:</p>
        <input
        className={style.texto}
        type="url"
        value={input.image}
        name="image"
        placeholder="http://myimageontheweb.com"
        />
      </div>
      <div>
        <p className={style.input}>height</p>
        <input
        className={style.texto}
        type="text"
        value={input.height}
        placeholder={errors.height}
        onChange={e=>handleChange(e)}
        name="height"
        />
      </div>
      <div>
        <p className={style.input}>weight</p>
        <input
        className={style.texto}
        type="text"
        value={input.weight}
        placeholder={errors.weight}
        onChange={e=>handleChange(e)}
        name="weight"
        />
      </div>
      <div>
        <p className={style.input}>life_span</p>
        <input
        className={style.texto}
        type="text"
        value={input.life_span}
        onChange={e=>handleChange(e)}
        name="life_span"
        />
      </div>
      <div>
        <p className={style.input}>description</p>
        <textarea
        className={style.texto}
         cols = "50"
         rows = "5"
         type="text"
         value={input.description}
         name="description"
         placeholder={errors.description}
         onChange={e=>handleChange(e)}
        />
      </div>
      <div>
        <p className={style.caja1}>temperament</p>
        <select onChange={e=>handleTemperaments(e)} className={style.caja1}>
        {temperaments.map((temp)=>(
            <option key={temp.name} value={temp.name}>
              {temp.name} 
            </option>
        ))}
        </select>
      </div>
      <div >
        <h3>You have selected:</h3>
        {input.temperaments.map((e)=>(
          <ul key={e} className={style.in}>
            <li>{e}</li  >
            <button className={style.but} onClick={()=>handleDelete(e)} >x</button>
          </ul>
        ))}
      </div>
    <button type="submit" className={style.buton} >Create Dogs</button>
    </form>
    </div>
    </>
  )
}
