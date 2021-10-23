<template>
  <div v-if="currentJwt">
    <newDocButton />
    <saveDocButton />
    <download-pdf-button />
    <tinyEditor />
    <getAllDocsButton />
  </div>
  <div v-else>
    <authForm />
  </div>
</template>

<script>
import tinyEditor from './components/tinyEditor.vue'
import getAllDocsButton from "./components/getAllDocsButton.vue";
import saveDocButton from "./components/saveDocButton.vue";
import newDocButton from "./components/newDocButton.vue";
import authForm from "./components/authForm.vue";
import downloadPdfButton from "./components/downloadPdfButton.vue";

export default {
  name: 'App',
  components: {
    saveDocButton,
    tinyEditor,
    getAllDocsButton,
    newDocButton,
    authForm,
    downloadPdfButton,
  },
  computed: {
    currentJwt () {
      return this.$store.state.currentJwt;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
