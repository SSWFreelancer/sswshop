<template>
  <div class="footer">
    <div class="footer__container">
      © 2024, Created By
      <a target="_blank" href="https://github.com/sswfreelancer"
        >Sarvar Shoyev</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/Footer.sass'
</style>
