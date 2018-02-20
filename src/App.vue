<template>
  <div id="app">
    <NavBar :app="this" />
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import { connect } from 'redux-vue';

const App = {
  name: 'App'
}

function mapStateToProps (state) {
  return {
    keyword: state.keyword
  };
}

function mapActionToProps (dispatch) {
  return {
    search (keyword) {
      dispatch({
        type: 'SET_KEYWORD',
        data: { keyword }
      });
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(App);
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
