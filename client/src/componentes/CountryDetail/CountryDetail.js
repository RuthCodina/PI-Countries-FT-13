import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {connect} from 'react-redux';
import { clearCountry, fetchCountry } from '../../actions/index';
import {useParams} from 'react-router-dom';
import './CountryDetail.css'

function CountryDetail(){
    const dispatch= useDispatch();
    const countryDetail= useSelector(state => state.countryDetail);
    const {id}= useParams();
    useEffect(()=>{
      dispatch(fetchCountry(id))
      return()=>{
        dispatch(clearCountry())
      }
    },[dispatch, id])

    return(
      <>
      {countryDetail? <h1>{countryDetail.name}</h1>:<h1>No encontrado</h1>}

       {countryDetail=== {} && <h2>cargando...</h2>}
        {typeof countryDetail=== 'object' && (<div className='details'>
 
            <img src={countryDetail.bandera}/> <br></br>
            <label className='title'>Código </label>
            <label >{countryDetail.id}</label> <br></br>
            <label className='title'>Capital </label>
            <label >{countryDetail.capital}</label><br></br>
            <label className='title'>Subregión </label>
            <label >{countryDetail.subregion}</label><br></br>
            <label className='title'>Población  </label>
            <label>{countryDetail.poblacion}</label><br></br>
            <label className='title'>Área  </label>
            <label>{countryDetail.area}</label><br></br><hr></hr>
            <label className='title'>Turismo  </label><hr></hr>
            <label>{countryDetail? (countryDetail.tourisms && countryDetail.tourisms.map(el=>(
              <div key={el.id} className='activityCard'>
                <label >Nombre Actividad: </label>
                <label className='n'>{el.nombre}</label><br></br>
                <label>Duración: </label>
                <label className='n'>{el.duracion}</label><br></br>
                <label>Temporada: </label>
                <label className='n'>{el.temporada}</label><br></br>
                <label>Dificultad: </label>
                <label className='n'>{el.dificultad}</label>
             </div>))):<h1>No encontro país</h1>}
             </label><br></br>
            
          </div>)}
      </>  
    )
}

export default CountryDetail;