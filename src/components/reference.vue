<template>
  <div>
    <Navbar class="navbar_container"></Navbar>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>
<script>
import Content from "@/components/Pages/Reference/content.vue";
import Footer from "@/components/Pages/Anasayfa/footer.vue";
import Navbar from "@/components/Utility/navbar.vue";

export default{
  name:'referencePage',
  components: {Navbar, Footer, Content}
}
</script>