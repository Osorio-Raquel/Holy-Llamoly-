<template>
  <div class="contenido">
    <h2>📖 Historias de Sabores</h2>
    <p>Cada sabor tiene una historia mágica. ¡Descúbrela!</p>

    <div class="testimonios">
      <div
        class="tarjeta animada"
        v-for="(testimonio, index) in testimonios"
        :key="index"
        :style="{ animationDelay: `${index * 0.3}s` }"
      >
        <div class="tarjeta-front">
          <img :src="testimonio.foto" alt="foto del testigo" />
          <h3>{{ testimonio.nombre }}</h3>
        </div>
        <div class="tarjeta-back">
          <p class="comentario">"{{ testimonio.mensaje }}"</p>
          <p class="sabor">🍨 Favorito: <strong>{{ testimonio.sabor }}</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoriasSabores',
  data() {
    return {
      testimonios: [
        {
          nombre: 'Luna Vlog',
          mensaje: 'Probé el helado de jazmín y me transportó a mi infancia en el jardín de mi abuela.',
          foto: 'https://randomuser.me/api/portraits/women/68.jpg',
          sabor: 'Jazmín encantado',
        },
        {
          nombre: 'Chef Nico',
          mensaje: 'El toque de sal en el caramelo fue un giro inesperado ¡y delicioso!',
          foto: 'https://randomuser.me/api/portraits/men/45.jpg',
          sabor: 'Caramelo rebelde',
        },
        {
          nombre: 'La Guía Rosa',
          mensaje: 'Es más que un postre, es una experiencia estética y emocional.',
          foto: 'https://randomuser.me/api/portraits/women/22.jpg',
          sabor: 'Rosa de los vientos',
        }
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caviar+Dreams&display=swap');

.contenido {
  font-family: 'Caviar Dreams', sans-serif;
  text-align: center;
  padding: 20px;
}

.testimonios {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 40px;
}

.tarjeta {
  perspective: 1500px;
  width: 250px;
  height: 380px;
  margin: 20px;
}

.tarjeta-front,
.tarjeta-back {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 18px;
}

.tarjeta-front {
  background: #fcdce1;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tarjeta-back {
  background: #6b2d1a;
  color: white;
  transform: rotateY(180deg);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
}

.tarjeta:hover .tarjeta-front {
  transform: rotateY(-180deg);
}

.tarjeta:hover .tarjeta-back {
  transform: rotateY(0);
}

.tarjeta img {
  border-radius: 50%;
  width: 90px;
  height: 90px;
  object-fit: cover;
  border: 3px solid #ffe6bb;
}

.comentario {
  font-style: italic;
  font-size: 1rem;
  margin-bottom: 10px;
}

.sabor {
  font-weight: bold;
  color: #ffe6bb;
  font-size: 1.1rem;
  margin-top: 10px;
}

/* ANIMACIÓN FUERTE DE ENTRADA */
.animada {
  animation: aparecer 1s ease-out forwards;
  opacity: 0;
  transform: translateY(100px) scale(0.9);
}

@keyframes aparecer {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
