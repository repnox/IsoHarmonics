<template>
  <div class="ih-device ih-harmonic-synth shadow">
    <small class="text-charcoal">Harmonic Synth</small>
    <div class="text-center">
      <select class="ih-device-input">
        <option>Sine</option>
        <option>Saw</option>
        <option>Square</option>
        <option>Other</option>
      </select>
    </div>
    <div class="text-center py-1">
      <input class="ih-device-input ih-input-integer" type="text" value="3" />
      <span class="ih-text-slash">/</span>
      <input class="ih-device-input ih-input-integer" type="text" value="2" />
    </div>
    <div class="text-center py-1">
      <b-button variant="dark">Assign</b-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.ih-harmonic-synth {
  padding: .25rem;
  background: linear-gradient(180deg, #DDFFBB, #C7E9B0);
  border: .1rem solid #1C82AD;

  input.ih-input-integer {
    width: 3rem;
    text-align: right;
  }
}

.ih-text-slash {
  position: relative;
  top: .75rem;
  font-size: 3em;
  line-height: .1rem;
}
</style>