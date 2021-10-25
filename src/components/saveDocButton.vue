<template>
    <button v-on:click="saveDoc" id="save-doc-button">Save</button>
</template>

<script>
import { saveDoc } from "../api/docs";

export default {
    methods: {
        saveDoc: saveDoc
    }
}
</script>
