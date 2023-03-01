<template>
  <div class="container">
    <span class="title">{{ title }}</span>
    <ul class="options">
      <li class="options_item" v-for="option in options" :key="option.id">
        <button class="options_button" :class="{ active: option.id === activeId }" @click="onClick(option.id)">
          {{ option.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

interface ISwitcher {
  name: string;
  id: string;
}

export default defineComponent({
  name: 'component-switcher',
  props: {
    title: String,
    options: { type: Object as PropType<ISwitcher[]>, required: true },
  },
  data() {
    return {
      activeId: this.options?.[0].id,
    };
  },
  methods: {
    onClick(optionId: string) {
      this.activeId = optionId;

      this.$emit('onSelect', optionId);
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 20px;
}
.title {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
}

.options {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  overflow: hidden;
  height: 38px;
  &_item {
    height: 100%;
  }
  &_button {
    background-color: $gray-600-transparent;
    color: $white;
    cursor: pointer;
    font-size: 14px;
    padding: 3px 16px;
    height: 100%;
    text-transform: uppercase;
    border: none;
    &.active {
      background-color: $coral;
    }
  }
}
</style>
