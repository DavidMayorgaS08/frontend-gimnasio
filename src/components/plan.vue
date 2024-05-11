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

    <button @click="listarPlanes()">traer datos</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { usePlanStore } from "../stores/plan.js"

let usePlanes = usePlanStore()

let rows = ref([])
let columns = ref([
    {name:"codigo", label:"Código", align:"center", field:"codigo"},
    {name:"descripcion", label:"Descripción", align:"center", field:"descripcion"},
    {name:"valor", label:"Valor", align:"center", field:"valor"},
    {name:"dias", label:"Días", align:"center", field:"dias"},
    {name:"estado", label:"Estado", align:"center", field:"estado"},
    {name:"opciones", label:"Opciones", align:"center", field:"opciones"},
])

let r = null

let listarPlanes = async () => {
    r = await usePlanes.getPlan()
    rows.value = r
    console.log(r)
}
</script>
<style scoped>
</style>