<script setup lang="ts">
import styles from "@/assets/styles/scss/components/chatContentComponent.module.scss";

import { useChatstore } from '@/stores/chats'

const chats = useChatstore()

const info = [
    {
        id: 0,
        userId: 0,
        date: "Hoje",
        dateTime: "2024-03-04 18:00",
        title: "Início do chamado pelo cliente. Protocolo: 1002356910 - 12:54",
        msgs: ["Quero pagar minha fatura mas não consigo"]
    },
    {
        id: 1,
        userId: 1,
        date: "Sexta",
        dateTime: "2024-03-01 12:00",
        title: "Início do chamado pelo cliente. Protocolo: 0000000000 - 20:33",
        msgs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque justo vel iaculis dictum. Duis bibendum venenatis elit, quis dignissim tellus eleifend sed. Donec metus est, eleifend rhoncus dui id.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet blandit eros, pretium congue ipsum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum leo, accumsan vel interdum et, consequat id tortor. Proin dapibus massa sed libero semper, in rutrum tellus sodales. Proin id varius leo. Aliquam lorem tellus, sollicitudin posuere feugiat a, tincidunt non enim. Morbi scelerisque mauris eu elit sollicitudin, et venenatis magna finibus. Vestibulum et eros mauris. Vestibulum malesuada sapien mi, nec fermentum dui venenatis vel. Integer risus velit, gravida at."
        ]
    }
]

</script>

<template>
    <div :class="styles['chat-content']">
        <div :class="styles['chat-content-head']">
            <time :class="styles['msg'] + ' ' + styles['msg-date']" datetime="2024-03-04 18:00">
                {{ info[chats.currentChat.id].date }}
            </time>
            <p :class="styles['msg'] + ' ' + styles['msg-title']">
                {{ info[chats.currentChat.id].title }}
            </p>
        </div>

        <p v-for="msg in info[chats.currentChat.id].msgs" :key="msg" :class="styles['msg']">
            {{ msg }}
            <time :class="styles['msg-time']" datetime="2024-03-04 11:29">11:29</time>
        </p>
    </div>
</template>