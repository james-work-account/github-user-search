<template>
  <div class="user-detail">
    <h1>{{this.$route.params.user}}</h1>
    <div class="details" v-if="user">
      <img
        class="user-image large"
        :src="user.avatar_url"
        :title="'user image for ' + user.login"
        :alt="'user image for ' + user.login"
      >
      <div class="user-info">
        <p v-if="user.name">
          Name:
          <b>{{user.name}}</b>
        </p>
        <p v-if="user.company">
          Company:
          <b>{{user.company}}</b>
        </p>
        <p v-if="user.bio">
          Bio:
          <b>{{user.bio}}</b>
        </p>
        <p>
          Followers:
          <b>{{user.followers}}</b>
        </p>
        <p>
          Following:
          <b>{{user.following}}</b>
        </p>
        <a :href="user.html_url">View on GitHub</a>
        <Repos :user="user" :page="page" @change-page="change_page"/>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/Api";
import Repos from "@/components/Repos";

export default {
  components: {
    Repos
  },
  data() {
    return {
      user: null,
      page: 1
    };
  },
  methods: {
    async change_page(p) {
      const new_page = p.page;
      const name = this.$route.params.user;
      const query = `{
        user_repos(name: "${name}", page: ${new_page}) {
          name
          description
          html_url
          watcher_count
          star_count
        }
      }`;
      const res = await Api().post("/api", query);
      this.page = new_page;
      this.user["repos"] = res.data.data.user_repos;
    }
  },
  async created() {
    const name = this.$route.params.user;
    const query = `{
      user(name: "${name}") {
          login
          avatar_url
          html_url
          name
          company
          bio
          followers
          following
          public_repos
          repos(page: ${this.page}) {
            name
            description
            html_url
            language
            watcher_count
            star_count
          }
        }
    }`;
    const res = await Api().post("/api", query);
    this.user = res.data.data.user;
  }
};
</script>

<style>
.user-detail {
  padding: 0 15px 50px 15px;
}
@media (min-width: 1000px) {
  .user-detail {
    max-width: 1000px;
    margin: auto;
  }
}
.user-detail .details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.user-detail h1 {
  border-bottom: 3px solid #000;
  padding-bottom: 0.5em;
}
.user-image.large {
  --size: 400px;
  width: var(--size);
  height: var(--size);
  justify-self: center;
}
.user-info {
  padding-left: 50px;
}
.user-info > * {
  text-align: left;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
@media (max-width: 900px) {
  .user-detail .details {
    grid-template-columns: 1fr;
    grid-row-gap: 1em;
  }
  .user-info {
    padding-right: 50px;
  }
}
@media (max-width: 599px) {
  .user-info {
    padding-left: 0;
    padding-right: 0;
  }
}
@media (max-width: 429px) {
  .user-detail h1 {
    font-size: 24px;
  }
  .user-image.large {
    --size: 250px;
  }
  .user-detail {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
