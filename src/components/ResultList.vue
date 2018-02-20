<template>
  <div id="resultList" class="container">
    <ResultItem
      v-for="result in results"
      v-bind:result="result"
      v-bind:key="result.id">
    </ResultItem>
  </div>
</template>

<script>
import ResultItem from '@/components/ResultItem';

export default {
  name: 'ResultList',
  computed: {
    results () {
      return this.$store.state.results.hits ? this.$store.state.results.hits.hits : [];
    }
  },
  components: { ResultItem }
}
</script>
