<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideMenuComponent from './components/SideMenuComponent.vue'
import styles from '@/assets/styles/scss/layout.module.scss'
import SideBarComponent from './components/SideBarComponent.vue'
import chatsData from '@/assets/fakeApi/friends.json'
import { useChatstore } from './stores/chats'

const chats = useChatstore();


chatsData.forEach(chat => {
  chats.setInfo({
    "name": chat.name,
    "avatar": chat.avatar,
    "msg": chat.msg,
    "file": chat.file,
    "image": chat.image,
    "date": new Date(chat.date),
    "displayed": {
      "value": chat.displayed.value,
      "quantity": chat.displayed.quantity
    }
  });
});
</script>

<template>
  <div :class="styles['wrapper-container']">
    <SideMenuComponent />
    <SideBarComponent />
    <RouterView />
  </div>
</template>
