const { Tourism, conn } = require('../../src/db.js');
const { expect } = require('chai');


// describe('Country model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Country.sync({ force: true }));
//     describe('nombre', () => {
//       it('should throw an error if nombre is null', (done) => {
//         Country.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Country.create({ name: 'Argentina' });
//       });
//     });
//   });
// });

describe('Tourism Model', ()=>{
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    describe("validators", ()=>{
      beforeEach(()=>Tourism.sync({force:true}))
      describe("type of data", ()=>{
          it("error si la temporada es diferente de winter, spring, autumn or summer", (done)=>{
              Tourism.create({
                  nombre: "museo",
                  duracion: 3,
                  temporada: "Otoño",
                  dificultad: 3,
              })
              .then(()=> done(new Error("el valor de temporada no es válido")))
              .catch(()=> done())
          })
          it("lanza error si duracion no es un  numero", (done)=>{
              Tourism.create({
                  nombre:"restaurant",
                  duracion:"re",
                  temporada:"spring",
                  dificultad: 5,
              })
              .then(()=> done(new Error("duracion tiene letras")))
              .catch(()=>done())
          })
          it("debería mostrar un error si duracion tiene letras", (done)=>{
              Tourism.create({
                  nombre:"paseo",
                  duracion: "2 horas",
                  temporada:"autumn",
                  dificultad:3,
              })
              .then(()=> done(new Error("sintásis inválida para duracion")))
              .catch(()=> done())
          })
          it("lanza error si dificultad es un numero", (done)=>{
              Tourism.create({
                  nombre:"jugar a la pelota",
                  duracion:12,
                  temporada:"winter",
                  dificultad: 5,
              })
              .then(()=> done(new Error("dificultad no es un numero")))
              .catch(()=> done())
          })
          it("lanza error si la duracion es mayor a 5", (done)=>{
              Tourism.create({
                  nombre:"ir a correr",
                  dificultad: 8,
                  temporada:"autumn",
                  duracion: 13,
              })
              .then(()=>done(new Error("el valor máximo es cinco")))
              .catch(()=> done())
          })
      })
   })
   describe("Agregando Tourism", ()=>{
    it("deberia agregar una Actividad", ()=>{
        return Tourism.create({
            nombre:"jugar al tenis",
            duracion: 2,
            temporada: "summer",
            dificultad: "Alta",
            codigoPais:['COL']
        })
        .then(()=>{
            return Tourism.findOne({where:{nombre:"jugar al tenis"}})
        })
        
    })
    it("deberia setear valores Correctametne", ()=>{
         Tourism.create({
            nombre:"ir al cine",
            duracion:3,
            temporada:"winter",
            dificultad: "Baja",
        })
        .then((tourism)=>{
           expect(tourism.nombre).to.equal("ir al cine")
            
        })
        .catch((err)=> console.log(err))
    })
    
  })
})


