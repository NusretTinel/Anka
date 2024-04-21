<template>
  <Navbar></Navbar>
  <div class="kap">
    <img alt="bilboard" src="../../../assets/images/imgAnka/Artboard_2.png"
         style="height: 100vh ;width: 100vw ;"/>


    <div class="row">

      <div class="col-lg-2 mpbox ">
        <div class="row içerik">


        </div>
      </div>
      <div class="col-lg-5 yazımp ">


   <span class="içerik">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </span>
      </div>
    </div>
    <div class="row" style=" display: flex; justify-content: center;margin-top: 10vh;">
      <div class="boxlight">
        <div class="row yazıkutu">
          LOREM İPSUM DOLER SİT
        </div>
        <div class="row resimkutu">
        </div>
      </div>
      <div class="boxlight">
        <div class="row yazıkutu ">
          LOREM İPSUM DOLER SİT

        </div>
        <div class="row resimkutu">

        </div>
      </div>
      <div class="boxlight">
        <div class="row yazıkutu ">
          LOREM İPSUM DOLER SİT
        </div>
        <div class="row resimkutu">

        </div>
      </div>
      <div class="boxlight">
        <div class="row yazıkutu ">
          LOREM İPSUM DOLER SİT
        </div>
        <div class="row resimkutu">

        </div>
      </div>
      <div class="boxlight">
        <div class="row yazıkutu ">
          LOREM İPSUM DOLER SİT
        </div>
        <div class="row resimkutu">

        </div>
      </div>
      <div class="boxlight">
        <div class="row yazıkutu ">
          LOREM İPSUM DOLER SİT
        </div>
        <div class="row resimkutu">

        </div>
      </div>
    </div>
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
.kutuyazısı {

}

.yazıkutu {
  height: 3vh;

  margin-top: 2vh;
  margin-left: 2vw;
  display: flex;
  justify-content: left;
  margin-right: 10px;
  background-color: #002942;
}

.resimkutu {
height: 3vh;
  margin: 3vh 2vw 30px 2vw;
  display: flex;
  justify-content: center;
  background-color: #002942;
}

.boxlight {

  margin-right: 1vw;
  background-color: #e3e3f8;
  height: 30vh;
  width: 15vw;

}

.yazı1 {
  width: 30vw;
  font-weight: bold;
  font-size: 30px;
  margin-top: 3vh;
  margin-left: 1vw;
  line-height: 32px;

}

.içerik {


  width: 40%;
}

.yazımp {
  text-align: left;

  line-height: 5vh;
  height: 20vh;
  margin-right: 2vw;
  margin-left: 13vw;
  margin-top: 4vh;
  border-radius: 20px;

  color: #002942;
  font-size: 35px;
  font-weight: 600;

}

.kap {
  background: linear-gradient(to top, #dcdcdc, #0d6efd);
}

.resim {
  width: 100vw;
  height: 100vh;
}

.mpbox {
  width: 0vw;
  height: 20vh;
  margin-bottom: 8vh;
  display: flex;
  font-family: Calibri;
  justify-content: center;
  margin-right: 2vw;
  margin-left: 10vw;
  margin-top: 6vh;
  border-radius: 20px;
  background-color: black;
}

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

.arkaplan {
  background-image: url("../../../assets/images/imgAnka/Artboard_2.png");
  height: 100vh;
  width: 100vw;
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
