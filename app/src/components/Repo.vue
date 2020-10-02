<template>
  <div class="repo-info">
    <h3>{{repo.name}}</h3>
    <p v-if="repo.description">{{repo.description}}</p>
    <p v-if="repo.language">
      Language:
      <b>{{repo.language}}</b>
    </p>
    <p>
      Watchers:
      <b>{{repo.watcher_count}}</b>
    </p>
    <p>
      Stars:
      <b>{{repo.star_count}}</b>
    </p>
    <a :href="repo.html_url">View on GitHub</a>
  </div>
</template>

<script>
export default {
  props: ["repo"]
};
</script>

<style>
.repo-info {
  padding-bottom: 1.5em;
  border-bottom: 1px solid #ccc;
}

.repo-info h3, .repo-info p {
  max-width: 500px;
  word-break: break-all;
}
</style>
