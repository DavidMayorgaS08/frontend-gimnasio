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
    };

    let getUsuario = async(id)=>{
        try {
            let res = await axios.get(`http://localhost:3000/usuario/${id}`)
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let activos = async()=>{
        try {
            let res = await axios.get("http://localhost:3000/usuario/listar/activos")
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let inactivos = async()=>{
        try {
            let res = await axios.get("http://localhost:3000/usuario/listar/inactivos")
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let getRol = async(id)=>{
        try {
            let res = await axios.get(`http://localhost:3000/usuario/listar/rol/${id}`)
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

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
    };
    
    let login = async(r)=>{
        try {
            let req = await axios.post("http://localhost:3000/usuario/iniciar-sesion",r)
            console.log(req);
            if (req.status === 200) {
                window.location.href = 'http://localhost:5173/#/menu/';
            }
            return req.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let putUsuario = async(id,r)=>{
        try {
            let req = await axios.put(`http://localhost:3000/usuario/${id}`,r)
            console.log(req);
            return req.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let activar = async(id)=>{
        try {
            let req = await axios.put(`http://localhost:3000/usuario/activar/${id}`)
            console.log(req);
            return req.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let inactivar = async(id)=>{
        try {
            let req = await axios.put(`http://localhost:3000/usuario/inactivar/${id}`)
            console.log(req);
            return req.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    return{
        getUsuarios, getUsuario, activos, inactivos, getRol, postUsuario, login, putUsuario, activar, inactivar
    }
})
