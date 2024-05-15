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
        path: '/formularioIngreso',
        name: 'formularioIngreso',
        component: formularioIngreso
    },
    {
        path: '/formularioInventario',
        name: 'formularioInventario',
        component: formularioInventario
    },
    {
        path: '/formularioMantenimiento',
        name: 'formularioMantenimiento',
        component: formularioMantenimiento
    },
    {
        path: '/formularioMaquina',
        name: 'formularioMaquina',
        component: formularioMaquina
    },
    {
        path: '/formularioPago',
        name: 'formularioPago',
        component: formularioPago
    },
    {
        path: '/formularioPlan',
        name: 'formularioPlan',
        component: formularioPlan
    },
    {
        path: '/formularioSede',
        name: 'formularioSede',
        component: formularioSede
    },
    {
        path: '/formularioVenta',
        name: 'formularioVenta',
        component: formularioVenta
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})