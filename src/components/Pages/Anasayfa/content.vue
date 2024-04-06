<template>
  <div class="arkaplan">

    <Navbar ></Navbar>


  </div>





<!--  <div class="row" style="">-->
<!--    <div class="image-overlay" style="height: 30rem">-->
<!--      <img alt="Arka Plan Resmi" class="background-image" src="@/assets/images/imgAnka/lastlogo.png">-->

<!--      <div :class="{ 'overlay-visible': hovered }" class="overlay">-->

<!--        <h1 class="h1">-->
<!--          AnkaTedarik olarak Türkiye’nin ve dünyanın her yerinden gelen veri akışımızla tam-->
<!--          ihtiyacınız olan ürünü en uygun fiyat teklifleriyle, kısa süre içerisinde, elinize ulaştırıyoruz. Amacımız-->
<!--          müşterilerimizi yoğun iş temposunda eforsuz bir şekilde ürünlerine ulaştırmak olup birçok şirketle iş-->
<!--          birliği yaparak sınırsız kategoride her türlü ürünü sizlere tedarik etmektir.-->
<!--        </h1>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->


</template>

<script>

import {defineComponent} from 'vue';
import Navbar from "@/components/Utility/navbar.vue";

export default defineComponent({
  name: 'componentPage',
  components: {Navbar},
  // components: {Navbar},
  data() {
    return {
      showOverlay: false
    };
  },
  methods: {
    toggleOverlay() {
      this.showOverlay = !this.showOverlay;
    },
    clickHrefMethod(href) {
      window.open(href, "_blank");
    },
    clickRouteMethod(route) {
      this.$router.push(route);
    },
  }
});
</script>

<style>

.image-overlay {
  position: relative;
  cursor: pointer;
  overflow: hidden; /* Arka plan resminin sınırlarını aşan kısımları gizlemek için */
}

.background-image {
  display: block;
  width: 100%;
  transition: opacity 0.3s ease; /* Geçiş efekti ekleyin */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
  color: #fff;
  opacity: 0; /* Başlangıçta görünmez */
  transition: opacity 0.3s ease; /* Geçiş efekti ekleyin */
}
.arkaplan{
  background-image: url("../../../assets/images/imgAnka/Artboard_2.png");
  height: 989px;
}
.overlay img {
  max-width: 100%;
  max-height: 100%;
}

.overlay-visible {
  opacity: 1; /* Hover olduğunda görünür hale getirin */
}

.image-overlay:hover .background-image {
  opacity: 10%; /* Hover olduğunda arka plan resmini tamamen görünür yapın */

}

.image-overlay:hover .overlay {
  opacity: 100; /* Hover olduğunda açılan resmi görünür yapın */
  background-color: #f5f5f5;
}

.h1 {
  background: linear-gradient(to right, #e3b871, #b00101);
  padding-left: 5rem;
  padding-right: 5rem;
  text-align: center;
  padding-top: 10rem;
  height: 35rem;

}

.kutu {
 background-image: url('@/assets/images/imgAnka/22.jpg');
padding-top: 1%;

  width: 100%;
  height: 1000px

}

.resimkare {
  width: 100%;
  margin-top: 20px;
  border-radius: 20px;
  margin-left: 20px;
}

.yazıkare {
  margin-top: 5%;
  margin-right: 5%;

  color: black;
  text-align: justify;
}

.card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #6A2C70;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #6A2C70;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(0deg);
}

.card-back {
  background-color: #F08A5D;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #F08A5D;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(180deg);
}

</style>
