<template>
  <b-navbar variant="charcoal" type="dark" class="py-0 shadow">
    <b-navbar-nav>
      <b-navbar-brand>
        <b-link :to="{name:'home'}" class="font-weight-bold">ISO-H</b-link>
      </b-navbar-brand>
      <b-nav-item-dropdown text="File">
        <b-dropdown-item :to="{name:'projects'}" variant="charcoal">Open</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  components: {},
  data() {
    return {

    };
  }
}
</script>

<style scoped>

</style>