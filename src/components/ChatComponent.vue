<script setup lang="ts">
import style from "../assets/styles/scss/components/chatComponent.module.scss";
import chatsData from "@/assets/fakeApi/friends.json"
</script>


<template>
    <button v-for="chat in chatsData" :key="chat.name" :class="style['chatComponent']">
        <div :class="`${style.chatComponent}-avatar`">
            <img :src="chat.avatar" :alt="chat.name" width="40" height="40" loading="eager">
        </div>
        <div>
            <p :class="style['chatComponent-name']">
                {{ chat.name }}
            </p>
            <p :class="style['chatComponent-msg']">
                {{ chat.msg }}
            </p>
        </div>
    </button>
</template>
