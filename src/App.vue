<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "@/assets/styles/css/reset.css";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper scss-test">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>