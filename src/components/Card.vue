<template>
  <router-link to="/" class="card">
    <div class="card__image">
      <img :src="suggestion.images[0].url" alt="" />
    </div>
    <div class="card__wrapper">
      <div class="card__name">
        {{ suggestion.name }}
      </div>
      <div class="card__info">
        <div class="card__stars">
          <span v-for="n in 5" :key="n">
            <i
              :class="n <= suggestion.rating ? 'pi pi-star-fill' : 'pi pi-star'"
            ></i>
          </span>
        </div>

        <p>{{ suggestion.feedbacksCount }} отзывов</p>
      </div>
      <div class="card__price">
        ${{ suggestion.price.toLocaleString("en-EN") }}
      </div>
      <button class="card__button">В корзину</button>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop() suggestion!: any;
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/card.sass'
</style>
