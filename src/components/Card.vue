<template>
  <router-link
    :to="{
      name: 'product',
      params: {
        id: product._id,
      },
    }"
    class="card"
  >
    <div class="card__image">
      <img :src="product.images[0].url" alt="" />
    </div>
    <div class="card__wrapper">
      <div class="card__name">
        {{ product.name }}
      </div>
      <div class="card__info">
        <div class="card__stars">
          <span v-for="n in 5" :key="n">
            <i
              :class="n <= product.rating ? 'pi pi-star-fill' : 'pi pi-star'"
            ></i>
          </span>
        </div>

        <p>{{ product.feedbacksCount }} отзывов</p>
      </div>
      <div class="card__price">
        ${{ product.price.toLocaleString("en-EN") }}
      </div>
      <button @click.prevent="addToCart(product)" class="button">
        {{ isInCart ? "Добавлен" : "В корзину" }}
      </button>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop() product!: any;
  get isInCart() {
    return this.$store.getters.isInCart(this.product._id);
  }
  addToCart(product: any) {
    this.$store.dispatch("addToCart", product);
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/card.sass'
</style>
