<script setup lang="ts">
import chats from "@/assets/styles/scss/views/chats.module.scss";
import ChatComponent from "@/components/ChatComponent.vue";

</script>

<template>
    <div :class="chats.chats">
        <ChatComponent />
    </div>
</template>
