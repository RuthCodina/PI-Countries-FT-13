
import React from 'react';
import {connect} from "react-redux";
import {findCountries} from '../../actions/index';
import { Link } from 'react-router-dom';


function Container(props){
    return(
     <div className='container'>
        { props.search&&props.search.map((el)=>(
             <div key={el.id} className='countryCards'>
                <img src={el.bandera} alt={el.name}></img>
                <h4 className='nombre'><Link to={`/countries/${el.id}`} style={{ textDecoration: 'none', color:'#ffffa4'}}>{el.name}</Link></h4> 
                <p>{el.region}</p>
             </div>
         ))}

     </div>
    )
}


function mapStateToProps(state) {
    return {
      search: state.countrySearched,
   
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      findCountry: name => dispatch(findCountries(name)),
     
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Container);