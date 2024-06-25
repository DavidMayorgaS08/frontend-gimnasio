import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useUsuarioStore } from "../stores/usuarios.js";

export const useVentaStore = defineStore("venta", () =>{
   let token = ref(useUsuarioStore().token);
   let venta = ref(null);
    let getVentas = async () => {
        try {
            let res = await axios.get("/venta",
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            venta.value = res.data;
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getVenta = async (id) => {
        try {
            let res = await axios.get(`/venta/${id}`,
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

    let postVenta = async (data) => {
        try {
            let res = await axios.post("/venta", data,
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

    let putVenta = async (id, data) => {
        try {
            let res = await axios.put(`/venta/${id}`, data,
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
        getVentas, getVenta, postVenta, putVenta, venta
    };
});