<template>
    <button v-on:click="generatePdf">Generate PDF</button>
    <a v-bind:href="blobUrl" v-bind:download="this.$store.state.currentTitle">
        <button>Download PDF</button>
    </a>
</template>

<script>
import { generatePdfBlob } from "../api/pdf";

export default {
    data() {
        return {
            blobUrl: ''
        }
    },
    methods: {
        async generatePdf () {
            this.blobUrl = await generatePdfBlob(this.$store.state.currentContent);
        }
    }
}
</script>