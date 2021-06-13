const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING,
      // unique:true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bandera:{
      type: DataTypes.TEXT,
      allowNull:false
    },
    region:{
      type:DataTypes.STRING,
      allowNull:false
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false
    },
    subregion:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    area:{
      type:DataTypes.FLOAT,
      allowNull:true,
    },
    poblacion:{
      type:DataTypes.INTEGER,
      allowNull:true,
      },
  });
};


