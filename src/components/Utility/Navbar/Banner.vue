<template>
  <div class="header-area" style="display: block;">
    <div class="sliding_banner">
      <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
                src="@/assets/images/TopBanner/anitkabir.jpg"
                class="d-block w-100"
                alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
                src="@/assets/images/TopBanner/atakule.jpg"
                class="d-block w-100"
                alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
                src="@/assets/images/TopBanner/meclis.jpg"
                class="d-block w-100"
                alt="..."
            />
          </div>
        </div>
      </div>
    </div>
    <img class="ribbon-Ataturk" src="@/assets/images/Ataturk-Bayrak/Ataturk-TurkBayragi.png"
         alt="Atatürk ve Türk Bayrağı"/>

    <!--    <div class="header-centerbar">
          <div class="">
            <div class="row align-items-center justify-space-between">
              <div class="banner_container col-12">
                <div class="logo">
                  <div class="mobile_banner">
                    &lt;!&ndash; <img :src="require(`@/assets/images/` + image)" alt="feature" /> &ndash;&gt;
                    &lt;!&ndash; <img class="logo-pic" src="@/assets/images/logo.jpg" alt="" /> &ndash;&gt;
                    <router-link to="/" tag="a">
                      &lt;!&ndash; <img
                      class="banner_img w-100"
                      src="@/assets/images/mobile-ataturk-banner.png"
                      alt=""
                    /> &ndash;&gt;
                      &lt;!&ndash; <h2 class="main-title">ANKARA ECZACI ODASI</h2> &ndash;&gt;
                    </router-link>
                  </div>

                  <div
                      class="web_banner row justify-content-between align-items-center"
                  >
                    &lt;!&ndash; <div class="col-md-12">
                      <router-link to="/" tag="a" class="d-flex">
                        <img
                            class="banner_img banner_img_logo"
                            src="@/assets/images/banner-cem.jpg"
                            alt=""
                        />

                      </router-link>

                    </div> &ndash;&gt;

                    &lt;!&ndash; arama &ndash;&gt;

                    &lt;!&ndash; <div class="icon_container banner_text col-md-3 d-flex justify-content-start align-items-start">
                      <form class="form_ani">
                        <i class="label_ani" for="search">Search</i>
                        <input v-model="searchText" @keypress.enter="login" class="input_ani text_white" id="search"
                               type="search" pattern=".*\S.*" required>
                        <span class="caret"></span>
                      </form>
                      <p>{{ submitted.searchText }}</p>
                    </div>
                    <div class="col-md-4 d-flex justify-content-end">
                      <img
                          class="banner_img banner_img_ata"
                          src="@/assets/images/web-banner-ata.png"
                          alt=""
                      />
                    </div> &ndash;&gt;
                  </div>
                </div>
              </div>

              &lt;!&ndash; <div class="icon_container col-3">
                <div class="header-menu-search ">
                  <ul class="search_login row justify-content-center">
                    <li class="col-2">
                      <router-link to="/search" tag="a">
                        <i
                          class="icon_item fa-sharp fa-solid fa-magnifying-glass text-danger fs-5 fw-light"
                        ></i>
                      </router-link>
                    </li>
                    <li class="col-2">
                      <a href="https://mvc.aeo.org.tr/account/login"
                        ><i class="icon_item fa-regular fa-user text-danger fs-5"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div> &ndash;&gt;
            </div>
          </div>
        </div>-->
  </div>
</template>

<script>
// import TopBar from "./TopBar.vue";


export default {
  components: {},
  props: {
    image: {
      type: String,
      default: "logo.png",
    },
    darkClass: {
      type: Object,
    },
  },
  data: () => ({
    value: null,
    options: ["English", "Bangla", "Hinde"],
    searchText: null,
    submitted: {
      searchText: null,
    },
  }),
  methods: {
    hideSidebar(e) {
      this.$emit("toggleSidebar", e);
    },
    login() {
      this.$store.state.searchModule.keywordToSearch = this.searchText;
      this.$router.push("/search");
      //this.$router.push({ name: 'Search', params: { text: this.searchText } })
    },
  },
};
</script>
<style>

.opac_banner_item {
  background-color: rgba(0, 0, 0, 0.8);
  height: 60px;
}

.carousel {
  position: relative;
}

.sliding_banner {
  padding: 0px;
}


@media (max-width: 575.98px) {
  .banner_img_logo {
    width: 100px;
    height: 100px;
  }

  .logo_title {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.7rem;
  }

  .banner_img_ata {
    display: none;
  }

  .form_ani {
    display: none;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .banner_img_logo {
    width: 100px;
    height: 100px;
  }

  .logo_title {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.7rem;
  }

  .form_ani {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .banner_img_logo {
    width: 90px;
    height: 90px;
  }

  .logo_title {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.7rem;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .banner_img_logo {
    width: 110px;
    height: 110px;
  }

  .logo_title {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.7rem;
  }
}

@media (min-width: 1200px) {
  .banner_img_logo {
    width: 120px;
    height: 120px;
  }

  .logo_title {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 2rem;
  }
}

.logo_title {
  color: #c11627;
}

.form_ani,
.input_ani,
.caret {
  margin: auto;
}

.form_ani {
  position: relative;
  width: 100%;
  max-width: 18em;
}

.input_ani,
.caret {
  display: block;
  transition: all calc(1s * 0.5) linear;
  color: #c11627;
}

.input_ani:hover {
  cursor: pointer;
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

.input_ani:focus,
.input_ani:valid {
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

.input_ani:focus + .caret,
.input_ani:valid + .caret {
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
  50%,
  62.5% {
    background: #c11627;
    width: 1px;
    height: 1.5em;
    transform: translate(0, -1em) rotate(-180deg) translate(7.5em, 2.5em);
  }
  75%,
  99% {
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

}

@media (max-width: 992px) {
  .aeotext {
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
    max-width: 1900px;
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

.aeotext {
  color: #fff;
  float: left;
  padding-left: 20%;
  padding-top: 5px;
  text-align: left !important;
  width: 100%;
}

.ribbon-logo-aeo {
  width: 150px;
  margin-left: 150px;
  position: absolute;
  top: 20px;
  z-index: 99999;
}

.ribbon-Ataturk {
  width: 20%;
  margin-left: 50px;
  position: absolute;
  top: 5vh;
  z-index: 99998;

}

/*.navbar_container {
  z-index: 2;
}*/
</style>
