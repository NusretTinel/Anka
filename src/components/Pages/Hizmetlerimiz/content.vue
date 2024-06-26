<template>
  <div>
    <div class="banner">


    </div>
    <div class="container">
      <div class="service-box">
        <div class="service-text">
          <div class="service-title">
            İthalat
          </div>
          <div class="service-description">
            Global tedarik zincirlerinden ürün temini, gümrük işlemleri ve lojistik hizmetleri konularında uzman olan
            ekibimiz, ihtiyaçlarınıza uygun çözümler sunarak maliyetlerinizi düşürür ve operasyonel verimliliğinizi
            artırır. Müşterilerimize sunduğumuz yenilikçi ithalat stratejileri ile rekabet gücünüzü artırıyoruz.
          </div>
        </div>
        <div class="service-image">
          <img src="@/assets/images/imgAnka/istockphoto-946210052-612x612.jpg">
        </div>
      </div>
      <div class="service-box reverse">
        <div class="service-text">
          <div class="service-title">
            İhracat
          </div>
          <div class="service-description">
            Dünya pazarlarında yer almak isteyen firmalar için kapsamlı ihracat hizmetleri sunmaktayız. Hedef pazarlarda
            doğru müşteri ve iş ortaklarını bulma, ürünlerinizi uluslararası standartlara uygun hale getirme ve tüm
            lojistik süreçlerinizi yönetme konularında profesyonel destek sağlıyoruz. Amacımız, ihracatınızı artırarak
            firmanızın global büyümesini desteklemek ve yeni pazar fırsatlarını değerlendirmenizi sağlamaktır.
          </div>
        </div>
        <div class="service-image">
          <img src="@/assets/images/imgAnka/istockphoto-1454531939-612x612.jpg">
        </div>
      </div>
      <div class="service-box">
        <div class="service-text">
          <div class="service-title">
            Temsilcilikler
          </div>
          <div class="service-description">
            Başka firmaların farklı ülke pazarlarında etkin bir şekilde alım satım yapmalarına yardımcı olmak amacıyla
            temsilcilik hizmetleri sunmaktayız. Yerel pazar bilgisi, stratejik işbirlikleri ve geniş ağımız sayesinde,
            müşterilerimizin yeni pazarlara hızlı ve etkili bir şekilde girmelerini sağlıyoruz. Temsilcilik
            hizmetlerimiz, firmanızın global büyüme hedeflerine ulaşması için gerekli olan tüm destek ve kaynakları
            sunar.
          </div>
        </div>
        <div class="service-image">
          <img src="@/assets/images/imgAnka/istockphoto-1351647010-612x612.jpg">
        </div>
      </div>
      <div class="service-box reverse">
        <div class="service-text">
          <div class="service-title">
            Kamu İhaleleri
          </div>
          <div class="service-description">
            Kamu sektörü için sunduğumuz ihale hizmetleri, müşterilerimizin kamu ihalelerine katılım süreçlerinde
            başarılı olmalarını hedefler. İhale dokümanlarının hazırlanması, tekliflerin oluşturulması ve yasal mevzuata
            uygunluk konularında uzman ekibimizle yanınızdayız. Kamu ihalelerindeki deneyimimiz sayesinde,
            projelerinizin her aşamasında size rehberlik ederek, ihalelerdeki başarı oranınızı artırıyoruz.
          </div>
        </div>
        <div class="service-image">
          <img src="@/assets/images/imgAnka/istockphoto-1057613520-612x612.jpg">
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
body {
  background-color: #f8f9fa;
  font-family: 'Calibri', sans-serif;
  color: #090849;
}

.banner {
  position: relative;
  text-align: center;
  color: white;
}

.banner-img {

}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-family: 'Arial Black', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.service-box {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.service-box::before,
.service-box::after {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #090849;
  transform: rotate(45deg);
  z-index: -1;
}

.service-box::before {
  top: -50px;
  left: -50px;
}

.service-box::after {
  bottom: -50px;
  right: -50px;
}

.service-box:hover::before,
.service-box:hover::after {
  transform: rotate(45deg) scale(1.2);
  transition: transform 0.3s ease-in-out;
}

.service-box.reverse {
  flex-direction: row-reverse;
}

.service-text {
  flex: 1;
  padding: 20px;
}

.service-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #090849;
  position: relative;
  padding-bottom: 10px;
}

.service-title::before {
  content: '';
  display: block;
  width: 100%;
  height: 5px;
  background-color: #090849;
  position: absolute;
  bottom: 0;
  left: 0;
}

.service-description {
  font-size: 20px;
  line-height: 1.6;
  color: #333;
  font-weight: 400;
  text-align: left;
}

.service-image {
  flex: 1;
  text-align: center;
}

.service-image img {
  max-width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .service-box {
    flex-direction: column;
  }

  .service-box.reverse {
    flex-direction: column;
  }

  .service-image img {
    height: 300px;
  }

  .service-description {
    font-size: 18px;
  }

  .service-title {
    font-size: 24px;
  }
}
</style>
