import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useVentaStore = defineStore("venta", () =>{
    let getVenta = async () => {
        try {
            let res = await axios.get("http://localhost:3000/venta");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getVenta,
    };
});