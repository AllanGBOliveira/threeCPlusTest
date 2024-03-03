import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type UserInfo } from '@/interfaces/userInterface'

// interface State {
//   userList: UserInfo[]
//   user: UserInfo | null
// }

// export const useChatstore = defineStore('chats', {
//   state: (): State => {
//     return {
//       userList: [],
//       user: null
//     }
//   }
// })

export const useChatstore = defineStore('chats', () => {
  // const info = ref<Array<UserInfo>>()

  // function setInfo(data: UserInfo) {
  //   info.value?.push({
  //     name: data.name,
  //     avatar: data.avatar,
  //     msg: data.msg,
  //     file: data.file,
  //     image: data.image,
  //     date: new Date(data.date),
  //     displayed: {
  //       value: data.displayed.value,
  //       quantity: data.displayed.quantity
  //     }
  //   })
  const info = ref<Array<UserInfo>>([])
  function setInfo(data: UserInfo) {
    info.value.push(data)
  }

  return { info, setInfo }
})
