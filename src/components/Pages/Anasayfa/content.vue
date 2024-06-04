<template>
  <Navbar></Navbar>
  <div class="kap">
    <img alt="bilboard" src="../../../assets/images/imgAnka/Artboard_2.png"
         style="width:100% ;height:100% ;"/>
    <div class="row">
      <div class="sıralayıcı">
        <div class="pictureLeft">
          <img alt="bilboard" src="../../../assets/images/imgAnka/Artboard_2.png"
               style="width:100% ;height:100% ;"/>
        </div>
        <div class=" pictureBottom">
          Neden Mistral
        </div>
      </div>
      <div class="textRight">

        <div class="textMid">
          <span> Mistral Trade </span>

        </div>

        <div class="textContent">
            <span>   AnkaTedarik olarak Türkiye’nin ve dünyanın her yerinden gelen veri akışımızla tam  ihtiyacınız olan ürünü en uygun fiyat teklifleriyle, kısa süre içerisinde,Amacımız
                   müşterilerimizi yoğun iş temposunda eforsuz bir şekilde ürünlerine ulaştırmak olup birçok şirketle birçok şirketle i ie’nin ve dünyanın her yerinden gelen veri akışımızla tamamında
                        . </span>

        </div>
      </div>


    </div>
    <div class="row" style=" display: flex; justify-content: center;margin-top: 150px;">
      <div class="boxlight">
        <div class=" yazıkutu">
          LOREM İPSUM DOLER SİT
        </div>
        <div class=" resimkutu">
          <img alt="bilboard" src="../../../assets/images/imgAnka/Artboard_2.png"
               style="width:100% ;height:100% ;"/>
        </div>
      </div>
      <div class="boxlight">
        <div class=" yazıkutu ">
          LOREM İPSUM DOLER SİT

        </div>
        <div class=" resimkutu">
          <img alt="bilboard" src="../../../assets/images/imgAnka/Artboard_2.png"
               style="width:100% ;height:100% ;"/>
        </div>
      </div>
      <div class="boxlight">
        <div class=" yazıkutu ">
          LOREM İPSUM DOLER SİT
        </div>
        <div class=" resimkutu">
          <img alt="bilboard" src="../../../assets/images/imgAnka/Artboard_2.png"
               style="width:100% ;height:100% ;"/>
        </div>
      </div>
      <div class="boxlight">
        <div class=" yazıkutu ">
          LOREM İPSUM DOLER SİT
        </div>
        <div class=" resimkutu">
          <img alt="bilboard" src="../../../assets/images/imgAnka/Artboard_2.png"
               style="width:100% ;height:100% ;"/>
        </div>
      </div>
      <div class="boxlight">
        <div class=" yazıkutu ">
          LOREM İPSUM DOLER SİT
        </div>
        <div class=" resimkutu">
          <img alt="bilboard" src="../../../assets/images/imgAnka/Artboard_2.png"
               style="width:100% ;height:100% ;"/>
        </div>
      </div>

    </div>
    <div class="row" style="height: 300px">



    </div>
    <div class="row" >



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
  components: {Navbar
    },
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
  height: 80px;
  padding-top: 15px;
  margin-top: 50px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  background-color: transparent;
  color: #cb0000;
  font-size: 20px;
  font-weight: 900

}

.resimkutu {
  margin-top: 20px;
  padding-top: 10px;

  height: 160px;
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  background-color: #002942;
}

.boxlight {

  margin-right: 10px;
  background-color: #e3e3f8;
  height: 340px;
  width: 300px;

}

.yazı1 {
  width: 30vw;
  font-weight: bold;
  font-size: 30px;
  margin-top: 3vh;
  margin-left: 1vw;
  line-height: 32px;

}

.icerik {
  text-align: left;
  display: flex;
  width: 100%;
  height: 400px;
  margin-bottom: 50px;
}

.yazımp {
  text-align: center;

  line-height: 40px;
  height: 300px;
  margin-right: 20px;
  margin-left: 160px;
  margin-top: 40px;
  border-radius: 20px;

  color: #002942;
  font-size: 35px;
  font-weight: 600;

}

.kap {
//background: linear-gradient(to top, #dcdcdc, #0d6efd); background-color: white;
}

.resim {
  width: 100vw;
  height: 100vh;
}


.mpbox {
  width: 200px;
  height: 200px;
  margin-bottom: 200px;
  display: flex;
  font-family: Calibri;
  justify-content: center;
  margin-right: 30px;
  margin-left: 180px;
  margin-top: 60px;
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

.pictureLeft {
  width: 270px;
  height: 180px;
  margin-left: 150px;
  margin-top: 120px;
}

.textRight {

  width: 800px;
  height: 400px;
  margin-left: 420px;
  margin-top: 7px;
  display: flex;
  flex-direction: column; /* Elemanları dikeyde hizalar */


}

.row {
  width: 100%;
}

.textMid {
  margin-top: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 30px;
  width: 100%;
  height: 80px;
  color: #000000;
  margin-bottom: 10px; /* Başlık ve içerik arasına boşluk ekler */
}

.textContent {

  justify-content: flex-start; /* İçeriği soldan hizalar */
  align-items: flex-start; /* İçeriği yukarıdan hizalar */
  text-align: justify; /* Metni iki yana yaslar */
  text-align-last: left; /* Son satırı sola hizalar */
  width: 100%;
  height: 300px;
  line-height: 35px;
  padding: 10px; /* İçerik için biraz boşluk ekler */
  box-sizing: border-box; /* Padding dahil genişliği düzenler */
  color: #090849;
  font-weight: 600;
  font-size: 32px
}

.sıralayıcı {
  flex-direction: column;
  display: flex;
  width: 270px;
  height: 180px;
}

.pictureBottom {
  white-space: nowrap;
  color:red;
 margin-left: 200px;
  margin-top: 30px;
  font-weight: 500;
  font-size: 25px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  text-align: left;


}
</style>
