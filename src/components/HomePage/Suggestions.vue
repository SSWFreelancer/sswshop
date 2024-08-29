<template>
  <div class="suggestions">
    <div class="suggestions__container">
      <Title>Наши предложения</Title>
      <div class="suggestions__cards">
        <Card
          v-for="suggestion in suggestions"
          :key="suggestion._id"
          :suggestion="suggestion"
        />
      </div>
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
  created() {
    this.loadData();
  }
  async loadData() {
    try {
      const response = await fetch(
        "https://sswfreelancer.github.io/sswshop/json/suggestions.json"
      );
      const res = await response.json();
      this.suggestions = res.suggestions;
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/Home/suggestions.sass'
</style>
