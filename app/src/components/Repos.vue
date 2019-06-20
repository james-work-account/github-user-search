<template>
  <div class="repos">
    <button @click="show = !show">Toggle Repositories</button>
    <div v-show="show">
      <Pagination
        :number_of_items="user.public_repos"
        :page="page"
        @change-page="p => $emit('change-page', p)"
      />
      <Repo v-for="repo in user.repos" :key="repo.name" :repo="repo"/>
    </div>
  </div>
</template>

<script>
import Repo from "@/components/Repo";
import Pagination from "@/components/Pagination";
export default {
  props: ["user", "page"],
  components: {
    Repo,
    Pagination
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style>
.repos button {
  background-color: #fff;
  border: 1px solid black;
  font-size: 17px;
  padding: 0.5em;
}
</style>
