<script lang="ts">
import friendsData from "@/assets/fakeApi/friends.json"

export default {
  data() {
    return {
      friends: friendsData,
    };
  },
};
</script>

<template>
  <div class="about about-test">
    <div v-for="friend in friends" :key="friend.name">
      {{ friend.name }}
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/scss/views/about.module.scss";

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
