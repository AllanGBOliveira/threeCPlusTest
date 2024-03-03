<script lang="ts" setup>
import styles from "@/assets/styles/scss/components/sideBarComponent.module.scss"
</script>

<template>
    <div :class="styles['sideBar-container']">
        <div :class="styles['sideBar-container-head']">
            <p :class="styles['sideBar-title']">
                {{ $t("message.titles.omni") }}
            </p>

            <div :class="styles['sideBar-search-container']">
                <form :class="styles['sideBar-search']" novalidate>
                    <label for="sideBar-search-input">
                        <button :class="styles['sideBar-search-btn']">
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                        </button>
                        <input :class="styles['sideBar-search-input']" type="text" id="sideBar-search-input"
                            :placeholder="$t('message.placeholder.search')">
                    </label>
                </form>

                <button :class="styles['sideBar-search-fab']">
                    <font-awesome-icon :icon="['fas', 'plus']" />
                </button>
            </div>

        </div>
    </div>
</template>