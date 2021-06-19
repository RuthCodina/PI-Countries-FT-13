import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {connect} from 'react-redux';
import { clearCountry, fetchCountry } from '../actions';
import {useParams} from 'react-router-dom';

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
      {countryDetail? <h1>{countryDetail.id}</h1>:<h1>No encontrado</h1>}

       {countryDetail=== {} && <h2>cargando...</h2>}
        {typeof countryDetail=== 'object' && (<div>
            <span>Nombre </span>
            <span>{countryDetail.name}</span> <br></br>
            <span>Código </span>
            <span>{countryDetail.id}</span><br></br>
            <span>Capital </span>
            <span>{countryDetail.capital}</span><br></br>
            <span>Subregión </span>
            <span>{countryDetail.subregion}</span><br></br>
            <span>Población  </span>
            <span>{countryDetail.poblacion}</span><br></br>
            <span>Área  </span>
            <span>{countryDetail.area}</span><br></br>
            <span>Turismo  </span>
            {/* <span>{countryDetail.tourisms}</span>    */}
            <span>{countryDetail? (countryDetail.tourisms && countryDetail.tourisms.map(el=>(
              <div key={el.id}>
                <span>{el.nombre}</span><br></br>
                <span>{el.duracion}</span><br></br>
                <span>{el.temporada}</span><br></br>
                <span>{el.dificultad}</span>
             </div>))):<h1>No encontro país</h1>}
             </span><br></br>
            
          </div>)}
      </>  
    )
}

export default CountryDetail;