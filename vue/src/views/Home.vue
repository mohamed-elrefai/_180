<template>
  <div class="home">
    <div v-if="user">
      {{ user.username }}
    </div>
    <div v-else>
      <router-link to="/signin">Login</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"

export default {
  name: 'Home',
  data(){
    return{
      user: null
    }
  },
  async created() {
    const token = localStorage.getItem("token") 
    await axios.get('/', { headers: { token: token} })
      .then(res => {
        this.user = res.data; 
      })
  },
}
</script>
