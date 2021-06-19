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
   const find= await Tourism.findOne({
       where:{
        nombre
       },
       include:{
         model:Country,
         attributes:['id'],
         through: {
            attributes: [],
          },
       }
    })
   return res.json({Mensaje:'Se ha agregado con éxito la actividad', actividadCreada:find});
   
})



 module.exports= router; 