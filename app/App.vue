<template>
  <div id="app">
    <router-view></router-view>
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
    }
  }

</script>

<style>
@import "scss/main.scss";
</style>
