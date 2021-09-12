<template>
  <p>{{ editStatus }}</p>
  <label for="titleInput">Title:</label>
  <input type="text" id="titleInput" name="titleInput" v-model="currentTitle" />
  <editor
    id="tinyEditor"
    api-key="no-api-key"
    v-model="editorContent"
    :init="{
      height: 500,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount',
      ],
      toolbar: 'save',
    }"
  />
</template>

 <script>
import Editor from "@tinymce/tinymce-vue";

export default {
  components: {
    editor: Editor,
  },
  data: function () {
    return {
      inputTitle: ""
    }
  },
  computed: {
    contentLengthTest() {
      return this.editorContent + ` ${this.editorContent.length}`
    },
    editorContent: {
      get () {
        return this.$store.state.currentContent;
      },
      set (data) {
        this.$store.commit("setCurrentContent", data);
      }
    },
    editStatus () {
      return this.$store.state.editStatus;
    },
    currentTitle: {
      get () {
        return this.$store.state.currentTitle;
      },
      set (data) {
        this.$store.commit("setCurrentTitle", data);
      }
    }
  },
  methods: {
    printContent: function () {
      console.log(this.$store.state.currentTitle);
    }
  },
};
</script>
