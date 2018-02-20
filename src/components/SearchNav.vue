<template>
  <div class="searchnav">
    <span class="searchnav-results">
      Found 116 results.
    </span>
    <DropDown />
  </div>
</template>

<script>
import DropDown from '@/components/DropDown';

export default {
  name: 'SearchNav',
  components: {
    DropDown
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
