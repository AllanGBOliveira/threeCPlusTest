<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideMenuComponent from './components/SideMenuComponent.vue'
import styles from '@/assets/styles/scss/layout.module.scss'
import SideBarComponent from './components/SideBarComponent.vue'
import chatsData from '@/assets/fakeApi/friends.json'
import { useChatstore } from './stores/chats'
import { watch, ref } from 'vue'

const chats = useChatstore()

chatsData.forEach((chat, key) => {
  if (key === 0) {
    chats.setCurrentChat({
      id: chat.id,
      name: chat.name,
      avatar: chat.avatar,
      msg: chat.msg,
      file: chat.file,
      image: chat.image,
      date: new Date(chat.date),
      displayed: {
        value: chat.displayed.value,
        quantity: chat.displayed.quantity
      }
    });
  }
  chats.setInfo({
    id: chat.id,
    name: chat.name,
    avatar: chat.avatar,
    msg: chat.msg,
    file: chat.file,
    image: chat.image,
    date: new Date(chat.date),
    displayed: {
      value: chat.displayed.value,
      quantity: chat.displayed.quantity
    }
  })
})





// const question = ref('')
// const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

watch(loading, async (newVal, oldVal) => {
  if (newVal) {
    console.log(newVal, oldVal)
  }
})
</script>

<template>
  <div :class="styles['wrapper-container']">
    <SideMenuComponent />
    <SideBarComponent />
    <div :class="styles['mainContent']">
      <RouterView />
    </div>
  </div>
</template>
