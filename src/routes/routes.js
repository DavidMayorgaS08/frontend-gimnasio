import {createRouter, createWebHashHistory} from 'vue-router'
import login from "../components/login.vue";
import menu from "../components/menu.vue";
import registroTrabajadores from "../components/registroTrabajadores.vue";
import registroClientes from '../components/registroClientes.vue';
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

const routes = [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/menu',
        name: 'menu',
        component: menu
    },
    {
        path: '/registroTrabajadores',
        name: 'registroTrabajadores',
        component: registroTrabajadores
    },
    {
        path: '/registroClientes',
        name: 'registroClientes',
        component: registroClientes
    },
    {
        path: '/cliente',
        name: 'cliente',
        component: cliente
    },
    {
        path: '/ingreso',
        name: 'ingreso',
        component: ingreso
    },
    {
        path: '/inventario',
        name: 'inventario',
        component: inventario
    },
    {
        path: '/mantenimiento',
        name: 'mantenimiento',
        component: mantenimiento
    },
    {
        path: '/maquina',
        name: 'maquina',
        component: maquina
    },
    {
        path: '/pago',
        name: 'pago',
        component: pago
    },
    {
        path: '/plan',
        name: 'plan',
        component: plan
    },
    {
        path: '/sede',
        name: 'sede',
        component: sede
    },
    {
        path: '/usuarios',
        name: 'Usuarios',
        component: Usuarios
    },
    {
        path: '/venta',
        name: 'venta',
        component: venta
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})