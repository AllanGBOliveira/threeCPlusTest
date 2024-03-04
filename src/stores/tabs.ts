import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type TabsInfo } from '@/interfaces/tabsInterface'

import tabs from '@/assets/fakeApi/tabs.json'

export const useTabsStore = defineStore('tabs', () => {
  const info = ref<TabsInfo>(tabs)

  return { info }
})
