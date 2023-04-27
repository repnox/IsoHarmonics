<template>
  <div class="ih-synthchain shadow overflow-auto">
    <div class="h-100 d-flex flex-row text-charcoal">
      <harmonic-synth />
    </div>
  </div>
</template>

<script>
import HarmonicSynth from "./HarmonicSynth";
export default {
  components: {HarmonicSynth}
}
</script>

<style lang="scss">
$synthchainHeight: 10rem;
$synthchainMargin: 2rem;
$synthchainPaddingX: 1.5rem;
$synthchainPaddingY: .5rem;
$synthchainInnerHeight: $synthchainHeight - $synthchainPaddingY - $synthchainPaddingY;

.ih-synthchain {
  height: $synthchainHeight;
  margin-bottom: $synthchainMargin;
  background: linear-gradient(180deg, #C9EEFF, #97DEFF);
  padding: $synthchainPaddingY $synthchainPaddingX;

  .ih-device {
    height: $synthchainInnerHeight;

    .ih-device-input {
      background: transparent;
      border: .08rem solid black;
    }
  }
}

</style>