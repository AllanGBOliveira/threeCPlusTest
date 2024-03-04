<script lang="ts" setup>
import styles from '@/assets/styles/scss/components/sideBarComponent.module.scss'
import { register } from 'swiper/element/bundle'

import TabsComponent from './TabsComponent.vue'
import ChatComponent from './ChatComponent.vue'

import { useTabsStore } from '@/stores/tabs'
import { onMounted } from 'vue'

const tabs = useTabsStore()

const filteredTabs = JSON.parse(JSON.stringify(tabs.info))

onMounted(() => {
  register()
  const swiperEl = document.querySelector('swiper-container')
  Object.assign(swiperEl, {
    slidesPerView: 3,
    spaceBetween: 12,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 3,
      },

    }
  })
  swiperEl?.initialize()
})


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

      <div :class="styles['tabs-container']">
        <swiper-container init="false" style="max-width: calc(100% - 24px)">
          <swiper-slide>
            <TabsComponent routePath="/" routeName="chats" :badge="filteredTabs.chats" />
          </swiper-slide>
          <swiper-slide>
            <TabsComponent routePath="/groups" routeName="groups" :badge="filteredTabs.groups" />
          </swiper-slide>
          <swiper-slide>
            <TabsComponent routePath="/queue" routeName="queue" :badge="filteredTabs.queue" />
          </swiper-slide>
        </swiper-container>
        <button :class="styles['tabs-btn']">
          <font-awesome-icon :icon="['fas', 'ellipsis']" />
        </button>
      </div>
    </div>
    <ChatComponent />
  </div>
</template>
