import { defineStore } from "pinia"
import axios from "axios"
import { ref } from "vue"

export const useUsuarioStore = defineStore("usuario", () => {
    let token = ref("");
    let user = ref({});
    let usuario = ref(null);
    let getUsuarios = async () => {
        try {
            let res = await axios.get("http://localhost:3000/usuario/", {
                headers: {
                    "x-token": token.value
                }
            })
            usuario.value = res.data;
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let getUsuario = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/usuario/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            )
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let activos = async () => {
        try {
            let res = await axios.get("http://localhost:3000/usuario/listar/activos",
            {
                headers: {
                    "x-token": token.value
                }
            }
            )
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let inactivos = async () => {
        try {
            let res = await axios.get("http://localhost:3000/usuario/listar/inactivos",
            {
                headers: {
                    "x-token": token.value
                }
            }
            )
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let getRol = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/usuario/listar/rol/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            )
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let postUsuario = async (r) => {
        console.log(token.value);
        try {
            let req = await axios.post("http://localhost:3000/usuario/", r, {
                headers: {
                    "x-token": token.value,
                }
            })
            console.log(req);
            return req.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let login = async (r) => {
        try {
            let req = await axios.post("http://localhost:3000/usuario/iniciar-sesion", r)
            console.log(req.data.token);
            token.value = req.data.token;
            user.value = req.data.usuario;
            console.log(req.data);
            return req.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let putUsuario = async (id, r) => {
        try {
            let req = await axios.put(`http://localhost:3000/usuario/${id}`, r,
            {
                headers: {
                    "x-token": token.value
                }
            }
            )
            console.log(req);
            return req.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let activar = async (id) => {
        try {
            let req = await axios.put(`http://localhost:3000/usuario/activar/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            )
            console.log(req);
            return req.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    let inactivar = async (id) => {
        try {
            let req = await axios.put(`http://localhost:3000/usuario/inactivar/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            )
            console.log(req);
            return req.data
        } catch (error) {
            console.log(error);
            return error
        }
    };

    return {
        getUsuarios, getUsuario, activos, inactivos, getRol, postUsuario, login, putUsuario, activar, inactivar, user, token, usuario
    }
},
{
    persist: true
}
)
