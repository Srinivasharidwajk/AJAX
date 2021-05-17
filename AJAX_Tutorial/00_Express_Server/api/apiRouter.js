const express = require('express');
const router = express.Router();

// employees Data
let employees = [
    {
        id : '_abcdef',
        first_name : 'John',
        last_name : 'Wilson',
        email : 'john@gmail.com',
        gender : 'Male',
        ip_address : '127.0.0.1'
    },
    {
        id : '_vwxyz',
        first_name : 'Laura',
        last_name : 'Wilson',
        email : 'laura@gmail.com',
        gender : 'Female',
        ip_address : '9845.56.32'
    }
];

// Get ID
let getID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

// GET - Employees
router.get('/employees', (request , response) => {
    console.log(`GET Request Received at server .. ${new Date().toLocaleTimeString()}`);
    response.json(employees);
});

// POST Request
router.post('/employees', (request,response) => {
    let employee = {
        id : getID(),
        first_name : request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        gender : request.body.gender,
        ip_address : request.body.ip_address
    };
    employees.push(employee);
    console.log(`POST Request Received at server .. ${new Date().toLocaleTimeString()}`);
    response.json({msg : 'POST Request is Success'});
});

// PUT Request
router.put('/employees/:id', (request, response) => {
    let empId = request.params.id;
    let updateEmployee = {
        id : empId,
        first_name: request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        gender : request.body.gender,
        ip_address: request.body.ip_address
    };
    let existingEmployee = employees.find((employee) => {
       return employee.id === empId;
    });
    employees.splice(employees.indexOf(existingEmployee),1,updateEmployee);
    console.log(`PUT Request Received at server .. ${new Date().toLocaleTimeString()}`);
    response.json({msg : 'PUT Request is Success'});
});

// DELETE Request
router.delete('/employees/:id', (request,response) => {
    let empId = request.params.id;
    employees = employees.filter((employee) => {
        return employee.id !== empId;
    });
    console.log(`DELETE Request Received at server .. ${new Date().toLocaleTimeString()}`);
    response.json({msg : 'DELETE Request is Success'});
});

module.exports = router;