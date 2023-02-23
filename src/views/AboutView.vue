<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MyButton>My button About</MyButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyButton from '@/components/MyButton.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    MyButton,
  },
});
</script>
