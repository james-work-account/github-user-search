<template>
  <div class="user-cards">
    <Card v-for="user in get_users_array" :key="user.id" :user_info="user"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/Card";
export default {
  components: {
    Card
  },
  computed: {
    ...mapGetters(["get_users_array"])
  }
};
</script>

<style>
.user-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
}
</style>
