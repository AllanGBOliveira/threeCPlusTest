<script lang="ts" setup>
import { RouterLink } from "vue-router";

import styles from "@/assets/styles/scss/components/sideBarComponent.module.scss"
</script>

<template>
    <div :class="styles['sideMenu-container']">
        <RouterLink :class="styles['sideMenu-logo']" to="/">
            <img src="@/assets/icons/logo.svg" alt="Logo" width="42" height="24" loading="eager">
        </RouterLink>
        <ul :class="styles['sideMenu-list']">
            <li :class="styles['sideMenu-item']">
                <button :class="styles['sideMenu-link']">
                    <img src="@/assets/icons/PHONE.png" alt="Phone Icon" width="17" height="18" loading="eager">
                </button>
            </li>
            <li :class="styles['sideMenu-item']">
                <button :class="styles['sideMenu-link']">
                    <img src="@/assets/icons/whatsapp.png" alt="WhatsApp Icon" width="17" height="17" loading="eager">
                </button>
            </li>
        </ul>
    </div>
</template>

