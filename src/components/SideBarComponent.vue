<script lang="ts" setup>
import styles from "@/assets/styles/scss/components/sideMenuComponent.module.scss"
</script>

<template>
    <div :class="styles['sideMenu-container']">
        <p :class="styles['sideMenu-title']">
            {{ $t("message.titles.omni") }}
        </p>


        <form :class="styles['sideMenu-search']" novalidate>
            <label for="search-input">
                <font-awesome-icon :icon="['fas', 'phone']" />
            </label>
        </form>

    </div>
</template>