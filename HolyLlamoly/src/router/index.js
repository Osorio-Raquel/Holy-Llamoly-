import { createRouter, createWebHistory } from 'vue-router';

import Presentacion from '../components/Presentacion.vue';
import Productos from '../components/Productos.vue';
import NotasDulces from '../components/NotasDulces.vue';
import MakeAnIceCream from '../components/MakeAnIceCream.vue';
import Vota from '../components/Vota.vue';
import HistoriasDeSabores from '../components/HistoriasDeSabores.vue';
import Contactanos from '../components/Contactanos.vue';

const routes = [
  { path: '/', component: Presentacion },
  { path: '/productos', component: Productos },
  { path: '/notas-dulces', component: NotasDulces },
  { path: '/make-an-icecream', component: MakeAnIceCream },
  { path: '/vota', component: Vota },
  { path: '/historias-de-sabores', component: HistoriasDeSabores },
  { path: '/contactanos', component: Contactanos }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
