const mongoose=require("mongoose")
const schema=mongoose.Schema

const appareilSchema=new schema({
    Marque:{
        type:String
    },
    Model:{
        type:String
    },
    Référence:{
        type:String,
    },
    DateOuverture:{
        type:Date,
        default:Date.now()
    }
})

module.exports=Appareil=mongoose.model("appareils",appareilSchema)