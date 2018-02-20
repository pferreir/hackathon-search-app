<template>
  <div id="resultList" class="container">
    <ResultItem
      v-for="result in results"
      v-bind:result="result"
      v-bind:key="result.id"
      v-if="!loading">
    </ResultItem>
    <span class="has-text-primary" v-if="loading">
      <span class="icon">
        <i class="fas fa-spinner fa-spin"></i>
      </span>
      Loading
    </span>
  </div>
</template>

<script>
import ResultItem from '@/components/ResultItem';

export default {
  name: 'ResultList',
  computed: {
    results () {
      return this.$store.state.results.hits ? this.$store.state.results.hits.hits : [];
    },
    loading () {
      return this.$store.state.loading;
    }
  },
  components: { ResultItem }
}
</script>
