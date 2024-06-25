import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useUsuarioStore } from "../stores/usuarios.js";

export const usePlanStore = defineStore("plan", () =>{
    let token = ref(useUsuarioStore().token);
    let plan = ref(null);
    let getPlanes = async () => {
        try {
            let res = await axios.get("/plan",
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            plan.value = res.data;
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getPlan = async (id) => {
        try {
            let res = await axios.get(`/plan/${id}`,
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
            let res = await axios.get("/plan/listar/activas",
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
            let res = await axios.get("/plan/listar/inactivas",
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

    let postPlan = async (data) => {
        try {
            let res = await axios.post("/plan", data,
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

    let putPlan = async (id, data) => {
        try {
            let res = await axios.put(`/plan/${id}`, data,
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

    let activar = async (id) => {
        try {
            let res = await axios.put(`/plan/activar/${id}`,
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

    let inactivar = async (id) => {
        try {
            let res = await axios.put(`/plan/inactivar/${id}`,
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
        getPlanes, getPlan, activos, inactivos, postPlan, putPlan, activar, inactivar, plan
    };
});