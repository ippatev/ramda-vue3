<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <input v-model="a" placeholder="A" />
    <input v-model="b" placeholder="B" />
  </div>
  <div>
    <span>{{ sum }}</span>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      a: 1,
      b: 1,
    };
  },
  components: {
    HelloWorld,
  },
  computed: {
    sum() {
      return this.$R.add(this.a, this.b);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
