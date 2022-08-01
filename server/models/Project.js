const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const projectSchema = new Schema({

});
const Project = model('Project', projectSchema);

module.exports = Project;