<template>
  <section id="search-count">
    <p v-if="get_search_count !== null">Users found: {{get_search_count}}</p>
    <p v-else>Search for users above</p>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["get_search_count"])
  }
};
</script>
