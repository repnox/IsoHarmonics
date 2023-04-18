<template>
  <div>
    <div v-if="!project">
      <welcome v-model="project" />
    </div>
  </div>
</template>

<script>

import Welcome from "./Welcome";
export default {
  components: {Welcome},
  data() {
    return {
      project: null,
    }
  }
}

</script>