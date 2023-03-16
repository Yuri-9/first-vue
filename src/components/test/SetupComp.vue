<template>
  <div>
    <p>SetupComp</p>
    <div class="title">prop: {{ title }}</div>
    <div class="title">dataState: {{ dataState }}</div>
    <div class="title">computed: {{ constWithString }}</div>
    <div class="title" v-bind:[nameAttr]="`tutId ${count}`">
      computed fullName: {{ fullName }}
    </div>
    <button @click="onClick('Setup')">button</button>
    <div class="title">vuex sortBy: {{ sortBy }}</div>
    <HelloWorld :msg="count"/>
  </div>
</template>

<script setup>
import {
  ref, reactive, computed, defineProps, defineEmits, onMounted, watch,
} from 'vue';
import { useStore } from '@/store';
import HelloWorld from './HelloWorld.vue';

const props = defineProps({ title: { type: String, required: true } });
// const props = defineProps(['title']);
const emits = defineEmits(['onClick']);

const count = ref(2);
const firstName = ref('Yura');
const lastName = ref('Vasya');
const nameAttr = ref('id');
const dataState = reactive({});
const store = useStore();

const onClick = (value) => {
  emits('onClick', `${value} ${count.value}`);
  store.dispatch('setSelectedFilmId', null);
};

const constWithString = computed(() => {
  const suffix = count.value % 2 === 0 ? 'Even' : 'Odd';
  return `${count.value} ${suffix}`;
});

const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(' ');
  },
});

const sortBy = computed(() => store.state.sortBy);

onMounted(() => {
  console.log('mounted Setup');
});

watch(
  () => props.title,
  (newValue, oldValue) => {
    // ...
  },
  { deep: true },
);

</script>

<style>
.title {
  border-color: red;
  padding: 5px;
}
</style>
