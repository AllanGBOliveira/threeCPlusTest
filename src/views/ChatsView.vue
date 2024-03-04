<script setup lang="ts">
import styles from '@/assets/styles/scss/views/chats.module.scss'
import ChatContentComponent from '@/components/ChatContentComponent.vue';

import { useChatstore } from '@/stores/chats'

const chats = useChatstore()

const currentChat = JSON.parse(JSON.stringify(chats.currentChat))

</script>


<template>
  <div :class="styles['chat']">
    <div :class="styles['chat-head']">
      <div :class="styles['chat-card']">
        <div :class="styles['chat-avatar']">
          <img :class="styles['chat-avatar-img']" :src="currentChat.avatar" :alt="currentChat.name" width="40"
            height="40" loading="eager" />
        </div>
        <div :class="styles['chat-card-content']">
          <p :class="styles['chat-name']">
            {{ currentChat.name }}
          </p>
          <p :class="styles['chat-agent']">
            {{ $t('message.head.agent') + ": " + "Alanis Machadp" }}
          </p>
        </div>
      </div>

      <div :class="styles['chat-fabs']">
        <button :class="styles['chat-fabs-finish']">
          <font-awesome-icon :icon="['far', 'circle-check']" />
          {{ $t('message.head.finish') }}
        </button>

        <button :class="styles['chat-fabs-settings']">
          <font-awesome-icon :icon="['fas', 'ellipsis']" />
        </button>
      </div>
    </div>

    <ChatContentComponent />
    <div :class="styles['send-msg']">
      <div :class="styles['send-msg-head']">
        <p :class="styles['send-msg-title']">
          {{ $t('message.chat.title') }}
        </p>

        <div :class="styles['send-msg-fabs']">
          <button :class="styles['fab-item']">
            <font-awesome-icon :icon="['far', 'note-sticky']" />
          </button>
          <button :class="styles['fab-item']">
            <font-awesome-icon :icon="['far', 'face-smile']" />
          </button>
          <button :class="styles['fab-item']">
            <font-awesome-icon :icon="['fas', 'paperclip']" />
          </button>
        </div>
      </div>

      <form :class="styles['msg-form']" novalidate>
        <label for="msg-input">
          <textarea :class="styles['msg-input']" type="text" name="msg-input" id="msg-input" />
        </label>

        <button type="submit">
          <font-awesome-icon :icon="['far', 'paper-plane']" />
        </button>
      </form>
    </div>
  </div>
</template>
