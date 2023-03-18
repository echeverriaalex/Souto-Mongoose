const express = require('express');
const router = express.Router();
const empleadosController = require('./Controllers/EmpleadoController');

router.get('/', (req, res)=>{

    res.send("Souto con Mongoose")
})
router.get('/empleados', empleadosController.findAllUser);
router.post('/empleado', empleadosController.createUser);

module.exports = router;