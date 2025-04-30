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
  { id: 1, nombre: 'Helado de Chocolate', descripcion: 'Delicioso helado con cacao amargo.', precio: 15, oferta: true, imagen: 'https://i.pinimg.com/736x/e7/a1/75/e7a175b464411f5fa5fb6de5874ad256.jpg' },
  { id: 2, nombre: 'Helado de Vainilla', descripcion: 'Suave, cremoso y clásico.', precio: 12, oferta: false, imagen: 'https://i.pinimg.com/736x/a0/bd/52/a0bd524886a0331e2f73a74c45f84eb0.jpg' },
  { id: 3, nombre: 'Helado de Frutilla', descripcion: 'Refrescante y frutal.', precio: 14, oferta: true, imagen: 'https://i.pinimg.com/736x/ba/92/e7/ba92e75c88137b2cd5642b9e2785f963.jpg' },
  { id: 4, nombre: 'Helado de Menta', descripcion: 'Menta fresca con chispas de chocolate.', precio: 13, oferta: false, imagen: 'https://i.pinimg.com/736x/c8/72/c6/c872c689a24c5826b55131b9fe39e5c3.jpg' },
  { id: 5, nombre: 'Helado de Coco', descripcion: 'Exótico sabor tropical.', precio: 16, oferta: true, imagen: 'https://i.pinimg.com/736x/5f/a1/c7/5fa1c7732e59c946dc87403ab68922a8.jpg' },
  { id: 6, nombre: 'Helado de Dulce de Leche', descripcion: 'Sabor tradicional argentino.', precio: 17, oferta: true, imagen: 'https://i.pinimg.com/736x/9e/12/7d/9e127d5f7412d8941380fe08874f8bef.jpg' },
  { id: 7, nombre: 'Helado de Café', descripcion: 'Intenso y aromático.', precio: 15, oferta: true, imagen: 'https://i.pinimg.com/736x/e0/92/87/e09287842f0ac10186835d1fa45b5dcb.jpg' },
  { id: 8, nombre: 'Helado de Mango', descripcion: 'Ideal para días calurosos.', precio: 14, oferta: false, imagen: 'https://i.pinimg.com/736x/ad/39/21/ad39219cd2d3ee69f31722ffeb431d5d.jpg' },
  { id: 9, nombre: 'Helado de Limón', descripcion: 'Ácido y refrescante.', precio: 13, oferta: true, imagen: 'https://i.pinimg.com/736x/c4/23/df/c423dfc2f7d7e25b46e2508238f494fb.jpg' },
  { id: 10, nombre: 'Helado de Pistacho', descripcion: 'Suave y con trocitos.', precio: 18, oferta: false, imagen: 'https://i.pinimg.com/736x/28/f9/70/28f9709b9ac72fd12093b3ebd9d050ee.jpg' },
  { id: 11, nombre: 'Helado de Oreo', descripcion: 'Galletas y crema.', precio: 16, oferta: true, imagen: 'https://i.pinimg.com/736x/e1/5f/06/e15f064bca612e1e02e5ded0f7c144d3.jpg' },
  { id: 12, nombre: 'Helado de Nuez', descripcion: 'Con trozos crocantes.', precio: 17, oferta: false, imagen: 'https://i.pinimg.com/736x/9e/83/48/9e83483531dfeba44c2a2e93d34ae549.jpg' },
  { id: 13, nombre: 'Helado de Maracuyá', descripcion: 'Ácido y tropical.', precio: 14, oferta: true, imagen: 'https://i.pinimg.com/736x/52/cb/33/52cb3394221c6f0552c2588b1c1589ee.jpg' },
  { id: 14, nombre: 'Helado de Arándano', descripcion: 'Dulce y antioxidante.', precio: 15, oferta: false, imagen: 'https://i.pinimg.com/736x/d3/ef/4a/d3ef4a6db13775955be79d830aa87238.jpg' },
  { id: 15, nombre: 'Helado de Banana Split', descripcion: 'Con salsa de chocolate y fruta.', precio: 19, oferta: true, imagen: 'https://i.pinimg.com/736x/57/b1/5a/57b15a07ba3ca87f406385d3da5fe285.jpg' },
  { id: 16, nombre: 'Helado de Matcha', descripcion: 'Té verde japonés.', precio: 18, oferta: false, imagen: 'https://i.pinimg.com/736x/18/7e/2c/187e2c365484105616d6dfa54a89117e.jpg' },
  { id: 17, nombre: 'Helado de Avellana', descripcion: 'Sabor europeo clásico.', precio: 16, oferta: true, imagen: 'https://i.pinimg.com/736x/d3/4a/1c/d34a1c62ad5ac72eafcf71b171f9623d.jpg' },
  { id: 18, nombre: 'Helado de Yogurt', descripcion: 'Ligero y ácido.', precio: 14, oferta: false, imagen: 'https://i.pinimg.com/736x/fd/b8/4a/fdb84a7d6b7dbf8d30d7530c2572313c.jpg' },
  { id: 19, nombre: 'Helado de Ron con Pasas', descripcion: 'Adulto y delicioso.', precio: 17, oferta: true, imagen: 'https://i.pinimg.com/736x/45/5d/26/455d264ea68528d353782306375c67db.jpg' },
  { id: 20, nombre: 'Helado de Cheesecake', descripcion: 'Con base de galleta.', precio: 18, oferta: false, imagen: 'https://i.pinimg.com/736x/e6/90/41/e69041e34fbf0a16d06a80cec13aea61.jpg' },
  { id: 21, nombre: 'Helado de Sandía', descripcion: 'Muy refrescante.', precio: 13, oferta: true, imagen: 'https://i.pinimg.com/736x/d8/d7/ef/d8d7efb278000e340d207f593161a5fc.jpg' },
  { id: 22, nombre: 'Helado de Caramelo', descripcion: 'Dulce intenso.', precio: 15, oferta: false, imagen: 'https://i.pinimg.com/736x/91/f3/a6/91f3a6db41daefc9704d160e4d447013.jpg' },
  { id: 23, nombre: 'Helado de Chicle', descripcion: 'Colorido y divertido.', precio: 14, oferta: true, imagen: 'https://i.pinimg.com/736x/36/0a/04/360a04b2b07c356c9b284f97cb698356.jpg' },
  { id: 24, nombre: 'Helado de Mora', descripcion: 'Sabor profundo y silvestre.', precio: 15, oferta: false, imagen: 'https://i.pinimg.com/736x/c1/11/aa/c111aaf0756c49bae1e00d7a100edce3.jpg' },
  { id: 25, nombre: 'Helado de Turrón', descripcion: 'Navideño todo el año.', precio: 17, oferta: true, imagen: 'https://i.pinimg.com/736x/df/ca/55/dfca55ecc38f99a3f029216df1191f3a.jpg' },
  { id: 26, nombre: 'Helado de Té Chai', descripcion: 'Aromas especiados.', precio: 16, oferta: false, imagen: 'https://i.pinimg.com/736x/df/b9/e8/dfb9e8beceb2b18512d1032687b3ff88.jpg' },
  { id: 27, nombre: 'Helado de Kiwi', descripcion: 'Ácido y jugoso.', precio: 13, oferta: true, imagen: 'https://i.pinimg.com/736x/d9/c8/dd/d9c8dd0ef4398e706ecca3a7708a3346.jpg' },
  { id: 28, nombre: 'Helado de Papaya', descripcion: 'Fruta tropical.', precio: 14, oferta: false, imagen: 'https://i.pinimg.com/736x/31/ed/b6/31edb66b26aa8023a138a2760543c62a.jpg' },
  { id: 29, nombre: 'Helado de Almendra', descripcion: 'Toque crocante.', precio: 15, oferta: true, imagen: 'https://i.pinimg.com/736x/8e/5f/31/8e5f3166fc0e658bf4b8c8f735699221.jpg' },
  { id: 30, nombre: 'Helado de Canela', descripcion: 'Calidez especiada.', precio: 15, oferta: false, imagen: 'https://i.pinimg.com/736x/75/6e/fe/756efe31079e4dc597e10531ab7a4db4.jpg' },
  { id: 31, nombre: 'Helado de Brownie', descripcion: 'Con trozos reales.', precio: 18, oferta: true, imagen: 'https://i.pinimg.com/736x/27/bb/cc/27bbccc3986b49e62f4338f32372a062.jpg' },
  { id: 32, nombre: 'Helado de Panetón', descripcion: 'Navideño y frutado.', precio: 17, oferta: false, imagen: 'https://i.pinimg.com/736x/ee/70/c0/ee70c0f6889ff701b2b2dadee28e02de.jpg' },
  { id: 33, nombre: 'Helado de Galleta María', descripcion: 'Tradicional y cremoso.', precio: 14, oferta: true, imagen: 'https://i.pinimg.com/736x/f3/82/84/f3828465f908f2f6c68861a3afa706ec.jpg' },
  { id: 34, nombre: 'Helado de Pistacho y Frambuesa', descripcion: 'Dulce y ácido.', precio: 19, oferta: false, imagen: 'https://i.pinimg.com/736x/35/55/a3/3555a3323006c676ae55d4dbde959ad0.jpg' },
  { id: 35, nombre: 'Helado de Naranja', descripcion: 'Cítrico y vibrante.', precio: 13, oferta: true, imagen: 'https://i.pinimg.com/736x/ae/1e/ae/ae1eae06feffadd75b8f8b7053cac2a3.jpg' },
  { id: 36, nombre: 'Helado de Manzana Verde', descripcion: 'Ácido y fresco.', precio: 14, oferta: false, imagen: 'https://i.pinimg.com/736x/26/97/b9/2697b93b1dc11cf2e59b76bdeb9f6920.jpg' },
  { id: 37, nombre: 'Helado de Mazapán', descripcion: 'Dulce artesanal.', precio: 16, oferta: true, imagen: 'https://i.pinimg.com/736x/1d/b4/44/1db444676fa96948b2c135e70ce17199.jpg' },
  { id: 38, nombre: 'Helado de Toffee', descripcion: 'Caramelo tostado.', precio: 15, oferta: false, imagen: 'https://i.pinimg.com/736x/bd/74/08/bd7408af6b25b09b65046f3942fdeed0.jpg' },
  { id: 39, nombre: 'Helado de Cereza Negra', descripcion: 'Intenso y sabroso.', precio: 17, oferta: true, imagen: 'https://i.pinimg.com/736x/01/c7/32/01c73280a76b6296a74071399130ded0.jpg' },
  { id: 40, nombre: 'Helado de Trigo Kañahua', descripcion: 'Fusiona lo andino con lo dulce.', precio: 18, oferta: false, imagen: 'https://i.pinimg.com/736x/14/08/11/140811db1dfe9e641941d0a8d9e609bf.jpg' }
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
