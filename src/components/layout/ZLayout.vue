<template>
  <div class="z-layout">
    <ZSidebar :open="open" :style="`width: ${width}px`" @toggle="onToggle()" />
    <router-view
      :style="`margin-left: ${sidebarOverlaysContent ? closedWidth : width}px`"
      class="page-view"
    />
  </div>
</template>

<script>
import ZSidebar from './ZSidebar.vue';

export default {
  name: 'ZLayout',
  components: {
    ZSidebar,
  },
  props: {
    openWidth: { type: Number, default: 180 },
    closedWidth: { type: Number, default: 56 },
    sidebarOverlaysContent: { type: Boolean, default: false },
  },
  data: () => {
    return {
      open: false,
    };
  },
  computed: {
    width() {
      return this.open ? this.openWidth : this.closedWidth;
    },
  },
  methods: {
    onToggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
.z-layout .page-view {
  transition: 0.3s margin-left ease;
}
</style>
