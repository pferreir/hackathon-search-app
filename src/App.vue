<template>
  <div id="app">
    <NavBar />
    <ResultList />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import ResultList from '@/components/ResultList';

const App = {
  name: 'App',
  components: {
    NavBar,
    ResultList
  }
}

export default App;
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
