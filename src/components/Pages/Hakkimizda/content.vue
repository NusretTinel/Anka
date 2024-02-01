<template>
  <div class="kutu">

      <div class="baslik" style="padding-top: 3rem">
        <div class="row">
          <div class="col-lg-8">
        <div class="misyon">

          <h2>MİSYONUMUZ</h2>
          <p>AnkaTedarik ihtiyaçlarınız dahilinde yüksek kalite anlayışıyla global fiyatlandırmaya göre en  uygun fiyatla,  ürünü sizin için tedarik eder.

            AnkaTedarik olarak  Türkiye’nin ve dünyanın her yerinden gelen veri akışımızla tam ihtiyacınız olan ürünü  en uygun fiyat teklifleriyle, kısa süre içerisinde, elinize ulaştırıyoruz. Amacımız  müşterilerimizi yoğun iş temposunda eforsuz bir şekilde ürünlerine ulaştırmak olup bir çok şirketle iş birliği yaparak sınırsız kategoride her türlü ürünü sizlere tedarik etmektir.



          </p>
        </div>
          </div>
          <div class="col-lg-4"></div>
        </div>
          <div class="row">
            <div class="col-lg-8">
        <div class="vizyon">
          <h2>VİZYONUMUZ</h2>
          <p>
            İnovasyon ve girişimcilik ruhumuzla kendimizi devamlı geliştirdiğimiz AnkaTedarik müşterilerinin yorumlarını ve isteklerini daima ön plana koyarak her zaman daha iyi hizmet kalitesiyle karşınızda olmayı hedefler.

            AnkaTedarik, uzun yıllara dayanan ticaret deneyimi ile birleşen geniş ürün portföyü sayesinde, yüksek kalite standartlarına ve rekabetçi fiyat politikalarına odaklanarak tüm müşterilerine memnuniyet ve güven sunmayı amaçlamaktadır. Hedefimiz, dünya genelinde yer edinerek, müşterilerimizle sürdürülebilir ve karşılıklı kazançlı ilişkiler kurmak ve ticarette öncü bir rol oynamaktır. </p>
        </div>
          </div>
            <div class="col-lg-4"></div>
          </div>
      </div>
    </div>

</template>







<script>

import {defineComponent} from 'vue';

export default defineComponent({
  name: 'componentPage',
  data() {
    return {
      showOverlay: false
    };
  },
  methods: {
    toggleOverlay() {
      this.showOverlay = !this.showOverlay;
    }
  }
});
</script>

<style>


.baslik {

  color: black;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.misyon, .vizyon {
  width: 100%;
  max-width: 800px;
  text-align: justify; /* Yazıları ortalayarak düzgün bir şekilde görüntülemek için */
}

.misyon h2, .vizyon h2 {
  color: darkblue;
  font-size: 25px;
  margin-bottom: 10px; /* Başlıklar arasına biraz boşluk eklemek için */
}

.misyon p, .vizyon p {
  color: black;
  font-size: 15px;
  margin-bottom: 20px; /* Paragraflar arasına biraz boşluk eklemek için */
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
.h1{
  background: linear-gradient(to right, #e3b871, #b00101);
  padding-left: 5rem;
  padding-right: 5rem;
  text-align: center;
  padding-top: 10rem;
  height: 35rem;

}
.kutu {
  display: flex;
  flex-direction: column;
  align-items: center;
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