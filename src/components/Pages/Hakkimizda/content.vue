<template>
  <div>
    <div class="row banner ">
      <img src="@/assets/images/Tema/wallpaperflare.com_wallpaper.jpg" style="height: 30vh">
      <div class="imageonw">
        Biz Kimiz ?
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="  about-us-w " style="display: flex; justify-content: center; font-weight: bold; font-size: 40px">
          Lorem ipsum dolor
        </div>
        <div class="  about-us-w ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare massa nec diam euismod vestibulum. Duis
          eros
          leo, mollis rhoncus velit quis, elementum pharetra ante. Mauris vehicula massa facilisis lorem dignissim
          tempor
          et
          in purus. Integer rutrum tempor vehicula. In tristique metus sed leo finibus, in placerat lorem placerat. Sed
          justo sem, facilisis nec sem quis, tempor fringilla neque. Morbi sed suscipit lectus. Aliquam erat volutpat.
          Morbi
          magna elit, consectetur maximus eleifend ac, iaculis at elit. Phasellus sit amet semper sem. Nulla facilisi.
          Etiam
          gravida nisl ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          Nulla tincidunt odio eu dui efficitur consectetur.

          Donec faucibus varius ligula, sed laoreet lorem eleifend bibendum. Suspendisse dignissim quis nibh ac
          pharetra.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam et
          hendrerit
          ligula. Donec sit amet nisi felis. Pellentesque leo elit, blandit sit amet semper ut, consectetur eu enim.
          Curabitur condimentum purus tincidunt sem condimentum, nec elementum risus gravida. Suspendisse potenti.
          Aliquam
          lectus dolor, tincidunt ut nunc et, tempus rhoncus est. Mauris imperdiet tempus urna, ac egestas nunc.

          Donec vitae congue ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam nec porta tortor. Maecenas convallis bibendum dolor, a euismod diam congue vel. Vivamus ut
          mi
          vitae erat luctus egestas commodo a ligula. Donec orci nibh, dictum et ipsum vitae, blandit tincidunt eros.
          Fusce
          imperdiet non nunc non rhoncus. Proin pulvinar nec turpis et rutrum.
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="  about-us-w " style="display: flex; justify-content: center; font-weight: bold; font-size: 40px">
          Vizyonumuz
        </div>
      </div>
      <div class="kapsa" >
        <div class="row">
          <div class="col-lg-4" style="padding-top: 6vh ; " >
            <img src="@/assets/truck.jpg">
          </div>
          <div class="col-lg-8">
<!--            <div class="  about-us-w "-->
<!--                 style="display: flex; justify-content: center; font-weight: bold; font-size: 40px">-->
<!--              Lorem ipsum dolor-->
<!--            </div>-->
            <div class="  about-us-w " style="margin-top: 10vh;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare massa nec diam euismod vestibulum.
              Duis
              eros
              leo, mollis rhoncus velit quis, elementum pharetra ante. Mauris vehicula massa facilisis lorem dignissim
              tempor
              et
              in purus. Integer rutrum tempor vehicula. In tristique metus sed leo finibus, in placerat lorem placerat.
              Sed
              justo sem, facilisis nec sem quis, tempor fringilla neque. Morbi sed suscipit lectus. Aliquam erat
              volutpat.
              Morbi
              magna elit, consectetur maximus eleifend ac, iaculis at elit. Phasellus sit amet semper sem. Nulla
              facilisi.
              Etiam
              gravida nisl ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
              Nulla tincidunt odio eu dui efficitur consectetur.


            </div>
          </div>
        </div>
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
.kapsa{
  display: flex;
  margin-top: 5vh;

}
.about-us-w {
  font-size: 2em;
  line-height: 4vh;
  margin-top: 5vh;
  color: black;
 text-align: start;
}

.imageonw {
  z-index: 999;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: 12vh;
  font-family: SandrinaRegular, Sandrina;
  font-weight: bold;
  font-size: 5em;
  color: #ffffff;
}

.banner {

  height: 30vh;
  width: 100vw;
  background-color: transparent;


}

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

.h1 {
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