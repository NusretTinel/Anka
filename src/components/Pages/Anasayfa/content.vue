<template>
  <Navbar></Navbar>

  <div class="kap">
    <img  alt="bilboard" src="@/assets/images/imgAnka/Mock_Up_1.png"
         style="width:100% ;height:100% ;"/>
    <div class="row ortalayici">


      <div class="dikeyleyici">
        <img alt="bilboard" src="@/assets/images/imgAnka/horse.jpg"
             style="width:100% ; "/>

        <div class=" pictureBottom">
          Neden Anka
        </div>

      </div>

      <div class="textRight ">

        <div class="textMid">
          <span> Anka Tedarik </span>

        </div>

        <div class="textContent">
          <span>  20 yıla yaklaşan satın alma deneyimimizle hem müşterilerimizin hem de tedarikçilerimizin maliyet, zaman ve iş gücünden tasarruf etmesini sağlayan, ithalat ve ihracat alanında uzman kadrosu Türkiye ve Dünya'da sınırsız ürün potansiyeline sahip olması nedeniyle tercih edilen bir firmadır </span>

        </div>
      </div>


    </div>

    <!--    optimize diğer ekranlar için.-->
    <div class="row ortalayici" style="margin-top:150px">
      <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
        <SplideSlide>
          <div class="row ortalayici" style="margin-top:50px">


            <div class="boxlightC">
              <div class=" resimkutuC">
                <img alt="bilboard" src="@/assets/images/imgCategory/orman2.jpg"
                     style="border-radius: 80px;width:100% ;height:100% ;"/>
              </div>
              <div class=" yazıkutuc ">
                Orman Ekipmanları
              </div>


            </div>
            <div class="boxlightC">
              <div class=" resimkutuC">
                <img alt="bilboard" src="@/assets/images/imgCategory/olcu.jpg"
                     style="border-radius: 80px;width:100% ;height:100% ;"/>
              </div>
              <div class=" yazıkutuc ">
                Ölçü Aletleri
              </div>


            </div>
            <div class="boxlightC">
              <div class=" resimkutuC">
                <img alt="bilboard" src="@/assets/images/imgCategory/maden.jpg"
                     style="border-radius: 80px;width:100% ;height:100% ;"/>
              </div>
              <div class=" yazıkutuc ">
                Madencilik
              </div>


            </div>
            <div class="boxlightC">
              <div class=" resimkutuC">
                <img alt="bilboard" src="@/assets/images/imgCategory/lab.jpeg"
                     style="border-radius: 80px;width:100% ;height:100% ;"/>
              </div>
              <div class=" yazıkutuc ">
                Laboratuvar Cihazları
              </div>


            </div>
            <div class="boxlightC">
              <div class=" resimkutuC">
                <img alt="bilboard" src="@/assets/images/imgCategory/kaynak2.jpg"
                     style="border-radius: 80px;width:100% ;height:100% ;"/>
              </div>
              <div class=" yazıkutuc ">
                Kaynak-Montaj Ekipmanları
              </div>


            </div>

          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="row ortalayici" style="margin-top:50px">


            <div class="boxlightC">
              <div class=" resimkutuC">
                <img alt="bilboard" src="@/assets/images/imgCategory/hirdavatmal.jpg"
                     style="border-radius: 80px;width:100% ;height:100% ;"/>
              </div>
              <div class=" yazıkutuc ">
                Hırdavat Malzemeleri
              </div>


            </div>
            <div class="boxlightC">
              <div class=" resimkutuC">
                <img alt="bilboard" src="@/assets/images/imgCategory/fire3.jpg"
                     style="border-radius: 80px;width:100% ;height:100% ;"/>
              </div>
              <div class=" yazıkutuc ">
                Yangın Ekipmanları
              </div>


            </div>
            <div class="boxlightC">
              <div class=" resimkutuC">
                <img alt="bilboard" src="@/assets/images/imgCategory/farming4.jpg"
                     style="border-radius: 80px;width:100% ;height:100% ;"/>
              </div>
              <div class=" yazıkutuc ">
                Tarım Makine ve Teknolojileri
              </div>


            </div>

            <div class="boxlightC">
              <div class=" resimkutuC">
                <img alt="bilboard" src="@/assets/images/imgCategory/endustri5.jpg"
                     style="border-radius: 80px;width:100% ;height:100% ;"/>
              </div>
              <div class=" yazıkutuc ">
                Endüstriyel Malzemeler
              </div>


            </div>
            <div class="boxlightC">
              <div class=" resimkutuC">
                <img alt="bilboard" src="@/assets/images/imgCategory/el.jpg"
                     style="border-radius: 80px;width:100% ;height:100% ;"/>
              </div>
              <div class=" yazıkutuc ">
                El Aletleri
              </div>


            </div>

          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="row ortalayici" style="margin-top:50px">


            <div class="boxlightC">
              <div class=" resimkutuC">
                <img alt="bilboard" src="@/assets/images/imgCategory/yapis.jpg  "
                     style="border-radius: 80px;width:100% ;height:100% ;"/>
              </div>
              <div class=" yazıkutuc ">
                Yapı ve İnşaat Malzemeleri
              </div>


            </div>
            <div class="boxlightC">
              <div class=" resimkutuC">
                <img alt="bilboard" src="@/assets/images/imgCategory/aydnlatma.jpg"
                     style="border-radius: 80px;width:100% ;height:100% ;"/>
              </div>
              <div class=" yazıkutuc ">
                Aydınlatma ve Elektrik Ürünleri
              </div>


            </div>
            <div class="boxlightC">
              <div class=" resimkutuC">
                <img alt="bilboard" src="@/assets/images/imgCategory/ambalaj.jpg"
                     style="border-radius: 80px;width:100% ;height:100% ;"/>
              </div>
              <div class=" yazıkutuc ">
                Ambalaj
              </div>


            </div>


          </div>
        </SplideSlide>
      </Splide>


    </div>
    <!--    optimize diğer ekranlar için.-->
    <div class="row ortalayici" style="margin-top:80px">
      <div class="boxlight">
        <div class=" yazıkutu">
          Düşük Maliyet
        </div>
        <div class=" resimkutu">
          <img alt="bilboard" src="@/assets/images/illustrate/price-tag_2221225.png"
               style="width:100% ;height:100% ;"/>
        </div>
      </div>
      <div class="boxlight">
        <div class=" yazıkutu ">
          Yüksek Kalite

        </div>
        <div class=" resimkutu">
          <img alt="bilboard" src="@/assets/images/illustrate/badge_7440695.png"
               style="width:100% ;height:100% ;"/>
        </div>
      </div>
      <div class="boxlight">
        <div class=" yazıkutu ">
          Tecrübeli Kadro
        </div>
        <div class=" resimkutu">
          <img alt="bilboard" src="@/assets/images/illustrate/experience_2303952.png"
               style="width:100% ;height:100% ;"/>
        </div>
      </div>
      <div class="boxlight">
        <div class=" yazıkutu ">
          Sınırsız Ürün Çeşidi
        </div>
        <div class=" resimkutu">
          <img alt="bilboard" src="@/assets/images/illustrate/design_1117607.png"
               style="width:100% ;height:100% ;"/>
        </div>
      </div>
      <div class="boxlight">
        <div class=" yazıkutu ">
          Dünya Çapında Hizmet
        </div>
        <div class=" resimkutu">
          <img alt="bilboard" src="@/assets/images/illustrate/worldwide_4418907.png"
               style="width:100% ;height:100% ;"/>
        </div>
      </div>

    </div>
    <!--    optimize diğer ekranlar için.-->
    <div class="row" style="height: 100px">
    </div>
    <div class="row">
      <div class="ortalayici">
        <span class="spanSliderTopline"></span>
        <span class="spanSliderTop">Referanslarımız</span>
        <span class="spanSliderTopline"></span>
      </div>
    </div>
    <!--     optimize diğer ekranlar için.-->
    <div class="row" style="margin-top:40px">

      <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
        <SplideSlide>
          <div class="row ortalayici">


            <div class="squareSlider">
              <img alt="bilboard" src="../../../assets/images/imgSlider/Botaslogo.png"
                   style="width:100% ;height:100% ;"/>
            </div>
            <div class="squareSlider">
              <img alt="bilboard" src="../../../assets/images/imgSlider/igdas.png"
                   style="width:100% ;height:100% ;"/>
            </div>
            <div class="squareSlider">
              <img alt="bilboard" src="../../../assets/images/imgSlider/MSB-Logo.png"
                   style="width:100% ;height:100% ;"/>
            </div>
            <div class="squareSlider">
              <img alt="bilboard" src="../../../assets/images/imgSlider/GEN.png"
                   style="width:100% ;height:100% ;"/>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="row ortalayici">

            <div class="squareSlider">
              <img alt="bilboard" src="../../../assets/images/imgSlider/iller.png"
                   style="width:100% ;height:100% ;"/>
            </div>
            <div class="squareSlider">
              <img alt="bilboard"
                   src="../../../assets/images/imgSlider/mavi.png"
                   style="width:100% ;height:100% ;"/>
            </div>
            <div class="squareSlider">
              <img alt="bilboard" src="../../../assets/images/imgSlider/OrmanGenel.png"
                   style="width:100% ;height:100% ;"/>
            </div>
            <div class="squareSlider">
              <img alt="bilboard" src="../../../assets/images/imgSlider/turkhava.png"
                   style="width:100% ;height:100% ;"/>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="row ortalayici">

            <div class="squareSlider">
              <img alt="bilboard" src="../../../assets/images/imgSlider/kara.png"
                   style="width:100% ;height:100% ;"/>
            </div>
            <div class="squareSlider">
              <img alt="bilboard" src="../../../assets/images/imgSlider/7MPlzB6s_400x400.jpg"
                   style="width:100% ;height:100% ;"/>
            </div>
            <div class="squareSlider">
              <img alt="bilboard" src="../../../assets/images/imgSlider/647_dhmi.jpg"
                   style="width:100% ;height:100% ;"/>
            </div>
            <div class="squareSlider">
              <img alt="bilboard" src="../../../assets/images/imgSlider/eti-maden-logo.jpg"
                   style="width:100% ;height:100% ;"/>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="row ortalayici">

            <div class="squareSlider">
              <img alt="bilboard" src="../../../assets/images/imgSlider/images.jpeg"
                   style="width:100% ;height:100% ;"/>
            </div>
            <div class="squareSlider">
              <img alt="bilboard" src="../../../assets/images/imgSlider/unnamed.jpg"
                   style="width:100% ;height:100% ;"/>
            </div>

          </div>
        </SplideSlide>
      </Splide>

    </div>

  </div>


</template>

<script>
import {defineComponent} from 'vue';
import Navbar from "@/components/Utility/navbar.vue";
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default defineComponent({
  name: 'componentPage',
  components: {
    Navbar, Splide,
    SplideSlide,
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
  color: #03045e;
  font-size: 30px;
  font-weight: 1000;
  font-family: Calibri

}

.resimkutu {
  margin-top: 20px;
  padding-top: 10px;
  width: 130px;
  height: 120px;
  margin-right: 20px;
  align-items: center;
  display: flex;
  justify-content: center;


}

.boxlight {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  background-color: #f3f7f8;
  height: 340px;
  width: 300px;
  position: relative;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.boxlight::before,
.boxlight::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  background: transparent;
  transition: width 0.3s ease, height 0.3s ease;
}

.boxlight::before {
  top: 0;
  left: 0;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;
}

.boxlight::after {
  bottom: 0;
  right: 0;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
}

.boxlight:hover {
  background-color: #f5f9ff;
  transform: scale(1.02);
}

.boxlight:hover::before {
  border-top: 3px solid #0096c7;
  border-left: 3px solid #0096c7;
  width: 100%;
  height: 100%;
}

.boxlight:hover::after {
  border-bottom: 3px solid #0096c7;
  border-right: 3px solid #0096c7;
  width: 100%;
  height: 100%;
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

@media (max-width: 1191px) {
  .dikeyleyici {
    flex-direction: column;
    display: flex;
    width: 270px;
    height: 180px;
    margin-right: 0px
  }


  .textContent {
    font-family: Calibri;
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
    font-weight: 400;
    font-size: 22px
  }
}

@media (min-width: 1192px) {
  .textContent {
    font-family: Calibri;
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
    font-weight: 400;
    font-size: 32px
  }

  .dikeyleyici {
    flex-direction: column;
    display: flex;
    width: 270px;
    height: 180px;
    margin-right: 100px
  }
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
  margin-left: 250px;
  margin-top: 120px;
}


.row {
  width: 100%;
}

.textMid {

  margin-top: 100px;
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


.sıralayıcı {
  flex-direction: column;
  display: flex;
  width: 270px;
  height: 180px;
}

.pictureBottom {
  white-space: nowrap;
  color: #090849;


  font-weight: 500;
  font-size: 25px;


  font-family: "Calibri ";


}

.circularSlider {
  width: 200px;
  background-color: black;
  border-radius: 100px;
  height: 200px;
  margin-left: 150px;
}

.squareSlider {
  margin-top: 20px;
  width: 210px;
  background-color: transparent;
  margin-left: 80px;
  margin-right: 80px;
  height: 155px;

}

.textSliderTop {
  justify-content: center; /* İçeriği soldan hizalar */
  align-items: center;
  font-size: 50px;
  margin-top: 120px;
  color: black;
  font-weight: 500;
  text-align: center;


  width: 90%;
  margin-left: 5%
}

.textSliderSquare {
  height: 40px;
  background-color: white;
}

.imgSliderSquare {
}

.ortalayici {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spanSliderTop {
  font-size: 37px;
  color: black;
  margin: 0 20px; /* Bu, her iki tarafa eşit boşluk ekler */
  color: #0096c7;
  font-weight: bold;
  margin-bottom: 30px;
  font-family: Calibri;
}

.spanSliderTopline {
  width: 150px;
  height: 3px;
  background-color: #0096c7;
  color: red;
  font-weight: bold;
  margin-bottom: 30px
}

.yuvarlakKutu {
  margin-top: 20px;
  padding-top: 10px;

  height: 160px;
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
}

.boxlightC {

  margin-top: -120px;
  height: 360px;
  width: 300px;

  transition: background-color 0.3s ease, transform 0.3s ease;
}

.yazıkutuc {
  height: 80px;
  padding-top: 15px;
  font-family: Calibri;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  background-color: transparent;
  color: #001d5b;
  font-size: 20px;
  font-weight: 900

}

.resimkutuC {
  margin-top: 100px;
  padding-top: 10px;

  height: 160px;
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
}


.textRight {
  width: 800px;
  height: 400px;
  margin-top: 7px;
  display: flex;
  flex-direction: column;
}
</style>
