<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img width="600px" height="300px" src="../../../assets/images/imgAnka/logo.png">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="#">Ana Sayfa <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="#">Hizmetlerimiz</a>
        <a class="nav-item nav-link" href="#">Hakkımızda</a>
        <a class="nav-item nav-link" href="#">İletişim</a>
      </div>
    </div>
  </nav>

  <div class="footer-logo">
    <ul style="display: flex">
      <li>
        <a href="mailto:info@ankatedarik.com" target="blank"><i class="fas fa-envelope"></i></a>
      </li>
      <li>
        <a href="tel:+90 542 257 28 66"><i class="fas fa-phone"></i></a>
      </li>
      <li>
        <a href="https://www.google.com/maps/dir/39.9245312,32.8237056/Yeni+Batı,+2401.+Sk.+No:10,+06370+Yenimahalle%2FAnkara/@39.9433593,32.589958,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14d3364d993fb63b:0x10adcbcc312d295a!2m2!1d32.6854079!2d39.9778253?entry=ttu" target="_blank">
          <i class="fas fa-map-marker-alt"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navbarPage',
  components: {},
  props: {
    image: {
      type: String,
      default: 'logo.png',
    },
    darkClass: {
      type: Object,
    },
  },
  data: () => ({
    test: null,
    value: null,
    options: ['English', 'Bangla', 'Hinde'],
    searchText: null,
    submitted: {
      searchText: null,
    },
  }),
};
</script>
<style>

.navbar{
  background-color:blue !important;
}
.navbar-nav{

}
.navbar-nav .nav-item {
  margin-right: 50px;
  font-size: 20px;
  font-family:monospace;
  margin-top: 10px;
color:black !important;
  background-color: #e5e6e7!important;

}

.navbar-nav .nav-item:first-child {
  margin-left: 300px; /* İlk linkin sağ tarafına boşluk ekleme */
}
.logo_title {
  color: #c11627;
}
.ribbon-logo-aeo_container {
  position:absolute;
  width: 30%;
}
.form_ani, .input_ani, .caret {
  margin: auto;
}

.form_ani {
  position: relative;
  width: 100%;
  max-width: 18em;
}
footer-logo{
  background-color: #0c5460;
}
.input_ani, .caret {
  display: block;
  transition: all calc(1s * 0.5) linear;
  color: #c11627;
}

.input_ani:hover {
  cursor: pointer;
}
.anka{
  font-family:Agency FB;
  align-items: center;
  display:block;
  color:#c11627;
  padding-left: 20%;
}



.input_ani {
  background: transparent;
  border-radius: 50%;
  box-shadow: 0 0 0 0.25em inset;
  caret-color: #c11627;
  width: 2em;
  height: 2em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #c11627;
}

.input_ani:focus, .input_ani:valid {
  background: #ffffff;
  border-radius: 0.25em;
  box-shadow: none;
  padding: 0.75em 1em;
  transition-duration: calc(1s * 0.25);
  transition-delay: calc(1s * 0.25);
  width: 100%;
  height: 3em;
}

.input_ani:focus {
  animation: showCaret 1s steps(1);
  outline: transparent;
}

.input_ani:focus + .caret, .input_ani:valid + .caret {
  animation: handleToCaret 1s linear;
  background: transparent;
  width: 1px;
  height: 1.5em;
  transform: translate(0, -1em) rotate(-180deg) translate(7.5em, -0.25em);
}

.input_ani::-webkit-search-decoration {
  -webkit-appearance: none;
}

.label_ani {
  color: #e3e4e8;
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
}

.caret {
  background: #c11627;
  border-radius: 0 0 0.125em 0.125em;
  margin-bottom: -0.6em;
  width: 0.25em;
  height: 1em;
  transform: translate(0, -1em) rotate(-45deg) translate(0, 0.875em);
  transform-origin: 50% 0;
}

@keyframes showCaret {
  from {
    caret-color: transparent;
  }
  to {
    caret-color: #c11627;
  }
}

@keyframes handleToCaret {
  from {
    background: currentColor;
    width: 0.25em;
    height: 1em;
    transform: translate(0, -1em) rotate(-45deg) translate(0, 0.875em);
  }
  25% {
    background: currentColor;
    width: 0.25em;
    height: 1em;
    transform: translate(0, -1em) rotate(-180deg) translate(0, 0.875em);
  }
  50%, 62.5% {
    background: #c11627;
    width: 1px;
    height: 1.5em;
    transform: translate(0, -1em) rotate(-180deg) translate(7.5em, 2.5em);
  }
  75%, 99% {
    background: #c11627;
    width: 1px;
    height: 1.5em;
    transform: translate(0, -1em) rotate(-180deg) translate(7.5em, -0.25em);
  }
  87.5% {
    background: #c11627;
    width: 1px;
    height: 1.5em;
    transform: translate(0, -1em) rotate(-180deg) translate(7.5em, 0.125em);
  }
  to {
    background: transparent;
    width: 1px;
    height: 1.5em;
    transform: translate(0, -1em) rotate(-180deg) translate(7.5em, -0.25em);
  }
}


.select-lang {
  border: 1px solid #bababa;
  width: 100px;
  padding: 2px;
  color: #17191d;
  outline: none;
  border-radius: 7px;
}

.logo-pic {
  width: 100px;
  display: inline;
  margin-right: 20px;
}

.main-title {
  display: inline-block;
  font-size: 35px;
  position: absolute;
  transform: translate(0px, 50px);
  color: #c51e2f;
}


@media (max-width: 576px) {
  .icon_item {
    width: 5px;
  }

  .banner_container {
    height: 80px;
    align-items: center;
  }

  .banner_container .icon_container {
    height: 45px;
    align-items: center;
  }

  .banner_container img {
    max-width: 180%;
  }
}

@media (max-width: 768px) {
  .banner_container {
    height: 100px;

  }

  .banner_container img {
    max-width: 180%;
  }

  .banner_img_ata {
    display: none;
  }

  .banner_text {
    display: none;
  }
}

@media (min-width: 768px) {

  .mobile_banner {
    display: none;
  }

}

@media (min-width: 992px) {
  .header-menubar .container {
    max-width: 1800px;
  }

  .nav-container {
    justify-content: center;
  }

}


@media (min-width: 1200px) {

}

.web_banner {
  display: none;
}

@media (max-width: 768px) {
  .web_banner {
    display: none;
  }
}
.headerkonum {
  position: absolute;
  top: 0px;
  z-index: 2;
}

</style>
