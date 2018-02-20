<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ result.metadata.title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        {{ result.metadata.description }}
        <br>
        <time>Updated on {{ result.updated | formatDate }}</time>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">View</a>
    </footer>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ResultItem',
  props: ['result'],
  filters: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
      }
    }
  }
}
</script>
