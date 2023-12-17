<template>
  <div>
    <Navbar></Navbar>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from "@/components/Pages/navbar.vue";
import Content from "@/components/Pages/content.vue";
import Footer from "@/components/Pages/footer.vue";

export default defineComponent({
  components: { Navbar, Content, Footer },
  name: 'HelloWorld',
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
