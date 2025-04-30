<template>
  <div class="contenido">
    <h2 class="section-title">¡Crea tu propio Ice Cream!</h2>
    <p>¡Combina sabores, bases y toppings como desees! Tienes 5 minutos para dibujar.</p>

    <div class="game-container">
      <!-- Lienzo de dibujo -->
      <div class="canvas-container">
        <canvas
          ref="canvas"
          width="800"
          height="600"
          class="canvas"
          @mousedown="startDrawing"
          @mousemove="draw"
          @mouseup="stopDrawing"
          @mouseleave="stopDrawing"
        ></canvas>
      </div>

      <!-- Controles y herramientas -->
      <div v-if="isPlaying" class="controls">
        <div class="tutorial">
          <h3>Tutorial:</h3>
          <p>Usa el pincel para dibujar tu helado, selecciona colores y tamaños, y crea un diseño único. ¡Tienes 5 minutos para completar tu obra!</p>
        </div>
        <div>
          <h3>Selecciona un color:</h3>
          <input type="color" v-model="selectedColor" />
        </div>
        <div>
          <h3>Selecciona el tamaño del pincel:</h3>
          <input type="range" v-model="brushSize" min="1" max="10" />
        </div>
        <div>
          <h3>Tiempo restante: {{ remainingTime }} segundos</h3>
        </div>
        <button @click="stopGame">Detener Juego</button>
        <button @click="downloadImage">Descargar helado</button>
      </div>

      <!-- Mensaje de felicitaciones cuando se detiene el juego o se acaba el tiempo -->
      <div v-else>
        <h3>¡Felicidades! Has creado tu helado.</h3>
        <button @click="startGame">Empezar Juego</button>
      </div>
    </div>

    <!-- Música de fondo -->
    <audio v-if="isPlaying" ref="audio" autoplay loop>
      <source src='@/components/Music/gg.mp3' type="audio/mp3" />
      Tu navegador no soporta audio HTML5.
    </audio>
  </div>
</template>

<script>
import Swal from 'sweetalert2'; // Importamos SweetAlert

export default {
  name: 'MakeAnIceCream',
  data() {
    return {
      ctx: null,
      isDrawing: false,
      selectedColor: '#FF0000', // Color inicial (rojo)
      brushSize: 5, // Tamaño inicial del pincel
      gameStartTime: null,
      remainingTime: 300, // 5 minutos en segundos
      timerInterval: null,
      isPlaying: false,
    };
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.remainingTime = 300;
      this.ctx = this.$refs.canvas.getContext('2d');
      this.gameStartTime = Date.now();
      this.startTimer();
      this.clearCanvas();
    },
    startTimer() {
      this.timerInterval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - this.gameStartTime) / 1000);
        this.remainingTime = 300 - elapsedTime;
        if (this.remainingTime <= 0) {
          clearInterval(this.timerInterval);
          this.isPlaying = false;
          this.showGameOver();
        }
      }, 1000);
    },
    showGameOver() {
      Swal.fire({
        title: '¡Felicidades!',
        text: 'Has creado tu helado.',
        icon: 'success',
        background: '#ffe6f1',
        color: '#9e2a2f',
        confirmButtonText: 'Descargar imagen',
        confirmButtonColor: '#f8b7b8',
        showCancelButton: false,
        padding: '40px',
        customClass: {
          popup: 'sweetalert-popup',
        },
      }).then(() => {
        this.downloadImage();
      });
    },
    startDrawing(event) {
      this.isDrawing = true;
      this.draw(event);
    },
    stopDrawing() {
      this.isDrawing = false;
      this.ctx.beginPath();
    },
    draw(event) {
      if (!this.isDrawing) return;
      const rect = this.$refs.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      this.ctx.lineWidth = this.brushSize;
      this.ctx.lineCap = 'round';
      this.ctx.strokeStyle = this.selectedColor;
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
    },
    clearCanvas() {
      this.ctx.fillStyle = "#fff";
      this.ctx.fillRect(0, 0, 800, 600);
    },
    stopGame() {
      clearInterval(this.timerInterval);
      this.isPlaying = false;
      this.showGameOver();
    },
    downloadImage() {
      const link = document.createElement('a');
      link.download = 'mi_helado.png';
      link.href = this.$refs.canvas.toDataURL('image/png');
      link.click();
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caviar+Dreams&display=swap');

.contenido {
  font-family: 'Caviar Dreams', sans-serif;
  text-align: center;
  margin: 20px;
  align-items: center;
}

.game-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  width: 1400px;
  flex-wrap: wrap;
}

.canvas-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.canvas {
  border: 2px solid #6b2d1a;
  margin-bottom: 20px;
  cursor: crosshair;
  background: linear-gradient(to bottom, #fff, #f0f0f0);
  max-width: 100%;
  max-height: 80vh;
  animation: fadeIn 1s ease-in;
}

.controls {
  flex: 0 0 250px;
  padding: 20px;
  border-left: 2px solid #6b2d1a;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  max-width: 250px;
}

.controls h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

input[type="color"] {
  width: 50px;
  height: 30px;
  border: none;
  cursor: pointer;
}

input[type="range"] {
  width: 100px;
  margin-top: 10px;
}

button {
  background-color: #fcdce1;
  color: #6b2d1a;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ffe6bb;
}

.tutorial {
  font-size: 16px;
  margin-bottom: 20px;
  animation: slideUp 1s ease-out;
}

audio {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 200px;
}

.section-title {
  font-family: 'Cafiloser', cursive;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #633030;
  animation: fadeInText 1.5s ease-in;
}

.sweetalert-popup {
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(255, 100, 150, 0.5);
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes fadeInText {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideUp {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
</style>
