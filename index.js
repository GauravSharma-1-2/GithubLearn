const {format} = require('date-fns');               // Module to format Date
const {v4:uuid} = require('uuid');                  // Module to generate universally unique ID [ v4:Uuid are generated using pseudo-random numbers]
console.log(format(new Date(),'yyyyMMdd\tHH:mm::ss'));
console.log(uuid());
console.log();
