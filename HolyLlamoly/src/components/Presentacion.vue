<template>
    <v-container fluid class="pa-0">
      <!-- Carrusel Principal -->
      <v-carousel cycle hide-delimiter-background height="400" class="main-carousel">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-img
            :src="slide.image"
            class="carousel-image"
            alt="Imagen del carrusel"
            height="100%"
          ></v-img>
          <div class="carousel-text">
            <h1 class="title">{{ slide.title }}</h1>
            <p class="subtitle">{{ slide.subtitle }}</p>
          </div>
        </v-carousel-item>
      </v-carousel>
  
      <!-- Sección Misión / Visión / Valores con Hover Animado -->
      <v-container class="info-section mt-10" style="background-color: #F0D9EF;">
        <v-row justify="center" align="stretch" class="text-center">
          <v-col
            v-for="(item, i) in missionVision"
            :key="i"
            cols="12"
            md="4"
            class="info-card"
          >
            <div class="info-card-inner">
              <h2 class="section-title">{{ item.title }}</h2>
              <p class="section-text">{{ item.text }}</p>
            </div>
          </v-col>
        </v-row>
  
        <!-- Enlaces a Instagram y TikTok -->
        <v-row justify="center" class="social-links mt-4">
          <v-col cols="auto">
            <a href="https://www.instagram.com/holyllamoly_icecream/?igsh=dGVqeW4ycGxzdWcy#" target="_blank" class="social-icon">
              <i class="fab fa-instagram"></i> Instagram
            </a>
          </v-col>
          <v-col cols="auto">
            <a href="https://www.tiktok.com" target="_blank" class="social-icon">
              <i class="fab fa-tiktok"></i> TikTok
            </a>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Flujos de colores e imágenes de fondo entre secciones -->
      <div class="flow-section" style="background-color: #FFE6BB;">
        <img 
      src="@/components/Images/ologo.jpeg" 
      alt="Logo de Holly Llamolly" 
      style="height: 420px; margin-left: 750px;" 
    />
        <div class="flow-background"></div>
        <h3 class="flow-title">Ven por las fotos, quédate por el sabor!!</h3>
      </div>
  
      <!-- Mapa Interactivo -->
      <v-container class="map-container mt-10" style="background-color: #FCDCE1;">
        <h2 class="map-title">¿Dónde encontrarnos?</h2>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <div id="map" style="height: 300px;"></div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  
  export default {
    name: 'MapComponent',
    data() {
      return {
        slides: [
          {
            title: '¡Holy Llamoly!',
            subtitle: 'Una experiencia de sabor como ninguna otra.',
            image: 'https://i.pinimg.com/736x/b8/d9/ad/b8d9adae0ca18717ad6c10ac8f5ec0f4.jpg',
          },
          {
            title: 'Siente la Magia',
            subtitle: 'Cada helado cuenta una historia diferente.',
            image: 'https://i.pinimg.com/736x/1f/43/96/1f4396368ec4fd827e58ddcc5201686d.jpg',
          },
          {
            title: 'Bienvenid@ a Holly Molly',
            subtitle: 'Donde los sueños se enfrían y se sirven en cono.',
            image: 'https://i.pinimg.com/736x/cd/41/be/cd41be76a5f8ccf8b27687e9ed81ca97.jpg',
          },
        ],
        missionVision: [
          {
            title: 'Nuestra Misión',
            text: 'Crear experiencias memorables a través de helados artesanales temáticos y espacios aesthetic.',
          },
          {
            title: 'Nuestra Visión',
            text: 'Ser la marca de helados temáticos líder en Latinoamérica.',
          },
          {
            title: 'Nuestros Valores',
            text: 'Creatividad, cercanía, diversión y compromiso con la calidad.',
          },
        ],
      };
    },
    setup() {
      onMounted(() => {
        const map = L.map('map').setView([-16.500000, -68.119300], 14); // La Paz, Bolivia
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
  
        L.marker([-16.500000, -68.119300]).addTo(map) // Marcador en La Paz
          .bindPopup('Estamos aquí!')
          .openPopup();
      });
    },
  };
  </script>
  
  <style scoped>
  .main-carousel {
    position: relative;
  }
  
  .carousel-text {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  max-width: 80%;
  text-align: center;
  opacity: 0;
  animation: fadeInUp 1.5s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}


  
  .title {
    font-size: 42px;
    font-family: 'Cafiloser', cursive;
    margin: 0;
  }
  
  .subtitle {
    font-size: 20px;
    font-family: 'Caviar Dreams', sans-serif;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .info-card {
    opacity: 1;
    transition: opacity 0.6s ease-in-out;
  }
  
  .info-card-inner {
    padding: 30px;
    background-color: #FFE6BB;
    border-radius: 25px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
  
  .info-card-inner:hover {
    background-color: #F0D9EF;
    transform: scale(1.05);
  }
  
  .section-title {
    font-family: 'Cafiloser', cursive;
    font-size: 28px;
    color: #6b2d1a;
  }
  
  .section-text {
    font-family: 'Caviar Dreams', sans-serif;
    font-size: 16px;
    color: #633030;
  }
  
  .social-links {
    text-align: center;
  }
  
  .social-icon {
    font-size: 18px;
    font-family: 'Caviar Dreams', sans-serif;
    color: #6b2d1a;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  
  .social-icon:hover {
    color: #f0d9ef;
  }
  
  .flow-section {
    position: relative;
    background-color: #F0D9EF;
    padding: 50px 0;
    margin-top: 40px;
  }
  
  .flow-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://source.unsplash.com/1600x900/?colorful,abstract') no-repeat center center;
    background-size: cover;
    opacity: 0.2;
    z-index: -1;
  }
  
  .flow-title {
    font-family: 'Cafiloser', cursive;
    font-size: 32px;
    text-align: center;
    color: #6b2d1a;
    margin: 0;
  }
  
  .map-container {
    background-color: #FCDCE1;
    padding: 40px 20px;
    border-radius: 30px;
  }
  
  .map-title {
    font-family: 'Cafiloser', cursive;
    font-size: 28px;
    color: #6b2d1a;
    margin-bottom: 20px;
  }
  
  #map {
    width: 100%;
    height: 300px;
  }
  
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  