<template>
  <div>
    <footer class="footer-area-aeo mb-3">
      <div class="container">
        <div style="padding-top: 5vh" class=" ">
          <div class="row align-items-center">

            <div class="col-lg-6 col-md-6">
              <div class="footer-logo d-flex justify-content-center">
                <ul class="mt-0 text-center">
                  <p class="mb-1">Bizi Takip Edin...</p>
                  <li>
                    <a href="https://twitter.com/ankaraeczaci"
                    ><i class="fab fa-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://tr-tr.facebook.com/ankaraeczaci/"
                    ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a
                        href="https://www.youtube.com/channel/UCc6oChnQtwkTlTQd-NT09OA"
                    ><i class="fab fa-youtube"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ankaraeczaci/"
                    ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="footer-newaletter">
                <!-- <div class="input-box">
                  <input type="text" placeholder="E-Posta Adresinizi Giriniz." />
                  <button type="button" class="submit-button">GİRİŞ YAP</button>
                </div> -->

                <div class="footer-logo d-flex justify-content-center">
                  <div
                      class="d-flex flex-column justify-content-center text-center"
                  >
                    <p class="me-5">AEO Nöbet</p>
                    <ul class="mt-0 text-center me-5">
                      <li>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.aeo.nobet"
                        ><i class="fa-brands fa-android"></i
                        ></a>
                      </li>
                      <li>
                        <a
                            href="https://apps.apple.com/us/app/aeo-n%C3%B6bet/id1419817490?ign-mpt=uo%3D2"
                        ><i class="fa-brands fa-apple"></i
                        ></a>
                      </li>
                    </ul>
                  </div>

                  <div
                      class="d-flex flex-column justify-content-center text-center"
                  >
                    <p class="me-5">AEO Rehber</p>
                    <ul class="mt-0 text-center">
                      <li>
                        <a
                            href="https://play.google.com/store/apps/details?id=aeo.com.aeorehber&pli=1"
                        ><i class="fa-brands fa-android"></i
                        ></a>
                      </li>
                      <li>
                        <a
                            href="https://apps.apple.com/tr/app/aeo-rehber/id1188315741"
                        ><i class="fa-brands fa-apple"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://mvc.aeo.org.tr/AeoRehber/RehberGiris"
                        ><i class="fa-sharp fa-solid fa-globe"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                  class="copyright-item d-block d-md-flex justify-content-between align-items-center"
              >
                <p>Imontech© Copyright 2023, All Rights Reserved</p>
                <ul>

                  <li>
                    <router-link tag="a" to="/"
                    >Gizlilik Politikası
                    </router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>


export default {
  data: () => ({

  }),
};
</script>

<style scoped>
.footer_sub {
  cursor: pointer;
}

.footer-area-aeo {
  background: #17222b;
  position: relative
;
  /*bottom: 0;*/
  width: 100%;
  height: 12.5rem; /* Footer height */
}

</style>
