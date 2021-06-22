import {connect} from "react-redux";
import React, {useState, useEffect} from 'react';
import {getAllCountries } from "../../actions";
import {post} from './post';
// import fetch from 'node-fetch';
import './AddTourism.css';


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
            setError({...error,nombre:"Necesitas Poner un Nombre a la actividad"})
        }
        else if(!input.duracion){
            setError({...error, duracion: "Escoge la cantidad de horas especificadas en la lista"})
        }
        else if(!input.temporada){
            setError({...error, temporada: "Escoge una temporada de la lista"})
        }
        else if(!input.dificultad){
            setError({...error, dificultad: "Escoge una actividad de la lista"})
        }
        else if (input.codigoPais===[]){
            setError({...error, codigoPais: "Escoge al menos un país de la lista"})
        }
        else if(input.codigoPais.length>0){
            setError({})
        }    
    }, [input])


    function submitForm(e){
        e.preventDefault()
        if(!error.nombre & !error.duracion && !error.temporada && !error.dificultad && !error.codigoPais){
         post(input)
        .then(()=>stateReset())
        .then(alert('Actividad Agregada'))   
        }
       else{
           alert('los campos deben ser completados')
       }  
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
        <form onSubmit={submitForm} className='formAddTourism'>
            <h2>Agrega la Actividad que quieres hacer</h2> <hr></hr>
            <div>
               <label htmlFor='Nombre'>Nombre Actividad: </label>
               <input id='Nombre' name='nombreActividad' type='text' required='required' onChange={handleName} value={input.nombre} placeholder='Escribe actividad' className={error.nombre && 'warning'}></input><br></br>
               {error.nombre && (<p className='warning'>{error.nombre}</p>)}
            </div>
            <div>
                <label htmlFor='Duración'>Duración Actividad: </label>
                <select id='Duración' onChange={handleTime} value={input.duracion} required='required'className={error.duracion && 'warning'}>
                    <option defaultValue>selecciona la cantidad de horas</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select> <br></br>
                {error.duracion && (<p className='warning'>{error.duracion}</p>)}
           </div>
           <div>
            <label htmlFor='Temporada'>Temporada del Año de la Actividad: </label>
                <select id='Temporada' onChange={handleSeason} value={input.temporada}>
                    <option  defaultValue>selecciona la cantidad de horas</option>
                    <option value='summer'>Summer</option>
                    <option value='autumn'>Autumn</option>
                    <option value='winter'>Winter</option>
                    <option value='spring'>Spring</option>
                </select> <br></br>
                {error.temporada && (<p className='warning'>{error.temporada}</p>)}
           </div>
            <div>
                <label htmlFor='Dificultad'>Dificultad Actividad: </label>
                <select id='Dificultad' onChange={handleDificultad} value={input.dificultad} className={error.dificultad && 'warning'}>
                    <option defaultValue>selecciona la Dificultad</option>
                    <option value='Alta'>Alta</option>
                    <option value='Medio Alta'>Medio Alta</option>
                    <option value='Medio'>Medio</option>
                    <option value='Medio Baja'>Medio Baja</option>
                    <option value='Baja'>Baja</option>
                </select> <br></br>
               {error.dificultad && (<p className='warning'>{error.dificultad}</p>)}
            </div>
           <div>
              <label htmlFor='Paises'>Selecciona el Código de los Países a Agregar: </label><br></br>
              <button onClick={handleTourism}>trae Paises</button>
              <select id='Paises' onChange={handlePaises} value={input.codigoPais}>
                    <option defaultValue>selecciona el código del país</option>
                {
                    props.allCountries && props.allCountries.map((el) => (
                        <option key={el.id} value={el.id}>{el.id}</option>
                    ))
                }
               </select>
               <button onClick={resetCodeCountry}>Borrar Paises Seleccionados</button><br></br>
               {error.codigoPais && (<p className='warning'>{error.codigoPais}</p>)}
            </div>
            <div className='codigos'>{
                input.codigoPais && input.codigoPais.map(el=>
                    (<ul key={el}>{el}</ul>)
                )
                }
            </div>
            <button type='submit'className='submit'> Agregar Actividad</button>
             
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