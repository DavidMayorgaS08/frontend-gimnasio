<template>
    <div>
        <div class="q-pa-md">
        <q-table title="Inventario" :rows="rows" :columns="columns" row-key="name">
            <template v-slot:body-cell-opciones="props">
            <q-td :props="props">
                <q-btn flat dense round>📝</q-btn>
                <q-btn flat dense round icon="delete" @click="eliminarUsuario(props.row)" />
            </q-td>
            </template>
        </q-table>
        </div>
        <button @click="listarMantenimientos()">traer datos</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useMantenimientoStore } from "../stores/mantenimiento.js"

let useMantenimientos = useMantenimientoStore()

let rows = ref([])
let columns = ref([
    {name:"maquina_id", label:"Máquina", align:"center", field:"maquina_id"},
    {name:"fecha_mantenimiento", label:"Fecha de mantenimiento", align:"center", field:"fecha_mantenimiento"},
    {name:"descripcion", label:"Descripción", align:"center", field:"descripcion"},
    {name:"responsable", label:"Responsable", align:"center", field:"responsable"},
    {name:"precio_mantenimiento", label:"Precio de mantenimiento", align:"center", field:"precio_mantenimiento"},
    {name:"opciones", label:"Opciones", align:"center", field:"opciones"},
])

let r = null

const listarMantenimientos = async () => {
    let r = await useMantenimientos.getMantenimientos()
    rows.value = r
    console.log(r)
}
</script>
<style scoped>
</style>
