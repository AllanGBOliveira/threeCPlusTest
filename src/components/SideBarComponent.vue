<script lang="ts" setup>
import styles from '@/assets/styles/scss/components/sideBarComponent.module.scss'
import TabsComponent from './TabsComponent.vue'
import ChatComponent from './ChatComponent.vue'
import { useTabsStore } from '@/stores/tabs'

const tabs = useTabsStore()

const filteredTabs = JSON.parse(JSON.stringify(tabs.info))




</script>

<template>
  <div :class="styles['sideBar-container']">
    <div :class="styles['sideBar-container-head']">
      <p :class="styles['sideBar-title']">
        {{ $t('message.titles.omni') }}
      </p>

      <div :class="styles['sideBar-search-container']">
        <form :class="styles['sideBar-search']" novalidate>
          <label for="sideBar-search-input">
            <button :class="styles['sideBar-search-btn']">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </button>
            <input :class="styles['sideBar-search-input']" type="text" id="sideBar-search-input"
              :placeholder="$t('message.placeholder.search')" />
          </label>
        </form>

        <button :class="styles['sideBar-search-fab']">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
      </div>

      <div :class="styles['tabs-wrapper']">
        <div :class="styles['tabs-container']">
          <TabsComponent routePath="/" routeName="chats" :badge="filteredTabs.chats" />
          <TabsComponent routePath="/groups" routeName="groups" :badge="filteredTabs.groups" />
          <TabsComponent routePath="/queue" routeName="queue" :badge="filteredTabs.queue" />
        </div>
        <button :class="styles['tabs-btn']">
          <font-awesome-icon :icon="['fas', 'ellipsis']" />
        </button>
      </div>
    </div>
    <div :class="styles['chats-container']">
      <ChatComponent />
    </div>
  </div>
</template>
