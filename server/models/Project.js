const { Schema, model } = require('mongoose');


const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    projectDescription: {
        type: String,
    }

});
const Project = model('Project', projectSchema);

module.exports = Project;