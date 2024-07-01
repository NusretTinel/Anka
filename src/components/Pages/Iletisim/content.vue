<template>
  <div class="İletisimBaslık">
    <h1 style="margin-top:20px">İletişim</h1>

  </div>

  <div class="row contentOrtalayici" >

    <div class="textContentI1">
      <span> E-posta: info@ankatedarik.com <br>Telefon : 0 542 257 28 66 <br> Sabit Telefon : 0 312 256 15 00 <br>  Telefon(whatsapp) : 0 538 415 46 41 <br> Adres:  batıkent ankara, Yeni Batı, 2401. Sk., 06370 Yenimahalle/Ankara </span>
    </div>

<!--    <div class="textContentI2">-->
<!--      <div class="card  " style="margin-bottom: 150px">-->
<!--        <span class="title">Bizimle İletişime Geç</span>-->
<!--        <form class="form">-->
<!--          <div class="group">-->
<!--            <input placeholder="‎" required="" type="text">-->
<!--            <label for="name">İsim</label>-->
<!--          </div>-->
<!--          <div class="group">-->
<!--            <input id="email" name="email" placeholder="‎" required="" type="email">-->
<!--            <label for="email">Email</label>-->
<!--          </div>-->
<!--          <div class="group">-->
<!--            <textarea id="comment" name="comment" placeholder="‎" required="" rows="5"></textarea>-->
<!--            <label for="comment">Yorum</label>-->
<!--          </div>-->
<!--          <button type="submit">Gönder</button>-->
<!--        </form>-->
<!--      </div>-->
<!--    </div>-->


  </div>
  <!--    <div class="textRight">-->
  <!--    sfvdddddddddddddd-->
  <!--    </div>-->


  <h1> Adres</h1>
  <div class="ortalayici">
    <GoogleMap
        :center="center"
        :zoom="15"
        api-key="AIzaSyBeSGEq66rhD952IMWDFO2E4sXx7-Uromg"
        style="width: 100%; height: 500px"

    >
      <Marker :options="{ position: center }"/>
    </GoogleMap>
  </div>


</template>

<script>
import {defineComponent, ref} from 'vue'
import {GoogleMap, Marker} from 'vue3-google-map'

export default defineComponent({
  name: 'ComponentPage',
  components: {
    GoogleMap,
    Marker
  },
  setup() {
    const center = ref({lat: 51.208666, lng: 6.821895})

    return {
      center
    }
  }
})
</script>

<style>

@media (max-width: 1191px) {
  .textContentI1 {
   margin-left:20px;
    align-items: center;
    display: flex;
    color: black;
    font-size: 18px;
    font-weight: bold;
    line-height: 50px;
    width: fit-content ;
    margin-bottom: 150px;
    text-align: left;
  }
}
@media (min-width: 1192px) {
  .textContentI1 {
    margin-left: 100px;
    margin-right: 100px;
    align-items: center;
    display: flex;
    color: black;
    font-size: 25px;
    font-weight: bold;
    line-height: 50px;
    width: fit-content ;
    margin-bottom: 150px;
    text-align: left;
  }
}
.contentOrtalayici{
  align-items: center;
  display: flex;
  justify-content: center;
}

.textContentI2 {
  margin-left: 100px;
  margin-right: 100px;
  align-items: center;
  display: flex;
  color: black;
  font-size: 25px;
  font-weight: bold;
  line-height: 30px;
  width: fit-content ;
  margin-top: 50px;
}
.card {
  height: 320px;
  background-color: #fdfdfd;
  border-radius: 10px;
  padding: 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}

.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.group {
  position: relative;
}

.form .group label {
  font-size: 14px;
  color: rgb(99, 102, 102);
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: #fff;
  transition: all .3s ease;
}

.form .group input,
.form .group textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  outline: 0;
  width: 100%;
  background-color: transparent;
}

.form .group input:placeholder-shown + label, .form .group textarea:placeholder-shown + label {
  top: 10px;
  background-color: transparent;
}

.form .group input:focus,
.form .group textarea:focus {
  border-color: #3366cc;
}

.form .group input:focus + label, .form .group textarea:focus + label {
  top: -10px;
  left: 10px;
  background-color: #fff;
  color: #3366cc;
  font-weight: 600;
  font-size: 14px;
}

.form .group textarea {
  resize: none;
  height: 100px;
}

.form button {
  background-color: #3366cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form button:hover {
  background-color: #27408b;
}


.sıraLong {
  width: 500px;
}

.textI {

  color: black;
  font-size: 25px;
  line-height: 30px;
  margin-left: 100px;
  font-weight: bold;
}


.İletisimBaslık {
  font-weight: bold;
  font-size: 30px;
  color: #000000;
  display: flex;
  justify-content: center; /* Yatayda ortalar */
  align-items: center;
}

.kutu1 {
  font-weight: bold;
  color: black;
  font-size: 10px;
  text-align: center; /* Yazıyı yatayda ortala */
  width: 30vw;
  font-size: 30px;
}


.iletisim-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
}

.iletisim-item {
  padding: 10px;
  background-color: black;
  height: 400px;
  margin: 10px 0;
  font-family: SandrinaRegular, Sandrina;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: white;
}

//justify-content: center; /* Yatayda ortalar */ //align-items: center;  /* Yatayda ortalar */ border-radius: 10px; border-color: black;

</style>