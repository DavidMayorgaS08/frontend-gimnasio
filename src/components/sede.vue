<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
      <div class="menu">
        <button class="btn" @click="listarSedes()">Listar sedes</button>
        <button class="btn" @click="listarPorId()">Listar por id</button>
        <router-link to="/formularioSede"><button class="btn">Crear sede</button></router-link>
        <router-link to="/menu"> <button class="btn">Regresar</button></router-link>
      </div>
      <div class="q-pa-md">
        <q-table title="Sedes" :rows="rows" :columns="columns" row-key="name">
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
      <button @click="listarSedes()">traer datos</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useSedeStore } from "../stores/sede.js";

let useSedes = useSedeStore();

let rows = ref([]);
let columns = ref([
  { name: "nombre", label: "Nombre", align: "center", field: "nombre" },
  {
    name: "direccion",
    label: "Dirección",
    align: "center",
    field: "direccion",
  },
  { name: "codigo", label: "Código", align: "center", field: "codigo" },
  { name: "horario", label: "Horario", align: "center", field: "horario" },
  { name: "ciudad", label: "Ciudad", align: "center", field: "ciudad" },
  { name: "telefono", label: "Teléfono", align: "center", field: "telefono" },
  { name: "opciones", label: "Opciones", align: "center", field: "opciones" },
]);

let r = null;

let listarSedes = async () => {
  r = await useSedes.getSedes();
  rows.value = r;
  console.log(r);
};

let listarPorId = async () => {
  r = await useSedes.getSede("66287052c22b3bf34667855b");
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