<script setup lang="ts">
import styles from '@/assets/styles/scss/components/tabsComponent.module.scss'
import { RouterLink } from 'vue-router'

defineProps<{
  routePath?: string
  routeName?: string,
  badge?: number
}>()
</script>

<template>
  <RouterLink :active-class="styles['tabsComponent-item-active']" :class="styles['tabsComponent-item']"
    :to="`${routePath}`">
    <span>
      {{ $t(`message.components.tabs.${routeName}`) }}
    </span>
    <span v-if="badge" :class="styles['notify-badge']">
      {{ badge }}
    </span>
  </RouterLink>
</template>
