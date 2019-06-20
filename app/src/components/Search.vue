<template>
  <form @submit.prevent="search" id="github-search-form">
    <input
      type="text"
      name="search-input"
      id="search-input"
      placeholder="Enter a username..."
      :value="get_search_input_text"
    >
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import Api from "@/services/Api";
import store from "@/store";
import { mapGetters } from "vuex";

export default {
  methods: {
    async search(e) {
      const name = new FormData(e.target).get("search-input");
      let count = null,
        items = null;
      if (name.length > 0) {
        const query = `{
          user_search(name: "${name}") {
            total_count
            items {
              id
              login
              avatar_url
              public_repos
              followers
            }
          }
        }`;
        const res = await Api().post("/api", query);
        count = res.data.data.user_search.total_count;
        items = res.data.data.user_search.items;
      }
      store.dispatch("setSearchInputText", name);
      store.dispatch("setSearchCount", count);
      store.dispatch("setUsersArray", items);
    }
  },
  computed: {
    ...mapGetters(["get_search_input_text"])
  }
};
</script>

<style>
form#github-search-form {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 0.5em;
  margin-top: 1em;
}
form#github-search-form button {
  background-color: #fff;
  border: 1px solid black;
  font-size: 1.2em;
}
input#search-input {
  padding: 1em;
  font-size: 1.2em;
}
</style>
