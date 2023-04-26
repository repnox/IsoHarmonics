<template>
  <div id="app">
    <transition name="fade">
      <router-view>
      </router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    watch: {
      $route: {
        immediate: true,
        handler(to, from) {
          document.title = to.meta.title || 'IsoHarmonics';
        }
      },
    },
    methods: {
      getTransitionName(route) {
        const defaultTransition = 'fade';
        if (route && route.meta) {
          return route.meta.transition || defaultTransition;
        }
        return defaultTransition;
      }
    }
  }

</script>

<style>
@import "scss/main.scss";
</style>
