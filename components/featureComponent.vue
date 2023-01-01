<template>
<div>
  <div class="feature-component">
    <div class="feature-component__content">
      <h3 class="feature-component__title">{{ title }}</h3>
      <p class="feature-component__description">{{ description }}</p>
    </div>
  </div>
</div>
</template>

<script>
import lottieAnimation from 'lottie-web-vue'
export default {
  name: "featureComponent",
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
  display: flex;
  align-items: center;
}
.feature-component__content {
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
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

@media screen and (max-width: 426px) {
  .feature-component {
    flex-direction: column;
    max-width: 90%;
  }

  .feature-component__content {
    text-align: center;
  }
}
</style>
