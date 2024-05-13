import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useInventarioStore = defineStore("inventario", () => {
    let getInventarios = async () => {
        try {
            let res = await axios.get("http://localhost:3000/inventario");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getInventario = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/inventario/${id}`);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let postInventario = async (data) => {
        try {
            let res = await axios.post("http://localhost:3000/inventario", data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let putInventario = async (id, data) => {
        try {
            let res = await axios.put(`http://localhost:3000/inventario/${id}`, data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    return {
        getInventarios, getInventario, postInventario, putInventario
    };
});