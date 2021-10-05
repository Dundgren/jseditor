import axios from 'axios';

export async function getAllDocs () {
    // const config = {
    //     headers: {
    //         jwt: this.$store.state.currentJwt,
    //         user: this.$store.state.currentUser
    //     }
    // };
    // let response = await axios.get("http://localhost:1337/docs", config); //https://jsramverk-editor-dalg20.azurewebsites.net/docs

    fetch('https://jsramverk-editor-dalg20.azurewebsites.net/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "user": this.$store.state.currentUser,
        },
        body: JSON.stringify({
            query: "{ docs { _id name html users } }"
        })
    })
        .then(r => r.json())
        .then(response => this.$store.commit('setDocs', response.data.docs));

    // 
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
