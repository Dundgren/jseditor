<template>
  <p id="edit-status">{{ editStatus }}</p>
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
import socketIOClient from "socket.io-client";

export default {
  components: {
    editor: Editor,
  },
  data: function () {
    return {
      inputTitle: "",
      socket: {},
      // currentId: this.$store.state.currentId,
      docData: {},
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
    },
    currentId () {
        return this.$store.state.currentId;
    }
  },
  methods: {
    printContent: function () {
      console.log(this.$store.state.currentTitle);
    },
    emitDocData () {
      this.docData = {
        _id: this.$store.state.currentId,
        title: this.$store.state.currentTitle,
        html: this.$store.state.currentContent
      }

      this.socket.emit("doc", this.docData);
    }
  },
  created () {
    this.socket = socketIOClient("https://jsramverk-editor-dalg20.azurewebsites.net/");
  },
  mounted () {
    this.socket.on("doc", (docData) => {
      this.currentTitle = docData.title;
      this.editorContent = docData.html;
    });
  },
  watch: {
    currentId (newId) {
      this.socket.emit("create", newId);
    },
    editorContent () {
      this.emitDocData();
    },
    currentTitle () {
      this.emitDocData();
    }
  }
};
</script>
