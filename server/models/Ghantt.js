const { Schema, model } = require('mongoose');


const ghanttSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    

});
const Ghantt = model('Ghantt', ghanttSchema);

module.exports = Ghantt;