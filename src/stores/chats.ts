import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type UserInfo } from '@/interfaces/userInterface'

export const useChatstore = defineStore('chats', () => {
  const info = ref<Array<UserInfo>>([])
  const currentChat = ref()
  function setInfo(data: UserInfo) {
    info.value.push(data)
  }
  function setCurrentChat(data: UserInfo) {
    currentChat.value = data
  }
  return { info, currentChat, setInfo, setCurrentChat }
})
