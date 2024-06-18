import {createRouter, createWebHashHistory} from 'vue-router'
import login from "../components/login.vue";
import menu from "../components/menu.vue";
import cliente from "../components/cliente.vue";
import ingreso from '../components/ingreso.vue';
import inventario from '../components/inventario.vue';
import mantenimiento from '../components/mantenimiento.vue';
import maquina from '../components/maquina.vue';
import pago from '../components/pago.vue';
import plan from '../components/plan.vue';
import sede from '../components/sede.vue';
import Usuarios from "../components/Usuarios.vue";
import venta from "../components/venta.vue";
import registroTrabajadores from "../components/registroTrabajadores.vue";
import registroClientes from '../components/registroClientes.vue';
import formularioIngreso from "../components/formularios/ingreso.vue";
import formularioInventario from "../components/formularios/inventario.vue";
import formularioMantenimiento from "../components/formularios/mantenimiento.vue";
import formularioMaquina from "../components/formularios/maquinas.vue";
import formularioPago from "../components/formularios/pago.vue";
import formularioPlan from "../components/formularios/plan.vue";
import formularioSede from "../components/formularios/sede.vue";
import formularioVenta from "../components/formularios/venta.vue";
import { useUsuarioStore } from "../stores/usuarios.js";

const auth = (to, from, next) => {
    if (checkAuth()) {
        const userUsuario = useUsuarioStore()
        const rol = userUsuario.user.rol
        
        console.log(rol);
        if (!to.meta.rol.includes(rol)) {
            return next({ name: 'login' })
        }
        next()
    } else {
        return next({ name: 'login' })
    }
}

const checkAuth = () => {
    const useUsuario = useUsuarioStore()
    let token = useUsuario.token
    console.log(useUsuario.token);
    if (!token) return false
    return true
};

const routes = [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/menu',
        name: 'menu',
        component: menu,
        children:[
            {
                path: '/cliente',
                name: 'cliente',
                component: cliente,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/ingreso',
                name: 'ingreso',
                component: ingreso,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/inventario',
                name: 'inventario',
                component: inventario,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/mantenimiento',
                name: 'mantenimiento',
                component: mantenimiento,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/maquina',
                name: 'maquina',
                component: maquina,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/pago',
                name: 'pago',
                component: pago,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/plan',
                name: 'plan',
                component: plan,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/sede',
                name: 'sede',
                component: sede,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/usuarios',
                name: 'Usuarios',
                component: Usuarios,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/venta',
                name: 'venta',
                component: venta,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/registroTrabajadores',
                name: 'registroTrabajadores',
                component: registroTrabajadores,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/registroClientes',
                name: 'registroClientes',
                component: registroClientes,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/formularioIngreso',
                name: 'formularioIngreso',
                component: formularioIngreso,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/formularioInventario',
                name: 'formularioInventario',
                component: formularioInventario,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/formularioMantenimiento',
                name: 'formularioMantenimiento',
                component: formularioMantenimiento,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/formularioMaquina',
                name: 'formularioMaquina',
                component: formularioMaquina,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/formularioPago',
                name: 'formularioPago',
                component: formularioPago,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/formularioPlan',
                name: 'formularioPlan',
                component: formularioPlan,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/formularioSede',
                name: 'formularioSede',
                component: formularioSede,
                beforeEnter: auth, meta: { rol: [1] }
            },
            {
                path: '/formularioVenta',
                name: 'formularioVenta',
                component: formularioVenta,
                beforeEnter: auth, meta: { rol: [1] }
            }
        ]
    },
    
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})