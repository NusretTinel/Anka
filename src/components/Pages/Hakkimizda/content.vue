<template>
  <div>
    <div class="row banner ">
      <img src="@/assets/images/Tema/space.jpg" style="height: 30vh">
      <div class="imageonw">
        Biz Kimiz ?
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="  about-us-w " style="display: flex; justify-content: center; font-weight: bold; font-size: 40px">
          Biz kimiz
        </div>
        <div class="  about-us-w ">
          Anka Tedarik Eğitim ve Danışmanlık A.Ş. olarak, kuruluşumuzdan bu yana, kamu ihaleleri, doğrudan temin, tedarik ve satın alma, ithalat ve ihracat gibi çeşitli alanlarda sunduğumuz hizmetlerle Türkiye’deki saygın konumumuzu sağlamlaştırmış bulunmaktayız. Yenilikçi yaklaşımlarımız ve sürekli gelişim anlayışımız sayesinde, müşterilerimizin ihtiyaçlarına yönelik özelleştirilmiş çözümler üretmekteyiz.

          Mistral GMBH kimliği altında, Avrupa pazarına adım atmış bulunuyoruz. Bu yeni dönemde, satın alma süreçlerindeki derin deneyimimizi ve alanında uzman kadromuzu ön plana çıkararak, yeni teknolojilerle harmanladığımız çözümlerimizle Almanya ve Avrupa ülkelerinde de fark yaratmayı hedefliyoruz. Sürdürülebilir başarılar ve karşılıklı güven temelinde ilerleyerek, uluslararası arenada da adımızdan söz ettirecek projelere imza atmayı amaçlıyoruz.Ayrıca, eğitim ve danışmanlık hizmetlerimizle, müşterilerimizin ve iş ortaklarımızın sektördeki gelişmelerden haberdar olmalarını sağlamakta ve onların kapasitelerini artırmalarına katkıda bulunmaktayız.Mistral GMBH olarak, uluslararası ticaret ve iş geliştirme alanlarında, yenilikçi ve sürdürülebilir stratejilerimizle, sektördeki varlığımızı güçlendirmeye ve genişletmeye devam edeceğiz. İş birliklerimizi ve ağımızı genişleterek, global pazarda rekabet avantajı elde etmeyi ve müşterilerimize daha iyi hizmet sunmayı sürdüreceğiz.
        </div>
      </div>
      <div class="row  " style="margin-top:40px">
        <img src="@/assets/images/imgAnka/whiteAnkaS.png">

      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="  about-us-w " style="display: flex; justify-content: center; font-weight: bold; font-size: 40px">
          Vizyonumuz
        </div>
      </div>
      <div class="kapsa">
        <div class="row">

          <div class="col-lg-12">
            <!--            <div class="  about-us-w "-->
            <!--                 style="display: flex; justify-content: center; font-weight: bold; font-size: 40px">-->
            <!--              Lorem ipsum dolor-->
            <!--            </div>-->
            <div class="  about-us-w " style="margin-top: 10px;">


              Firmamız, küresel pazarda öncü bir rol üstlenmeyi hedefleyen, sürdürülebilir büyüme ve mükemmellik yolunda ilerleyen bir tedarik zinciri şirketidir. Her bir çalışanımız, ortak bir vizyon etrafında kenetlenmiş olup, paydaşlarımızın beklentilerini aşan hizmetler sunmayı amaçlamaktadır. Bu doğrultuda, alanında uzman insan kaynağı yetiştirme ve yenilikçi yaklaşımlarla kendi teknolojilerimizi geliştirme konusunda sürekli kendimizi yenilemekteyiz.

              Stratejik ortaklıklar ve iş birlikleri kurarak, sektördeki yenilikleri takip eden ve uygulayan bir yapıya sahibiz. Kalite yönetimi ve sürekli iyileştirme prensipleriyle donatılmış, etik değerlere bağlı bir iş anlayışıyla hareket ediyoruz. Küresel rekabet koşullarında, teknolojik gelişmeleri yakından izleyerek, verimliliği artıran ve maliyetleri optimize eden çözümler üretmekteyiz.

              Müşteri odaklılık, bizim için sadece bir ilke değil, aynı zamanda sürdürülebilir başarının anahtarıdır. Bu nedenle, müşteri memnuniyetini en üst düzeyde tutmak için esnek ve hızlı çözümler sunuyoruz.Uluslararası standartlarda hizmet veren şirketimiz, kalite ve güvenin simgesi olarak sektördeki yerini sağlamlaştırmayı hedeflemektedir.


            </div>
          </div>
        </div>
      </div>
      <div class="row  " style="margin-top:40px">
        <img src="@/assets/images/imgAnka/blackmistral.png">

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
.kapsa {
  display: flex;
  margin-top: 5vh;

}

.about-us-w {
  font-size: 25px;
  line-height: 40px;
  margin-top: 50px;
  color: black;
  text-align: start;
  font-weight: 400
}

.imageonw {
  z-index: 999;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: 120px;
  font-family: SandrinaRegular, Sandrina;
  font-weight: bold;
  font-size: 80px;
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