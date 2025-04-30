<template>
    <v-container fluid class="pa-0">
      <!-- Carrusel Principal -->
      <v-carousel
        cycle
        hide-delimiter-background
        height="400"
        class="main-carousel"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          :src="slide.image"
        >
          <div class="carousel-text">
            <h1 class="title">{{ slide.title }}</h1>
            <p class="subtitle">{{ slide.subtitle }}</p>
          </div>
        </v-carousel-item>
      </v-carousel>
  
      <!-- Sección Misión / Visión / Valores con Hover Animado -->
      <v-container class="info-section mt-10">
        <v-row justify="center" align="stretch" class="text-center">
          <v-col
            v-for="(item, i) in missionVision"
            :key="i"
            cols="12"
            md="4"
            class="info-card"
          >
            <div 
              class="info-card-inner"
              :class="{'hover-effect': true}"
            >
              <h2 class="section-title">{{ item.title }}</h2>
              <p class="section-text">{{ item.text }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Flujos de colores e imágenes de fondo entre secciones -->
      <div class="flow-section">
        <div class="flow-background"></div>
        <h3 class="flow-title">Nuestro Flujo de Sabores</h3>
      </div>
  
      <!-- Mapa Interactivo -->
      <v-container class="map-container mt-10">
        <h2 class="map-title">¿Dónde encontrarnos?</h2>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-card>
              <v-img
                src="https://maps.googleapis.com/maps/api/staticmap?center=La+Paz,Bolivia&zoom=14&size=600x300&markers=color:red%7C-16.500000,-68.119300"
                alt="Mapa de ubicación"
                height="300px"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Imágenes animadas -->
      <v-container class="images-container mt-10">
        <v-row justify="center" class="image-row">
          <v-col v-for="(image, i) in images" :key="i" cols="12" md="4">
            <v-img
              :src="image"
              alt="Imagen"
              class="animated-image"
              transition="fade-transition"
              height="250px"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </template>
  
  <script setup>
  const slides = [
    {
      title: '¡Holy Llamoly!',
      subtitle: 'Una experiencia de sabor como ninguna otra.',
      image: 'https://i.pinimg.com/736x/0a/bd/67/0abd67f186fa9afad78642314158056f.jpg',
    },
    {
      title: 'Siente la Magia',
      subtitle: 'Cada helado cuenta una historia diferente.',
      image: 'https://source.unsplash.com/1600x400/?icecream,colorful',
    },
    {
      title: 'Bienvenid@ a Holly Molly',
      subtitle: 'Donde los sueños se enfrían y se sirven en cono.',
      image: 'https://source.unsplash.com/1600x400/?dessert,icecream',
    },
  ];
  
  const missionVision = [
    {
      title: 'Nuestra Misión',
      text: 'Sorprender a nuestros visitantes con helados únicos, creativos y llenos de magia en cada cucharada.',
    },
    {
      title: 'Nuestra Visión',
      text: 'Convertirnos en la heladería temática favorita de Bolivia y expandir nuestro sabor al mundo.',
    },
    {
      title: 'Nuestros Valores',
      text: 'Creatividad, cercanía, diversión y compromiso con la calidad.',
    },
  ];
  
  </script>
  
  <style scoped>
  .main-carousel {
    position: relative;
  }
  
  .carousel-text {
    position: absolute;
    bottom: 20%;
    left: 10%;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
    max-width: 80%;
    animation: fadeInUp 1.5s ease;
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
  
  /* Animación para la Misión y Visión */
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
  
  /* Efecto de hover con cambio de colores */
  .hover-effect:hover {
    background-color: #FCDCE1;
  }
  
  /* Flujos de colores y imágenes de fondo entre secciones */
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
  
  /* Mapa */
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
  </style>
  