const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }

});
const Project = model('Project', projectSchema);

module.exports = Project;