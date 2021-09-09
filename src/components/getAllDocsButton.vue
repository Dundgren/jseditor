<template>
    <button v-on:click="getAllDocs">Print All docs</button>
    <div v-for="doc in allDocs" v-bind:key="doc._id">
        <p>Id: {{ doc._id }}</p>
        <p>Title: {{ doc.name }}</p>
        <p>Content: {{ doc.html }}</p>
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
        getAllDocs: async function() {
            let response = await axios.get("https://jsramverk-editor-dalg20.azurewebsites.net/");

            this.allDocs = response.data;
        },
    }
}
</script>
