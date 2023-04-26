<template>
  <page-container>
    <h1>Projects</h1>
    <h2 class="mt-5">Tutorial Projects</h2>
    <b-card bg-variant="dark" body-text-variant="charcoal" class="shadow-lg">
      <div class="d-flex flex-column flex-md-row align-items-center">
        <div class="flex-grow-1">
          <label class="font-weight-bold">Harmonics 101</label>
          <p style="max-width: 400px">
            This tutorial will show you the basics of generating harmonics!
            You'll experiment with different integer ratios and learn how they sound.
          </p>
        </div>
        <div class="flex-grow-0">
          <b-button :to="{name:'harmonicsTutorial'}" variant="primary" class="btn-shiny shadow">Open</b-button>
        </div>
      </div>
    </b-card>
    <p class="mt-5">
      IsoHarmonics is alpha-v0. Please excuse the bugs and lack of content.
    </p>
  </page-container>
</template>

<script>
import PageContainer from "../ui/PageContainer";

export default {
  components: {PageContainer},
  methods: {
  }
}
</script>

<style scoped>

</style>