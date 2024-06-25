<template>
  <div class="app">
    <div class="container"></div>
    <div class="login-box">
      <form>
        <div class="user-box">
          <select required v-model="selectedOptionC">
            <option value="" disabled selected hidden></option>
            <option
              v-for="(cliente, index) in clientes"
              :key="cliente.id"
              :value="index + 1"
            >
              {{ cliente.nombre }}
            </option>
          </select>
          <label>Clientes</label>
        </div>
        <div class="user-box">
          <select required v-model="selectedOptionP">
            <option value="" disabled selected hidden></option>
            <option
              v-for="(plan, index) in planes"
              :key="plan.id"
              :value="index + 1"
            >
              {{ plan.descripcion }}
            </option>
          </select>
          <label>Planes</label>
        </div>
        <div class="user-box">
          <input type="date" name="" required="" v-model="Fecha" />
          <label>Fecha</label>
        </div>
        <div class="user-box">
          <input type="number" name="" required="" v-model="Valor" />
          <label>Valor</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" v-model="Estado" />
          <label>Estado</label>
        </div>
        <center>
          <q-btn @click.prevent="Pago()" :loading="loading">
            Registrar
          <template v-slot:loading>
            <q-spinner color="primary" size="1em" />
          </template>
        </q-btn>
        </center>
      </form>
    </div>
    <div class="cont_btn">
      <router-link to="/pago">
        <button class="btn">Volver</button>
      </router-link>
    </div>
    <div :class="registroExitoso ? 'success1' : 'success'">
      <div class="success__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          viewBox="0 0 24 24"
          height="24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            fill="#393a37"
            d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div class="success__title">Registro Exitoso</div>
      <div class="success__close" @click="cerrar()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          viewBox="0 0 20 20"
          height="20"
        >
          <path
            fill="#393a37"
            d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
          ></path>
        </svg>
      </div>
    </div>
    <div :class="registroFallido ? 'error1' : 'error'">
      <div class="error__icon">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
            fill="#393a37"
          ></path>
        </svg>
      </div>
      <div class="error__title">{{ text }}</div>
      <div class="error__close" @click="cerrar()">
        <svg
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
            fill="#393a37"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
let loading = ref(false);
import { usePagoStore } from "../../stores/pago.js";
import { useClienteStore } from "../../stores/cliente.js";
import { usePlanStore } from "../../stores/plan.js";

let usePagos = usePagoStore();
let useClientes = useClienteStore();
let usePlanes = usePlanStore();

let clientes = ref(useClientes.cliente);
let planes = ref(usePlanes.plan);

let selectedOptionC = ref("");
let selectedOptionP = ref("");
let Fecha = ref("");
let Valor = ref("");
let Estado = ref("");

let registroExitoso = ref(false);
let registroFallido = ref(false);
let text = ref("");

let r = null;

const ocultar = () => {
  setTimeout(() => {
    registroExitoso.value = false;
    registroFallido.value = false;
  }, 3000);
};

async function Pago() {
  try {
    let cliente = () => {
      let selectedCliente = clientes.value[selectedOptionC.value - 1];
      return selectedCliente._id;
    }

    let plan = () => {
      let selectedPlan = planes.value[selectedOptionP.value - 1];
      return selectedPlan._id;
    }

    let cliente_id = cliente();
    let plan_id = plan();

    let pago = {
      cliente_id: cliente_id,
      plan: plan_id,
      fecha: Fecha.value,
      valor: Valor.value,
      estado: Estado.value,
    };

    if(pago.cliente_id === "") {
      text.value = "Seleccione un cliente";
      registroFallido.value = true;
      ocultar();
      return;
    }
    if(pago.plan === "") {
      text.value = "Seleccione un plan";
      registroFallido.value = true;
      ocultar();
      return;
    }
    if(pago.fecha === "") {
      text.value = "Seleccione una fecha";
      registroFallido.value = true;
      ocultar();
      return;
    }
    if(pago.valor === "") {
      text.value = "Ingrese un valor";
      registroFallido.value = true;
      ocultar();
      return;
    }
    if(pago.estado === "") {
      text.value = "Ingrese un estado";
      registroFallido.value = true;
      ocultar();
      return;
    }
    loading.value = true
    r = await usePagos.postPago(pago);
    registroExitoso.value = true;
    loading.value = false
    ocultar();
  } catch (error) {
    text.value = "Error al registrar el pago";
    registroFallido.value = true;
    ocultar();
  }
}

function cerrar() {
  registroExitoso.value = false;
  registroFallido.value = false;
}
</script>
<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
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

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #181414fc;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box .user-box {
  position: relative;
}


.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box input[type="text"], .login-box .user-box input[type="number"] {
  color: #ffffff;
}

.empty {
  color: #181414fc;
}

.login-box .user-box input[type="date"]:focus {
  color: #ffffff;
}

.login-box .user-box input[type="date"]:valid {
  color: #ffffff;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #bdb8b8;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box a:hover {
  background: #e2e4e8;
  color: #000000;
  border-radius: 5px;
  box-shadow: 0 0 5px #e2e4e8, 0 0 15px #e2e4e8, 0 0 35px #e2e4e8,
    0 0 5px #e2e4e8;
}

.login-box a span {
  position: absolute;
  display: block;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(1) {
  bottom: 2px;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #e2e4e8);
  animation: btn-anim1 2s linear infinite;
}

button {
  font-size: 18px;
  color: #e1e1e1;
  font-family: inherit;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
  margin-top: 10px;
}

button:focus,
button:hover {
  color: #fff;
}

button:focus:after,
button:hover:after {
  width: 100%;
  left: 0%;
}

button:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}

.user-box select {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  color: #ffffff;
  appearance: none; /* Ocultar la flecha predeterminada en algunos navegadores */
  cursor: pointer;
  margin-bottom: 25px;
}

.user-box select option {
  background-color: #181414fc;
  color: white;
}

.user-box select:focus ~ label,
.user-box select:valid ~ label {
  top: -20px;
  left: 0;
  color: #bdb8b8;
  font-size: 12px;
}

.cont_btn {
  position: absolute;
  bottom: 10px;
  right: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.btn {
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

.success {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #84d65a;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.success1 {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #84d65a;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.success__icon {
  width: 20px;
  height: 20px;
  transform: translateY(-2px);
  margin-right: 8px;
}

.success__icon path {
  fill: #393a37;
}

.success__title {
  font-weight: 500;
  font-size: 14px;
  color: #393a37;
}

.success__close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
}

.success__close path {
  fill: #393a37;
}

.error {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #fce8db;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.error1 {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #fce8db;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.error__icon {
  width: 20px;
  height: 20px;
  transform: translateY(-2px);
  margin-right: 8px;
}

.error__icon path {
  fill: #ef665b;
}

.error__title {
  font-weight: 500;
  font-size: 14px;
  color: #71192f;
}

.error__close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
}

.error__close path {
  fill: #71192f;
}
</style>