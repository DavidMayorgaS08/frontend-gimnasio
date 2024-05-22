import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useMaquinaStore = defineStore("maquina", () => {
    
    let getMaquinas = async () => {
        try {
            let res = await axios.get("http://localhost:3000/maquina",
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

    let getMaquina = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/maquina/${id}`);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let activos = async () => {
        try {
            let res = await axios.get("http://localhost:3000/maquina/listar/activos");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let inactivos = async () => {
        try {
            let res = await axios.get("http://localhost:3000/maquina/listar/inactivos");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let postMaquina = async (data) => {
        try {
            let res = await axios.post("http://localhost:3000/maquina", data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let putMaquina = async (id, data) => {
        try {
            let res = await axios.put(`http://localhost:3000/maquina/${id}`, data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let activarMaquina = async (id) => {
        try {
            let res = await axios.put(`http://localhost:3000/maquina/activar/${id}`);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let inactivarMaquina = async (id) => {
        try {
            let res = await axios.put(`http://localhost:3000/maquina/inactivar/${id}`);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getMaquinas, getMaquina, activos, inactivos, postMaquina, putMaquina, activarMaquina, inactivarMaquina  
    };
});
