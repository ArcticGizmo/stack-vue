<template>
  <div class="api-page">
    <h1>API - Give it a go</h1>
    <button @click="onClick">Get api</button>
    <pre>{{ response }}</pre>
  </div>
</template>

<script>
export default {
  name: 'APIPage',
  data: () => {
    return {
      response: null,
    };
  },
  methods: {
    onClick() {
      this.$api
        .get('public/hello')
        .then(resp => {
          this.response = resp;
        })
        .catch(error => {
          this.response = error;
        });
    },
  },
};
</script>

<style scoped>
.api-page h1 {
  text-align: center;
}
</style>
