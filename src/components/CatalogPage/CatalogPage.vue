<template>
  <div class="catalog">
    <div class="catalog__container">
      <Title>Каталог</Title>
      <div class="catalog__cards">
        <Card
          v-for="product in products"
          :key="product._id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Title from "../Title.vue";
import Card from "../Card.vue";
@Component({
  components: {
    Title,
    Card,
  },
})
export default class CatalogPage extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/Catalog/catalog.sass'
</style>
