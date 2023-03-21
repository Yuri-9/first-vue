<template>
  <div>
    <p>CompositionComp</p>
    <div class="title">prop: {{ title }}</div>
    <div class="title">dataState: {{ dataState }}</div>
    <div class="title">computed: {{ constWithString }}</div>
    <div class="title" v-bind:[nameAttr]="`tutId ${count}`">
      computed fullName: {{ fullName }}
    </div>
    <button @click="onClick('Composition')">button</button>
    <div class="title">vuex sortBy: {{ sortBy }}</div>
    <HelloWorld :msg="count"/>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import { useStore } from '@/store';
import HelloWorld from './HelloWorld.vue';

export default {
  components: { HelloWorld },
  props: {
    title: { type: String, required: true },
  },
  // props: ['title'],

  setup(props, {
    emit, slots, attrs, expose,
  }) {
    const count = ref(1);
    const nameAttr = ref('id');
    const firstName = ref('Yura');
    const lastName = ref('Petya');
    const dataState = reactive({});
    const store = useStore();

    const onClick = (value) => {
      emit('onClick', `${value} ${count.value}`);
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

    return {
      count,
      dataState,
      constWithString,
      fullName,
      onClick,
      sortBy,
      nameAttr,
    };
  },
  mounted() {
    console.log('mounted Composition');
  },
  watch: {
    someObject(newValue, oldValue) {
      // ...
    },
  },

};
//
</script>

<style>
.title {
  border-color: red;
  padding: 5px;
}
</style>
