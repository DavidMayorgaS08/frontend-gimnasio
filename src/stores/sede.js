import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useSedeStore = defineStore("sede", () =>{
    
    let getSedes = async () => {
        try {
            let res = await axios.get("http://localhost:3000/sede",{
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

    let getSede = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/sede/${id}`);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let postSede = async (data) => {
        try {
            let res = await axios.post("http://localhost:3000/sede", data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let putSede = async (id, data) => {
        try {
            let res = await axios.put(`http://localhost:3000/sede/${id}`, data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getSedes, getSede, postSede, putSede
    };
});