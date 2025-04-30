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
      <!-- Usamos v-html para renderizar el contenido como HTML -->
      <p class="contenido-detallado" v-html="articuloSeleccionado.contenido"></p>
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
  "id": 1,
  "titulo": "¿Cómo se hace el helado creativo desde cero?",
  "preview": "Explora el proceso artesanal desde la mezcla hasta el congelado y aprende a crear helados deliciosos con ingredientes naturales.",
  "contenido": `
    <p><strong>Hacer helado artesanal</strong> es un proceso meticuloso y delicioso que va mucho más allá de simplemente mezclar ingredientes. Se trata de una experiencia creativa que comienza con la selección de los mejores productos y termina con la creación de un postre cremoso y delicioso.</p>
    
    <p><strong>1. Preparación de los ingredientes:</strong> El primer paso para hacer helado artesanal es reunir los ingredientes adecuados. Los más comunes son la leche, la crema y el azúcar. Sin embargo, los heladeros creativos van más allá de estos ingredientes básicos. Puedes añadir frutas frescas, hierbas, especias o incluso chocolates y nueces para darle un toque único a tu helado.</p>

    <p><strong>2. Creación de la base:</strong> La base del helado se hace combinando la leche y la crema. La proporción entre estos dos ingredientes depende del tipo de helado que desees hacer. Por ejemplo, para un helado más cremoso, se utiliza una mayor cantidad de crema. La mezcla debe calentarse hasta que esté bien combinada, sin llegar a hervir, y luego se debe dejar enfriar.</p>

    <p><strong>3. Pasteurización:</strong> Uno de los pasos más importantes en la elaboración del helado es la pasteurización. Este proceso implica calentar la mezcla a una temperatura controlada para eliminar bacterias y obtener una base segura para consumir. En la mayoría de los casos, la mezcla debe ser pasteurizada a una temperatura de alrededor de 85°C (185°F) durante unos minutos.</p>

    <p><strong>4. Infusión de sabores:</strong> Una de las partes más divertidas de hacer helado creativo es la infusión de sabores. Puedes agregar sabores naturales como vainilla, frutas (fresas, moras, mangos), especias como canela o incluso hierbas como menta o albahaca. Este paso permite que el helado tenga un sabor auténtico y lleno de personalidad.</p>

    <p><strong>5. Congelación y aireación:</strong> El proceso de congelación es fundamental para lograr la textura perfecta. La mezcla se debe enfriar rápidamente y se debe introducir aire durante la congelación para obtener una textura cremosa y ligera. Si tienes una máquina para hacer helado, este proceso será mucho más fácil, ya que las máquinas de helado constantemente baten la mezcla mientras la enfrían, lo que ayuda a crear una textura suave.</p>

    <p><strong>6. El toque final:</strong> Después de la congelación, puedes darle el toque final a tu helado creativo agregando ingredientes adicionales como trozos de frutas, chocolate o nueces. Algunos heladeros también optan por mezclar salsas como el caramelo o el chocolate caliente para crear un efecto visual atractivo y un sabor aún más delicioso.</p>

    <p><strong>7. Servir y disfrutar:</strong> Una vez que el helado esté completamente congelado y listo para servir, es hora de disfrutarlo. Puedes presentarlo en conos, copas o incluso como parte de una receta más elaborada, como un sundae o una banana split. ¡El helado artesanal siempre es mejor cuando se sirve con creatividad!</p>

    <h3>Etapas del proceso de hacer helado creativo:</h3>
    <ul>
      <li><strong>Preparación de la base</strong>: Combinación de leche, crema y azúcar.</li>
      <li><strong>Pasteurización</strong>: Calentamiento para eliminar bacterias.</li>
      <li><strong>Infusión de sabores</strong>: Agregar ingredientes como frutas y especias.</li>
      <li><strong>Congelación y aireación</strong>: Batido y enfriamiento para una textura cremosa.</li>
      <li><strong>Toque final</strong>: Agregar ingredientes adicionales para mejorar el sabor.</li>
    </ul>

    <h3>Ingredientes recomendados para helados creativos:</h3>
    <ul>
      <li><strong>Frutas frescas</strong>: Fresas, mangos, moras, piña.</li>
      <li><strong>Especias</strong>: Canela, cardamomo, jengibre.</li>
      <li><strong>Hierbas</strong>: Menta, albahaca, romero.</li>
      <li><strong>Chocolate</strong>: Chocolate oscuro, blanco o con leche.</li>
      <li><strong>Nueces y frutos secos</strong>: Almendras, avellanas, nuez de macadamia.</li>
    </ul>

    <p><strong>Imagen del proceso:</strong></p>
    <img src="https://i.pinimg.com/736x/5e/64/dd/5e64ddd9023edfc793c0304b4e51da5b.jpg" alt="Congelación del helado" class="content-image">

    <p><strong>Consejos para hacer helado creativo en casa:</strong></p>
    <ol>
      <li>Usa ingredientes de alta calidad, especialmente si usas frutas frescas.</li>
      <li>No tengas miedo de experimentar con combinaciones de sabores inesperadas.</li>
      <li>Si no tienes una máquina de helado, puedes hacer el proceso a mano, pero asegúrate de batir la mezcla mientras se congela para evitar cristales de hielo.</li>
      <li>Deja suficiente espacio en el congelador para que el helado se congela uniformemente.</li>
    </ol>

    <p>Con estos pasos y consejos, podrás crear helados artesanales y creativos que sorprenderán a tus amigos y familiares. ¡Disfruta de esta deliciosa aventura culinaria y comparte tu helado con todos!</p>
  `,
  "imagen": "https://i.pinimg.com/736x/a0/a8/cb/a0a8cbde8c168d5fe88fec66858409e1.jpg",
  "extraImagenes": [
    "https://i.pinimg.com/736x/e0/10/02/e01002213e38a84426c40f0da952a488.jpg",
    "https://i.pinimg.com/736x/8b/69/37/8b6937151f2f219684da62651d5cd6d9.jpg"
  ]
},
{
    "id": 2,
    "titulo": "¡Un día épico en una heladería temática en La Paz con tus amigos!",
    "preview": "Disfruta de un día lleno de diversión, helados creativos y experiencias únicas en las heladerías temáticas más increíbles de La Paz.",
    "contenido": `
      <p><strong>¿Estás buscando el plan perfecto para un día con amigos en La Paz?</strong> ¡Nada mejor que disfrutar de los sabores más innovadores y disfrutar de una experiencia única en una heladería temática! Desde helados extravagantes hasta decoraciones que te dejarán boquiabierto, estas heladerías son el lugar ideal para un día épico. 🍦✨</p>
      
      <p><strong>La heladería perfecta para tu grupo de amigos</strong></p>
      <p>Imagínate entrando en una heladería que te transporte a un universo completamente nuevo, con una decoración que desafía tu imaginación y un menú lleno de sabores inesperados. ¡Es el lugar perfecto para disfrutar con tus amigos! Desde helados con combinaciones exóticas hasta postres que parecen obras de arte, tus papilas gustativas no sabrán lo que les espera. 🎨🍓</p>

      <p><strong>Prueba los sabores más locos con tus amigos</strong></p>
      <p>La diversión no termina en la decoración; ¡el reto está en los sabores! Desde helados de sabores clásicos hasta combinaciones únicas como helado de ají o tumbo, hay algo para todos los gustos. ¿Quién no querría desafiar a sus amigos a probar un helado de piña con ají de piedra? 🔥🍍</p>

      <p><strong>Una experiencia visual y fotográfica</strong></p>
      <p>Las heladerías temáticas de La Paz no solo sirven helados deliciosos, sino que son un espectáculo visual. Cada rincón está diseñado para crear la atmósfera perfecta para sacar fotos increíbles con tus amigos. ¡Tu Instagram nunca había estado tan lleno de fotos deliciosas! 📸🍦</p>

      <p><strong>Explora la ciudad después del helado</strong></p>
      <p>Y lo mejor de todo, después de disfrutar de una explosión de sabores, ¿por qué no continuar con un recorrido por los lugares más emblemáticos de La Paz? Puedes dar un paseo por la Plaza Murillo o perderte en las coloridas calles del centro histórico. ¡Un plan perfecto de principio a fin! 🏙️🍨</p>

      <h3>¿Dónde encontrar las mejores heladerías temáticas en La Paz?</h3>
      <p>Las heladerías temáticas están surgiendo por toda la ciudad, cada una con su estilo único y sus sabores innovadores. Aquí tienes algunas de las mejores:</p>
      <ul>
        <li><strong>Heladería X:</strong> Una mezcla perfecta de arte y sabor, ideal para los amantes de los postres exóticos.</li>
        <li><strong>Heladería Y:</strong> Diseño retro con sabores que van desde lo tradicional hasta lo más experimental.</li>
        <li><strong>Heladería Z:</strong> Un paraíso para los fanáticos del cine, con helados que te harán sentir en una película.</li>
      </ul>
    `,
    "imagen": "https://i.pinimg.com/736x/1b/36/fb/1b36fbcec70413d410930fb339865c20.jpg",
    "extraImagenes": [
      "https://i.pinimg.com/736x/50/d2/3d/50d23d6afd77607cc42cac954ffc7249.jpg",
      "https://i.pinimg.com/736x/38/c7/9f/38c79f2f7fbb6d152a6dfba43e03ec80.jpg"
    ]
  },
  {
  "id": 3,
  "titulo": "Cómo Elegir una Heladería Instagrammable: ¡Haz que tu Foto Sea la Estrella!",
  "preview": "Descubre qué hace que una heladería sea perfecta para tus fotos en Instagram y aprende cómo capturar la esencia de estas maravillas fotográficas.",
  "contenido": `
    <p><strong>La tendencia de las heladerías instagrammables</strong> ha llegado para quedarse, y no es solo una moda pasajera. Hoy en día, las heladerías no solo se enfocan en ofrecer sabores deliciosos, sino también en crear ambientes visualmente impresionantes que hagan que cada bocado se vea tan delicioso como sabe. Si eres un amante de las fotos perfectas para tus redes sociales, ¡las heladerías instagrammables en La Paz tienen lo que necesitas! 📸✨</p>
    
    <h3>¿Qué hace que una heladería sea "instagrammable"?</h3>
    <p>Las heladerías instagrammables no se limitan solo a su sabor. Son lugares diseñados para captar la atención visualmente y ofrecer a los clientes una experiencia que no solo es deliciosa, sino también visualmente atractiva. Aquí te dejamos algunos elementos que hacen que una heladería sea perfecta para tus fotos en Instagram:</p>
    
    <ul>
      <li><strong>Diseño único y creativo:</strong> Las heladerías con una decoración creativa y colorida son ideales para tus fotos. Piensa en paredes pintadas de colores brillantes, elementos artísticos que marcan la diferencia y detalles que te hagan sentir parte de un ambiente fantástico.</li>
      <li><strong>Presentación del helado:</strong> Un helado que es tan atractivo visualmente como sabroso es crucial. Las heladerías más instagrammables a menudo sirven helados con toppings especiales, capas de colores vibrantes, conos decorados con salsas y decoraciones visualmente impactantes.</li>
      <li><strong>Ambiente único:</strong> La atmósfera también juega un papel importante. Desde decoraciones temáticas hasta iluminación adecuada, todo en el lugar debe estar pensado para hacer que tu experiencia fotográfica sea perfecta.</li>
      <li><strong>La estética de los colores:</strong> Los tonos pastel o las combinaciones de colores contrastantes crean fotos espectaculares. Las heladerías que usan estos colores en su decoración y en sus productos hacen que cada foto se vea como una obra de arte.</li>
    </ul>
    
    <h3>¿Cómo Capturar la Foto Perfecta de tu Helado?</h3>
    <p>Ahora que ya sabes qué hace a una heladería instagrammable, es hora de aprender cómo capturar la foto perfecta. Aquí te dejamos algunos consejos para asegurarte de que tus publicaciones sean las más atractivas de tu feed:</p>
    
    <ol>
      <li><strong>El ángulo lo es todo:</strong> Juega con diferentes ángulos para obtener la mejor toma. Prueba un plano cenital (desde arriba) para capturar todos los detalles de tu helado o un plano lateral para capturar la textura del helado.</li>
      <li><strong>Iluminación natural:</strong> La luz natural es tu mejor amiga cuando se trata de fotos. Busca un lugar con luz suave para evitar sombras duras. Si puedes, sitúa tu helado cerca de una ventana para aprovechar la luz natural.</li>
      <li><strong>El fondo cuenta:</strong> Asegúrate de que el fondo no distraiga la atención de tu helado. Busca fondos neutros o sencillos que hagan que tu helado destaque, o utiliza la decoración del local para darle un toque único a tus fotos.</li>
      <li><strong>El momento perfecto:</strong> No te apresures. Tómate tu tiempo para capturar la foto perfecta. Deja que tu helado repose un poco si ha comenzado a derretirse, o captura el momento justo antes de que se derrita para ese toque fresco.</li>
    </ol>

    <h3>Heladerías Instagrammables en La Paz: ¿Dónde Encontrarlas?</h3>
    <p>En La Paz, varias heladerías temáticas están diseñadas para ofrecer una experiencia visual y culinaria única. Algunas de las más destacadas son:</p>
    <ul>
      <li><strong>Heladería "X":</strong> Una heladería de estilo moderno con una decoración minimalista pero impactante. Sus helados son servidos con toppings coloridos que harán que tus fotos brillen.</li>
      <li><strong>Heladería "Y":</strong> La fusión de la cultura local con el diseño contemporáneo. Sus helados de frutas exóticas no solo son sabrosos, ¡sino también ideales para tu feed!</li>
      <li><strong>Heladería "Z":</strong> Este lugar tiene una atmósfera vintage con detalles retro y helados servidos en conos decorados con caramelo. Perfecto para quienes aman las fotos de estilo retro.</li>
    </ul>

    <h3>¿Por qué se ha hecho tan popular el concepto de las heladerías instagrammables?</h3>
    <p>El concepto de las heladerías instagrammables ha ganado popularidad porque las personas buscan experiencias más allá del sabor. Queremos lugares donde podamos disfrutar de algo delicioso y, al mismo tiempo, capturar ese momento para compartirlo en nuestras redes sociales. Las heladerías que logran combinar estos dos aspectos ofrecen una experiencia memorable que las convierte en puntos de referencia para quienes buscan lo mejor de la gastronomía y la estética.</p>

    <p>Así que, si eres un fanático de las fotos bonitas y los helados deliciosos, ¡una heladería instagrammable es el lugar perfecto para ti! 🍦📸</p>
  `,
  "imagen": "https://i.pinimg.com/736x/8b/7b/00/8b7b00f8e1571af2de4548aad64ddade.jpg",
  "extraImagenes": [
    "https://i.pinimg.com/736x/5f/8d/00/5f8d00349caa5e240c35fb4261925946.jpg",
    "https://i.pinimg.com/736x/91/8f/df/918fdfbe58aa5280eb5bd9fec2af363b.jpg"
  ]
}

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
  font-family: 'Cafiloser', cursive;
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
