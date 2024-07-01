<template>

  <!-- Footer -->
  <footer class="kapsayici text-center  bg-body-tertiary text-muted">


    <!-- Section: Links  -->
    <section class="" style="background: linear-gradient(to right, #000912,#000f23,#000912);">
      <div class="container text-center text-md-start mt-5" style="padding: 10px; color:#d2d2d2; font-weight: bold" >
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4" style="color: #d3d1d1">
              <i class="fas fa-gem me-3">  </i>Anka Tedarik Eğitim ve Danışmanlık A.Ş
            </h6>
            <p style="color: #d2d2d2">
              Her işte bir fırsat gören Anka Tedarik, kalitenin zirvesine ulaşmanız için güçlü kanatlarıyla size
              rehberlik ediyor. Ürünlerimizdeki kalite standartları, sadece tedarik değil, aynı zamanda işinizin itici
              gücü olmaya aday.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2   mx-auto mb-4">
            <!-- Links -->
            <div class="" style="white-space: nowrap ;display-direction:column; justify-content:center;align-items:center  ">
            <h6 class="text-uppercase fw-bold mb-4" style="color: #d3d1d1">
             Hizmetlerimiz
            </h6>
            <p>
              <a class="linkFooter" style="white-space: nowrap" href="#!">Tedarik</a>
            </p>
            <p>
              <a class="linkFooter" style="white-space: nowrap" href="#!">İthalat</a>
            </p>
            <p>
              <a class="linkFooter" style="white-space: nowrap" href="#!">İhracat</a>
            </p>
            <p>
              <a class="linkFooter" style="white-space: nowrap" href="#!">İhaleler</a>
            </p>
              <p>
                <a class="linkFooter" style="white-space: nowrap" href="#!">Temsilcilikler</a>
              </p>
            </div>
          </div>


          <div class=" col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style="">

            <h6 class="text-uppercase fw-bold mb-4" style="color: #D3D1D1FF">İletişim</h6>
            <p><i class="fas fa-home me-3"></i> Ankara/Batıkent</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              info@ankatedarik.com
            </p>
            <p><i class="fas fa-phone me-3"></i> +90 0542 257 28 66</p>
            <p><i class="fas fa-print me-3"></i> +90 312 256 15 00</p>
          </div>

        </div>

      </div>
    </section>



    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2023 Copyright: Anka Tedarik Eğitim Ve Danışmanlık A.Ş

    </div>

  </footer>



</template>
<script>
export default {
  name: 'footerPage'
}
</script>
<style>
.kapsayici {
  position: relative; /* Change from fixed to relative */
  bottom: 0;
  align-content: center;
  color: #9a1e1e;
  width: 100%;
  background-color: #18b3cc;
height: 35vh;
}
.linkFooter{
  color:#d2d2d2;
}
.linkFooter:hover{
  color: #0096c7;
}

</style>