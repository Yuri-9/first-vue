<template>
    <div class="title">components</div>
    <div class="container">
      <OptionsComp  title="prop: 1" @onClick="handleClick"/>
      <CompositionComp title="prop: 1" @onClick="handleClick"/>
      <SetupComp title="prop: 1" @onClick="handleClick"/>
    </div>
  </template>

<script setup lang="ts">
import OptionsComp from './OptionsComp.vue';
import CompositionComp from './CompositionComp.vue';
import SetupComp from './SetupComp.vue';

const handleClick = (value: string) => {
  console.log('Click from', value);
};
</script>

  <style scoped>
  .title {
    border-color: red;
    padding: 5px;
    font-size: 30px;
    margin-bottom: 40px;
  }
  .container {
    display: flex;
    background-color: black;
    gap: 20px;
    min-height: 100px;
    justify-content: space-between;
    align-items: center;
  }
  </style>
