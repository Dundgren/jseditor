<template>
    <button v-on:click="getAllDocs">Print All docs</button>
    <div v-for="doc in allDocs" v-bind:key="doc._id">
        <p>Id: {{ doc._id }}</p>
        <p>Title: {{ doc.name }}</p>
        <p>Content: {{ doc.html }}</p>
        <button v-on:click="setCurrentDocState(doc._id, doc.name, doc.html)">Update</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            allDocs: [],
        }
    },
    methods: {
        getAllDocs: async function () {
            let response = await axios.get("https://jsramverk-editor-dalg20.azurewebsites.net/");

            this.allDocs = response.data;
        },
        setCurrentDocState: function (docId, docTitle, docContent) {
            this.$store.commit("setCurrentId", docId);
            this.$store.commit("setCurrentTitle", docTitle);
            this.$store.commit("setCurrentContent", docContent);
            this.$store.commit("setEditStatus", `Editing document with id: ${docId}`);
        }
    }
}
</script>
