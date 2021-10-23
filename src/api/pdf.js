import pdfkit from "pdfkit/js/pdfkit.standalone";
import blobStream from 'blob-stream';

export function generatePdfBlob (pdfContent) {
    return new Promise((resolve) => {
        const doc = new pdfkit();
        const stream = doc.pipe(blobStream());
    
        doc.text(pdfContent, 100, 100);
        doc.end();
    
        stream.on("finish", () => {
            const url = stream.toBlobURL('application/pdf');
            resolve(url);
        }); 
    })
}
