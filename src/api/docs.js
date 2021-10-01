import axios from 'axios';

export async function getAllDocs () {
    const config = {
        headers: {
            jwt: this.$store.state.currentJwt,
            user: this.$store.state.currentUser
        }
    };
    let response = await axios.get("https://jsramverk-editor-dalg20.azurewebsites.net/docs", config);
    this.$store.commit('setDocs', response.data);
}

export async function saveDoc () {
    const config = {
        headers: {
            jwt: this.$store.state.currentJwt
        }
    };

    if (this.$store.state.currentId && this.$store.state.currentTitle && this.$store.state.currentContent) {
        const doc = {
            "_id": this.$store.state.currentId,
            "name": this.$store.state.currentTitle,
            "html": this.$store.state.currentContent,
        };

        await axios.put("https://jsramverk-editor-dalg20.azurewebsites.net/docs", doc, config);

        this.$store.commit('updateDoc', doc);
        this.$store.commit("setEditStatus", "Updated document");
    } else if (this.$store.state.currentTitle && this.$store.state.currentContent) {
        const doc = {
            "name": this.$store.state.currentTitle,
            "html": this.$store.state.currentContent,
            "user": this.$store.state.currentUser
        }

        await axios.post("https://jsramverk-editor-dalg20.azurewebsites.net/docs", doc, config);

        this.$store.commit("setEditStatus", "Saved new document");
    } else {
        this.$store.commit("setEditStatus", "Documents need both title and content!");
    }
}
