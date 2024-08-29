<template>
  <div class="header-bottom">
    <div class="header-bottom__container">
      <div
        class="header-bottom__item"
        v-for="category in categories"
        :key="category.id"
      >
        <a href="#">{{ category.name }}</a>
        <div class="header-bottom__wrapper">
          <ul class="header-bottom__list">
            <li
              v-for="subCategory in category.subCategories"
              :key="subCategory.id"
            >
              <router-link to="#">{{ subCategory.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Category } from "./index";

@Component
export default class headerBottom extends Vue {
  categories: Category[] = [];

  created() {
    this.loadData();
  }
  async loadData() {
    try {
      const response = await fetch(
        "https://sswfreelancer.github.io/sswshop/json/categories.json"
      );
      const res = await response.json();
      this.categories = res.categories;
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/Header/HeaderBottom.sass'
</style>
