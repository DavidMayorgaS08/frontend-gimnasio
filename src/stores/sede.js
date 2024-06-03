import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useUsuarioStore } from "../stores/usuarios.js";

export const useSedeStore = defineStore("sede", () =>{
    let token = ref(useUsuarioStore().token);
    let sede = ref(null);
    let getSedes = async () => {
        try {
            let res = await axios.get("http://localhost:3000/sede",{
                headers: {
                    "x-token": token.value
                }
            
            });
            sede.value = res.data;
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getSede = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/sede/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let postSede = async (data) => {
        try {
            let res = await axios.post("http://localhost:3000/sede", data,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let putSede = async (id, data) => {
        try {
            let res = await axios.put(`http://localhost:3000/sede/${id}`, data,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getSedes, getSede, postSede, putSede, sede
    };
});