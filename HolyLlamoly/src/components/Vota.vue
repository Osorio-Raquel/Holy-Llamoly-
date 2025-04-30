<template>
  <div class="contenido">
    <h2>🗳️ Vota por tu Sabor Favorito</h2>
    <p>Comparte tu creación helada y vota por las más deliciosas ideas.</p>

    <div class="formulario">
      <input type="file" accept="image/*" @change="onImageUpload" />
      <textarea v-model="newNote.description" placeholder="Describe tu helado..."></textarea>
      <button @click="addNote">Subir Notita 🍦</button>
    </div>

    <div class="ganador-mes">
  <div class="decoracion">✨🎉 Ganador del Mes Pasado 🎉✨</div>
  <div class="ganador-card">
    <img src="https://images.unsplash.com/photo-1589712235274-df5c55b94091?auto=format&fit=crop&w=300&q=80" alt="Ganador" />
    <p class="desc-gana">Frutilla con crema y pétalos de rosa 🌸</p>
    <span class="estrella">⭐ 152 votos</span>
  </div>
</div>


    <div class="notas">
      <div v-for="(note, index) in notes" :key="index" class="nota" :style="{ backgroundColor: colors[index % colors.length] }">
        <img :src="note.image" alt="helado" />
        <p class="desc">{{ note.description }}</p>
        <button class="votar" @click="vote(index)">❤️ {{ note.votes }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vota',
  data() {
    return {
      newNote: {
        image: '',
        description: '',
      },
      notes: [
  {
    image: 'https://images.unsplash.com/photo-1589712235274-df5c55b94091?auto=format&fit=crop&w=300&q=80',
    description: 'Frutilla con crema y pétalos de rosa 🌸',
    votes: 19,
  },
  {
    image: 'https://images.unsplash.com/photo-1615212049272-735c8f8fc9f5?auto=format&fit=crop&w=300&q=80',
    description: 'Inspirado en un atardecer tropical 🌅🍍',
    votes: 22,
  },
  {
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=300&q=80',
    description: 'Chocolate oscuro con corazón cítrico 🍫🍊',
    votes: 15,
  },
  {
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80',
    description: 'Helado nube con chispas de algodón de azúcar ☁️🍬',
    votes: 24,
  },
  {
    image: 'https://images.unsplash.com/photo-1590080876564-018d62d42932?auto=format&fit=crop&w=300&q=80',
    description: 'Coco nevado con mango dulce 🥭❄️',
    votes: 22,
  },
  {
    image: 'https://images.unsplash.com/photo-1613141411264-c92ec3e3a3de?auto=format&fit=crop&w=300&q=80',
    description: 'Sándalo con vainilla dorada 🍨🌟',
    votes: 17,
  },
  {
    image: 'https://images.unsplash.com/photo-1614799864203-1189f810c6b5?auto=format&fit=crop&w=300&q=80',
    description: 'Inspiración cítrica con arándanos 🫐🍋',
    votes: 13,
  },
  {
    image: 'https://images.unsplash.com/photo-1522938974444-f12497b69347?auto=format&fit=crop&w=300&q=80',
    description: 'Vibras de lavanda y lima 💜🍈',
    votes: 18,
  },
  {
    image: 'https://images.unsplash.com/photo-1589881702122-6c4f4cf1fd50?auto=format&fit=crop&w=300&q=80',
    description: 'Piña colada congelada 🍍🥥',
    votes: 24,
  },
  {
    image: 'https://images.unsplash.com/photo-1578985545265-1b53cdaae94c?auto=format&fit=crop&w=300&q=80',
    description: 'Matcha con hojuelas de oro 🍵✨',
    votes: 12,
  },
  {
    image: 'https://images.unsplash.com/photo-1599785209794-df2eea3b74ff?auto=format&fit=crop&w=300&q=80',
    description: 'Limón, menta y chispa de anís 🍃🍋',
    votes: 9,
  },
  {
    image: 'https://images.unsplash.com/photo-1590080876758-c3c5da9c0ab2?auto=format&fit=crop&w=300&q=80',
    description: 'Caramelo salado con flor de sal 🧂🍯',
    votes: 27,
  },
  {
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=300&q=80',
    description: 'Melón suave con jengibre 🌿🍈',
    votes: 14,
  },
  {
    image: 'https://images.unsplash.com/photo-1601924912575-d3bf0ee30dd9?auto=format&fit=crop&w=300&q=80',
    description: 'Fresa con miel de lavanda 🍓🌼',
    votes: 21,
  },
  {
    image: 'https://images.unsplash.com/photo-1542444459-db71c3c6c7e8?auto=format&fit=crop&w=300&q=80',
    description: 'Durazno y albahaca cremosa 🍑🌿',
    votes: 16,
  },
  {
    image: 'https://images.unsplash.com/photo-1590080876807-890828d771b9?auto=format&fit=crop&w=300&q=80',
    description: 'Explosión de cereza con crema de avellana 🍒🌰',
    votes: 26,
  },
  {
    image: 'https://images.unsplash.com/photo-1521302080334-4bebac276b7f?auto=format&fit=crop&w=300&q=80',
    description: 'Maracuyá con jalea de violeta 🌸🥭',
    votes: 18,
  },
  {
    image: 'https://images.unsplash.com/photo-1541690219270-020d5f4a5c68?auto=format&fit=crop&w=300&q=80',
    description: 'Té chai con leche de almendras ☕🌰',
    votes: 20,
  },
  {
    image: 'https://images.unsplash.com/photo-1587502537745-6fe5ff1e2c2c?auto=format&fit=crop&w=300&q=80',
    description: 'Sandía fresca con escarchado de menta 🍉❄️',
    votes: 13,
  },
  {
    image: 'https://images.unsplash.com/photo-1598142893149-fb30d7b8e59e?auto=format&fit=crop&w=300&q=80',
    description: 'Helado de canela con nuez crocante 🌰🍦',
    votes: 23,
  },
  {
    image: 'https://images.unsplash.com/photo-1616435303842-1309e6d8467f?auto=format&fit=crop&w=300&q=80',
    description: 'Uva blanca con esencia de flor de azahar 🍇🌼',
    votes: 15,
  },
  {
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80',
    description: 'Kiwi con vainilla negra y pétalos 💚🍦',
    votes: 17,
  },
  {
    image: 'https://images.unsplash.com/photo-1564518098558-6d95f7f6a0b4?auto=format&fit=crop&w=300&q=80',
    description: 'Nuez moscada con crema de higo 🌰🍨',
    votes: 14,
  },
  {
    image: 'https://images.unsplash.com/photo-1620374648081-5692a27d9d3b?auto=format&fit=crop&w=300&q=80',
    description: 'Banana flambé con almendra acaramelada 🍌🔥',
    votes: 19,
  },
  {
    image: 'https://images.unsplash.com/photo-1564758565782-07a3c847c6c8?auto=format&fit=crop&w=300&q=80',
    description: 'Sorprendente manzana con caramelo ácido 🍏🍬',
    votes: 20,
  },
  {
    image: 'https://images.unsplash.com/photo-1622560483520-bf12e46b4083?auto=format&fit=crop&w=300&q=80',
    description: 'Mora azul con yogurt espumoso 🫐🥛',
    votes: 18,
  },
  {
    image: 'https://images.unsplash.com/photo-1505250441410-59bd79d3e094?auto=format&fit=crop&w=300&q=80',
    description: 'Helado de pera y jazmín 🌼🍐',
    votes: 25,
  },
  {
    image: 'https://images.unsplash.com/photo-1585860643993-1142b08c30dd?auto=format&fit=crop&w=300&q=80',
    description: 'Tarta de limón congelada con polvo de pistacho 🍋🌿',
    votes: 22,
  },
  {
    image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=300&q=80',
    description: 'Vainilla clásica con semillas reales 🍦✨',
    votes: 30,
  },
  {
    image: 'https://images.unsplash.com/photo-1583366380400-bb99150f93a3?auto=format&fit=crop&w=300&q=80',
    description: 'Té verde japonés con azúcar moreno 🍵🍯',
    votes: 17,
  }
],
      colors: ['#FCDCE1', '#F0D9EF', '#FFE6BB', '#DDF5F2'],
    };
  },
  methods: {
    onImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.newNote.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    addNote() {
      if (this.newNote.image && this.newNote.description.trim()) {
        this.notes.push({
          image: this.newNote.image,
          description: this.newNote.description,
          votes: 0,
        });
        this.newNote.image = '';
        this.newNote.description = '';
      } else {
        alert('Sube una imagen y escribe una descripción.');
      }
    },
    vote(index) {
      this.notes[index].votes++;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cafiloser&display=swap');

.contenido {
  font-family: 'Caviar Dreams', sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #fffafc;
}

h2 {
  font-family: 'Cafiloser', cursive;
  font-size: 2rem;
  margin-bottom: 10px;
  color: #633030;
}

.formulario {
  margin: 20px auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

textarea {
  resize: none;
  height: 80px;
  padding: 10px;
  font-family: 'Caviar Dreams';
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  background-color: #fcdce1;
  border: none;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  color: #6b2d1a;
  font-size: 16px;
}

button:hover {
  background-color: #ffe6bb;
}

.notas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.nota {
  width: 200px;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 2px 2px 12px rgba(0,0,0,0.1);
  transform: rotate(-1deg);
  transition: transform 0.3s ease;
}

.nota:hover {
  transform: rotate(0deg) scale(1.02);
}

.nota img {
  width: 100%;
  border-radius: 10px;
}

.desc {
  font-family: 'Cafiloser', cursive;
  margin-top: 10px;
  font-size: 14px;
  color: #4b3c3c;
}

.votar {
  margin-top: 10px;
  background-color: #ffe6bb;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.votar:hover {
  background-color: #fcdce1;
}

.ganador-mes {
  margin: 30px auto 20px;
  max-width: 400px;
  text-align: center;
  background-color: #fff2f5;
  border: 2px dashed #f0d9ef;
  border-radius: 16px;
  padding: 15px;
  box-shadow: 0 0 12px rgba(255, 208, 227, 0.5);
}

.decoracion {
  font-size: 1.2rem;
  font-weight: bold;
  color: #c15c8b;
  margin-bottom: 10px;
  font-family: 'Cafiloser', cursive;
}

.ganador-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ganador-card img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
}

.desc-gana {
  font-family: 'Cafiloser', cursive;
  margin-top: 8px;
  font-size: 15px;
  color: #633030;
}

.estrella {
  margin-top: 5px;
  display: inline-block;
  background-color: #ffe6bb;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 13px;
  color: #8a5500;
}

</style>
