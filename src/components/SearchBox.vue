<template>
  <p class="control has-icons-left">
    <input class="input" type="text" placeholder="Search" @keyup.enter="updateKeyword" :value="keyword">
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
      this.$router.push(`/${e.target.value}`);
    }
  },
  watch: {
    $route (to, from) {
      this.$store.commit('updateKeyword', to.params.keyword);
      this.$store.commit('updatePage', 1);
      this.$store.dispatch('getResultList');
    }
  },
  computed: {
    keyword () {
      return this.$store.state.keyword;
    }
  }
};
</script>
