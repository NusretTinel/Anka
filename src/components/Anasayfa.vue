<template>
  <div>

    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Footer from "@/components/Pages/Anasayfa/footer.vue";
import Content from "@/components/Pages/Anasayfa/content.vue";


export default defineComponent({
  components: {  Content, Footer },
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
