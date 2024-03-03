<script lang="ts" setup>
import { RouterLink } from 'vue-router'

import styles from '@/assets/styles/scss/components/sideMenuComponent.module.scss'
</script>

<template>
  <div :class="styles['sideMenu-container']">
    <RouterLink :class="styles['sideMenu-logo']" to="/">
      <img src="@/assets/icons/logo.svg" alt="Logo" width="42" height="24" loading="eager" />
    </RouterLink>
    <ul :class="styles['sideMenu-list']">
      <li :class="styles['sideMenu-item']">
        <button :class="[styles['sideMenu-link'], styles['sideMenu-link-phone']]">
          <font-awesome-icon :icon="['fas', 'phone']" />
        </button>
      </li>
      <li :class="styles['sideMenu-item']">
        <button :class="styles['sideMenu-link']">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </button>
      </li>
    </ul>
  </div>
</template>
