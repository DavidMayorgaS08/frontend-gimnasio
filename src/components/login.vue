<template>
  <div class="app">
    <div class="container"></div>
    <div class="login-box">
      <form>
        <div class="user-box">
          <input type="text" name="" required="" v-model="correo" />
          <label>Correo</label>
        </div>
        <div class="user-box">
          <input
            :type="passwordFieldType"
            name=""
            required=""
            v-model="contraseña"
          />
          <label>Contraseña</label>
        </div>
        <svg class="ojo" @click="togglePasswordVisibility()" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
        <center>
          <button @click.prevent="loginUsuario()">ingresar</button>
        </center>
      </form>
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
import { useUsuarioStore } from "../stores/usuarios.js";
import { useRouter } from "vue-router";
const router = useRouter();

let useUsuarios = useUsuarioStore();

let registroFallido = ref(false);
let text = "Correo o contraseña incorrectos";
const ocultar = () => {
  setTimeout(() => {
    registroFallido.value = false;
  }, 3000);
};

let correo = ref("mejiaplata@gmail.com");
let contraseña = ref("nolefio12");
let passwordFieldType = ref("password");

const togglePasswordVisibility = () => {
  passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password";
};

async function loginUsuario() {
  try {
    let data = {
      correo: correo.value,
      contrasena: contraseña.value,
    };
    let r = await useUsuarios.login(data);
    if (r && r.usuario && r.token) {
      router.push("/menu");
    } else {
      registroFallido.value = true;
      ocultar();
    }
  } catch (error) {
    console.log(error);
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
  background: rgba(24, 20, 20, 0.987);
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
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
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

.ojo {
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  cursor: pointer;
  fill: #c7c7c7;
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