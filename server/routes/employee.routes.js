const express = require ('express');

const router = express.Router();

const employeeCtrl = require('../controllers/employee.controller')

/**
 * A todas las rutas en automatico se les esta gregando =-> /api/employees1
 * Ya que en el index.js se configuro
 */

 router.get('/', employeeCtrl.getEmployees);

 router.post('/', employeeCtrl.createEmployees);

 router.get('/:id',employeeCtrl.getEmployee);
 //Method to update
 router.put('/:id',employeeCtrl.editEmployee);

 router.delete('/:id',employeeCtrl.deleteEmployee);


module.exports = router;//