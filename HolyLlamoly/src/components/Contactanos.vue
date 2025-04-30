<template>
  <div class="contenido">
    <h2>Contáctanos</h2>
    <p>¿Tienes preguntas, sugerencias o quieres saludarnos?</p>

    <div class="card-contacto">
      <form @submit.prevent="enviarFormulario" class="formulario">
        <h3>Déjanos tu mensaje</h3>
        <div class="campo">
          <label for="nombre">Tu nombre:</label>
          <input type="text" id="nombre" v-model="nombre" placeholder="Tu nombre completo" required />
        </div>
        <div class="campo">
          <label for="email">Tu correo:</label>
          <input type="email" id="email" v-model="email" placeholder="ejemplo@correo.com" required />
        </div>
        <div class="campo">
          <label for="mensaje">Tu mensaje:</label>
          <textarea id="mensaje" v-model="mensaje" placeholder="Escribe tu mensaje..." required></textarea>
        </div>
        <div class="campo">
          <button type="submit" class="boton-enviar">Enviar</button>
        </div>
      </form>

      <!-- Tooltip de ayuda -->
      <div class="tooltip" v-if="mostrarTooltip">
        <p>¡No olvides dejar tu email para que podamos responderte!</p>
      </div>
    </div>

    <p class="tip">* Cualquier duda, estamos para ayudarte</p>
  </div>
</template>

<script>
export default {
  name: 'Contactanos',
  data() {
    return {
      nombre: '',
      email: '',
      mensaje: '',
      mostrarTooltip: false
    };
  },
  methods: {
    enviarFormulario() {
      // Lógica para enviar el formulario
      console.log("Formulario enviado");
      alert("¡Gracias por tu mensaje!");
      // Limpiar campos después del envío
      this.nombre = '';
      this.email = '';
      this.mensaje = '';
    },
  },
  mounted() {
    setTimeout(() => {
      this.mostrarTooltip = true;
    }, 2000); // Aparece el tooltip después de 2 segundos
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caviar+Dreams&display=swap');

.contenido {
  font-family: 'Caviar Dreams', sans-serif;
  text-align: center;
  padding: 30px;
}

.card-contacto {
  background: linear-gradient(145deg, #f0d9ef, #ffe6bb);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  margin-top: 20px;
  width: 350px;
  margin: 0 auto;
}

.card-contacto:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

.formulario h3 {
  font-size: 1.5rem;
  color: #6b2d1a;
  margin-bottom: 15px;
}

.campo {
  margin-bottom: 15px;
}

.campo input, .campo textarea {
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  background: #fff;
  transition: all 0.3s;
}

.campo input:focus, .campo textarea:focus {
  border-color: #fcdce1;
  background-color: #f7f7f7;
}

.campo button {
  background: #ff8a3d;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.campo button:hover {
  background: #e77b2d;
}

.tooltip {
  background-color: #fcdce1;
  padding: 15px;
  border-radius: 10px;
  color: #6b2d1a;
  margin-top: 15px;
  font-size: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease;
  opacity: 0;
  animation: aparecerTooltip 1s forwards;
}

@keyframes aparecerTooltip {
  to {
    opacity: 1;
  }
}

.tip {
  font-size: 0.9rem;
  color: #6b2d1a;
  margin-top: 10px;
  font-style: italic;
}
</style>
