<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import home from './components/home.vue'
import 'bulma/css/bulma.css'

export default {
  name: 'app',
  components: { home },
  data() {
    return {
      isLoading: true,
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
