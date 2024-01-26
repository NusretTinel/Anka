<template>
  <div class="kutu">
    <div class="row">
      <div class="slider" :style="{ backgroundImage: 'url(' + require('@/assets/images/Tema/image-asset.jpeg') + ')' }" style="height: 66rem; width: 95%" >

<!--        <Carousel>-->
<!--          <Slide v-for="(image, index) in imagesForSlider" :key="index">-->
<!--            <div class="carousel__item"><img :src="image" alt=""></div>-->
<!--          </Slide>-->

<!--          <template #addons>-->
<!--            <Navigation />-->
<!--            <Pagination />-->
<!--          </template>-->
<!--        </Carousel>-->
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

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'componentPage',
  components: {

  },

});
</script>

<style>
.carousel__item{

  width: 100%;

}

</style>
