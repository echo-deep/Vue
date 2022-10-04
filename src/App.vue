<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/homepage">homepage</router-link>
    <router-link to="/echarts">echarts</router-link>
    <router-link to="/echartTest">echartTest</router-link>
    <router-link to="/echartTest2">echartTest2</router-link>
  </nav>
  <router-view/>
</template>

<script>

export default{

}
</script>


<style lang="less">
body{
    background: url("~@/assets/miniq.jpg") top center no-repeat;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
