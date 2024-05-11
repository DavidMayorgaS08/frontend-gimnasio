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

    <button @click="listarPagos()">traer datos</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { usePagoStore } from "../stores/pago.js"

let usePagos = usePagoStore()

let rows = ref([])
let columns = ref([
    {name:"cliente_id", label:"Cliente", align:"center", field:"cliente_id"},
    {name:"plan", label:"Plan", align:"center", field:"plan"},
    {name:"fecha", label:"Fecha", align:"center", field:"fecha"},
    {name:"valor", label:"Valor", align:"center", field:"valor"},
    {name:"estado", label:"Estado", align:"center", field:"estado"},
    {name:"opciones", label:"Opciones", align:"center", field:"opciones"},
])

let r = null

let listarPagos = async () => {
    r = await usePagos.getPago()
    rows.value = r
    console.log(r)
}
</script>
<style scoped>
</style>