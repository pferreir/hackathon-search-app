<template>
  <nav class="navbar is-primary">
    <h1 class="navbar-item has-text-white subtitle">
      Amazing search appliance
    </h1>
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
