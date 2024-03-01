<script setup lang="ts">
import { RouterView } from 'vue-router'
import styles from "@/assets/styles/scss/layout.module.scss"
</script>

<template>
  <div :class="styles['wrapper-container']">
    <RouterView />
  </div>
</template>