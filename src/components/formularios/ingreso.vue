<template>
  <div class="app">
    <div class="container"></div>
    <div class="login-box">
      <form>
        <div class="user-box">
          <input type="text" name="" required="" v-model="Cliente_id" />
          <label>Id del cliente</label>
        </div>
        <div class="user-box">
          <input type="date" name="" required="" v-model="fecha" />
          <label>Fecha</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" v-model="sede" />
          <label>Sede</label>
        </div>
        <center>
          <button @click.prevent="Ingreso()">Registrar</button>
        </center>
      </form>
    </div>
    <div class="cont_btn">
      <router-link to="/ingreso">
        <button class="btn">Volver</button>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useIngresoStore} from "../../stores/ingreso.js";
let fechaD = ref(false);

let useIngresos = useIngresoStore();

let Cliente_id = ref("66286f1d482f999f219e9f86");
let fecha = ref("");
let sede = ref("66287052c22b3bf34667855b");

let r = null;

async function Ingreso() {
  try {
    let ingreso = {
      cliente_id: Cliente_id.value,
      fecha: fecha.value,
      sede: sede.value,
    };

    r = await useIngresos.postIngreso(ingreso);
  } catch (error) {
    error;
  }
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

.login-box .user-box input[type="text"] {
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
</style>