import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useSedeStore = defineStore("sede", () =>{
    let getSede = async () => {
        try {
            let res = await axios.get("http://localhost:3000/sede");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getSede,
    };
});