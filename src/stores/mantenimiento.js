import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useMantenimientoStore = defineStore("mantenimiento", () => {
    let getMantenimientos = async () => {
        try {
            let res = await axios.get("http://localhost:3000/mantenimiento");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getMantenimientos,
    };
});