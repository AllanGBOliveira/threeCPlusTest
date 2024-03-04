<script setup lang="ts">
import style from '../assets/styles/scss/components/chatComponent.module.scss'

import { useChatstore } from '@/stores/chats'

const chats = useChatstore()

const filteredChats = JSON.parse(JSON.stringify(chats.info))


</script>

<template>
  <button v-for="chat in filteredChats" :key="chat.name"
    :class="style['chatComponent'] + ' ' + (chats.currentChat.id === chat.id ? style['chatComponent-active'] : '')"
    @click="chats.setCurrentChat(chat)">
    <div :class="style['chatComponent-avatar']">
      <img :class="style['chatComponent-avatar-img']" :src="chat.avatar" :alt="chat.name" width="40" height="40"
        loading="eager" />
    </div>
    <div>
      <p :class="style['chatComponent-name']">
        {{ chat.name }}
      </p>
      <p :class="style['chatComponent-msg']">
        {{ chat.msg }}
      </p>
    </div>
  </button>
</template>
