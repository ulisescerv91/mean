const mongoose = require ('mongoose');

//PAra crear esquemas
const {Schema} = mongoose;

const EmployeeSchema = new Schema ({
    name: { type : String, required : true},
    position: { type : String, required : true},
    office: { type : String, required : true},
    salary: { type : Number, required : true}
})


//Se le dice  a Mongo que estos seran los datos que se estaran almacenando
module.exports = mongoose.model('Employee',EmployeeSchema);