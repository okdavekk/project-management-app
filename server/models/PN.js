const { Schema, model } = require('mongoose');


const pnSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    

});
const PN = model('PN', pnSchema);

module.exports = PN;