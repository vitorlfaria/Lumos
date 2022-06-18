<template>
<div>
  <div class="feature-component">
    <div class="feature-component__image">
      <lottie-animation ref="anim" :animationData="require(`@/assets/${ animation }`)" :loop="true" />
    </div>
    <div class="feature-component__content card">
      <h3 class="feature-component__title">{{ title }}</h3>
      <p class="feature-component__description">{{ description }}</p>
    </div>
  </div>
</div>
</template>

<script>
import lottieAnimation from 'lottie-web-vue'
export default {
  name: "featureComponentReverse",
  components: {
    lottieAnimation
  },
  props: {
    animation: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.feature-component {
  width: fit-content;
  max-width: 60%;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
.feature-component__image {
  width: 50%;
}
.feature-component__content {
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
}
.feature-component__title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.feature-component__description {
  font-size: 1rem;
  line-height: 1.5rem;
}
</style>
