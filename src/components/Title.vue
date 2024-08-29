<template>
  <div class="title">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Title extends Vue {}
</script>

<style lang="sass" scoped>
.title
    margin-bottom: 40px
    font-size: 48px
    font-weight: 700
    @media(max-width: 991px)
      margin-bottom: 25px
        font-size: calc(32px + (48 - 32) * ((100vw - 375px) / (991 - 375)))
</style>
