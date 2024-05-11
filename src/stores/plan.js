import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const usePlanStore = defineStore("plan", () =>{
    let getPlan = async () => {
        try {
            let res = await axios.get("http://localhost:3000/plan");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getPlan,
    };
});