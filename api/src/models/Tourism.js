const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tourism', {
    // id: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   primaryKey:true
    // },
    nombre:{
      type: DataTypes.STRING,
      // unique:true,
      allowNull: false
    },
    duracion:{
      type: DataTypes.ENUM('1','2','3','4','5'),
      // values:['1','2','3','4','5'],
      allowNull:false
    },
    temporada:{
        type: DataTypes.ENUM("summer", "autumn","winter","spring"),// ENUM opciones cerradas para el usuario.
        // values: ["summer", "autumn","winter","spring"],
        allowNull:false 
      },
    dificultad:{
        type: DataTypes.ENUM('Alta', 'Medio Alta', 'medio', 'Medio Baja', 'Baja'),
        // values:['ALta', 'Medio ALta', 'medio', 'Medio Baja', 'Baja'],
        allowNull:false 
      }

  });
  
};