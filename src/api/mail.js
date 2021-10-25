import axios from 'axios';

export async function sendMail (receivingMail) {
    const data = {
        docId: this.$store.state.currentId,
        mail: receivingMail
    }

    axios.post("http://localhost:1337/mail/sendmail", data);

    const previousMessage = this.$store.state.editStatus;

    this.$store.commit("setEditStatus", "Invite sent!");

    window.setTimeout(() => {
        this.$store.commit("setEditStatus", previousMessage);
    }, 3000);
}
