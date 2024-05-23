<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
      <div class="menu">
        <buttom class="btn" @click="listarIngesos()">Listar ingresos</buttom>
        <buttom class="btn" @click="abrirId()">Listar por id</buttom>
        <router-link to="/formularioIngreso"
          ><buttom class="btn">Crear ingreso</buttom></router-link
        >
      </div>
      <div class="q-pa-md">
        <q-table
          title="Ingresos"
          :rows="rows"
          :columns="columns"
          row-key="name"
        >
          <template v-slot:body-cell-opciones="props">
            <q-td :props="props">
              <q-btn flat dense round>📝</q-btn>
              <q-btn
                flat
                dense
                round
                icon="delete"
                @click="eliminarUsuario(props.row)"
              />
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
    <div class="cont_id" v-if="cont_id">
      <div class="group">
        <input required="" type="text" class="input" v-model="id" />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Name</label>
      </div>
      <div class="cont_btn">
        <button class="btn" @click="listarPorId()">Enviar</button>
        <button class="btn" @click="cerrarId()">Cerrar</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useIngresoStore } from "../stores/ingreso.js";

let useIngresos = useIngresoStore();

let rows = ref([]);
let columns = ref([
  {
    name: "cliente_id",
    label: "Cliente",
    align: "center",
    field: "cliente_id",
  },
  { name: "fecha", label: "Fecha", align: "center", field: "fecha" },
  { name: "sede", label: "Sede", align: "center", field: "sede" },
  { name: "opciones", label: "Opciones", align: "center", field: "opciones" },
]);

let r = null;

let listarIngesos = async () => {
  r = await useIngresos.getIngresos();
  rows.value = r;
  console.log(r);
};

let cont_id = ref(false);

let abrirId = () => {
  cont_id.value = true;
};

let cerrarId = () => {
  cont_id.value = false;
};

let id = ref("");

let listarPorId = async () => {
  r = await useIngresos.getIngreso(id.value);
  rows.value = [r];
  console.log(r);
  cont_id.value = false;
  id.value = "";
};
</script>
<style scoped>
.app {
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

.info {
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 50px;
}

.menu {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
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

.cont_id {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 20%;
  height: 200px;
  border-radius: 10px;
}

.group {
  margin-bottom: 20px;
}

.cont_btn {
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
}

/* ESTILOS A CAMBIAR */

.group {
  position: relative;
}

.input {
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 200px;
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;
}

.input:focus {
  outline: none;
}

label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.input:focus ~ label,
.input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #5264ae;
}

.bar {
  position: relative;
  display: block;
  width: 200px;
}

.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

.input:focus ~ .bar:before,
.input:focus ~ .bar:after {
  width: 50%;
}

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

.input:focus ~ .highlight {
  animation: inputHighlighter 0.3s ease;
}

@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }

  to {
    width: 0;
    background: transparent;
  }
}
</style>