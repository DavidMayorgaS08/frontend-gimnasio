import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useUsuarioStore } from "../stores/usuarios.js";

export const useIngresoStore = defineStore("ingreso", () => {
    let token = ref(useUsuarioStore().token);
    let ingreso = ref(null);
    let getIngresos = async () => {
        try {
            let res = await axios.get("/ingreso", {
                headers: {
                    "x-token": token.value
                }
            });
            // console.log(res);
            ingreso.value = res.data;
            // console.log(ingreso.value);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getIngreso = async (id) => {
        try {
            let res = await axios.get(`/ingreso/${id}`,
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

    let postIngreso = async (data) => {
        try {
            let res = await axios.post("/ingreso", data,
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
            alert("Error al crear el ingreso");
            return error;
        }
    };

    let putIngreso = async (id, data) => {
        try {
            let res = await axios.put(`/ingreso/${id}`, data,
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
        getIngresos, getIngreso, postIngreso, putIngreso, ingreso
    };
});