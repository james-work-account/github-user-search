<template>
  <div id="app">
    <Banner></Banner>
    <router-view v-if="get_bearer_token.length !== 0"/>
    <div v-else class="bearer-input">
      <form @submit.prevent="setBearer" id="bearer-input-form">
        <input
          type="text"
          name="bearer-input"
          id="bearer-input"
          placeholder="Enter a Bearer Token..."
          :value="'Bearer '"
        >
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import { mapGetters } from "vuex";
import store from "@/store";
export default {
  components: {
    Banner
  },
  methods: {
    setBearer(e) {
      const bearer = new FormData(e.target).get("bearer-input");
      localStorage.setItem("bearerToken", bearer);
      store.dispatch("setBearerToken", bearer);
    }
  },
  computed: {
    ...mapGetters(["get_bearer_token"])
  },
  mounted() {
    const bearer = localStorage.getItem("bearerToken");
    console.log(bearer);
    if (localStorage.getItem("bearerToken")) {
      store.dispatch("setBearerToken", bearer);
    }
  }
};
</script>

<style>
* {
  --link-colour: #005ea5;
  --link-colour-visited: #4c2c92;
}
body {
  margin: 0;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  color: var(--link-colour);
  font-weight: 700;
}
a:visited {
  color: var(--link-colour-visited);
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.bearer-input {
  padding: 0 15px 50px 15px;
}
@media (min-width: 1000px) {
  .bearer-input {
    max-width: 1000px;
    margin: auto;
  }
}
form#bearer-input-form {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 0.5em;
  margin-top: 1em;
}
form#bearer-input-form button {
  background-color: #fff;
  border: 1px solid black;
  font-size: 1.2em;
}
input#bearer-input {
  padding: 1em;
  font-size: 1.2em;
}
</style>
