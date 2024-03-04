<script setup lang="ts">
import styles from "@/assets/styles/scss/components/chatContentComponent.module.scss";

import { useChatstore } from '@/stores/chats'

const chats = useChatstore()

const currentChat = JSON.parse(JSON.stringify(chats.currentChat))

</script>

<template>
    <div :class="styles['chat-content']">
        <div :class="styles['chat-content-head']">
            <time :class="styles['msg'] + ' ' + styles['msg-date']" datetime="2024-03-04 18:00">Hoje</time>
            <p :class="styles['msg'] + ' ' + styles['msg-title']">
                Início do chamado pelo cliente. Protocolo: 1002356910 - 12:54
            </p>
        </div>

        <p :class="styles['msg']">
            Quero pagar minha fatura mas não consigo
            <time :class="styles['msg-time']" datetime="2024-03-04 11:29">11:29</time>
        </p>
    </div>
</template>