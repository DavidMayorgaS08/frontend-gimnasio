import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useUsuarioStore } from "../stores/usuarios.js";

export const useInventarioStore = defineStore("inventario", () => {
    let token = ref(useUsuarioStore().token);
    let inventario = ref(null);
    let getInventarios = async () => {
        try {
            let res = await axios.get("/inventario", 
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            inventario.value = res.data;
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getInventario = async (id) => {
        try {
            let res = await axios.get(`/inventario/${id}`,
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
            let res = await axios.get("/inventario/total/inventario",
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

    let postInventario = async (data) => {
        try {
            let res = await axios.post("/inventario", data,
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

    let putInventario = async (id, data) => {
        try {
            let res = await axios.put(`/inventario/${id}`, data,
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
    }

    return {
        getInventarios, getInventario, getTotal, postInventario, putInventario, inventario
    };
});