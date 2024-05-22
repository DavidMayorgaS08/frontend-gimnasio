import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useVentaStore = defineStore("venta", () =>{
   
    let getVentas = async () => {
        try {
            let res = await axios.get("http://localhost:3000/venta",
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

    let getVenta = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/venta/${id}`);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let postVenta = async (data) => {
        try {
            let res = await axios.post("http://localhost:3000/venta", data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let putVenta = async (id, data) => {
        try {
            let res = await axios.put(`http://localhost:3000/venta/${id}`, data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getVentas, getVenta, postVenta, putVenta
    };
});