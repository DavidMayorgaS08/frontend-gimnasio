import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useUsuarioStore } from "../stores/usuarios.js";

export const useClienteStore = defineStore("cliente", () => {
    let token = ref(useUsuarioStore().token);
    let cliente = ref(null);
    let getClientes = async () => {
        try {
            let res = await axios.get("/cliente",{
                headers: {
                    "x-token": token.value
                }
            
            });
            cliente.value = res.data;
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getCliente = async (id) => {
        try {
            let res = await axios.get(`/cliente/${id}`,
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
            let res = await axios.get("/cliente/listar/activos",
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
            let res = await axios.get("/cliente/listar/inactivos",
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
            let res = await axios.get(`/cliente/listar-por-plan/${id}`,
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
            let res = await axios.get("/cliente/total/clientes",
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
            let res = await axios.post("/cliente", cliente,
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
            let res = await axios.put(`/cliente/${id}`, cliente,
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
            let res = await axios.put(`/cliente/activar/${id}`, {}, {
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

    let putInactivar = async (id) => {
        try {
            let res = await axios.put(`/cliente/inactivar/${id}`, {}, {
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

    return {
        getClientes, getCliente, getActivos, getInactivos, getPorPlan, getTotal, postCliente, putCliente, putActivar, putInactivar, cliente
    };
});