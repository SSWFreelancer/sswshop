<template>
  <div class="suggestions">
    <div class="suggestions__container">
      <Title>Наши предложения</Title>
      <p class="loading" v-if="!isLoaded">Загрузка...</p>
      <div class="suggestions__cards">
        <Card
          v-for="suggestion in suggestions"
          :key="suggestion.id"
          :product="suggestion"
        />
      </div>
      <router-link
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
import { Component, Vue } from "vue-property-decorator";
import Title from "@/components/Title.vue";
import { SuggestionsData } from "./index";
import Card from "../Card.vue";
@Component({
  components: {
    Title,
    Card,
  },
})
export default class Suggestions extends Vue {
  suggestions: SuggestionsData[] = [];
  isLoaded: boolean = false;
  created() {
    this.loadData();
  }
  async loadData() {
    try {
      const response = await fetch(
        "https://course-angular.javascript.ru/api/products/suggestion"
      );
      const res = await response.json();
      this.suggestions = res.data.items;
      this.isLoaded = true;
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/Home/suggestions.sass'
</style>
