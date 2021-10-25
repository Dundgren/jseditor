import axios from 'axios';

export async function sendMail (receivingMail) {
    const data = {
        docId: this.$store.state.currentId,
        mail: receivingMail
    }

    axios.post("https://jsramverk-editor-dalg20.azurewebsites.net/mail/sendmail", data);

    const previousMessage = this.$store.state.editStatus;

    this.$store.commit("setEditStatus", "Invite sent!");

    window.setTimeout(() => {
        this.$store.commit("setEditStatus", previousMessage);
    }, 3000);
}
