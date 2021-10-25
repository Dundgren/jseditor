<template>
    <button v-on:click="generatePdf">Generate PDF</button>
    <template v-if="downloadReady">
        <a v-bind:href="blobUrl" v-bind:download="this.$store.state.currentTitle">
            <button>Download PDF</button>
        </a>
    </template>
</template>

<script>
import { generatePdfBlob } from "../api/pdf";

export default {
    data() {
        return {
            blobUrl: '',
            downloadReady: false,
        }
    },
    methods: {
        async generatePdf () {
            let pdfText = this.$store.state.currentContent

            pdfText = pdfText.replace(/<[^>]*>/g, '')
                             .replace(/&nbsp;/g, "\n");
    
            this.downloadReady = false;
            this.$store.commit("setEditStatus", "Generating PDF...");
            this.blobUrl = await generatePdfBlob(pdfText);

            window.setTimeout(() => {
                this.downloadReady = true;
                this.$store.commit("setEditStatus", "PDF ready for download");
            }, 1000);
        }
    }
}
</script>