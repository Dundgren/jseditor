
// const PDFDocument = require('pdfkit');
import pdfkit from "pdfkit/js/pdfkit.standalone";
// const blobStream = require('blob-stream');

// import * as PDFDocument from 'pdfkit';
import blobStream from 'blob-stream';

export function generatePdfBlob (pdfContent) {
    const doc = new pdfkit();
    const stream = doc.pipe(blobStream());
    // let blobUrl;

    doc.text(pdfContent, 100, 100);
    doc.end();
    stream.on("finish", () => {
        const url = stream.toBlobURL('application/pdf');

        window.blobUrl = url;
    });

    // return blobUrl;
}
