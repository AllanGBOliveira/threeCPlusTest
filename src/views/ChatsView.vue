<script setup lang="ts">
import styles from '@/assets/styles/scss/views/chats.module.scss'
import ChatContentComponent from '@/components/ChatContentComponent.vue';
import { ref } from "vue"

import { useChatstore } from '@/stores/chats'

const chats = useChatstore()


const internalNote = ref(false)

function setInternalNote() {
  internalNote.value = !internalNote.value;
}

</script>


<template>
  <div :class="styles['chat']">
    <div :class="styles['chat-head']">
      <div :class="styles['chat-card']">
        <div :class="styles['chat-avatar']">
          <img :class="styles['chat-avatar-img']" :src="chats.currentChat.avatar" :alt="chats.currentChat.name"
            width="40" height="40" loading="eager" />
        </div>
        <div :class="styles['chat-card-content']">
          <p :class="styles['chat-name']">
            {{ chats.currentChat.name }}
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
          {{ internalNote ? $t('message.titles.internal-note') : $t('message.chat.title') }}
        </p>

        <div :class="styles['send-msg-fabs']">
          <button @click="setInternalNote()"
            :class="styles['fab-item'] + ' ' + (internalNote ? styles['note-active'] : '')">
            <font-awesome-icon :icon="['far', 'note-sticky']" v-if="!internalNote" />
            <font-awesome-icon :icon="['fas', 'xmark']" v-else />
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
        <label for="msg-input" :class="(internalNote ? styles['note-active'] : '')">
          <textarea :placeholder="$t('message.placeholder.msg')" :class="styles['msg-input']" type="text"
            name="msg-input" id="msg-input" />
        </label>

        <button type="submit">
          <font-awesome-icon :icon="['far', 'paper-plane']" />
        </button>
      </form>
    </div>
  </div>
</template>
