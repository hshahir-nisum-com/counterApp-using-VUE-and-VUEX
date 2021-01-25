<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br />
  <div>counter Number :{{ counterAPP.count }}</div>
  <br />
  <div>
    <input type="button" value="increment" v-on:click="increment" />
    <button v-on:click="decrement">decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {},
  methods: {
    ...mapActions("counterAPP", ["increment", "decrement"]),
  },
  computed: {
    ...mapState(["counterAPP"]),
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
