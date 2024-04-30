import {defineStore} from "pinia"
import axios from "axios"
import {ref} from "vue"

export const useUsuarioStore = defineStore("usuario",()=>{
    
    let getUsuarios = async()=>{
        try {
            let res = await axios.get("http://localhost:3000/usuario/")
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let postUsuario = async(r)=>{
        console.log(r);
        try {
            let req = await axios.post("http://localhost:3000/usuario/",r)
            console.log(req);
            return req.data
        } catch (error) {
            console.log(error);
            return error
        }
    }
    
    return{
        getUsuarios, postUsuario
    }
})
