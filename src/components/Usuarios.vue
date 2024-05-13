<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
      <div class="q-pa-md">
        <q-table
          title="Usuarios"
          :rows="rows"
          :columns="columns"
          row-key="name"
        >
          <template v-slot:body-cell-opciones="props">
            <q-td :props="props">
              <q-btn
                flat
                dense
                round
                icon="edit"
                @click="modificarUsuario(props.row)"
              />
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
            <span
              v-if="props.row.estado == 1"
              style="display: flex; justify-content: center; margin-top: 12px"
              >Activo</span
            >
            <span v-else>Inactivo</span>
          </template>
        </q-table>
      </div>
      <button @click="listarUsuarios()">traer datos</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useUsuarioStore } from "../stores/usuarios.js";

let useUsuarios = useUsuarioStore();

let rows = ref([]);
let columns = ref([
  { name: "nombre", label: "Nombre Usuario", align: "center", field: "nombre" },
  { name: "correo", label: "Nombre Usuario", align: "center", field: "correo" },
  { name: "telefono", label: "Telefono", align: "center", field: "telefono" },
  { name: "estado", label: "Estado", align: "center", field: "estado" },
  { name: "opciones", label: "Opciones", align: "center", field: "opciones" },
]);

let r = null;

async function listarUsuarios() {
  r = await useUsuarios.getUsuarios();
  rows.value = r;
  console.log(r);
}
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