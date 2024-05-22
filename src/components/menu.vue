<template>
  <div class="container">
    <div class="menu">
      <div class="hamburger" @click="menu()">
        <input class="checkbox" type="checkbox" v-model="isChecked"/>
        <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
          <path
            class="lineTop line"
            stroke-linecap="round"
            stroke-width="4"
            stroke="black"
            d="M6 11L44 11"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="4"
            stroke="black"
            d="M6 24H43"
            class="lineMid line"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="4"
            stroke="black"
            d="M6 37H43"
            class="lineBottom line"
          ></path>
        </svg>
      </div>
    </div>
    <div :class="{ cont_menu: true, 'menu-open': menuOpen }">
      <router-link to="/cliente"><button>Clientes</button></router-link>
      <router-link to="/ingreso"><button>Ingresos</button></router-link>
      <router-link to="/inventario"><button>Inventarios</button></router-link>
      <router-link to="/mantenimiento"><button>Mantenimientos</button></router-link>
      <router-link to="/maquina"><button>Maquinas</button></router-link>
      <router-link to="/pago"><button>Pagos</button></router-link>
      <router-link to="/plan"><button>Planes</button></router-link>
      <router-link to="/sede"><button>Sedes</button></router-link>
      <router-link to="/usuarios"><button>Usuarios</button></router-link>
      <router-link to="/venta"><button>Ventas</button></router-link>
    </div>
    <div class="cont_info">
      <router-view />
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      isChecked: false,
      menuOpen: false,
    };
  },
  mounted() {
    this.isChecked = false;
  },
  methods: {
    menu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
  <style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.menu {
  position: absolute;
  right: 1%;
  top: 10px;
}

.hamburger {
  height: 50px;
  width: 50px;
  transform: 0.2s;
  position: relative;
}
.hamburger .checkbox {
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  z-index: 100;
}
.line {
  transition: 0.5s;
  stroke-width: 6px;
  stroke: #000000;
}
.lineTop {
  stroke-dasharray: 40 40;
  stroke-dashoffset: 25;
}
.lineBottom {
  stroke-dasharray: 40 40;
  stroke-dashoffset: 60;
}
.lineMid {
  stroke-dasharray: 40 40;
}
.hamburger .checkbox:checked + svg .line {
  stroke: crimson;
}
.hamburger .checkbox:checked + svg .lineTop {
  stroke-dashoffset: 0;
  transform-origin: left;
  transform: rotateZ(45deg) translate(-7px, -5px);
}
.hamburger .checkbox:checked + svg .lineMid {
  stroke-dashoffset: 40;
}
.hamburger .checkbox:checked + svg .lineBottom {
  stroke-dashoffset: 0;
  transform-origin: left;
  transform: rotateZ(-45deg) translate(-5px, 5px);
}

.cont_menu {
  position: absolute;
  background-color: #e2e4e8;
  width: 13%;
  height: 100vh;
  left: -100%;
  transition: all 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  overflow-y: auto;
  z-index: 100;
}

.menu-open {
  left: 0%;
}

.cont_menu::-webkit-scrollbar {
  width: 6px;
}

.cont_menu::-webkit-scrollbar-thumb {
  background-color: #979797;
  border-radius: 10px;
}

.cont_menu::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

button {
  background-color: #eee;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  width: 10em;
  border-radius: 1rem;
  color: lightcoral;
  box-shadow: 0 0.4rem #dfd9d9;
  cursor: pointer;
  margin-bottom: 25px;
}

button:active {
  color: white;
  box-shadow: 0 0.2rem #dfd9d9;
  transform: translateY(0.2rem);
}

button:hover:not(:disabled) {
  background: lightcoral;
  color: white;
  text-shadow: 0 0.1rem #bcb4b4;
}

button:disabled {
  cursor: auto;
  color: grey;
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

.cont_info{
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
}
</style>
  