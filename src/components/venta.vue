<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
      <div class="q-pa-md">
        <q-table title="Treats" :rows="rows" :columns="columns" row-key="name">
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
      <button @click="listarVentas()">traer datos</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useVentaStore } from "../stores/venta.js";

let useVentas = useVentaStore();

let rows = ref([]);
let columns = ref([
  { name: "fecha", label: "Fecha", align: "center", field: "fecha" },
  {
    name: "codigo_producto",
    label: "Código Producto",
    align: "center",
    field: "codigo_producto",
  },
  { name: "valor", label: "Valor", align: "center", field: "valor" },
  { name: "cantidad", label: "Cantidad", align: "center", field: "cantidad" },
]);

let r = null;

let listarVentas = async () => {
  r = await useVentas.getVenta();
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