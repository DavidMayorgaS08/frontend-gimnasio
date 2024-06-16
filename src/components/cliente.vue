<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
      <div class="menu">
        <button class="btn" @click="listarClientes()">Listar clientes</button>
        <button class="btn" @click="listarPorId()">Listar por id</button>
        <button class="btn" @click="lsitarActivos()">Listar activos</button>
        <button class="btn" @click="listarInactivos()">Listar inactivos</button>
        <button class="btn" @click="listarPorPlan()">Listar por plan</button>
        <button class="btn" @click="listarTotal()">Listar total</button>
        <router-link to="/registroClientes"><button class="btn">Crear cliente</button></router-link>
        <button class="btn" @click="activar()">Activar cliente</button>
        <button class="btn" @click="inactivar()">Inactivar cliente</button>
      </div>
      <div class="q-pa-md">
        <q-table
          title="Clientes"
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
            <span v-if="props.row.estado == 1" style="display: flex; justify-content: center; margin-top: 12px">Activo</span>
            <span v-else style="display: flex; justify-content: center; margin-top: 12px">Inactivo</span>
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useClienteStore } from "../stores/cliente.js";

let useClientes = useClienteStore();

let rows = ref([]);
let columns = ref([
  { name: "nombre", label: "Nombre Cliente", align: "center", field: "nombre" },
  {
    name: "fechaNacimiento",
    label: "Fecha de Nacimiento",
    align: "center",
    field: "fechaNacimiento",
  },
  { name: "edad", label: "Edad", align: "center", field: "edad" },
  {
    name: "fechaIngreso",
    label: "Fecha de Ingreso",
    align: "center",
    field: "fechaIngreso",
  },
  {
    name: "documento",
    label: "Documento",
    align: "center",
    field: "documento",
  },
  {
    name: "direccion",
    label: "Dirección",
    align: "center",
    field: "direccion",
  },
  { name: "telefono", label: "Teléfono", align: "center", field: "telefono" },
  {
    name: "limitaciones",
    label: "Limitaciones",
    align: "center",
    field: "limitaciones",
  },
  { name: "estado", label: "Estado", align: "center", field: "estado" },
  { name: "plan", label: "Plan", align: "center", field: "plan" },
  {
    name: "seguimiento",
    label: "Seguimiento",
    align: "center",
    field: "seguimiento",
  },
  { name: "opciones", label: "Opciones", align: "center", field: "opciones" },
]);

let r = null;

let listarClientes = async () => {
  r = await useClientes.getClientes();
  rows.value = r;
  console.log(r);
};

let listarPorId = async () => {
  r = await useClientes.getCliente("66286f1d482f999f219e9f86");
  rows.value = [r];
  console.log(r);
};

let lsitarActivos = async () => {
  r = await useClientes.getActivos();
  rows.value = r;
  console.log(r);
};

let listarInactivos = async () => {
  r = await useClientes.getInactivos();
  rows.value = r;
  console.log(r);
};

let listarPorPlan = async () => {
  r = await useClientes.getPorPlan("66286ac3df7e38e581e80726");
  rows.value = [r];
  console.log(r);
};

let listarTotal = async () => {
  r = await useClientes.getTotal();
  // rows.value = r;
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
</style>