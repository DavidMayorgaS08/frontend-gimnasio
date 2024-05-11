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
      </q-table>
    </div>

    <button @click="listarVentas()">traer datos</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useVentaStore } from "../stores/venta.js"

let useVentas = useVentaStore()

let rows = ref([])
let columns = ref([
    {name:"fecha", label:"Fecha", align:"center", field:"fecha"},
    {name:"codigo_producto", label:"Código Producto", align:"center", field:"codigo_producto"},
    {name:"valor", label:"Valor", align:"center", field:"valor"},
    {name:"cantidad", label:"Cantidad", align:"center", field:"cantidad"},
])

let r = null

let listarVentas = async () => {
    r = await useVentas.getVenta()
    rows.value = r
    console.log(r)
}
</script>
<style scoped>
</style>