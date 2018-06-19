<template>
  <div class="card">
    <div class="card-body">
      <p class="card-text" v-html="body"></p>
      <p class="card-text">
        <small class="text-muted">
          {{time}}
        </small>
      </p>
    </div>
  </div>
</template>

<script>
import timeago from 'timeago.js';

export default {
  props: ['meow'],
  computed: {
    body() {
      return this.meow.body;
    },
    time() {
      return timeago().format(Date.parse(this.meow.created_at));
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 1rem;
}
.card-body {
  padding: 0.5rem;
  p {
    margin-bottom: 0;
  }
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> b87cb8c0b17c81adb089e1ffcf4d41ff0486edda
