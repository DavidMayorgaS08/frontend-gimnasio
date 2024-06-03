<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
      <div class="menu">
        <button class="btn" @click="listarMantenimientos()">Listar mantenimeintos</button>
        <button class="btn" @click="listarPorId()">Listar por id</button>
        <router-link to="/formularioMantenimiento"><button class="btn">Crear mantenimiento</button></router-link>
      </div>
      <div class="q-pa-md">
        <q-table
          title="Mantenimientos"
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
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useMantenimientoStore } from "../stores/mantenimiento.js";
import { useMaquinaStore } from "../stores/maquina.js";

const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

let useMantenimientos = useMantenimientoStore();
let useMaquinas = useMaquinaStore();

let m = ref([]);

let rows = ref([]);
let columns = ref([
  {
    name: "maquina_id",
    label: "Máquina",
    align: "center",
    field: row => {
      const maquina = m.value.find((maquina) => maquina._id === row.maquina_id);
      return maquina ? maquina.descripcion : "No encontrado";
    },
  },
  {
    name: "fecha_mantenimiento",
    label: "Fecha de mantenimiento",
    align: "center",
    field: row => {
      return new Date(row.fecha_mantenimiento).toISOString().split("T")[0];
    },
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
    field: row => formatNumber(row.precio_mantenimiento),
  },
  { name: "opciones", label: "Opciones", align: "center", field: "opciones" },
]);

let r = null;

const listarMantenimientos = async () => {
  let r = await useMantenimientos.getMantenimientos();
  m.value = await useMaquinas.getMaquinas();
  rows.value = r;
  console.log(m.value);
};

const listarPorId = async () => {
  let r = await useMantenimientos.getMantenimiento("66287337c22b3bf346678568");
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
