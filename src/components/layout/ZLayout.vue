<template>
  <div class="z-layout">
    <ZSidebar :open="open" @toggle="onToggle()" />
    <!-- <router-view class="page-view" /> -->
  </div>
</template>

<script>
import ZSidebar from './ZSidebar.vue';

export default {
  name: 'ZLayout',
  components: {
    ZSidebar,
  },
  data: () => {
    return {
      open: false,
    };
  },
  methods: {
    onToggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style></style>
