const { Schema, model } = require('mongoose');


const WorkBreakdownStructureSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    

});
const WorkBreakdownStructure = model('WorkBreakdownStructure', WorkBreakdownStructureSchema);

module.exports = WorkBreakdownStructure;