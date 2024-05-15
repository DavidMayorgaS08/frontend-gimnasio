<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
      <div class="menu">
        <buttom class="btn" @click="listarIngesos()">Listar ingresos</buttom>
        <buttom class="btn" @click="listarPorId()">Listar por id</buttom>
        <router-link to="/formularioIngreso"><buttom class="btn">Crear ingreso</buttom></router-link>
        <router-link to="/menu"><button class="btn">Regresar</button></router-link>
      </div>
      <div class="q-pa-md">
        <q-table title="Ingresos" :rows="rows" :columns="columns" row-key="name">
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

let listarPorId = async () => {
  r = await useIngresos.getIngreso("66287156c22b3bf34667855f");
  rows.value = [r];
  console.log(r);
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

.info{
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
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
</style>