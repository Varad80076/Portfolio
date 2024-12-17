//mongoose implimentation
const mongoose = require('mongoose')
//create Schema
const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    description: String
})
//export Schema
module.exports = mongoose.model("contact",contactSchema);