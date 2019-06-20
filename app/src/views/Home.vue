<template>
  <div class="home">
    <Search/>
    <SearchCount/>
    <Cards v-if="get_users_array"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search";
import SearchCount from "@/components/SearchCount";
import Cards from "@/components/Cards";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Search,
    SearchCount,
    Cards
  },
  computed: {
    ...mapGetters(["get_users_array"])
  }
};
</script>

<style>
.home {
  padding: 0 15px 50px 15px;
}
@media (min-width: 1000px) {
  .home {
    max-width: 1000px;
    margin: auto;
  }
}
</style>

