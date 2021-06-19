
import React from 'react';
import {connect} from "react-redux";
import {findCountries} from '../actions';
import { Link } from 'react-router-dom';


function Container(props){
    return(
     <ul>
        { props.search&&props.search.map((el)=>(
             <div key={el.id}>
                <Link to={`/countries/${el.id}`}>{el.name}</Link>
             </div>
         ))}

     </ul>
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
      // clearCountries: () => dispatch(clearCountries()),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Container);