<template>
  <router-link class="z-sidebar-link" :class="{ active }" :to="to">
    <div class="icon-wrapper" :class="{ open }">
      <fa-icon class="icon" :icon="icon" v-bind="iconProps" />
    </div>
    <transition name="sidebar-fade">
      <span v-if="open">
        <slot></slot>
      </span>
    </transition>
  </router-link>
</template>

<script>
export default {
  name: 'ZSidebarLink',
  props: {
    open: { type: Boolean, default: false },
    to: { type: String, required: true },
    icon: { type: [String, Array], required: true },
    iconProps: { type: Object, default: () => ({}) },
  },
  computed: {
    active() {
      return this.$route.path === this.to;
    },
  },
};
</script>

<style>
.sidebar-fade-enter-active,
.sidebar-fade-leave-active {
  transition: opacity 0.1s;
}

.sidebar-fade-enter,
.sidebar-fade-leave-to {
  opacity: 0;
}

.z-sidebar-link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  user-select: none;

  margin: 0.1em;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 2em;

  color: white;
  text-decoration: none;
}

.z-sidebar-link:hover {
  background-color: var(--sidebar-item-hover);
}

.z-sidebar-link.active {
  background-color: var(--sidebar-item-active);
}

.z-sidebar-link .icon-wrapper {
  flex-shrink: 0;
  margin-right: 10px;
  width: 100%;
}

.z-sidebar-link .icon-wrapper.open {
  flex-shrink: 0;
  margin-right: 10px;
  width: 30px;
}

.z-sidebar-link .icon-wrapper .icon {
  width: 100%;
}
</style>
