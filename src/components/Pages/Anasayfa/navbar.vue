<template>
  <div>
    <div class="nav-menu" @click="showMenu">
      <i class="fas fa-bars"></i>

      <div :class="{ 'open-menu': showMobileMenu, 'closed-menu': !showMobileMenu }" class="nav-content">
        <a class="navbar-brand" href="#">
          <img width="260px" height="89px" src="@/assets/images/imgAnka/logo.png"></a>
        <div class="footer-logo">
          <ul style="display: flex">

            <li>
              <button class="li-button">Hizmetlerimiz</button>
            </li>
            <li>
              <button class="li-button">Hakkımızda</button>
            </li>
            <li>
              <button class="li-button">İletişim</button>
            </li>
            <li><a href="mailto:info@ankatedarik.com" target="_blank"><i class="fas fa-envelope"></i></a></li>
            <li><a href="tel:+905422572866" target="_blank"><i class="fas fa-phone"></i></a></li>
            <li>
              <a href="https://www.google.com/maps/dir/39.9245312,32.8237056/Yeni+Batı,+2401.+Sk.+No:10,+06370+Yenimahalle%2FAnkara/@39.9433593,32.589958,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14d3364d993fb63b:0x10adcbcc312d295a!2m2!1d32.6854079!2d39.9778253?entry=ttu"
                 target="_blank">
                <i class="fas fa-map-marker-alt"></i>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div></div>
</template>

<style lang="scss" scoped>
/* Font Awesome stil dosyasını burada içe aktar */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

.li-button {
  background-color: #adb5bd;
  color:black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}


.nav-menu {
  height: 130px;
  background-color:#adb5bd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-family: monospace;
  font-size: 18px;
  width: 100%;
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  & li {
    padding: 0 10px;
  }

  /* Additional styles for the items inside the ul */
  a {
    text-decoration: none; /* Remove underlines from links */
    color: black; /* Set the color for links */
    font-size: 16px; /* Set the font size for links */
  }

  i {
    font-size: 20px; /* Set the font size for the icons */
    margin-right: 5px; /* Add some right margin to the icons */
  }
}
/* Mobile version - hidden hamburger menu */
@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
  }

  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: absolute;
    top: 75px;
    left: 0;
    right: 0;
    background-color: white;
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: all 0.2s ease-out;
  }

  .open-menu {
    opacity: 1;
    height: auto;
  }

  .nav-items {
    flex-direction: column;
    width: 100%;
    text-align: center;

    li {
      padding: 10px 0;
    }
  }

  i {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
  }
}
</style>

<script>
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  name: 'navbarPage',
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>
