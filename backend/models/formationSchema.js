var mongoose = require('mongoose');

var formationSchema = mongoose.Schema({
  
   Sujet: {type: String},
  Plan :{type: String},
  Horaires :{type:  String},
   Formateur : {type: String},
    TypeFormation : {type: String},
  NombreHeures :{type:  Int16Array},
  NombrePlaces :{type:  Int16Array},
    Date : {type: Date} 
});
module.exports = mongoose.model('formation', formationSchema);