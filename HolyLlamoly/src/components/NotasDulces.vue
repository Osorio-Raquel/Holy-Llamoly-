<template>
  <div class="blog-container">
    <h2 class="titulo">Blog</h2>
    <p class="subtitulo">Tutoriales, ideas y saberes compartidos por Holly Molly.</p>

    <div v-if="!articuloSeleccionado">
      <div 
        v-for="articulo in blogs" 
        :key="articulo.id" 
        class="card-blog"
        @click="seleccionarArticulo(articulo)"
      >
        <v-img :src="articulo.imagen" height="200px" class="rounded-xl mb-2" cover />
        <h3>{{ articulo.titulo }}</h3>
        <p>{{ articulo.preview }}</p>
        <button class="leer-mas">Leer más</button>
      </div>
    </div>

    <div v-else class="articulo-detallado">
      <v-img :src="articuloSeleccionado.imagen" height="300px" class="rounded-xl mb-4" cover />
      <h2>{{ articuloSeleccionado.titulo }}</h2>
      <p class="contenido-detallado">{{ articuloSeleccionado.contenido }}</p>
      <div class="imagenes-secundarias">
        <v-img
          v-for="(img, i) in articuloSeleccionado.extraImagenes"
          :key="i"
          :src="img"
          height="200"
          cover
          class="rounded-xl my-3"
        />
      </div>
      <button @click="articuloSeleccionado = null" class="volver">← Volver</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const articuloSeleccionado = ref(null);

const blogs = ref([
  {
    id: 1,
    titulo: '¿Cómo se hace el helado desde cero?',
    preview: 'Explora el proceso artesanal desde la mezcla hasta el congelado...',
    contenido: 'Hacer helado artesanal requiere ingredientes de calidad y paciencia. Primero, se crea una base con leche, crema y azúcar. Luego se infusionan sabores como vainilla o frutas, se pasteuriza la mezcla y se enfría. Finalmente, se introduce aire mientras se congela para lograr una textura cremosa.',
    imagen: '/blog/helado-artesanal.jpg',
    extraImagenes: ['/blog/proceso1.jpg', '/blog/proceso2.jpg'],
  },
  {
    id: 2,
    titulo: 'Decoración creativa para helados caseros',
    preview: 'Ideas simples y divertidas para hacer que tu helado luzca increíble...',
    contenido: 'Puedes usar frutas, salsas, trozos de galleta, bombones, flores comestibles y hasta mini conos para decorar. Lo importante es jugar con los colores, texturas y capas para crear combinaciones atractivas y apetitosas.',
    imagen: '/blog/decoracion.jpg',
    extraImagenes: ['/blog/top1.jpg', '/blog/top2.jpg'],
  },
  {
    id: 3,
    titulo: 'La ciencia del helado perfecto',
    preview: 'Entiende por qué la temperatura, el aire y el azúcar importan tanto...',
    contenido: 'El helado perfecto depende del equilibrio entre azúcar, grasa, aire y cristales de hielo. El azúcar reduce el punto de congelación, la grasa da cuerpo, y el aire le da ligereza. Una mala proporción crea helado duro o insípido.',
    imagen: '/blog/ciencia.jpg',
    extraImagenes: ['/blog/estructura.jpg'],
  },
  {
    id: 4,
    titulo: '¿Por qué usamos ingredientes naturales?',
    preview: 'Porque sabemos que lo auténtico sabe mejor y es más saludable...',
    contenido: 'En Holly Molly usamos frutas frescas, leche orgánica y colorantes naturales porque creemos en la calidad y el sabor real. Esto no solo mejora la experiencia del cliente, también apoya a productores locales.',
    imagen: '/blog/natural.jpg',
    extraImagenes: ['/blog/frutas-locales.jpg'],
  },
  {
    id: 5,
    titulo: 'Receta: Banana Split clásico',
    preview: 'Aprende a preparar el postre que nunca pasa de moda...',
    contenido: 'Coloca una banana cortada a lo largo, añade 3 bolas de helado (vainilla, fresa y chocolate), cubre con crema batida, cerezas, maní y salsa de chocolate caliente. ¡Disfrútalo enseguida!',
    imagen: '/blog/banana.jpg',
    extraImagenes: ['/blog/banana2.jpg'],
  },
  {
    id: 6,
    titulo: 'Sabores bolivianos que usamos en nuestros helados',
    preview: 'Ají, tumbo, mocochinchi, api y más en formato helado...',
    contenido: 'Reinterpretamos sabores tradicionales bolivianos en nuestros helados para celebrar nuestra identidad. Cada sabor tiene una historia detrás y conectamos con nuestras raíces mientras refrescamos el paladar.',
    imagen: '/blog/bolivia.jpg',
    extraImagenes: ['/blog/sabores.jpg'],
  },
  {
    id: 7,
    titulo: '¿Es saludable comer helado?',
    preview: 'Como todo, depende de cómo se haga y cuánto se consuma...',
    contenido: 'Un helado artesanal, con ingredientes naturales, sin aditivos ni exceso de azúcar, puede ser una fuente moderada de calcio y energía. La clave está en la moderación y en la calidad de los ingredientes.',
    imagen: '/blog/salud.jpg',
    extraImagenes: ['/blog/salud2.jpg'],
  },
]);

const seleccionarArticulo = (articulo) => {
  articuloSeleccionado.value = articulo;
};
</script>

<style scoped>
.blog-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Caviar Dreams', sans-serif;
}

.titulo {
  font-size: 32px;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #6b2d1a;
}

.subtitulo {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 18px;
  color: #6b2d1a;
}

.card-blog {
  background-color: #fff6f6;
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: transform 0.4s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-blog:hover {
  transform: scale(1.02);
}

.card-blog h3 {
  font-size: 20px;
  color: #a74444;
  margin-top: 0.5rem;
}

.card-blog p {
  font-size: 16px;
  color: #5a3737;
}

.leer-mas,
.volver {
  background-color: #fcdce1;
  border: none;
  border-radius: 12px;
  padding: 8px 16px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: #6b2d1a;
  transition: background-color 0.3s;
}

.leer-mas:hover,
.volver:hover {
  background-color: #ffe6bb;
}

.articulo-detallado {
  padding: 1rem;
  background: #fff0f0;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.articulo-detallado h2 {
  color: #6b2d1a;
  margin-bottom: 1rem;
}

.contenido-detallado {
  font-size: 17px;
  line-height: 1.6;
  color: #5a3737;
}

.imagenes-secundarias {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 1rem;
}
</style>
