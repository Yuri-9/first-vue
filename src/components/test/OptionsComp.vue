<template>
  <div>
    <p>OptionsComp</p>
    <div class="title">prop: {{ title }}</div>
    <div class="title">dataState: {{ dataState }}</div>
    <div class="title">computed: {{ constWithString }}</div>
    <div class="title" v-bind:[nameAttr]="`tutId ${count}`">
      computed fullName: {{ fullName }}
    </div>
    <button @click="onClick('Options')">button</button>
    <div class="title">vuex sortBy: {{ sortBy }}</div>
    <HelloWorld :msg="count"/>
  </div>

</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
  name: 'OptionsComp',
  components: { HelloWorld },
  props: {
    title: { type: String, required: true },
    propsState: Object,
  },
  // props: ['title'],
  data() {
    return {
      count: 0,
      firstName: 'Yura',
      lastName: 'Kolya',
      dataState: {},
      nameAttr: 'id',
    };
  },
  methods: {
    onClick(value) {
      this.$emit('onClick', `${value} ${this.count}`);
      this.$store.dispatch('setSelectedFilmId', null);
    },
  },
  computed: {
    constWithString() {
      const suffix = Number(this?.count) % 2 === 0 ? 'Even' : 'Odd';
      return `${this?.count} ${suffix}`;
    },
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(newValue) {
        [this.firstName, this.lastName] = newValue.split(' ');
      },
    },
    sortBy() {
      return this.$store.state.sortBy;
    },
  },
  mounted() {
    console.log('mounted Options');
  },
  watch: {
    someObject: {
      handler(newValue, oldValue) {
        // ...
      },
      deep: true,
    },
  },
};

</script>

<style>
.title {
  border-color: red;
  padding: 5px;
}
</style>
