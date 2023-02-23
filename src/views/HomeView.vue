<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <MyButton name="Welcome to Your Vue.js + TypeScript App">My button Home</MyButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import MyButton from '@/components/MyButton.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    MyButton,
  },
});
</script>
