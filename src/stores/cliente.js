import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useClienteStore = defineStore("cliente", () => {
    let getClientes = async () => {
        try {
            let res = await axios.get("http://localhost:3000/cliente");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getClientes,
    };
});