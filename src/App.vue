<template>
  <tinyEditor />
  <getAllDocsButton />
</template>

<script>
import tinyEditor from './components/tinyEditor.vue'
import getAllDocsButton from "./components/getAllDocsButton.vue";

export default {
  name: 'App',
  components: {
    tinyEditor,
    getAllDocsButton
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
