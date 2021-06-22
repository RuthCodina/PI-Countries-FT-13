import './App.css';
import CountryDetail from './componentes/CountryDetail/CountryDetail';
import Mostrar from './componentes/Mostrar';
import Busqueda from './componentes/Busqueda/Busqueda';
import NavBar from './componentes/NavBar';
import AddTourism from './componentes/AddTourism/AddTourism';
import Paginacion from './componentes/Paginacion/Paginacion';
import LandingPage from './componentes/LandingPage/LandingPage';
import { Route } from "react-router-dom";



function App() {
 

  return (
    <div className="App">
     
      <Route exact path='/home' component={LandingPage}/>
      <NavBar/>
      <Route exact path='/busqueda' component={Busqueda}/>
      {/* <Route exact path='/countries' component={Mostrar}/> */}
      <Route exact path='/countries' component={Paginacion}/>
      <Route exact path='/countries/:id' component={CountryDetail}/>
      <Route exact path='/activity' component={AddTourism}/>
    

    </div>
  );
}

export default App;
