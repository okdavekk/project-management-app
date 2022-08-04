const { Schema, model } = require('mongoose');



const ProjectNetworkSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    

});
const ProjectNetwork = model('ProjectNetwork', ProjectNetworkSchema);

module.exports = ProjectNetwork;