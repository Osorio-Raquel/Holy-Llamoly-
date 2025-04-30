<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar flat class="app-bar">
      <!-- Drawer solo en pantallas pequeñas -->
      <v-app-bar-nav-icon class="d-sm-none" @click="drawer = !drawer" />

      <!-- Título -->
      <v-toolbar-title 
        @click="$router.push('/')" 
        class="toolbar-title">
        Holly Llamolly
      </v-toolbar-title>

      <!-- Tabs visibles solo en pantallas medianas y grandes -->
      <div class="d-none d-sm-flex tabs-container">
        <v-tabs v-model="tab" background-color="transparent" color="black" grow class="tab-style">
          <v-tab to="/productos" class="tab-hover">Productos</v-tab>
          <v-tab to="/notas-dulces" class="tab-hover">Notas Dulces</v-tab>
          <v-tab to="/make-an-icecream" class="tab-hover">Make an IceCream</v-tab>
          <v-tab to="/vota" class="tab-hover">Vota</v-tab>
          <v-tab to="/historias-de-sabores" class="tab-hover">Historias de Sabores</v-tab>
          <v-tab to="/contactanos" class="tab-hover">Contáctanos</v-tab>
        </v-tabs>
      </div>
    </v-app-bar>

    <!-- Drawer para móviles -->
    <v-navigation-drawer v-model="drawer" temporary class="mobile-drawer">
      <v-list nav dense>
        <v-list-item to="/productos" @click="drawer = false">Productos</v-list-item>
        <v-list-item to="/notas-dulces" @click="drawer = false">Notas Dulces</v-list-item>
        <v-list-item to="/make-an-icecream" @click="drawer = false">Make an IceCream</v-list-item>
        <v-list-item to="/vota" @click="drawer = false">Vota</v-list-item>
        <v-list-item to="/historias-de-sabores" @click="drawer = false">Historias de Sabores</v-list-item>
        <v-list-item to="/contactanos" @click="drawer = false">Contáctanos</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Footer -->
    <v-footer class="footer" padless>
      <v-col class="text-center py-4 footer-text">
        © {{ new Date().getFullYear() }} Holly Molly - Todos los derechos reservados.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref(null);
const drawer = ref(false);
</script>

<style scoped>
/* App Bar */
.app-bar {
  background: linear-gradient(to right, #F0D9EF, #FCDCE1, #FFE6BB);
  transition: background 1s ease-in-out;
  overflow-x: auto;
  white-space: nowrap;
}

/* Título */
.toolbar-title {
  max-width: 100%;
  overflow: visible;
  white-space: nowrap;
  cursor: pointer;
  font-family: 'Cafiloser', cursive;
  font-size: 28px;
  padding: 0 10px;
  font-weight: 700;
  color: #6b2d1a;
}
.toolbar-title:hover {
  text-decoration: underline;
}

/* Tabs container solo visible en pantallas grandes */
.tabs-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

/* Tab general */
.tab-style {
  font-family: 'Cafiloser', cursive;
  transition: background-color 1s ease-in-out;
}
.tab-hover {
  font-family: 'Cafiloser', cursive;
  font-weight: normal;
  color: #633030;
  transition: color 0.5s ease, transform 0.5s ease, box-shadow 0.5s ease;
  padding: 10px 20px;
  border-radius: 25px;
  text-align: center;
  white-space: nowrap;
}
.tab-hover:hover {
  color: #ee9797;
  transform: scale(1.1);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  background-color: rgba(255, 255, 255, 0.2);
}
.v-tabs .v-tab--active {
  color: #FFE6BB;
  font-weight: bold;
}

/* Contenedor principal */
.v-main {
  margin-top: 3%;
  width: 100vw;
}

/* Drawer */
.mobile-drawer {
  background-color: #FCDCE1;
  font-family: 'Cafiloser', cursive;
}

/* Footer */
.footer {
  background-color: #FCDCE1;
  transition: background-color 1s ease-in-out;
}
.footer-text {
  font-family: 'Cafiloser', cursive;
  font-size: 16px;
}
</style>
