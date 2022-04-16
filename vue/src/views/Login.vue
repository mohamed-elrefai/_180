<template>
    <div class="app">
        <div class="imgBx">
            <img src="../assets/1.jpg" alt="">
        </div>
        <div class="contentBx">
            <div class="formBx">
                <h2>Login</h2>
                <form @submit.prevent="HandelForm">
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
                        <button>Sign in</button>
                    </div>
                    <div class="inputBx">
                        <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: "Login",
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
                const res = await axios.post('/Login', data)
                localStorage.setItem('token', res.data.token)
                this.$router.push('/')
            }
        },
    }
</script>

<style>

</style>