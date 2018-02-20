<template>
<div class="dropdown is-active">
  <div class="dropdown-trigger" @click="toggleDropdown">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Sort By</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div
    class="dropdown-menu"
    id="dropdown-menu"
    role="menu"
    v-bind:class="{ 'hidden': hideMenu }" >
    <div class="dropdown-content">
      <a
        class="dropdown-item"
        :key="option.value"
        v-for="option in options"
        v-bind:value="option.value"
        v-bind:class="{ 'is-active': option.value === sortBy }"
        @click="updateSortBy(option.value)"
      >
        {{ option.label }}
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DropDown',
  methods: {
    toggleDropdown () {
      this.hideMenu = !this.hideMenu;
    },
    onOptionClicked (value) {
      this.sortBy = value;
    },
    updateSortBy (sortBy) {
      this.$store.commit('updateSortBy', sortBy);
      this.$store.dispatch('getResultList');
    }
  },
  data: () => ({
    hideMenu: true,
    options: [
      { label: 'Best Match', value: 'bestmatch' },
      { label: 'Most Recent', value: 'mostrecent' },
      { label: 'Oldest', value: '-mostrecent' }
    ]
  }),
  computed: {
    sortBy () {
      return this.$store.state.sortBy;
    }
  }
};
</script>
<style>
.dropdown-menu {
  right: 0;
  left: initial;
}

.hidden {
  display: none!important;
}
</style>
