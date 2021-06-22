import { findCountries, getAllCountries, getByRegion, setCountriesAZ, setCountriesZA, setCountriesByInhabitansDESC, setCountriesByInhabitansASC, getByTourism } from "../../actions/index";
import {connect} from "react-redux";
import React, {useState} from 'react';
import Container from "../Container/Container";
import "./Busqueda.css"

export function Busqueda(props){
  const[input, setInput]= useState({
        inputName:"",
        inputRegion:"",
        inputTourism:""
    })

  function handleSubmitName(e){
    e.preventDefault()
    props.findCountry(input.inputName)
  }  

  function handleSubmitRegion(e){
    e.preventDefault()
    props.getAllCountries()
    props.getByRegion(input.inputRegion)
   
  } 
  
  function handleCountriesAZ(e){
    e.preventDefault()
    props.setCountriesAZ()
  }

  function handleCountriesZA(e){
    e.preventDefault()
    props.setCountriesZA()
  }

  function handleCountriesInhabitansASC(e){
    e.preventDefault()
    props.setCountriesByInhabitansASC()
  }

  function handleCountriesInhabitansDESC(e){
    e.preventDefault()
    props.setCountriesByInhabitansDESC()
  }

  function handleByTourism(e){
    e.preventDefault()
    props.getAllCountries()
    props.getByTourism(input.inputTourism)
   
  } 

  let handleName = (e)=> setInput({...input, inputName:e.target.value})
  let handleRegion = (e)=> setInput({...input, inputRegion:e.target.value})
  let handleTourism = (e)=> setInput({...input, inputTourism:e.target.value})


  return(
    <>
     <form className='form'><h1>Busca el País</h1><br></br> 
        <label>Por Nombre </label>       
        <input name='name' type='text' onChange={handleName} value={input.inputName} placeholder='¿Qué país quieres ver?'></input> 
        <button  onClick={handleSubmitName}>go</button><br/>
        <label>Por Continente </label>
        <input name='region' type='text' onChange={handleRegion} value={input.inputRegion} placeholder='¿Qué continente quieres ver?'></input> 
        <button onClick={handleSubmitRegion}>go</button><br/>
        <label>Por Tourismo</label>
        <input name='tourism' type='text' onChange={handleTourism} value={input.inputTourism} placeholder='¿Qué actividad quieres hacer?'></input>
        <button onClick={handleByTourism}>go</button><br/>
        <form className= 'formHijo'>Organiza tu Busqueda<br></br>
          <button onClick={handleCountriesAZ}>Ordenar AZ</button>
          <button onClick={handleCountriesZA}>Ordenar ZA</button>
          <button onClick={handleCountriesInhabitansASC}>Población ASC</button> 
          <button onClick={handleCountriesInhabitansDESC}>Población DESC</button> 
        </form> 
     </form>  
     <Container/>
    </>
  )

}




function mapStateToProps(state) {
    return {
      search: state.countrySearched,
      allCountries: state.allCountries
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      findCountry: name => dispatch(findCountries(name)),
      getAllCountries: () => dispatch(getAllCountries()),
      getByRegion: region => dispatch(getByRegion(region)),
      setCountriesAZ: () => dispatch(setCountriesAZ()),
      setCountriesZA: () => dispatch(setCountriesZA()),
      setCountriesByInhabitansASC: () => dispatch(setCountriesByInhabitansASC()),
      setCountriesByInhabitansDESC: () => dispatch(setCountriesByInhabitansDESC()),
      getByTourism: tourism => dispatch(getByTourism(tourism))

    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Busqueda);