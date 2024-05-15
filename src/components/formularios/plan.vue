<template>
    <div class="app">
        <div class="container"></div>
        <div class="login-box">
            <form>
                <div class="user-box">
                    <input type="number" name="" required="" v-model="Codigo">
                    <label>Codigo</label>
                </div>
                <div class="user-box">
                    <input type="text" name="" required="" v-model="Descripcion">
                    <label>Descripcion</label>
                </div>
                <div class="user-box">
                    <input type="date" name="" required="" v-model="Valor">
                    <label>Valor</label>
                </div>
                <div class="user-box">
                    <input type="date" name="" required="" v-model="Dias">
                    <label>Dias</label>
                </div>
                <div class="user-box">
                    <input type="text" name="" required="" v-model="Estado">
                    <label>Estado</label>
                </div>
                <center>
                    <button @click.prevent="Ingreso()">
                        Registrar
                    </button>
                </center>
            </form>
        </div>
    </div>
</template>
<script setup>
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
    box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
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
    transition: .5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
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
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px
}

.login-box a:hover {
    background: #e2e4e8;
    color: #000000;
    border-radius: 5px;
    box-shadow: 0 0 5px #e2e4e8,
        0 0 15px #e2e4e8,
        0 0 35px #e2e4e8,
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
</style>