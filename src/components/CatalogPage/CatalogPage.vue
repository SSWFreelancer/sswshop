<template>
  <div class="catalog">
    <div class="catalog__container">
      <Title>{{
        this.$route.params.id && this.$route.params.categoryName
          ? this.$route.params.categoryName
          : "Каталог"
      }}</Title>
      <p class="loading" v-if="!isLoaded">Загрузка...</p>
      <div class="catalog__cards">
        <Card
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <router-link
        v-if="this.$route.params.id && isLoaded"
        class="button"
        :to="{
          name: 'category',
        }"
      >
        Весь каталог
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Title from "../Title.vue";
import Card from "../Card.vue";
import { ProductData } from "./index";
@Component({
  components: {
    Title,
    Card,
  },
})
export default class CatalogPage extends Vue {
  products: ProductData[] = [];
  isLoaded: boolean = false;
  mounted() {
    const id = this.$route.params.id;
    this.fetchProducts(id);
  }

  async fetchProducts(id: string) {
    try {
      const response = await fetch(
        "https://course-angular.javascript.ru/api/products/"
      );
      const res = await response.json();
      if (id) {
        this.products = res.data.items.filter(
          (product: ProductData) => product.subCategory === id
        );
        this.isLoaded = true;
      } else {
        this.products = res.data.items;
        this.isLoaded = true;
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }
  @Watch("$route.params.id")
  onRouteChange(id: string) {
    this.fetchProducts(id);
    window.scrollTo(0, 0);
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/Catalog/catalog.sass'
</style>
