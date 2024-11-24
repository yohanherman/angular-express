const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

router.post('/employee', employeeController.saveEmployees);
router.get('/employee', employeeController.getEmployees);
router.get('/employee/:id', employeeController.getOneEmployee);
router.delete('/employee/:id', employeeController.deleteEmployee);
router.patch('/employee/:id', employeeController.updateEmployee);



module.exports = router;