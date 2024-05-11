<template>
  <div>
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
        <template v-slot:body-cell-estado="props">
          <span v-if="props.row.estado == 1">Activo</span>
          <span v-else>Inactivo</span>
        </template>
      </q-table>
    </div>

    <button @click="listarMaquinas()">traer datos</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useMaquinaStore } from "../stores/maquina.js"

let useMaquinas = useMaquinaStore()

let rows = ref([])
let columns = ref([
    {name:"codigo", label:"Código", align:"center", field:"codigo"},
    {name:"sede", label:"Sede", align:"center", field:"sede"},
    {name:"descripcion", label:"Descripción", align:"center", field:"descripcion"},
    {name:"fechaIngreso", label:"Fecha de Ingreso", align:"center", field:"fechaIngreso"},
    {name:"fechaUltimoMantenimiento", label:"Fecha de Último Mantenimiento", align:"center", field:"fechaUltimoMantenimiento"},
    {name:"estado", label:"Estado", align:"center", field:"estado"},
    {name:"opciones", label:"Opciones", align:"center", field:"opciones"},
])

let r = null

let listarMaquinas = async () => {
    r = await useMaquinas.getMaquinas()
    rows.value = r
    console.log(r)
}
</script>
<style scoped>
</style>