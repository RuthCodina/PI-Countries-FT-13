import {connect} from "react-redux";
import React, {useState, useEffect} from 'react';
import {getAllCountries } from "../actions";
import {post} from '../post';
// import fetch from 'node-fetch';



function AddTourism(props){
    const [input, setInput]= useState({
        nombre:"",
        duracion:"",
        temporada:"",
        dificultad:"",
        codigoPais:[],
    })
    const [error, setError]=useState({});

    function handleTourism(e){
      e.preventDefault()
      props.getAllCountries()
 
    }

    function handleAddPaises(e){
     e.preventDefault()

    }


    function stateReset(){
        setInput({
            nombre:"",
            duracion:"",
            temporada:"",
            dificultad:"",
            codigoPais:[],
            
            
        })
    }   

    useEffect(()=>{
        if(!input.nombre){
            setError({...error, nombre:"Necesitas Poner un Nombre a la actividad"})
        }
        if(/[a-z]+/gi.test(input.nombre)){
            setError({...error, nombre: "solo ingresa letras minusculas"})
        }    
        if(!input.duracion){
            setError({...error, duracion: "Escoge la cantidad de horas especificadas en la lista"})
        }
        if(!input.temporada){
            setError({...error, temporada: "Escoge una temporada de la lista"})
        }
        if(!input.dificultad){
            setError({...error, dificultad: "Escoge una actividad de la lista"})
        }
        else if (input.codigoPais.length===0){
            setError({...error, season: "Escoge al menos un país de la lista"})
        }
    }, [input])


    function submitForm(e){
        e.preventDefault()
        post(input)
        .then(()=>stateReset())
        .then(alert('Actividad Agregada'))
    }

    
    function handleName(e){setInput({...input, nombre:e.target.value})}
    function handleDificultad(e){setInput({...input, dificultad:e.target.value})} 
    function handleTime(e){setInput({...input, duracion:e.target.value})} 
    function handleSeason(e){setInput({...input, temporada:e.target.value})} 
    function handlePaises(e){setInput({...input, codigoPais:input.codigoPais.concat(e.target.value)})} 

    function resetCodeCountry(e){
        e.preventDefault()
        setInput({...input, codigoPais:[]})
    }

    return(
        <form onSubmit={submitForm}>
            <h2>Agrega la Actividad que quieres hacer</h2>
            <label htmlFor='Nombre'>Nombre Actividad: </label>
            <input id='Nombre' name='nombreActividad' type='text' onChange={handleName} value={input.nombre} placeholder='Escribe actividad'></input><br></br>
            <label htmlFor='Dificultad'>Dificultad Actividad: </label>
                <select id='Duración' onChange={handleDificultad} value={input.dificultad}>
                    <option defaultValue>selecciona la Dificultad</option>
                    <option value='Alta'>Alta</option>
                    <option value='Medio Alta'>Medio Alta</option>
                    <option value='Medio'>Medio</option>
                    <option value='Medio Baja'>Medio Baja</option>
                    <option value='Baja'>Baja</option>
                </select> <br></br>
            
            <label htmlFor='Duración'>Duración Actividad: </label>
                <select id='Duración' onChange={handleTime} value={input.duracion}>
                    <option defaultValue>selecciona la cantidad de horas</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select> <br></br>

            <label htmlFor='Temporada'>Temporada del Año de la Actividad: </label>
                <select id='Temporada' onChange={handleSeason} value={input.temporada}>
                    <option  defaultValue>selecciona la cantidad de horas</option>
                    <option value='summer'>Summer</option>
                    <option value='autumn'>Autumn</option>
                    <option value='winter'>Winter</option>
                    <option value='spring'>Spring</option>
                </select> <br></br>

            <label htmlFor='Paises'>Selecciona el Código de los Países a Agregar: </label><br></br>
            <button onClick={handleTourism}>trae Paises</button>
            <select id='Temporada' onChange={handlePaises} value={input.codigoPais}>
                    <option disabled selected="">selecciona el código del país</option>
                {
                    props.allCountries && props.allCountries.map((el) => (
                        <option key={el.id} value={el.id}>{el.id}</option>
                    ))
                }
             </select>
            <button onClick={resetCodeCountry}>Borrar Paises Seleccionados</button><br></br>

            <button type='submit'>Agregar Actividad</button>
             

        </form>
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
      getAllCountries: ()=>dispatch(getAllCountries())
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AddTourism);