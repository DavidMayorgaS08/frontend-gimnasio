import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const usePagoStore = defineStore("pago", () => {
    let getPago = async () => {
        try {
            let res = await axios.get("http://localhost:3000/pago");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getPago,
    };
});