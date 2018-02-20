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

var results = [
  {
    'created': '2018-02-20T09:26:25.954945+00:00',
    'doi': '10.5281/zenodo.1180027',
    'id': 1180027,
    'metadata': {
      'description': 'Some description loooong',
      'title': 'Sinkapater -An Untethered Beat Sequencer'
    },
    'updated': '2018-02-20T09:26:26.220613+00:00'
  },
  {
    'created': '2018-02-20T09:26:20.254462+00:00',
    'doi': '10.5281/zenodo.1180025',
    'id': 1180025,
    'metadata': {
      'description': 'Some description loooong',
      'title': 'Two Shared Rapid Turn Taking Sound Interfaces for Novices'
    },
    'updated': '2018-02-20T09:26:20.551039+00:00'
  }
]

export default {
  name: 'ResultList',
  data: function () {
    return {
      results: results
    }
  },
  components: { ResultItem }
}
</script>
