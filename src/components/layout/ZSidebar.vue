<template>
  <div class="z-sidebar">
    <h1 v-if="open">Example Project</h1>
    <h1 v-else>
      <div>E</div>
      <div>P</div>
    </h1>
    <ZSidebarLink
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      :name="route.name"
      :icon="route.icon"
      :iconProps="route.iconProps"
      :open="open"
    >
      {{ route.name }}
    </ZSidebarLink>
    <span class="collapse-icon" :class="{ open: open }" @click="onToggleOpen()">
      <fa-icon icon="angle-double-left" />
    </span>
  </div>
</template>

<script>
import ZSidebarLink from './ZSidebarLink.vue';

const IGNORED_PATHS = ['*', 'gap'];

export default {
  name: 'ZSidebar',
  components: {
    ZSidebarLink,
  },
  props: {
    open: { type: Boolean, default: false },
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter(r => !IGNORED_PATHS.includes(r.path));
    },
  },
  methods: {
    onToggleOpen() {
      this.$emit('toggle');
    },
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style>
.z-sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5rem;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.z-sidebar h1 {
  height: 2.5em;
  text-align: center;
}

.z-sidebar .collapse-icon {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.z-sidebar .collapse-icon.open {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
