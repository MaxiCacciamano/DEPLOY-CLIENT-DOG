import './App.css';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, Routes} from 'react-router-dom';

import {getAll, getTemperaments} from './Redux/Action/Action.jsx';

import {Landing} from '../src/components/Landing/Landing.jsx';
import {Home} from '../src/components/Home/Home.jsx';
import {SearchByid} from '../src/components/SearchByid/SearchByid.jsx';
import {Form} from '../src/components/Form/Form.jsx'
import axios from 'axios';
axios.defaults.baseURL = 'https://deploy-api-dogs-production.up.railway.app/';
function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTemperaments())
  })

  useEffect(() =>{
    dispatch(getAll())
  },[])


  return (
    <div className="App">
    <Routes>
       <Route exact path='/' element={<Landing/>}/>
       <Route  path='/Home' element={<Home/>}/>
       <Route path="/detail/:id" element={<SearchByid/>}/>
       <Route path='/Create_Dogs' element={<Form/>}/>
    </Routes>   
 </div>
  );
}

export default App;
