// const { Router } = require('express');
const {Op} = require('sequelize')
// const fetch = require('node-fetch');
// const express = require('express');
// const server = express();

const { Router } = require('express');
const router = Router();

const { Country, Tourism } = require('../db')

router.get('/', async (req,res)=>{
   
  let countries;
  let {name}=req.query// tendría que llegar un id de paginación del front,

  if(name){
    countries= await Country.findAll({
     where: {
       name: {
         [Op.iLike]: `%${name}%` 
       }
     }
   });
 
    return res.status(200).json(countries)
  }
   else {
    countries = await Country.findAll({limit:10})
      return  res.status(200).json(countries)

  }; 
  
 })


router.get('/:id', async (req,res)=>{

  let country = await Country.findOne({
     where: {
       id: req.params.id
      },
     include:[Tourism]
    })
  return res.status(200).json(country)
})





module.exports = router;