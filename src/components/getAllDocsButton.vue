<template>
    <button v-on:click="getAllDocs" id="get-all-docs-button">Print All docs</button>
    <div id="all-docs-container">
        <div v-for="doc in allDocs" v-bind:key="doc._id">
            <p>Id: {{ doc._id }}</p>
            <p>Title: {{ doc.name }}</p>
            <p>Content: {{ doc.html }}</p>
            <button v-on:click="setCurrentDocState(doc._id, doc.name, doc.html)">Update</button>
        </div>
    </div>
</template>

<script>
import { getAllDocs } from "../api/docs";

export default {
    computed: {
        allDocs () {
            return this.$store.state.docs;
        }
    },
    methods: {
        getAllDocs: getAllDocs,
        setCurrentDocState: function (docId, docTitle, docContent) {
            this.$store.commit("setCurrentId", docId);
            this.$store.commit("setCurrentTitle", docTitle);
            this.$store.commit("setCurrentContent", docContent);
            this.$store.commit("setEditStatus", `Editing document with id: ${docId}`);
        }
    }
}
</script>
