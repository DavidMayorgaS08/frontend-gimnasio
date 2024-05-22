import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useIngresoStore = defineStore("ingreso", () => {
    let token = ref(localStorage.getItem('token'));
    let getIngresos = async () => {
        try {
            let res = await axios.get("http://localhost:3000/ingreso", {
                headers: {
                    "x-token": token.value
                }
            });
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getIngreso = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/ingreso/${id}`);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }; 

    let postIngreso = async (data) => {
        try {
            let res = await axios.post("http://localhost:3000/ingreso", data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let putIngreso = async (id, data) => {
        try {
            let res = await axios.put(`http://localhost:3000/ingreso/${id}`, data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getIngresos, getIngreso, postIngreso, putIngreso
    };
});