const Employee = require('../models/employeesModel') 

const saveEmployees = (req, res )=>{

    const employee = new Employee({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        position: req.body.position,
        hiring_date: req.body.hiring_date
    })
    employee.save().then(()=>{
            res.status(201).json({ message: 'employee successfully created'});
        }
    ).catch((error)=>{
        res.status(400).json({error: error});
    })
}

const getEmployees = async (req, res) =>{
    try{
        const employees = await Employee.find();
        res.status(200).json(employees);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

const getOneEmployee = async (req, res) => {
    try{
        const employee = await Employee.findById(req.params.id)
        if(!employee){
            res.status(404).json({message: 'employee not found'});
        }
        res.status(200).json(employee);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

const deleteEmployee = async (req, res) =>{
    try{
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if(!employee){
            return res.status(404).json({message: 'employee not found'})
        }
        res.status(200).json({message: 'empoyee successfully deleted'})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const updateEmployee = async (req, res)=>{
    try{
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body);
        if(!employee){
            res.status(404).json({message: 'Employee not found'})
        }
        res.status(200).json({ employee, message: 'employee successfully updated'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}


module.exports= {saveEmployees, getEmployees, getOneEmployee, deleteEmployee, updateEmployee}