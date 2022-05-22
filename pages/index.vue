<template>
  <header class="container flex align-center justify-between">
    <div class="infos">
      <h1>Trazendo luz aos seus projetos</h1>
      <p>Seu negócio merece ser visto! E para ser notado, nada melhor do que um site prórpio e personalizado</p>
      <div class="flex gap">
        <button class="btn-lg btn-color btn-scale">orçamentos</button>
        <button class="btn-lg btn-escuro btn-scale">serviços</button>
      </div>
    </div>
    <lottie-animation ref="anim" :animationData="require('@/assets/106405-energy-rocket.json')" :loop="true" class="anim" />
  </header>
</template>

<script>
import lottieAnimation from 'lottie-web-vue'
export default {
  name: 'IndexPage',
  components: {
    lottieAnimation
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 100vh;
}

.infos {
  width: 40%;
}

.infos h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.infos p {
  line-height: 1.5rem;
  margin-bottom: 2rem;
}

.anim {
  width: 50%;
  pointer-events: none;
}
</style>