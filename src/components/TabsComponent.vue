<script setup lang="ts">
import styles from '@/assets/styles/scss/components/tabsComponent.module.scss'
import { RouterLink } from 'vue-router'

defineProps<{
  routePath?: string
  routeName?: string
}>()
</script>

<template>
  <RouterLink :class="styles['tabsComponent-item']" :to="`${routePath}`">
    {{ $t(`message.components.tabs.${routeName}`) }}
  </RouterLink>
</template>
