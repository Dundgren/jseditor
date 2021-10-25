<template>
    <label for="mailInput">Invite user to edit document:</label>
    <input type="text" id="mailInput" name="mailInput" v-model="receivingMail" placeholder="user@example.com" />
    <button v-on:click="sendMail(receivingMail)">Send Invite</button>
</template>

<script>
import { sendMail } from "../api/mail";

export default {
    data () {
        return {
            receivingMail: ""
        }
    },
    methods: {
        sendMail: sendMail
    }
}
</script>