<template>
    <button v-on:click="generatePdf">Generate PDF</button>
    <a v-bind:href="blobUrl" v-bind:download="this.$store.state.currentTitle">
        <button>Download PDF</button>
    </a>
</template>

<script>
// const PDFDocument = require('pdfkit');
// const blobStream = require('blob-stream');
// import * as PDFDocument from 'pdfkit';
// import * as blobStream from 'blob-stream';
import { generatePdfBlob } from "../api/pdf";
// import axios from "axios";

export default {
    data () {
        return {
            blobUrl: "",
        }
    },
    methods: {
        generatePdfBlob,
        async generatePdf () {
            this.generatePdfBlob(this.$store.state.currentContent);
            this.blobUrl = window.blobUrl;
            // this.blobUrl = generatePdfBlob;

            // const config = {
            //     headers: {
            //         jwt: this.$store.state.currentJwt
            //     }
            // };
            // const data = {
            //     pdfContent: this.$store.state.currentContent
            // }
            // const response = await axios.post("http://localhost:1337/docs/pdf", data, config);

            // this.blobUrl = response.data.blobUrl;
            // console.log(response);
            // this.blobUrl = window.URL.createObjectURL(new Blob(response.data, {type: "application/pdf"}));
        }
    }
}
</script>