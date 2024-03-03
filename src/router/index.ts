import { createRouter, createWebHistory } from 'vue-router'
import ChatsView from '../views/ChatsView.vue'
import GroupsView from '@/views/GroupsView.vue'
import QueueView from '@/views/QueueView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ChatsView
    },

    {
      path: '/groups',
      name: 'groups',
      component: GroupsView
    },
    {
      path: '/queue',
      name: 'queue',
      component: QueueView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
