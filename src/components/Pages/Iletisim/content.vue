<template>
  <div class="İletisimBaslık">
<h1 style="margin-top:20px">İletişim</h1>
  </div>
  <div class="row">
    <div class="sıralayıcı sıraLong " >
      <div class="textI">
    <span> E-posta: info@ankatedarik.com <br>Telefon :  0312 312 31 12 <br> Dahili No : 0312 312 13 13 <br> Adres: Turgut özal mah. </span>
      </div>

    </div>
<!--    <div class="textRight">-->
<!--    sfvdddddddddddddd-->
<!--    </div>-->


  </div>
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
.sıraLong{
  width:500px;
}
.textI{
  text-align:left;
  color: black  ;
 font-size: 25px;
line-height:30px;
  margin-left: 100px;
  font-weight: bold;
}
.card {
  width: 20vw;
  height: 254px;
  border-radius: 30px;
  background: lightgrey;
  box-shadow: #046fb7 0px 30px 50px -12px inset, #0220af 0px 18px 26px -18px inset;
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