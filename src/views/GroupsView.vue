<script setup lang="ts">
import styles from '@/assets/styles/scss/views/groups.module.scss'
import GroupComponent from '@/components/GroupComponent.vue'
</script>

<template>
  <div :class="styles['groups']">
    <GroupComponent />
  </div>
</template>
