<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
      <div class="q-pa-md">
        <q-table
          title="Inventarios"
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
      <button @click="listarMantenimientos()">traer datos</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useMantenimientoStore } from "../stores/mantenimiento.js";

let useMantenimientos = useMantenimientoStore();

let rows = ref([]);
let columns = ref([
  {
    name: "maquina_id",
    label: "Máquina",
    align: "center",
    field: "maquina_id",
  },
  {
    name: "fecha_mantenimiento",
    label: "Fecha de mantenimiento",
    align: "center",
    field: "fecha_mantenimiento",
  },
  {
    name: "descripcion",
    label: "Descripción",
    align: "center",
    field: "descripcion",
  },
  {
    name: "responsable",
    label: "Responsable",
    align: "center",
    field: "responsable",
  },
  {
    name: "precio_mantenimiento",
    label: "Precio de mantenimiento",
    align: "center",
    field: "precio_mantenimiento",
  },
  { name: "opciones", label: "Opciones", align: "center", field: "opciones" },
]);

let r = null;

const listarMantenimientos = async () => {
  let r = await useMantenimientos.getMantenimientos();
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
