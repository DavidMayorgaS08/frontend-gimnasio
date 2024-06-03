<template>
  <div class="container">
    <div class="menu">
      <div class="hamburger" @click="menu()">
        <input class="checkbox" type="checkbox" v-model="isChecked"/>
        <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
          <path
            class="lineTop line"
            stroke-linecap="round"
            stroke-width="4"
            stroke="black"
            d="M6 11L44 11"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="4"
            stroke="black"
            d="M6 24H43"
            class="lineMid line"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="4"
            stroke="black"
            d="M6 37H43"
            class="lineBottom line"
          ></path>
        </svg>
      </div>
    </div>
    <div :class="{ cont_menu: true, 'menu-open': menuOpen }">
      <router-link to="/cliente"><button class="btn">Clientes</button></router-link>
      <router-link to="/ingreso"><button class="btn" @click="ingreso()">Ingresos</button></router-link>
      <router-link to="/inventario"><button class="btn" @click="inventario()">Inventarios</button></router-link>
      <router-link to="/mantenimiento"><button class="btn" @click="mantenimiento()">Mantenimientos</button></router-link>
      <router-link to="/maquina"><button class="btn" @click="maquina()">Maquinas</button></router-link>
      <router-link to="/pago"><button class="btn" @click="pago()">Pagos</button></router-link>
      <router-link to="/plan"><button class="btn" @click="plan()">Planes</button></router-link>
      <router-link to="/sede"><button class="btn" @click="sede()">Sedes</button></router-link>
      <router-link to="/usuarios"><button class="btn" @click="usuario()">Usuarios</button></router-link>
      <router-link to="/venta"><button class="btn" @click="venta()">Ventas</button></router-link>
    </div>
    <div class="cont_info">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { useIngresoStore } from "../stores/ingreso.js";
import { useInventarioStore } from "../stores/inventario.js";
import { useMantenimientoStore } from "../stores/mantenimiento.js";
import { useMaquinaStore } from "../stores/maquina.js";
import { usePagoStore } from "../stores/pago.js";
import { usePlanStore } from "../stores/plan.js";
import { useSedeStore } from "../stores/sede.js";
import { useUsuarioStore } from "../stores/usuarios.js";
import { useVentaStore } from "../stores/venta.js";
import { ref } from "vue";

let menuOpen = ref(false);
let isChecked = ref(false);

const menu = () => {
  menuOpen.value = !menuOpen.value;
};

const ingreso = async () => {
  const ingresoStore = useIngresoStore();
  try {
    await ingresoStore.getIngresos();
    isChecked.value = false;
    menu();
  } catch (error) {
    console.error(error);
  }
};

const inventario = async () => {
  const inventarioStore = useInventarioStore();
  try {
    await inventarioStore.getInventarios();
    isChecked.value = false;
    menu();
  } catch (error) {
    console.error(error);
  }
};

const mantenimiento = async () => {
  const mantenimientoStore = useMantenimientoStore();
  try {
    await mantenimientoStore.getMantenimientos();
    isChecked.value = false;
    menu();
  } catch (error) {
    console.error(error);
  }
};

const maquina = async () => {
  const maquinaStore = useMaquinaStore();
  try {
    await maquinaStore.getMaquinas();
    isChecked.value = false;
    menu();
  } catch (error) {
    console.error(error);
  }
};

const pago = async () => {
  const pagoStore = usePagoStore();
  try {
    await pagoStore.getPagos();
    isChecked.value = false;
    menu();
  } catch (error) {
    console.error(error);
  }
};

const plan = async () => {
  const planStore = usePlanStore();
  try {
    await planStore.getPlanes();
    isChecked.value = false;
    menu();
  } catch (error) {
    console.error(error);
  }
};

const sede = async () => {
  const sedeStore = useSedeStore();
  try {
    await sedeStore.getSedes();
    isChecked.value = false;
    menu();
  } catch (error) {
    console.error(error);
  }
};

const usuario = async () => {
  const usuarioStore = useUsuarioStore();
  try {
    await usuarioStore.getUsuarios();
    isChecked.value = false;
    menu();
  } catch (error) {
    console.error(error);
  }
};

const venta = async () => {
  const ventaStore = useVentaStore();
  try {
    await ventaStore.getVentas();
    isChecked.value = false;
    menu();
  } catch (error) {
    console.error(error);
  }
};
</script>
  <style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.menu {
  position: absolute;
  right: 1%;
  top: 10px;
}

.hamburger {
  height: 50px;
  width: 50px;
  transform: 0.2s;
  position: relative;
}
.hamburger .checkbox {
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  z-index: 100;
}
.line {
  transition: 0.5s;
  stroke-width: 6px;
  stroke: #000000;
}
.lineTop {
  stroke-dasharray: 40 40;
  stroke-dashoffset: 25;
}
.lineBottom {
  stroke-dasharray: 40 40;
  stroke-dashoffset: 60;
}
.lineMid {
  stroke-dasharray: 40 40;
}
.hamburger .checkbox:checked + svg .line {
  stroke: crimson;
}
.hamburger .checkbox:checked + svg .lineTop {
  stroke-dashoffset: 0;
  transform-origin: left;
  transform: rotateZ(45deg) translate(-7px, -5px);
}
.hamburger .checkbox:checked + svg .lineMid {
  stroke-dashoffset: 40;
}
.hamburger .checkbox:checked + svg .lineBottom {
  stroke-dashoffset: 0;
  transform-origin: left;
  transform: rotateZ(-45deg) translate(-5px, 5px);
}

.cont_menu {
  position: absolute;
  background-color: #e2e4e8;
  width: 13%;
  height: 100vh;
  left: -100%;
  transition: all 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  overflow-y: auto;
  z-index: 100;
}

.menu-open {
  left: 0%;
}

.cont_menu::-webkit-scrollbar {
  width: 6px;
}

.cont_menu::-webkit-scrollbar-thumb {
  background-color: #979797;
  border-radius: 10px;
}

.cont_menu::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.btn {
  width: 150px;
  padding: 15px 20px;
  border: 2px solid #2c2c2c;
  background-color: #1a1a1a;
  color: #ffffff;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.4s ease;
  outline: none;
  position: relative;
  overflow: hidden;
  font-weight: bold;
  margin-bottom: 20px;
}

.btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  transform: scale(0);
  transition: transform 0.5s ease;
}

.btn:hover::after {
  transform: scale(4);
}

.btn:hover {
  border-color: #666666;
  background: #292929;
}

.container {
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  background-image: linear-gradient(
      90deg,
      transparent 50px,
      #ffb4b8 50px,
      #ffb4b8 52px,
      transparent 52px
    ),
    linear-gradient(#e1e1e1 0.1em, transparent 0.1em);
  background-size: 100% 30px;
}

.cont_info{
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
}
</style>
  