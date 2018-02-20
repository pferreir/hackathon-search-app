<template>
  <nav class="navbar is-transparent">
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
