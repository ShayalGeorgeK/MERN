const mongoose =require('mongoose')

const contactSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Mobno:{
        type:Number,
        require:true
    }
})

module.exports=mongoose.model('result',contactSchema)