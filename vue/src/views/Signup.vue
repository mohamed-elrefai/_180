<template>
    <div class="home">
        <SignUpVue />
    </div>
</template>

<script>
// @ is an alias to /src
import SignUpVue from "../components/SignUp.vue"

export default {
  name: 'signup',
  components: {
    SignUpVue
  }
}
</script>

