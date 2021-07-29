<template>
  <div id="app">
  <Header />
    <router-view/>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
export default {
  components:{
    Header
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
