<template>
    <div class="home">
        <SignIn />
    </div>
</template>

<script>
// @ is an alias to /src
import SignIn from "../components/SignIn.vue"

export default {
  name: 'signin',
  components: {
    SignIn
  }
}
</script>

