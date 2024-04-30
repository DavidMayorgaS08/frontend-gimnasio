<template>

  <div>

    <div class="q-pa-md">
      <q-table title="Treats" :rows="rows" :columns="columns" row-key="name">

        <template v-slot:body-cell-opciones="props">
          <q-td :props="props">
            <q-btn flat dense round icon="edit" @click="modificarUsuario(props.row)" />
            <q-btn flat dense round icon="delete" @click="eliminarUsuario(props.row)" />
          </q-td>
        </template>
        <template v-slot:body-cell-estado="props">
          <span v-if="props.row.estado == 1" style="display: flex; justify-content: center; margin-top: 12px;">Activo</span>
          <span v-else>Inactivo</span>
        </template>

      </q-table>

    </div>

    <button @click="listarUsuarios()">traer datos</button>
  </div>

</template>

<script setup>

import { ref } from 'vue'
import { useUsuarioStore } from "../stores/usuarios.js"

let useUsuarios = useUsuarioStore()

let rows = ref([])
let columns = ref([
  { name: "nombre", label: "Nombre Usuario", align: "center", field: "nombre" },
  { name: "correo", label: "Nombre Usuario", align: "center", field: "correo" },
  { name: "telefono", label: "Telefono", align: "center", field: "telefono" },
  { name: "estado", label: "Estado", align: "center", field: "estado" },
  { name: "opciones", label: "Opciones", align: "center", field: "opciones" },
])

let r = null

async function listarUsuarios() {
  r = await useUsuarios.getUsuarios()
  rows.value = r
  console.log(r)
}

</script>

<style></style>