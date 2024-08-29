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
    font-size: 48px
    font-weight: 700
    @media(max-width: 991px)
        font-size: calc(32px + (48 - 32) * ((100vw - 375px) / (991 - 375)))
</style>
