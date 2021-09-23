import axios from 'axios';

export async function getAllDocs () {
    let response = await axios.get("https://jsramverk-editor-dalg20.azurewebsites.net/");
    this.$store.commit('setDocs', response.data);
    // this.allDocs = response.data;
}

export async function saveDoc () {
    if (this.$store.state.currentId && this.$store.state.currentTitle && this.$store.state.currentContent) {
        const doc = {
            "_id": this.$store.state.currentId,
            "name": this.$store.state.currentTitle,
            "html": this.$store.state.currentContent,
        }
        await axios.put("https://jsramverk-editor-dalg20.azurewebsites.net/", doc);
        this.$store.commit('updateDoc', doc);
        this.$store.commit("setEditStatus", "Updated document");
    } else if (this.$store.state.currentTitle && this.$store.state.currentContent) {
        const doc = {
            "name": this.$store.state.currentTitle,
            "html": this.$store.state.currentContent,
        }
        await axios.post("https://jsramverk-editor-dalg20.azurewebsites.net/", doc);
        // await getAllDocs();
        this.$store.commit("setEditStatus", "Saved new document");
    } else {
        this.$store.commit("setEditStatus", "Documents need both title and content!");
    }
}
