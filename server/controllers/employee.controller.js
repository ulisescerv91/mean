const employeeCtrl = {};

const Employee = require('../models/employee');

employeeCtrl.getEmployees = async (req,res) =>{
    //Usar Async/Await
    //Una vez se termine de ejecutar el Employee.find(), el resultado se agregara a  la variable employees
    const employees = await Employee.find();
    res.json(employees)
}

employeeCtrl.createEmployees = async (req,res) =>{
    //Esto es lo que  guardara en Mongo
    //No pongo el id porque mongo ya lo genera
    const employee = new Employee ({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary

    });
    console.log("Data Received: ",employee);
    //Se le agraega el await ya que tomara algo de tiempo
    await employee.save();
    res.json({
        'Status' : 'Employee Saved'
    })
}


employeeCtrl.getEmployee = async (req,res) =>{
    
    const employee = await Employee.findById(req.params.id)
    res.json(employee);

}

employeeCtrl.editEmployee = async (req,res) =>{
    const {id} = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    //Se toma el ID, enseguida del objeto con los nuevos parametros, por ultimo  se pone un objeto new para el caso que no exista el parametro anterior
    await Employee.findByIdAndUpdate(id, {$set: employee} , {new:true})

    res.json({
        status:"Employee Actualizado"
    })
}

employeeCtrl.deleteEmployee = async (req,res) =>{
    const {id} = req.params;
    await Employee.findByIdAndRemove(id)
    res.json({
        status:'Employee Delete'
    })
}

module.exports = employeeCtrl;