<template>
  <p class="control has-icons-left">
    <input class="input" type="text" placeholder="Search" @keyup.enter="updateKeyword">
    <span class="icon is-small is-left">
      <i class="fas fa-search"></i>
    </span>
  </p>
</template>

<script>
export default {
  name: 'SearchBox',
  methods: {
    updateKeyword (e) {
      this.$store.commit('updateKeyword', e.target.value);
      this.$store.dispatch('getResultList');
    }
  }
};
</script>
