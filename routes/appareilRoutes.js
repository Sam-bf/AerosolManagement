const express=require("express")
const router=express.Router()
const Appareil=require("../models/appareil")
//testt 
router.get("/",(req,res)=>{
    res.send("helloooooooo")
})

//add appareil
router.post("/add",async(req,res)=>{
    console.log(req.body,"hellooooo")
    const {Marque,Model,Référence,DateOuverture}=req.body
    
    const newappareil=new Appareil({
        Marque,Model,Référence,DateOuverture
    })
   
  const appareil= await newappareil.save()

  res.send({msg:"Appareil ajouté",appareil})
    
})
//delete appareil
router.delete("/delete/:_id",async(req,res)=>{
    const {_id}=req.params
    const appareil= await Appareil.findOneAndDelete({_id})
    res.send({msg:"Appareil supprimé",appareil})
})

//edit appareil

router.put("/edit/:_id",async(req,res)=>{
    const{_id}=req.params
    const appareil=await Appareil.findByIdAndUpdate({_id},{$set:req.body},{new:true})
    res.send({msg:"Appareil modifié",appareil})
})
//fetch (affichage) data
router.get("/getall",async(req,res)=>{
    const appareils=await Appareil.find()
    res.send({msg:"Appareils affichés",appareils})
})



module.exports=router