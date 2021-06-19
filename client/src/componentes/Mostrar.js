import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {connect} from 'react-redux';
import { fetchCountries} from '../actions';
import {Link} from 'react-router-dom';

function Mostrar() {
  const dispatch= useDispatch();
  const countries= useSelector(state => state.countries);
 
  useEffect(()=>{
    dispatch(fetchCountries())
  },[dispatch])

 console.log(countries);



  return (
    
      <div>
        <ul>
          {
          Array.isArray(countries)? countries.map(country=>(
              <li key={country.id}>
                 <Link to={`/countries/${country.id}`}>{country.name}</Link>
                 <img src={country.bandera} alt={country.name}></img>
                 <p>{country.region}</p>
              </li>
          )): <h2>Cargando...</h2>
          }
        </ul>
      </div>
      
   
  );
}


export default Mostrar;

// function mapStateToProps(state) { //store.getState()
//   return {
//     countries: state.countries
//   };
// }

// function mapDispatchToProps(dispatch) { //store.dispatch
//   return {
//     getCountries: page => dispatch(fetchCountries(page)),

//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Busqueda);

