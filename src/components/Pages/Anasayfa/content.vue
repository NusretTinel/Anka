<template>
  <div class="kutu">
    <div class="row">
      <div class="slider">
        <Carousel>
          <Slide v-for="(image, index) in imagesForSlider" :key="index">
            <div class="carousel__item"><img :src="image" alt=""></div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
    <div class="row">
<img src="">
    </div>
    <div class="row">

    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

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
      imagesForSlider: [
        require('@/assets/images/Tema/image-asset.jpeg'),
        require('@/assets/images/Tema/supply-chain-digital.jpg.jpg'),
        require('@/assets/images/Tema/GEN-Simchi-Levy-Global-Supply-Chain-Recovery-1290x860-1.jpg'),
        require('@/assets/images/Tema/masamap.jpg'),
        require('@/assets/images/Tema/Dunyakure.jpg'),
      ],
      otherImages: [
        require('@/assets/images/Tema/masamap.jpg'),
        require('@/assets/images/Tema/Dunyakure.jpg'),
      ],
    };
  },
});
</script>

<style>
.carousel__item{
  
  width: 100%;

}
</style>
