<template>
  <div class="home-page">
    <h1>Home</h1>
    <p>Not alot to do here is there ...</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data: () => {
    return {
      items: [],
    };
  },
  methods: {
    add() {
      this.items.push(this.items.length + 1);
    },
  },
};
</script>

<style>
.home-page {
  border-bottom: 1px solid gray;
}

.home-page h1,
.home-page p {
  text-align: center;
}
</style>
