<template>
  <page-container>

    <h1 class="text-center my-4">Welcome to IsoHarmonics!</h1>
    <p>
      IsoHarmonics is a tool for designing perfect audio signals.
      It's a synthesizer that exploits the power of the harmonic series and additive synthesis to create
      perfect consonance (harmony) or perfect dissonance (percussion).
      If you've ever wondered if there's more to music than the 12 keys on a piano, this software is for you!
    </p>

    <div class="text-center">
      <b-button :to="{name:'projects'}" variant="secondary" class="btn-shiny">Open a Sample Project!</b-button>
    </div>

    <h2 class="mt-4">Why?</h2>
    <p>
      The space of all possible harmonic progressions is rather large. However, modern
      <a href="https://en.wikipedia.org/wiki/12_equal_temperament" target="_blank">12-Tone Equal Temperament</a>
      only covers a small subsection of this space.
      Additionally, equal temperament is intentionally
      out-of-tune for balanced modulation between major and minor tonalities.
      Thus, a perfect fifth is actually not perfect.
    </p>
    <p>
      While the 12-TET system is indeed practical for building
      real musical instruments that perform in concert, it is arguably worthless for digital music production
      where such physical limitations don't exist.
    </p>
    <p>
      The MIDI format, standard protocol in all major audio software including DAWs and VSTs, doesn't grant
      precise control over the pitch and overtones of individual notes in a polyphonic track. As a result,
      existing software is fundamentally coupled with 12-TET, and change will not occur in the industry until
      new standards are made and new software is built from the ground-up.
    </p>
    <p>
      IsoHarmonics does not aspire to redefine the industry standards, but it does attempt to spread awareness of
      alternative tonality so that it's more approachable to the average person. It's open-source
      and runs in any modern browser.
    </p>

    <h2 class="mt-4">How does it work?</h2>
    <p>
      The <a href="https://en.wikipedia.org/wiki/Harmonic_series_(music)" target="_blank">harmonic series</a>
      is the most fundamental concept in all of music theory.
      It provides a framework for qualifying the consonance of a chord, melody, or progression.
      It's the bridge between pitch and rhythm.
      As such, a modern music framework should incorporate the harmonic series as a first-class citizen.
      Gone are the days of A-G<sup>#</sup>, this antiquated nomenclature no longer serves us.
      Going forward, we are only concerned with the integer ratios of frequencies,
      as this is what truly matters, and can be leveraged to access the entire space of possible harmony.
    </p>
    <p>
      <a href="https://en.wikipedia.org/wiki/Additive_synthesis" target="_blank">Additive synthesis</a> can
      fully exploit the power of the harmonic series. By directly controlling each harmonic,
      it is possible to create melodic movements that were previously impossible. And by leveraging a
      non-destructive workflow, dynamics are preserved, and the final result is a perfect waveform.
    </p>

    <div class="text-center">
      <b-button :to="{name:'projects'}" variant="secondary" class="btn-shiny">Try it!</b-button>
    </div>

    <h2 class="mt-4">Microtonal?</h2>
    <p>
      Yes, this tool can be used to make microtonal music. But it's not the size of the ratio
      that counts, it's how you use it!
    </p>
    <p>
      There isn't a good existing name in popular culture for describing what this is.
      But, this software is heavily influenced by the works of William Sethares of UW,
      who uses the term "isomorphism". I'm not a music theorist or a mathematician,
      but I think this software creates isomorphic harmonics. If it doesn't, me and ol'
      Bill need to have a chat!
    </p>
  </page-container>
</template>

<script>

import PageContainer from "./ui/PageContainer";

export default {
  components: {PageContainer},
  methods: {
  }
}
</script>

<style scoped>

</style>