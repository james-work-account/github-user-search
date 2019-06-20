<template>
  <div class="card">
    <img
      class="user-image"
      :src="user_info.avatar_url"
      :title="'user image for ' + user_info.login"
      :alt="'user image for ' + user_info.login"
    >
    <h2 class="login">{{user_info.login}}</h2>
    <div class="info">
      <div>followers: {{user_info.followers}}</div>
      <div>repos: {{user_info.public_repos}}</div>
    </div>
    <router-link
      class="more-info"
      :to="{ name: 'user details', params: { user: user_info.login } }"
    >More Info</router-link>
  </div>
</template>

<script>
export default {
  props: ["user_info"]
};
</script>

<style>
.card {
  padding: 1em;
  border: 1px solid black;
  transition: 0.15s;
  box-shadow: 5px 10px 10px #888;
}
.card:hover {
  transform: translate(3px, 3px);
}
.user-image {
  --size: 200px;
  width: var(--size);
  height: var(--size);
}
.login {
  margin-top: 0;
}
.info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.more-info {
  display: block;
  margin-top: 1em;
}
</style>
