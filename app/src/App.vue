<template>
  <div id="app">
    <Banner></Banner>
    <BearerModal v-if="!get_bearer_token"/>
    <router-view/>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import BearerModal from "@/components/BearerModal.vue";
import { mapGetters } from "vuex";
import store from "@/store";
export default {
  components: {
    Banner,
    BearerModal
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
button {
  cursor: pointer;
}
</style>
