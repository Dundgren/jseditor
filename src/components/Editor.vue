<template>
  <button v-on:click="printContent">Save</button>
  <editor
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
  <p>Message: {{ editorContent }}</p>
</template>

 <script>
import Editor from "@tinymce/tinymce-vue";

export default {
  components: {
    editor: Editor,
  },
  data() {
    return {
      editorContent: "",
    };
  },
  computed: {
    contentLengthTest() {
      return this.editorContent + ` ${this.editorContent.length}`
    }
  },
  methods: {
    printContent: function () {
      console.log(this.editorContent);
    },
  },
};
</script>

