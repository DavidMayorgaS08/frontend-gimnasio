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
        <button @click="listarInventarios()">traer datos</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useInventarioStore } from "../stores/inventario.js"

let useInventarios = useInventarioStore()

let rows = ref([])
let columns = ref([
    {name:"codigo",label:"Código",align:"center",field:"codigo"},
    {name:"descripcion",label:"Descripción",align:"center",field:"descripcion"},
    {name:"valor",label:"Valor",align:"center",field:"valor"},
    {name:"cantidad",label:"Cantidad",align:"center",field:"cantidad"},
    {name:"opciones",label:"Opciones",align:"center",field:"opciones"},
])

let r = null

const listarInventarios = async () => {
    let r = await useInventarios.getInventarios()
    rows.value = r
    console.log(r)
}
</script>