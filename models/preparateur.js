const mongoose=require("mongoose")
const schema=mongoose.Schema

const PrepSchema=new schema({
    name:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,

    },
    password:{
        type:String
    }

})

module.exports=Preparateur=mongoose.model("Preparateurs",PrepSchema)