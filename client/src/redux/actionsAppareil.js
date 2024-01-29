import axios from "axios"
import { GET_APP,ERRORS } from "./actionTypes"

//essai sur actions de ajout appareil

export const ajoutApp=(newApp,navigate)=>async(dispatch)=>{
    try{
    const res=await axios.post("http://localhost:5001/api/appareil/add",newApp)
    dispatch({type:GET_APP,payload:res.data})
    navigate("/ListAppareil")
    }
    catch(err){
        console.log(err)
        console.dir (err)
    const {errors,msg}=err.response.data
    
        dispatch({
        type:ERRORS,
        payload:errors
    })}}

    // get app
    export const getApp=(navigate)=>async(dispatch)=>{
        try{
        const res=await axios.get("http://localhost:5001/api/appareil/getall")
        dispatch({type:GET_APP,payload:res.data})
        navigate("/ListAppareil")
        }
        catch(err){
            console.log(err)
            console.dir (err)
        const {errors,msg}=err.response.data
        
            dispatch({
            type:ERRORS,
            payload:errors
        })}}

        // delete app

        export const deleteApp=(navigate,_id)=>async(dispatch)=>{
            try{
            const res=await axios.delete("http://localhost:5001/api/appareil/delete/:_id",_id)
            dispatch({type:GET_APP,payload:res.data})
            navigate("/ListAppareil")
            }
            catch(err){
                console.log(err)
                console.dir (err)
            const {errors,msg}=err.response.data
            
                dispatch({
                type:ERRORS,
                payload:errors
            })}}

            // edit app

            export const editApp=(navigate,_id)=>async(dispatch)=>{
                try{
                const res=await axios.put("http://localhost:5001/api/appareil/edit/:_id",_id)
                dispatch({type:GET_APP,payload:res.data})
                navigate("/ListAppareil")
                }
                catch(err){
                    console.log(err)
                    console.dir (err)
                const {errors,msg}=err.response.data
                
                    dispatch({
                    type:ERRORS,
                    payload:errors
                })}}

