<script setup lang="ts">
import styles from '@/assets/styles/scss/views/queue.module.scss'
import GroupComponent from '@/components/QueueComponent.vue'
</script>

<template>
  <div :class="styles['queue']">
    <GroupComponent />
  </div>
</template>
