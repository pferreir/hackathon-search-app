<template>
  <div id="app">
    <NavBar />
    <SearchNav />
    <ResultList />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SearchNav from '@/components/SearchNav';
import ResultList from '@/components/ResultList';

const App = {
  name: 'App',
  components: {
    NavBar,
    ResultList,
    SearchNav,
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
}
</style>
