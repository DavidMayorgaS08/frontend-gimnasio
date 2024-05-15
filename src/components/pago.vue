<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
      <div class="menu">
        <button class="btn" @click="listarPagos()">Listar pagos</button>
        <button class="btn" @click="listarPorId()">Listar por id</button>
        <button class="btn" @click="activos()">Listar activos</button>
        <button class="btn" @click="inactivos()">Listar inactivos</button>
        <button class="btn" @click="listarPorPlan()">Listar por plan</button>
        <button class="btn" @click="listarPorCliente()">Listar por cliente</button>
        <router-link to="/formularioPago"><button class="btn">Crear pago</button></router-link>
        <button class="btn" @click="activar()">Activar pago</button>
        <button class="btn" @click="inactivar()">Inactivar pago</button>
        <router-link to="/menu"> <button class="btn">Regresar</button></router-link>
      </div>
      <div class="q-pa-md">
        <q-table title="Pagos" :rows="rows" :columns="columns" row-key="name">
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
import { usePagoStore } from "../stores/pago.js";

let usePagos = usePagoStore();

let rows = ref([]);
let columns = ref([
  {
    name: "cliente_id",
    label: "Cliente",
    align: "center",
    field: "cliente_id",
  },
  { name: "plan", label: "Plan", align: "center", field: "plan" },
  { name: "fecha", label: "Fecha", align: "center", field: "fecha" },
  { name: "valor", label: "Valor", align: "center", field: "valor" },
  { name: "estado", label: "Estado", align: "center", field: "estado" },
  { name: "opciones", label: "Opciones", align: "center", field: "opciones" },
]);

let r = null;

let listarPagos = async () => {
  r = await usePagos.getPagos();
  rows.value = r;
  console.log(r);
};

let listarPorId = async () => {
  r = await usePagos.getPago("66287528da950bb275ef6d5c");
  rows.value = [r];
  console.log(r);
};

let activos = async () => {
  r = await usePagos.activos();
  rows.value = r;
  console.log(r);
};

let inactivos = async () => {
  r = await usePagos.inactivos();
  rows.value = r;
  console.log(r);
};

let listarPorPlan = async () => {
  r = await usePagos.getPagosPlan("66286ac3df7e38e581e80726");
  rows.value = [r];
  console.log(r);
};

let listarPorCliente = async () => {
  r = await usePagos.getPagosCliente("66286f1d482f999f219e9f86");
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