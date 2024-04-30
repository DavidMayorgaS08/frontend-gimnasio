import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useInventarioStore = defineStore("inventario", () => {
    let getInventarios = async () => {
        try {
            let res = await axios.get("http://localhost:3000/inventario");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getInventarios,
    };
});