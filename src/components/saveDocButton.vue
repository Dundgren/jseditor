<template>
    <button v-on:click="saveDoc">Save</button>
</template>

<script>
import axios from 'axios';

export default {
    methods: {
        saveDoc: async function () {
            if (this.$store.state.currentId && this.$store.state.currentTitle && this.$store.state.currentContent) {
                const doc = {
                    "_id": this.$store.state.currentId,
                    "name": this.$store.state.currentTitle,
                    "html": this.$store.state.currentContent,
                }
                await axios.put("https://jsramverk-editor-dalg20.azurewebsites.net/", doc);

                this.$store.commit("setEditStatus", "Updated document")
            } else if (this.$store.state.currentTitle && this.$store.state.currentContent) {
                const doc = {
                    "name": this.$store.state.currentTitle,
                    "html": this.$store.state.currentContent,
                }
                await axios.post("https://jsramverk-editor-dalg20.azurewebsites.net/", doc);

                this.$store.commit("setEditStatus", "Saved new document")
            } else {
                this.$store.commit("setEditStatus", "Documents need both title and content!")
            }
        }
    }
}
</script>
