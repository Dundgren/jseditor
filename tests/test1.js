import { Selector } from 'testcafe';

fixture `getting started`
    .page `https://www.student.bth.se/~dalg20/editor/`;

test("Save with no content", async t => {
    await t
        .click("#save-doc-button")

        .expect(Selector("#edit-status").innerText).eql("Documents need both title and content!");
});

test("Editing new document", async t => {
    await t
        .click("#new-doc-button")

        .expect(Selector("#edit-status").innerText).eql("Editing new document");
});

test("Get all documents", async t => {
    await t
        .click("#get-all-docs-button")

        .expect(Selector("#all-docs-container").hasChildNodes).eql(true);
});
