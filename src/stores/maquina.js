import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useMaquinaStore = defineStore("maquina", () => {
    let getMaquinas = async () => {
        try {
            let res = await axios.get("http://localhost:3000/maquina");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getMaquinas,
    };
});
