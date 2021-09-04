<template>
  <div style="height: 200px" class="tmp mb-10">
    <transition name="slide">
      <div class="mt-6">
        <h2 class="mb-8">About us</h2>
        <p class="mb-8 pt-7">
          システムシステム工学研究会は愛知工業大学公認の情報系サークルです。
          <br />「多彩な学生が交流を通じて成長する」をモットーに活動しています。
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style scoped>
p {
  text-align: center;
}
h2 {
  text-align: center;
  font-size: 1.75rem;
}
* {
  font-family: Montserrat;
}
</style>
