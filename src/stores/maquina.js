import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useUsuarioStore } from "../stores/usuarios.js";

export const useMaquinaStore = defineStore("maquina", () => {
    let token = ref(useUsuarioStore().token);
    let maquina = ref(null);
    let getMaquinas = async () => {
        try {
            let res = await axios.get("/maquina",
                {
                    headers: {
                        "x-token": token.value
                    }
                }
            );
            maquina.value = res.data;
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getMaquina = async (id) => {
        try {
            let res = await axios.get(`/maquina/${id}`,
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

    let activos = async () => {
        try {
            let res = await axios.get("/maquina/listar/activos",
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

    let inactivos = async () => {
        try {
            let res = await axios.get("/maquina/listar/inactivos",
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

    let postMaquina = async (data) => {
        try {
            let res = await axios.post("/maquina", data,
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

    let putMaquina = async (id, data) => {
        try {
            let res = await axios.put(`/maquina/${id}`, data,
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

    let activarMaquina = async (id) => {
        try {
            let res = await axios.put(`/maquina/activar/${id}`,
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

    let inactivarMaquina = async (id) => {
        try {
            let res = await axios.put(`/maquina/inactivar/${id}`,
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
        getMaquinas, getMaquina, activos, inactivos, postMaquina, putMaquina, activarMaquina, inactivarMaquina, maquina
    };
});
