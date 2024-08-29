<template>
  <div class="home-page">
    <MainSlider />
    <Suggestions class="block" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainSlider from "./MainSlider.vue";
import Suggestions from "./Suggestions.vue";
@Component({
  components: {
    MainSlider,
    Suggestions,
  },
})
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/Home/main.sass'
</style>
