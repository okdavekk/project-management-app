const { Schema, model } = require('mongoose');


const wbsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    

});
const WBS = model('WBS', wbsSchema);

module.exports = WBS;