<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
      <div class="menu">
        <button class="btn" @click="listarMaquinas()">Listar maquinas</button>
        <button class="btn" @click="listarPorId()">Listar por id</button>
        <button class="btn" @click="listarActivas()">Listar activas</button>
        <button class="btn" @click="listarInactivas()">Listar Inactivas</button>
        <router-link to="/formularioMaquina"><button class="btn">Crear maquina</button></router-link>
        <button class="btn" @click="activar()">Activar maquina</button>
        <button class="btn" @click="inactivar()">Inactivar maquina</button>
      </div>
      <div class="q-pa-md">
        <q-table
          title="Maquinas"
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
          <template v-slot:body-cell-estado="props">
            <span v-if="props.row.estado == 1">Activo</span>
            <span v-else>Inactivo</span>
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useMaquinaStore } from "../stores/maquina.js";

let useMaquinas = useMaquinaStore();

let rows = ref([]);
let columns = ref([
  { name: "codigo", label: "Código", align: "center", field: "codigo" },
  { name: "sede", label: "Sede", align: "center", field: "sede" },
  {
    name: "descripcion",
    label: "Descripción",
    align: "center",
    field: "descripcion",
  },
  {
    name: "fechaIngreso",
    label: "Fecha de Ingreso",
    align: "center",
    field: "fechaIngreso",
  },
  {
    name: "fechaUltimoMantenimiento",
    label: "Fecha de Último Mantenimiento",
    align: "center",
    field: "fechaUltimoMantenimiento",
  },
  { name: "estado", label: "Estado", align: "center", field: "estado" },
  { name: "opciones", label: "Opciones", align: "center", field: "opciones" },
]);

let r = null;

let listarMaquinas = async () => {
  r = await useMaquinas.getMaquinas();
  rows.value = r;
  console.log(r);
};

let listarPorId = async () => {
  r = await useMaquinas.getMaquina("6628727fc22b3bf346678565");
  rows.value = [r];
  console.log(r);
};

let listarActivas = async () => {
  r = await useMaquinas.activos();
  rows.value = r;
  console.log(r);
};

let listarInactivas = async () => {
  r = await useMaquinas.inactivos();
  rows.value = r;
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
</style>