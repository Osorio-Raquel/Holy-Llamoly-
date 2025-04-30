<template>
  <div class="productos-section">
    <h2 class="section-title">Nuestros Helados</h2>

    <!-- Filtros -->
    <div class="filtros">
      <v-select
        v-model="filtro"
        :items="filtrosDisponibles"
        label="Filtrar por"
        class="filtro-select"
      />
    </div>

    <!-- Lista de productos -->
    <div class="productos-grid">
      <div
        v-for="producto in productosFiltrados"
        :key="producto.id"
        class="producto-card"
      >
        <v-img :src="producto.imagen" height="180px" class="producto-img" />
        <h3 class="producto-nombre">{{ producto.nombre }}</h3>
        <p class="producto-precio">
          {{ producto.precio }} Bs
          <span v-if="producto.oferta" class="oferta-tag">En oferta</span>
        </p>
        <div class="producto-descripcion">
          {{ producto.descripcion }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const filtro = ref(null);

const filtrosDisponibles = [
  'Precio ascendente',
  'Precio descendente',
  'Nombre A-Z',
  'Nombre Z-A',
  'Solo ofertas',
];

// Lista de productos (puedes conectarlo a una API después)
const productos = ref([
  { id: 1, nombre: 'Helado de Chocolate', descripcion: 'Delicioso helado con cacao amargo.', precio: 15, oferta: true, imagen: '/imagenes/chocolate.jpg' },
  { id: 2, nombre: 'Helado de Vainilla', descripcion: 'Suave, cremoso y clásico.', precio: 12, oferta: false, imagen: '/imagenes/vainilla.jpg' },
  { id: 3, nombre: 'Helado de Frutilla', descripcion: 'Refrescante y frutal.', precio: 14, oferta: true, imagen: '/imagenes/frutilla.jpg' },
  { id: 4, nombre: 'Helado de Menta', descripcion: 'Menta fresca con chispas de chocolate.', precio: 13, oferta: false, imagen: '/imagenes/menta.jpg' },
  { id: 5, nombre: 'Helado de Coco', descripcion: 'Exótico sabor tropical.', precio: 16, oferta: true, imagen: '/imagenes/coco.jpg' },
  { id: 6, nombre: 'Helado de Dulce de Leche', descripcion: 'Sabor tradicional argentino.', precio: 17, oferta: false, imagen: '/imagenes/dulce.jpg' },
  { id: 7, nombre: 'Helado de Café', descripcion: 'Intenso y aromático.', precio: 15, oferta: true, imagen: '/imagenes/cafe.jpg' },
  { id: 8, nombre: 'Helado de Mango', descripcion: 'Ideal para días calurosos.', precio: 14, oferta: false, imagen: '/imagenes/mango.jpg' },
  { id: 9, nombre: 'Helado de Limón', descripcion: 'Ácido y refrescante.', precio: 13, oferta: true, imagen: '/imagenes/limon.jpg' },
  { id: 10, nombre: 'Helado de Pistacho', descripcion: 'Suave y con trocitos.', precio: 18, oferta: false, imagen: '/imagenes/pistacho.jpg' },
  { id: 11, nombre: 'Helado de Oreo', descripcion: 'Galletas y crema.', precio: 16, oferta: true, imagen: '/imagenes/oreo.jpg' },
  { id: 12, nombre: 'Helado de Nuez', descripcion: 'Con trozos crocantes.', precio: 17, oferta: false, imagen: '/imagenes/nuez.jpg' },
  { id: 13, nombre: 'Helado de Maracuyá', descripcion: 'Ácido y tropical.', precio: 14, oferta: true, imagen: '/imagenes/maracuya.jpg' },
  { id: 14, nombre: 'Helado de Arándano', descripcion: 'Dulce y antioxidante.', precio: 15, oferta: false, imagen: '/imagenes/arandano.jpg' },
  { id: 15, nombre: 'Helado de Banana Split', descripcion: 'Con salsa de chocolate y fruta.', precio: 19, oferta: true, imagen: '/imagenes/banana.jpg' },
  { id: 16, nombre: 'Helado de Matcha', descripcion: 'Té verde japonés.', precio: 18, oferta: false, imagen: '/imagenes/matcha.jpg' },
  { id: 17, nombre: 'Helado de Avellana', descripcion: 'Sabor europeo clásico.', precio: 16, oferta: true, imagen: '/imagenes/avellana.jpg' },
  { id: 18, nombre: 'Helado de Yogurt', descripcion: 'Ligero y ácido.', precio: 14, oferta: false, imagen: '/imagenes/yogurt.jpg' },
  { id: 19, nombre: 'Helado de Ron con Pasas', descripcion: 'Adulto y delicioso.', precio: 17, oferta: true, imagen: '/imagenes/ron.jpg' },
  { id: 20, nombre: 'Helado de Cheesecake', descripcion: 'Con base de galleta.', precio: 18, oferta: false, imagen: '/imagenes/cheesecake.jpg' },
  { id: 21, nombre: 'Helado de Sandía', descripcion: 'Muy refrescante.', precio: 13, oferta: true, imagen: '/imagenes/sandia.jpg' },
  { id: 22, nombre: 'Helado de Caramelo', descripcion: 'Dulce intenso.', precio: 15, oferta: false, imagen: '/imagenes/caramelo.jpg' },
  { id: 23, nombre: 'Helado de Chicle', descripcion: 'Colorido y divertido.', precio: 14, oferta: true, imagen: '/imagenes/chicle.jpg' },
  { id: 24, nombre: 'Helado de Mora', descripcion: 'Sabor profundo y silvestre.', precio: 15, oferta: false, imagen: '/imagenes/mora.jpg' },
  { id: 25, nombre: 'Helado de Turrón', descripcion: 'Navideño todo el año.', precio: 17, oferta: true, imagen: '/imagenes/turron.jpg' },
  { id: 26, nombre: 'Helado de Té Chai', descripcion: 'Aromas especiados.', precio: 16, oferta: false, imagen: '/imagenes/chai.jpg' },
  { id: 27, nombre: 'Helado de Kiwi', descripcion: 'Ácido y jugoso.', precio: 13, oferta: true, imagen: '/imagenes/kiwi.jpg' },
  { id: 28, nombre: 'Helado de Papaya', descripcion: 'Fruta tropical.', precio: 14, oferta: false, imagen: '/imagenes/papaya.jpg' },
  { id: 29, nombre: 'Helado de Almendra', descripcion: 'Toque crocante.', precio: 15, oferta: true, imagen: '/imagenes/almendra.jpg' },
  { id: 30, nombre: 'Helado de Canela', descripcion: 'Calidez especiada.', precio: 15, oferta: false, imagen: '/imagenes/canela.jpg' },
  { id: 31, nombre: 'Helado de Brownie', descripcion: 'Con trozos reales.', precio: 18, oferta: true, imagen: '/imagenes/brownie.jpg' },
  { id: 32, nombre: 'Helado de Panetón', descripcion: 'Navideño y frutado.', precio: 17, oferta: false, imagen: '/imagenes/paneton.jpg' },
  { id: 33, nombre: 'Helado de Galleta María', descripcion: 'Tradicional y cremoso.', precio: 14, oferta: true, imagen: '/imagenes/maria.jpg' },
  { id: 34, nombre: 'Helado de Pistacho y Frambuesa', descripcion: 'Dulce y ácido.', precio: 19, oferta: false, imagen: '/imagenes/pistacho-frambuesa.jpg' },
  { id: 35, nombre: 'Helado de Naranja', descripcion: 'Cítrico y vibrante.', precio: 13, oferta: true, imagen: '/imagenes/naranja.jpg' },
  { id: 36, nombre: 'Helado de Manzana Verde', descripcion: 'Ácido y fresco.', precio: 14, oferta: false, imagen: '/imagenes/manzana.jpg' },
  { id: 37, nombre: 'Helado de Mazapán', descripcion: 'Dulce artesanal.', precio: 16, oferta: true, imagen: '/imagenes/mazapan.jpg' },
  { id: 38, nombre: 'Helado de Toffee', descripcion: 'Caramelo tostado.', precio: 15, oferta: false, imagen: '/imagenes/toffee.jpg' },
  { id: 39, nombre: 'Helado de Cereza Negra', descripcion: 'Intenso y sabroso.', precio: 17, oferta: true, imagen: '/imagenes/cereza.jpg' },
  { id: 40, nombre: 'Helado de Trigo Kañahua', descripcion: 'Fusiona lo andino con lo dulce.', precio: 18, oferta: false, imagen: '/imagenes/kanahua.jpg' }
])

const productosFiltrados = computed(() => {
  let lista = [...productos.value];
  switch (filtro.value) {
    case 'Precio ascendente':
      return lista.sort((a, b) => a.precio - b.precio);
    case 'Precio descendente':
      return lista.sort((a, b) => b.precio - a.precio);
    case 'Nombre A-Z':
      return lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
    case 'Nombre Z-A':
      return lista.sort((a, b) => b.nombre.localeCompare(a.nombre));
    case 'Solo ofertas':
      return lista.filter((p) => p.oferta);
    default:
      return lista;
  }
});
</script>

<style scoped>
.productos-section {
  padding: 2rem;
  background-color: #fef9f8;
}

.section-title {
  font-family: 'Cafiloser', cursive;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #633030;
}

.filtros {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.filtro-select {
  width: 250px;
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
  justify-items: center;
}

.producto-card {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 1rem;
  transition: transform 0.4s ease-in-out;
  text-align: center;
  cursor: pointer;
  max-width: 280px;
  position: relative;
}

.producto-card:hover {
  transform: scale(1.05);
}

.producto-img {
  border-radius: 10px;
  margin-bottom: 10px;
}

.producto-nombre {
  font-family: 'Cafiloser', cursive;
  color: #6b2d1a;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.producto-precio {
  font-weight: bold;
  color: #633030;
}

.oferta-tag {
  background-color: #ffcaca;
  color: #b60000;
  padding: 2px 8px;
  margin-left: 5px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.producto-descripcion {
  font-size: 0.95rem;
  color: #555;
  margin-top: 0.5rem;
  opacity: 0;
  transition: opacity 0.5s;
  height: 0;
  overflow: hidden;
}

.producto-card:hover .producto-descripcion {
  opacity: 1;
  height: auto;
}
</style>
