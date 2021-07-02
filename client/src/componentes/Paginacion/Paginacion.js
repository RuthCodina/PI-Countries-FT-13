import React, {useEffect, useState} from "react"
import {Link} from 'react-router-dom';
import './paginacion.css'; 


function renderData(countries){
    return(
        <div className='container'>
            { 
            countries? countries.map(country=>(
                <div key={country.id} className='countryCards'>
                   <img src={country.bandera} alt={country.name}></img>
                   <h4 className='nombre'><Link to={`/countries/${country.id}`} style={{ textDecoration: 'none', color:'#ffffa4'}}>{country.name}</Link></h4>
                   <p>{country.region}</p>
                 </div>
            )): <h2>Cargando...</h2>
            }
        </div>
    )
}


function Paginacion(){

  const[countries, setCountries]=useState([])
  const[currentPage, setCurrentPage]=useState(1)
  let countriesPerPage = 10

  const[pageNumberLimit, setPageNumberLimit]=useState(5)
  const[maxPageNumberLimit, setmaxPageNumberLimit]=useState(5)
  const[minPageNumberLimit, setminPageNumberLimit]=useState(0)


  const pages=[];
  for(let i=1; i<=Math.ceil(countries.length/countriesPerPage); i++){
      pages.push(i)
  }

  let indexOfLastCountry= currentPage*countriesPerPage;
  let indexOfFirstCountry= indexOfLastCountry - countriesPerPage;
  let currentCountries = countries.slice(indexOfFirstCountry,indexOfLastCountry)

  function handleClick(e){
      setCurrentPage(Number(e.target.id))
  }

  function handleNextBtn(){
    if(currentPage===25){
        setPageNumberLimit(maxPageNumberLimit)
        setminPageNumberLimit(minPageNumberLimit)
    }
     else { setCurrentPage(currentPage+1)
      if(currentPage+1>maxPageNumberLimit){
          setmaxPageNumberLimit(maxPageNumberLimit+ pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit+ pageNumberLimit);
      }
    }
  };

  function hidePrevBtn(){
    if(currentPage===1){

    }
  }

  function handlePrevBtn(){
    if(currentPage<=1){
        setPageNumberLimit(maxPageNumberLimit)
        setminPageNumberLimit(minPageNumberLimit)
    }
    
    else{
        setCurrentPage(currentPage-1)
        if((currentPage-1)% pageNumberLimit ===0){
        setmaxPageNumberLimit(maxPageNumberLimit- pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit- pageNumberLimit);
    }
    }
};

  let renderPageNumber = pages.map( num => {
    if(num<maxPageNumberLimit+1 && num>minPageNumberLimit){
      return(
          <li key={num} id={num} onClick={handleClick} className={currentPage===num? 'active':null}>{num}</li>
      )
    } else{
        return null
    }
   })
  
          

  useEffect(()=>{
    fetch(`http://localhost:3001/countries/all`)
     .then(response=> response.json())
     .then(json=> setCountries(json))
   },[])

  

    return(
      <>
       <ul className='pageNumbers'>
       {currentPage>1?<li><button onClick={handlePrevBtn}> prev</button></li>:null}
           {renderPageNumber}
       {currentPage<25?<li><button onClick={handleNextBtn}>next</button></li>:null}
       </ul>
       {renderData(currentCountries)}

      </>
    )
}

export default Paginacion