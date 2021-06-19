import fetch from 'node-fetch';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const FIND_COUNTRY = 'FIND_COUNTRY';
export const FIND_REGION = 'FIND_REGION';
export const ALL_COUNTRIES = 'ALL_COUNTRIES';
export const SET_COUNTRIES_AZ = 'SET_COUNTRIES_AZ';
export const SET_COUNTRIES_ZA= 'SET_COUNTRIES_ZA';
export const SET_COUNTRIES_BY_INHABITANS_ASC= 'SET_COUNTRIES_BY_INHABITANS_ASC';
export const SET_COUNTRIES_BY_INHABITANS_DESC= 'SET_COUNTRIES_BY_INHABITANS_DESC';
export const GET_BY_TOURISM= 'GET_BY_TOURISM';




export function fetchCountries() {
  return function (dispatch) {

    return fetch(`http://localhost:3001/countries?page=0`)
    .then(response => response.json())
      .then(json => {
        dispatch({ 
            type: GET_COUNTRIES, 
            payload: json
        }); 
     }); 
    
  }   
}  

export function fetchCountry(id) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries/${id}`)
    .then(response => response.json())
      .then(json => {
        dispatch({
            type: GET_COUNTRY_DETAIL, 
            payload: json
          
        }); 
     }).catch(error=>{
       if(error.response?.status!== 404) alert('Algo salió Mal');
       dispatch({type:GET_COUNTRY_DETAIL, payload:null})
     })
   }
}

export function clearCountry() { //se usa en el willunmount
  return  { 
            type: GET_COUNTRY_DETAIL, // va a usar el mismo reducer de la acción fetchCountry
            payload: undefined
        }; 
   
}

export function findCountries(name){
  return function(dispatch){
    return fetch(`http://localhost:3001/countries?name=${name}`)
     .then(response=> response.json())
     .then(json=>{
        dispatch({
          type:FIND_COUNTRY,
          payload:json
        })
     })
  }
}

export function getAllCountries(){
  return function(dispatch){
    return fetch(`http://localhost:3001/countries/all`)
     .then(response=> response.json())
     .then(json=>{
        dispatch({
          type:ALL_COUNTRIES,
          payload:json
        })
     })
  } 
} 



export function getByRegion(region){
  return{
    type: FIND_REGION,
    region
  }
}

export function setCountriesAZ() { 
  return  { 
         type: SET_COUNTRIES_AZ   
        }; 
}

export function setCountriesZA() { 
  return  { 
         type: SET_COUNTRIES_ZA   
        }; 
}
 
export function setCountriesByInhabitansASC() { 
  return  { 
         type: SET_COUNTRIES_BY_INHABITANS_ASC   
        }; 
}

export function setCountriesByInhabitansDESC() { 
  return  { 
         type: SET_COUNTRIES_BY_INHABITANS_DESC   
        }; 
}

export function getByTourism(tourism) { 
  return  { 
         type: GET_BY_TOURISM,
         tourism  
        }; 
}