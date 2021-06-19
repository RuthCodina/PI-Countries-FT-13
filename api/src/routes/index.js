const { Router } = require('express');
const fetch= require('node-fetch');
const server = require("express").Router();
const countries= require('./countries')
const tourism= require('./tourism')
const { Country } = require('../db')
const {Tourism}= require('../db')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

fetch('https://restcountries.eu/rest/v2/all')
 .then(response => response.json())
 .then(contenido =>contenido.map(el=>Country.create({
         id: el.alpha3Code,
         name: el.name,
         bandera: el.flag,
         region: el.region,
         capital:el.capital,
         subregion: el.subregion,
         area:el.area,
         poblacion: el.population
   })));

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countries);
router.use('/activity', tourism);
// router.use('/all', countries)




module.exports = router;
