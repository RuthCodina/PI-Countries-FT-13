import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
// import thunkMiddleware from 'redux-thunk'

const store = createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  );
  
  export default store;
  console.log('estado inicial: ', store.getState());
  store.subscribe(()=>{// esto es para ver el cambio de estado
    console.log('cambio de estado: ', store.getState());
  });