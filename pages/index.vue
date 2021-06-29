<template>
  <div class="backcolor">
    <Top />
    <Linked />
    <About />
    <AboutDet />
    <Product />
    <Team />
    <News />
    <Question />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Linked from "../components/Linked.vue";
export default {
  components: { Linked },
};
</script>
<style scoped>
.backcolor {
  background: whitesmoke;
}
</style>
