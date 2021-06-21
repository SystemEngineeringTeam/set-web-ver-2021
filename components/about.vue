<template>
  <div style="height: 200px" class="tmp mb-10">
    <transition name="slide">
      <div v-show="animation" class="mt-6">
        <h2 class="mb-8">About</h2>
        <p class="mb-8">
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
      scrollY: 0,
      animation: false,
      width: 0,
    };
  },
  created() {
    window.addEventListener("load", this.load);
  },
  mounted() {
    // 要素の幅を取得するメソッド
    this.getTargetWidth();

    // window.addEventListener('load',this.load)
    window.addEventListener("scroll", this.handleScroll);

    // ユーザーがウィンドウサイズを変更したら実行されるようにする
    window.addEventListener("resize", this.getTargetWidth);
  },
  methods: {
    load() {
      if (this.width < 1800) {
        this.animation = true;
      }
    },
    handleScroll() {
      this.scrollY = window.scrollY;
      if (this.scrollY >= 10 || this.width > 1600) {
        this.animation = true;
      }
      // console.log(this.scrollY)
    },
    getTargetWidth() {
      if (this.width > 1500) {
        this.animation = true;
      }
      this.width = window.innerWidth;
      console.log(this.width);
    },
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

.slide-enter-active {
  /* 現れる時のトランジションの状態 */
  animation: slide-in 2s;
}
.tmp {
  color: black;
}
@keyframes slide-in {
  from {
    transform: translateY(300px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
