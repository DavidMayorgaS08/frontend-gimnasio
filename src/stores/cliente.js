import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useUsuarioStore } from "../stores/usuarios.js";

export const useClienteStore = defineStore("cliente", () => {
    let token = ref(useUsuarioStore().token);
    let getClientes = async () => {
        try {
            let res = await axios.get("http://localhost:3000/cliente",{
                headers: {
                    "x-token": token.value
                }
            
            });
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getCliente = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/cliente/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getActivos = async () => {
        try {
            let res = await axios.get("http://localhost:3000/cliente/listar/activos",
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getInactivos = async () => {
        try {
            let res = await axios.get("http://localhost:3000/cliente/listar/inactivos",
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getPorPlan = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/cliente/listar-por-plan/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }; 

    let getTotal = async () => {
        try {
            let res = await axios.get("http://localhost:3000/cliente/total/clientes",
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }; 

    let postCliente = async (cliente) => {
        try {
            let res = await axios.post("http://localhost:3000/cliente", cliente,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let putCliente = async (id, cliente) => {
        try {
            let res = await axios.put(`http://localhost:3000/cliente/${id}`, cliente,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let putActivar = async (id) => {
        try {
            let res = await axios.put(`http://localhost:3000/cliente/activar/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let putInactivar = async (id) => {
        try {
            let res = await axios.put(`http://localhost:3000/cliente/inactivar/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getClientes, getCliente, getActivos, getInactivos, getPorPlan, getTotal, postCliente, putCliente, putActivar, putInactivar
    };
});