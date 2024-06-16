<template>
  <div class="container">
    <div class="menu">
      <div class="hamburger" @click="menu()">
        <input class="checkbox" type="checkbox" v-model="isChecked" />
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
      <router-link to="/cliente"
        ><button class="btn">Clientes</button></router-link
      >
      <router-link to="/ingreso"
        ><button class="btn" @click="ingreso()">Ingresos</button></router-link
      >
      <router-link to="/inventario"
        ><button class="btn" @click="inventario()">
          Inventarios
        </button></router-link
      >
      <router-link to="/mantenimiento"
        ><button class="btn" @click="mantenimiento()">
          Mantenimientos
        </button></router-link
      >
      <router-link to="/maquina"
        ><button class="btn" @click="maquina()">Maquinas</button></router-link
      >
      <router-link to="/pago"
        ><button class="btn" @click="pago()">Pagos</button></router-link
      >
      <router-link to="/plan"
        ><button class="btn" @click="plan()">Planes</button></router-link
      >
      <router-link to="/sede"
        ><button class="btn" @click="sede()">Sedes</button></router-link
      >
      <router-link to="/usuarios"
        ><button class="btn" @click="usuario()">Usuarios</button></router-link
      >
      <router-link to="/venta"
        ><button class="btn" @click="venta()">Ventas</button></router-link
      >
    </div>
    <div class="cont_btn_salir">
      <button class="Btn" @click="cerrarSesion()">
        <div class="sign">
          <svg viewBox="0 0 512 512">
            <path
              d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
            ></path>
          </svg>
        </div>
        <div class="text">Cerrar sesión</div>
      </button>
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
  const sedeStore = useSedeStore();
  try {
    await maquinaStore.getMaquinas();
    await sedeStore.getSedes();
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
  const sedeStore = useSedeStore();
  try {
    await usuarioStore.getUsuarios();
    await sedeStore.getSedes();
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

const cerrarSesion = () => {
  localStorage.removeItem("usuario");
  window.location.href = "/";
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

.cont_info {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.cont_btn_salir {
  position: absolute;
  z-index: 100;
  bottom: 10px;
  right: 10px;
}

.Btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: rgb(255, 65, 65);
}

/* plus sign */
.sign {
  width: 100%;
  transition-duration: .3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign svg {
  width: 17px;
}

.sign svg path {
  fill: white;
}
/* text */
.text {
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  transition-duration: .3s;
}
/* hover effect on button width */
.Btn:hover {
  width: 145px;
  border-radius: 40px;
  transition-duration: .3s;
}

.Btn:hover .sign {
  width: 30%;
  transition-duration: .3s;
  padding-left: 20px;
}
/* hover effect button's text */
.Btn:hover .text {
  opacity: 1;
  width: 70%;
  transition-duration: .3s;
  padding-right: 10px;
}
/* button click effect*/
.Btn:active {
  transform: translate(2px ,2px);
}
</style>
  