<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
      <div class="menu">
        <button class="btn" @click="listarUsuarios()">Listar usuarios</button>
        <button class="btn" @click="abrirId()">Listar por id</button>
        <button class="btn" @click="activos()">Listar activos</button>
        <button class="btn" @click="inactivos()">Listar inactivos</button>
        <button class="btn" @click="ListarPorRol()">Listar por rol</button>
        <router-link to="/registroTrabajadores"><button class="btn">Crear usuario</button></router-link>
        <button class="btn" @click="activar()">Activar Usuario</button>
        <button class="btn" @click="inactivar()">Inactivar usuario</button>
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
    <div class="cont_id" v-if="cont_id">
      <div class="cont_desplegable">
        <select class="select" v-model="selectedOption">
          <option value="">Seleccionar opción</option>
          <option
            v-for="(usuario, index) in usuarios"
            :key="usuario.id"
            :value="index + 1"
          >
            {{ index + 1 }}
          </option>
        </select>
      </div>
      <div class="cont_btn">
        <button class="btn" @click="id()">Enviar</button>
        <button class="btn" @click="cerrarId()">Cerrar</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useUsuarioStore } from "../stores/usuarios.js";

let useUsuarios = useUsuarioStore();

let usuarios = ref([]);

let rows = ref([]);
let columns = ref([
  { name: "nombre", label: "Nombre Usuario", align: "center", field: "nombre" },
  { name: "correo", label: "Correo", align: "center", field: "correo" },
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

let cont_id = ref(false);

let abrirId = () => {
  cont_id.value = true;
  usuarios.value = useUsuarios.usuario;
};

let cerrarId = () => {
  cont_id.value = false;
};

let selectedOption = ref("");

let id = async () => {
  let selectedUsuario = usuarios.value[selectedOption.value - 1];
  r = [await useUsuarios.getUsuario(selectedUsuario._id)];
  rows.value = r;
  cont_id.value = false;
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

.cont_id {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 20%;
  height: 200px;
  border-radius: 10px;
}

.group {
  margin-bottom: 20px;
}

.cont_btn {
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
}

/* ESTILOS A CAMBIAR */

.group {
  position: relative;
}

.input {
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 200px;
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;
}

.input:focus {
  outline: none;
}

label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.input:focus ~ label,
.input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #5264ae;
}

.bar {
  position: relative;
  display: block;
  width: 200px;
}

.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

.input:focus ~ .bar:before,
.input:focus ~ .bar:after {
  width: 50%;
}

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

.input:focus ~ .highlight {
  animation: inputHighlighter 0.3s ease;
}

@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }

  to {
    width: 0;
    background: transparent;
  }
}

.select {
  padding: 10px 35px;
  margin-bottom: 20px;
  border: none;
  border-radius: 30px;
  background-color: #e6e6e6;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 24px 24px;
  padding-right: 40px;
  font-size: 16px;
}
</style>