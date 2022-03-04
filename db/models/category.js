const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
    },
    icon: {
        type: String,
    },
    image: {
        type: String,
        default: ''
    },
})

categorySchema.methods.deepak= function(){
    console.log(`my name is deepak ${this.name}`)
}

exports.Category = mongoose.model('Category', categorySchema)