<template>
  <HomePage />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomePage from "@/components/HomePage/HomePage.vue";
@Component({
  components: {
    HomePage,
  },
})
export default class HomeView extends Vue {}
</script>
