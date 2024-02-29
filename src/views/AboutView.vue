<template>
  <div class="about about-test">
    <h1>This is an about page</h1>
  </div>
</template>

<style scoped>
@import "@/assets/styles/scss/views/about.module.scss";

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
