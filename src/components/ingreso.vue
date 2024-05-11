<template>
  <div>
    <div class="q-pa-md">
      <q-table title="Ingreso" :rows="rows" :columns="columns" row-key="name">
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
    <button @click="listarIngesos()">traer datos</button>
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
</script>