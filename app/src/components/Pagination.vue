<template>
  <div class="pagination">
    <div v-if="number_of_items > repos_per_page">
      <ul class="list-inline" v-if="width > 600">
        <li v-if="page > 1" class="previous">
          <button @click="$emit('change-page', {page: page - 1})">Previous</button>
        </li>
        <li v-for="num in range" :key="num" :class="{current : num === page}">
          <template v-if="num === page">{{num}}</template>
          <template v-else>
            <button @click="$emit('change-page', {page: num})">{{num}}</button>
          </template>
        </li>
        <li v-if="page < number_of_pages" class="next">
          <button @click="$emit('change-page', {page: page + 1})">Next</button>
        </li>
      </ul>
      <ul class="list-inline" v-else>
        <li v-if="page > 1" class="previous">
          <button @click="$emit('change-page', {page: page - 1})">Previous</button>
        </li>
        <li class="current">{{page}}</li>
        <li v-if="page < number_of_pages" class="next">
          <button @click="$emit('change-page', {page: page + 1})">Next</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["number_of_items", "page"],
  data() {
    return {
      width: 0,
      repos_per_page: 30 // Number returned by GitHub API
    };
  },
  computed: {
    number_of_pages() {
      return Math.ceil(this.number_of_items / this.repos_per_page);
    },
    pagination_range_start() {
      if (this.number_of_pages <= 5 || this.page <= 3) {
        return 1;
      } else if (this.number_of_pages - 2 > this.page) {
        return this.page - 2;
      } else {
        return this.number_of_pages - 4;
      }
    },
    pagination_range_end() {
      if (this.number_of_pages <= 5 || this.number_of_pages - 2 <= this.page) {
        return this.number_of_pages;
      } else {
        return this.pagination_range_start + 4;
      }
    },
    range() {
      return Array.from(
        new Array(this.pagination_range_end + 1 - this.pagination_range_start),
        (x, i) => i + this.pagination_range_start
      );
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.width = window.innerWidth; // set initial width
      window.addEventListener("resize", () => {
        this.width = window.innerWidth;
      });
    });
  }
};
</script>

<style>
.list-inline {
  display: inline-grid;
  grid-auto-flow: column;
  padding-left: 0;
}
.list-inline > li {
  list-style: none;
  border: 2px solid #ddd;
}
.list-inline > li > button:hover {
  background: #ddd;
}
.list-inline > li > button {
  padding: 10px 20px 10px 20px;
  border: none;
  color: var(--link-colour);
}
.list-inline > li.current {
  background: #ddd;
  padding: 10px 20px 10px 20px;
}
.list-inline > li > button,
.list-inline > li.current {
  cursor: pointer;
  width: 100%;
}
@media (max-width: 599px) {
  .list-inline {
    display: grid;
  }
}
</style>
