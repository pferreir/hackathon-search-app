<template>
  <p class="control has-icons-left">
    <input class="input" type="text" placeholder="Search" @keyup.enter="search">
    <span class="icon is-small is-left">
      <i class="fas fa-search"></i>
    </span>
  </p>
</template>

<script>
export default {
  name: 'SearchBox',
  props: ['app'],
  methods: {
    search (event) {
      this.app.search(event.target.value);
    }
  }
}
</script>
