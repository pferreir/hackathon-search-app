<template>
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>
  </div>
  <div class="navbar-end">
    <div class="navbar-item">
      <div class="field is-grouped">
      <SearchBox />
      </div>
    </div>
  </div>
  </nav>
</template>

<script>
import SearchBox from '@/components/SearchBox';

export default {
  name: 'NavBar',
  props: ['app'],
  components: {
    SearchBox
  }
}
</script>
