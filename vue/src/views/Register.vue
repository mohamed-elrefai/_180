<template>
    <div class="app">
        <div class="imgBx">
            <img src="../assets/2.jpg" alt="">
        </div>
        <div class="contentBx">
            <div class="formBx">
                <h2>Register</h2>
                <form @submit.prevent="HandelForm">
                    <div class="inputBx">
                        <span>Username</span>
                        <input type="text" v-model="username" class="usernameInputBx" id="usernameInputBx" placeholder="Enter your username" required>
                    </div>
                    <div class="inputBx">
                        <span>Email</span>
                        <input type="email" v-model="email" class="emailInputBx" id="emailInputBx" placeholder="Enter your email" required>
                    </div>
                    <div class="inputBx">
                        <span>Password</span>
                        <input type="password" v-model="password" class="passwordInputBx" id="passwordInputBx" placeholder="Enter your password" required>
                    </div>
                    <div class="remember">
                        <label><input type="checkbox"> Remember me</label>
                    </div>
                    <div class="inputBx">
                        <button>Sign up</button>
                    </div>
                    <div class="inputBx">
                        <p>have an account? <router-link to="/signin">Sign in</router-link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: "Register",
        data(){
            return{
                username: "",
                email: "",
                password: ""
            }
        },
        methods: {
            async HandelForm(e){
                e.preventDefault();
                const data = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                }
                await axios.post('/Register', data)
                    .then(() => {
                        this.$router.push('/signin')
                    })
            }
        },
    }
</script>