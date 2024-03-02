<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideMenuComponent from './components/SideMenuComponent.vue';
import styles from "@/assets/styles/scss/layout.module.scss"
import SideBarComponent from './components/SideBarComponent.vue';
</script>

<template>
  <div :class="styles['wrapper-container']">
    <SideMenuComponent />
    <SideBarComponent />
    <RouterView />
  </div>
</template>