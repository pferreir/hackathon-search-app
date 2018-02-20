<template>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a class="pagination-previous"
       v-if="currentPage > 1"
       @click="prevPage">
      Previous
    </a>
    <a class="pagination-next"
       v-if="numPages > 1 && currentPage != numPages"
       @click="nextPage">
      Next page
    </a>
    <ul class="pagination-list">
        <li v-for="page in pageList" v-bind:key="page">
          <span class="pagination-ellipsis" v-if="page === '...'">&hellip;</span>
          <a class="pagination-link"
             aria-label="Goto page"
             v-if="page !== '...'"
             v-bind:class="{ 'is-current': page === currentPage }">
            {{ page }}
          </a>
        </li>
    </ul>
    </nav>
</template>

<script>
// shamelessly stolen from https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
function pagination (c, m) {
  var current = c;
  var last = m;
  var delta = 2;
  var left = current - delta;
  var right = current + delta + 1;
  var range = [];
  var rangeWithDots = [];
  var l;

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

export default {
  name: 'Paginator',
  computed: {
    numPages () {
      if (this.$store.state.results.hits) {
        const numResults = this.$store.state.results.hits.total;
        return Math.ceil(numResults / 25);
      }
      return null;
    },
    currentPage () {
      return this.$store.state.currentPage
    },
    pageList () {
      return pagination(this.currentPage, this.numPages);
    }
  },
  methods: {
    prevPage () {
      this.$store.commit('updatePage', this.$store.state.currentPage - 1);
      this.$store.dispatch('getResultList');
    },
    nextPage () {
      this.$store.commit('updatePage', this.$store.state.currentPage + 1);
      this.$store.dispatch('getResultList');
    }
  }
}
</script>
