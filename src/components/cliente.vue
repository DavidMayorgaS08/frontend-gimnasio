<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
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
            <span v-if="props.row.estado == 1">Activo</span>
            <span v-else>Inactivo</span>
          </template>
        </q-table>
      </div>
      <button class="btn" @click="listarClientes()">traer datos</button>
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
}
</style>