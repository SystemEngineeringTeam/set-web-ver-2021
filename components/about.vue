<template>
    <transition name="slide">
        <div v-if="animation">
            <h2 class="mt-12 mb-8">About</h2>
            <p class="mb-8">システムシステム工学研究会は愛知工業大学公認の情報系サークルです。
            <br>「多彩な学生が交流を通じて成長する」をモットーに活動しています。</p>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            scrollY: 0,
            animation: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrollY = window.scrollY;
            if(this.scrollY >= 80){
                this.animation = true
            }
        }
    }
}

</script>

<style scoped>
p {
    text-align:center;
}
h2 {
    text-align:center;
    font-size:1.75rem;
}

.slide-enter-active {
  /* 現れる時のトランジションの状態 */
  animation: slide-in 2s;
}

@keyframes slide-in {
  from{
    transform: translateY(300px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
