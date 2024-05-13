<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
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
      <button @click="listarIngesos()">traer datos</button>
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
</style>