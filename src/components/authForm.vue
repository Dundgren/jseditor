<template>
    <div id="loginForm">
        <h2>Login</h2>
        <label for="login-mail">Email</label>
        <input type="text" v-model="loginMail" name="login-mail" id="login-mail" required>
        <label for="login-pass">Password</label>
        <input type="text" v-model="loginPass" name="login-pass" id="login-pass" required>
        <button v-on:click="loginRequest">Login</button>
        <p v-bind:class="{ 'warning-box': showWarning }">
            {{ warning }}
        </p>
    </div>
    <hr />
    <div id="registerForm">
        <h2>Register</h2>
        <p>Register as an user to access the document editor.</p>
        <p>At the moment there are no formating requirements for email. Password must be at least 6 characters long.</p>
        <label for="register-mail">Email</label>
        <input type="text" v-model="registerMail" name="register-mail" id="register-mail" required>
        <label for="register-pass">Password</label>
        <input type="text" v-model="registerPass" name="register-pass" id="register-pass" required>
        <button v-on:click="registerRequest">Register</button>
        <p v-bind:class="{ 'warning-box': showRegisterWarning, 'success-box': showSuccess }">
            {{ registerWarning }}
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            loginMail: "",
            loginPass: "",
            registerMail: "",
            registerPass: "",
            showWarning: false,
            showRegisterWarning: false,
            warning: "",
            registerWarning: "",
            showSuccess: false,
        }
    },
    methods: {
        async loginRequest () {
            const doc = {
                mail: this.loginMail,
                pass: this.loginPass
            }
            let response = await axios.post("https://jsramverk-editor-dalg20.azurewebsites.net/auth/login", doc); //https://jsramverk-editor-dalg20.azurewebsites.net/auth/login

            if (response.data) {
                this.$store.commit("setCurrentUser", this.loginMail);
                this.$store.commit("setCurrentJwt", response.data);
            } else {
                this.warning = "Password or email doesn't match.";
                this.showWarning = true;
            }
        },
        async registerRequest () {
            if (this.registerPass.length >= 6) {
                const doc = {
                    mail: this.registerMail,
                    pass: this.registerPass
                }
                let response = await axios.post("https://jsramverk-editor-dalg20.azurewebsites.net/auth/register", doc);
                if (response.status == 200) {
                    this.registerWarning = "User successfully registered!";
                    this.showSuccess = true;
                }
                console.log(response);
            } else {
                this.showRegisterWarning = true;
                this.registerWarning = "Password must be at least 6 characters long!"
            }
        }
    }
}
</script>

<style scoped>
input {
    display: block;
    margin-bottom: 2em;
}

.warning-box {
    border: 5px solid red;
    color: red;
    padding: 0.5em;
}

.success-box {
    border: 5px solid green;
    color: green;
    padding: 0.5em;
}
</style>
