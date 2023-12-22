<template>
  <Carousel>
    <Slide v-for="(image, index) in images" :key="index">
      <div class="carousel__item"><img :src="image" alt=""></div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'componentPage',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [

        require("@/assets/images/Tema/GEN-Simchi-Levy-Global-Supply-Chain-Recovery-1290x860-1.jpg"),
        require("@/assets/images/Tema/image-asset.jpeg"),
        require("@/assets/images/Tema/supply-chain-digital.jpg.jpg"),

      ]
    };
  },
})
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover; /* Resmi carousel item içinde kesecek şekilde boyutlandırır */
  overflow: hidden; /* Taşan kısımları gizler */
}


.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
