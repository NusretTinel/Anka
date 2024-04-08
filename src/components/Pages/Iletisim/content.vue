<template>
  <div style="margin-top: 5vh">
    <div class="row ">
      <span class="İletisimBaslık"> İLETİŞİM</span>
    </div>

    <div class="row">
      <div class="iletisimIcerik">
        <div class="row" style="color: black">

          <span class="kutu1" style="text-align: center"> E-Posta</span>

        </div>
      </div>
      <div class="iletisimIcerik">
        <div class="row" style="color: black">

          <span class="kutu1" style="text-align: center"> Sosyal Medya</span>

        </div>
      </div>
      <div class="iletisimIcerik">
        <div class="row" style="color: black">

          <span class="kutu1" style="text-align: center"> Telefon</span>

        </div>
      </div>
    </div>


  </div>
</template>
<script>
export default {
  name: 'componentPage'
}
</script>
<style>
.İletisimBaslık {
  font-weight: bold;
  font-size: 30px;
  color: #000000;
  display: flex;
  justify-content: center; /* Yatayda ortalar */
  align-items: center;
  height: 5vh;
}

.kutu1 {
  font-weight: bold;
  color: black;
  font-size: 10px;
  text-align: center; /* Yazıyı yatayda ortala */
  width: 30vw;
  font-size: 30px;
}

.iletisimIcerik {
  margin-top: 5vh;
  margin-left: 3vw;
  height: 30vh;
  width: 30vw;
  background: linear-gradient(to top, #c1c1c1, #ffffff);
font-family: SandrinaRegular, Sandrina;
  display: flex;
//justify-content: center; /* Yatayda ortalar */ //align-items: center;  /* Yatayda ortalar */ border-radius: 10px; border-color: black;
}
</style>