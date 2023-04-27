<template>
  <div>
    <div class="w-100 h-100 position-absolute">
      <project-navbar />
      <b-container class="mt-5" fluid="fluid">
        <h2>Synth Chain</h2>
      </b-container>
      <synth-chain />
    </div>
  </div>
</template>

<script>
import ProjectNavbar from "./ProjectNavbar";
import SynthChain from "./synth/SynthChain";
export default {
  components: {SynthChain, ProjectNavbar}
}
</script>

<style scoped>

</style>