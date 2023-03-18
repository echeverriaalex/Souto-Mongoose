const mongoose = require('mongoose');
const db = require('./index');
const Schema = mongoose.Schema;

const empleadoSchema = new Schema({

    nombre : String,
    apellido : String
});

const Empleado = db.model('empleados', empleadoSchema);

module.exports = Empleado;