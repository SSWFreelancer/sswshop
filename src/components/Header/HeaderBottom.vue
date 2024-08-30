<template>
  <div class="header-bottom">
    <div class="header-bottom__container">
      <div
        class="header-bottom__item"
        v-for="category in categories"
        :key="category.id"
      >
        <span>{{ category.name }}</span>
        <div class="header-bottom__wrapper">
          <ul class="header-bottom__list">
            <li
              @click="removeMenu"
              v-for="subCategory in category.subCategories"
              :key="subCategory.id"
            >
              <router-link
                :to="{
                  name: 'category',
                  params: {
                    id: subCategory._id,
                    categoryName: subCategory.name,
                  },
                }"
                >{{ subCategory.name }}</router-link
              >
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
  removeMenu() {
    this.$emit("removeMenu");
  }
  categories: Category[] = [];

  created() {
    this.loadData();
  }
  async loadData() {
    try {
      const response = await fetch(
        "https://course-angular.javascript.ru/api/categories"
      );
      const res = await response.json();
      this.categories = res.data;
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/Header/HeaderBottom.sass'
</style>
