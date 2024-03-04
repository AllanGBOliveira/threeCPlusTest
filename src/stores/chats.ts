import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type UserInfo } from '@/interfaces/userInterface'

export const useChatstore = defineStore('chats', () => {
  const info = ref<Array<UserInfo>>([])
  function setInfo(data: UserInfo) {
    info.value.push(data)
  }

  return { info, setInfo }
})
