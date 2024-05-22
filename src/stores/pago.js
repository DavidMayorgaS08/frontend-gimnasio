import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const usePagoStore = defineStore("pago", () => {
    
    let getPagos = async () => {
        try {
            let res = await axios.get("http://localhost:3000/pago",
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

    let getPago = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/pago/${id}`);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let activos = async () => {
        try {
            let res = await axios.get("http://localhost:3000/pago/listar/activos");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let inactivos = async () => {
        try {
            let res = await axios.get("http://localhost:3000/pago/listar/inactivos");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getPagosPlan = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/pago//total-pagos-plan/${id}`);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getPagosCliente = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/pago//total-pagos-cliente/${id}`);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let postPago = async (data) => {
        try {
            let res = await axios.post("http://localhost:3000/pago", data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let putPago = async (id, data) => {
        try {
            let res = await axios.put(`http://localhost:3000/pago/${id}`, data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let activar = async (id) => {
        try {
            let res = await axios.put(`http://localhost:3000/pago/activar/${id}`);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let inactivar = async (id) => {
        try {
            let res = await axios.put(`http://localhost:3000/pago/inactivar/${id}`);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getPagos, getPago, activos, inactivos, getPagosPlan, getPagosCliente, postPago, putPago, activar, inactivar
    };
});