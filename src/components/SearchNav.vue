<template>
  <div class="searchnav">
    <span class="searchnav-results">
      Found {{ results }} results.
    </span>
    <Paginator />
    <DropDown />
  </div>
</template>

<script>
import DropDown from '@/components/DropDown';
import Paginator from '@/components/Paginator';

export default {
  name: 'SearchNav',
  components: {
    DropDown,
    Paginator
  },
  computed: {
    results () {
      return this.$store.state.results.hits ? this.$store.state.results.hits.total : 0;
    }
  }
};
</script>

<style>
  .searchnav {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
  }
</style>
