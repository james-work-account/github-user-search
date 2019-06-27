<template>
  <div class="bearer-input">
    <form @submit.prevent="setBearer" id="bearer-input-form">
      <input
        type="text"
        name="bearer-input"
        id="bearer-input"
        placeholder="Enter a Bearer Token..."
        :value="'Bearer '"
        :class="{ error : errors }"
      >
      <label for="bearer-input" :class="{ error : errors}">Enter your GitHub Bearer Token</label>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      errors: false
    };
  },
  methods: {
    checkBearer(b) {
      return /^Bearer\s[a-f0-9]{40}$/.test(b);
    },
    setBearer(e) {
      const bearer = new FormData(e.target).get("bearer-input");
      console.log(this.checkBearer(bearer));
      if (this.checkBearer(bearer)) {
        localStorage.setItem("bearerToken", bearer);
        store.dispatch("setBearerToken", bearer);
        this.errors = false;
      } else {
        this.errors = true;
      }
    }
  }
};
</script>

<style>
.bearer-input {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  padding-top: 80px;
  background: rgb(100, 100, 100, 0.8);
}
form#bearer-input-form {
  display: grid;
  grid-template-areas:
    "label label label label"
    "input input input button";
  grid-gap: 0.5em;
  margin: 0 auto;
  padding: 1.5em;
  background: #fff;
  border: 2px solid #000;
}
form#bearer-input-form > label {
  grid-area: label;
  font-weight: 700;
  font-size: 20px;
}
form#bearer-input-form > input.error {
  border-color: #b10e1e;
  box-shadow: 0 0 10px #b10e1e;
}
form#bearer-input-form > input.error + label::after {
  display: block;
  text-align: left;
  content: "Error: Invalid Bearer Token";
  color: #b10e1e;
  padding: 0.5em;
  margin: 0.5em 0;
  border: 3px solid #b10e1e;
  font-size: 17px;
}
form#bearer-input-form > input {
  grid-area: input;
}
form#bearer-input-form > button {
  grid-area: button;
}
form#bearer-input-form button {
  background-color: #fff;
  border: 1px solid black;
  font-size: 17px;
  padding: 1em;
}
input#bearer-input {
  padding: 1em;
  font-size: 17px;
}
@media (min-width: 855px) {
  form#bearer-input-form {
    width: 800px;
  }
}
@media (max-width: 600px) {
  form#bearer-input-form {
    grid-template-areas:
      "label"
      "input"
      "button";
  }
}
</style>
