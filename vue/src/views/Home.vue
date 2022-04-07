<template>
  <div class="home">
    <NavebarVue/>
    <main class="pt-12 bg-slate-900 pb-12">
      <div class="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
        <Lift />
        <Homes />
        <Right />
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import NavebarVue from "../components/Navebar.vue"
import Homes from '../components/Home'
import Lift from '../components/LiftSide'
import Right from '../components/rightSide'

export default {
  name: 'Home',
  components: {
    NavebarVue,
    Homes,
    Lift,
    Right,

  }
}
</script>
