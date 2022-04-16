<template>
  <div class="home">
  {{user.username}}
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
