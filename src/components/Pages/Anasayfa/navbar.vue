<template>
  <MDBNavbar
      light style="background-color: transparent"
      class="d-flex justify-content-between"
      container
      expand="lg"
  >
    <MDBNavbarBrand>
      <MDBIcon icon="mdb" iconStyle="fab" size="2x"/>
    </MDBNavbarBrand>
    <MDBNavbarToggler
        target="#navbarColor01"
        @click="collapse7 = !collapse7"
    ></MDBNavbarToggler>
    <MDBCollapse id="navbarColor01" v-model="collapse7">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem href="#" linkClass="link-secondary"
        >Dashboard
        </MDBNavbarItem
        >
        <MDBNavbarItem href="#" linkClass="link-secondary"
        >Team
        </MDBNavbarItem
        >
        <MDBNavbarItem href="#" linkClass="link-secondary"
        >Projects
        </MDBNavbarItem
        >
      </MDBNavbarNav>
    </MDBCollapse>

    <MDBNavbarNav class="mb-2 mb-lg-0 d-flex flex-row">
      <MDBNavbarItem
          class="me-3 me-lg-0"
          linkClass="link-secondary"
          to="#"
      >
        <MDBIcon icon="shopping-cart"></MDBIcon
        >
      </MDBNavbarItem>
      <MDBNavbarItem
          class="me-3 me-lg-0"
          linkClass="link-secondary"
          to="#"
      >
        <MDBIcon icon="bell"/>
        <MDBBadge color="danger" notification pill>1</MDBBadge>
      </MDBNavbarItem>
      <MDBNavbarItem class="me-3 me-lg-0" href="#">
        <img
            alt=""
            class="rounded-circle"
            height="22"
            loading="lazy"
            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
        />
      </MDBNavbarItem>
    </MDBNavbarNav>
  </MDBNavbar>
</template>
<script>
import {
  MDBBadge,
  MDBCollapse,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler
} from 'mdb-vue-ui-kit';
import {ref} from "vue";

export default {
  name: 'navbarPage',
  components: {
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBBadge,
    MDBIcon,
    MDBCollapse
  },
  setup() {
    const collapse7 = ref(false);

    return {
      collapse7,
    }
  }
};
</script>