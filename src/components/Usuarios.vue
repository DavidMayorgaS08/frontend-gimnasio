<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
      <div class="menu">
        <button class="btn" @click="listarUsuarios()">Listar usuarios</button>
        <button class="btn" @click="listarPorId()">Listar por id</button>
        <button class="btn" @click="activos()">Listar activos</button>
        <button class="btn" @click="inactivos()">Listar inactivos</button>
        <button class="btn" @click="ListarPorRol()">Listar por rol</button>
        <button class="btn" @click="crearUsuario()">Crear usuario</button>
        <button class="btn" @click="activar()">Activar Usuario</button>
        <button class="btn" @click="inactivar()">Inactivar usuario</button>
        <router-link to="/menu">
          <button class="btn">Regresar</button></router-link
        >
      </div>
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

async function listarPorId() {
  r = await useUsuarios.getUsuario("662c45ff31b11b425c76c60b");
  rows.value = [r];
  console.log(r);
}

async function activos() {
  r = await useUsuarios.activos();
  rows.value = r;
  console.log(r);
}

async function inactivos() {
  r = await useUsuarios.inactivos();
  rows.value = r;
  console.log(r);
}

async function ListarPorRol() {
  r = await useUsuarios.getRol(1);
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

.info {
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