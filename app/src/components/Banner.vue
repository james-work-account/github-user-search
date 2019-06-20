<template>
  <header>
    <h1>
      <router-link to="/">GitHub Search App</router-link>
    </h1>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  text-align: left;
  background: #ffb050;
  padding: 0.75em;
  margin: 0;
}
header h1 {
  margin: 0;
}
header h1 a,
header h1 a:visited {
  text-decoration: none;
  color: #000;
}
@media (min-width: 1000px) {
  header {
    padding-left: calc((100% / 2) - 500px);
  }
}
</style>
