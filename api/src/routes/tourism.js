// const express= require('express');
// const server = express();
const { Router } = require('express');
const router = Router();

const {Tourism, Country}= require('../db')




router.post('/', async (req, res)=>{
     
    const { nombre, duracion, temporada, dificultad, codigoPais}= req.body;

    const tourismCreated=await Tourism.create({ // áca cuando crea o encuentra devuelve un arreglo.
          
          nombre,
          duracion,
          temporada,
          dificultad 
      });
    
   await tourismCreated.setCountries(codigoPais);
   return res.json(tourismCreated);
   
})



 module.exports= router; 