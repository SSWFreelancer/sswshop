<template>
  <CatalogPage />
</template>

<script lang="ts">
import CatalogPage from "@/components/CatalogPage/CatalogPage.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    CatalogPage,
  },
})
export default class CatalogView extends Vue {}
</script>
