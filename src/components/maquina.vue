<template>
  <div class="app">
    <div class="container"></div>
    <div class="info">
      <div class="menu">
        <button class="btn" @click="listarMaquinas()">Listar maquinas</button>
        <button class="btn" @click="abrirId()">Listar por id</button>
        <button class="btn" @click="listarActivas()">Listar activas</button>
        <button class="btn" @click="listarInactivas()">Listar Inactivas</button>
        <router-link to="/formularioMaquina"
          ><button class="btn" @click="maquina()">
            Crear maquina
          </button></router-link
        >
        <button class="btn" @click="cambiarEstados()">Cambiar estado</button>
        <button class="btn" @click="terminar()" v-if="terminado">Terminado</button>
      </div>
      <div class="q-pa-md">
        <q-table
          title="Maquinas"
          :rows="rows"
          :columns="columns"
          row-key="name"
        >
          <template v-slot:body-cell-opciones="props">
            <q-td :props="props">
              <q-btn flat dense round v-if="editar">
                <button
                  class="button"
                  :id="'button-' + props.row.id"
                  @click="ver(props.row)"
                >
                  <svg
                    class="svg-icon"
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#ffffff" stroke-linecap="round" stroke-width="2">
                      <path d="m20 20h-16"></path>
                      <path
                        clip-rule="evenodd"
                        d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                  <span class="lable"></span>
                </button>
              </q-btn>
              <q-btn flat dense round v-if="estados">
                <div class="cont_btns">
                  <button
                  v-if="props.row.estado == 0"
                    class="btn_activo"
                    :id="'button-' + props.row.id"
                    @click="activar(props.row)"
                  >
                    <img class="img_activo" src="/src/img/garrapata.png" alt="activo" />
                  </button>
                  <button
                    v-else
                    class="btn_inactivo"
                    :id="'button-' + props.row.id"
                    @click="inactivar(props.row)"
                  >
                    <img class="img_inactivo" src="/src/img/equis.png" alt="inactivo" />
                  </button>
                </div>
              </q-btn>
            </q-td>
          </template>
          <template v-slot:body-cell-estado="props">
            <span v-if="props.row.estado == 1">Activo</span>
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
            v-for="(maquina, index) in maquinas"
            :key="maquina.id"
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
import { useMaquinaStore } from "../stores/maquina.js";
import { useSedeStore } from "../stores/sede.js";
import { useRouter } from "vue-router";
const router = useRouter();

let useMaquinas = useMaquinaStore();
let useSedes = useSedeStore();

let maquinas = ref([]);
let r = null;
let s = ref([]);

let rows = ref([]);
let columns = ref([
  { name: "codigo", label: "Código", align: "center", field: "codigo" },
  {
    name: "sede",
    label: "Sede",
    align: "center",
    field: (row) => {
      const sede = s.value.find((sede) => sede._id === row.sede);
      return sede ? sede.nombre : "Sede no encontrada";
    },
  },
  {
    name: "descripcion",
    label: "Descripción",
    align: "center",
    field: "descripcion",
  },
  {
    name: "fechaIngreso",
    label: "Fecha de Ingreso",
    align: "center",
    field: (row) => row.fechaIngreso.split("T")[0],
  },
  {
    name: "fechaUltimoMantenimiento",
    label: "Fecha de Último Mantenimiento",
    align: "center",
    field: (row) => row.fechaUltimoMantenimiento.split("T")[0],
  },
  { name: "estado", label: "Estado", align: "center", field: "estado" },
  { name: "opciones", label: "Opciones", align: "center", field: "opciones" },
]);

let listarMaquinas = async () => {
  r = await useMaquinas.getMaquinas();
  s.value = await useSedes.getSedes();
  rows.value = r;
  console.log(r);
};

let cont_id = ref(false);

let abrirId = () => {
  cont_id.value = true;
  maquinas.value = useMaquinas.maquina;
};

let cerrarId = () => {
  cont_id.value = false;
};

let selectedOption = ref("");

let id = async () => {
  let selectedMaquina = maquinas.value[selectedOption.value - 1];
  r = [await useMaquinas.getMaquina(selectedMaquina._id)];
  s.value = await useSedes.getSedes();
  rows.value = r;
  cont_id.value = false;
};

let listarActivas = async () => {
  r = await useMaquinas.activos();
  rows.value = r;
  console.log(r);
};

let listarInactivas = async () => {
  r = await useMaquinas.inactivos();
  rows.value = r;
  console.log(r);
};

let maquina = async () => {
  await useSedes.getSedes();
  router.push("/formularioMaquina");
};

let editar = ref(true);
let estados = ref(false);
let terminado = ref(false);

let ver = (row) => {
  console.log(row);
};

let cambiarEstados = () => {
  editar.value = false;
  estados.value = true;
  terminado.value = true;
};

let activar = async (row) => {
  await useMaquinas.activarMaquina(row._id);
  r = await useMaquinas.getMaquinas();
  rows.value = r;
};

let inactivar = async (row) => {
  await useMaquinas.inactivarMaquina(row._id);
  r = await useMaquinas.getMaquinas();
  rows.value = r;
};

let terminar = () => {
  editar.value = true;
  estados.value = false;
  terminado.value = false;
};
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

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 2px;
  height: 40px;
  width: 85px;
  border: none;
  background: #1a1a1a;
  border-radius: 20px;
  cursor: pointer;
}

.lable {
  line-height: 22px;
  font-size: 19px;
  color: #000000;
  font-family: sans-serif;
  letter-spacing: 1px;
}

.button:hover {
  background: #141414bb;
}

.button:hover .svg-icon {
  animation: lr 1s linear infinite;
}

@keyframes lr {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-1px);
  }

  75% {
    transform: translateX(1px);
  }

  100% {
    transform: translateX(0);
  }
}

.cont_btns {
  display: flex;
}

.btn_activo, .btn_inactivo {
  padding: 8px 10px;
  border: none;
  background: #1a1a1a;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn_activo:hover, .btn_inactivo:hover {
  background: #141414bb;
}

.img_activo, .img_inactivo {
  width: 30px;
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

.cont_btn {
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
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