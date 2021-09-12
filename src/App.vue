<template>
  <newDocButton />
  <saveDocButton />
  <tinyEditor />
  <getAllDocsButton />
</template>

<script>
import tinyEditor from './components/tinyEditor.vue'
import getAllDocsButton from "./components/getAllDocsButton.vue";
import saveDocButton from "./components/saveDocButton.vue";
import newDocButton from "./components/newDocButton.vue";

export default {
  name: 'App',
  components: {
    saveDocButton,
    tinyEditor,
    getAllDocsButton,
    newDocButton
  }
}
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
