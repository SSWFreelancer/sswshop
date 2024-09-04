<template>
  <div class="cart">
    <div class="cart__container">
      <Title>Корзина</Title>
      <div class="cart__empty" v-if="cartIsEmpty">Ваша корзина пока пуста</div>

      <div v-else class="cart__cards">
        <router-link
          :to="{
            name: 'product',
            params: {
              id: product._id,
            },
          }"
          v-for="product in cart"
          :key="product._id"
          class="cart__card"
        >
          <div class="cart__image">
            <img :src="product.images[0].url" alt="" />
          </div>
          <div class="cart__details">
            <div class="cart__name">
              {{ product.name }}
            </div>
            <div class="cart__content">
              <div class="cart__price">${{ product.price }}</div>
              <div class="cart__stars">
                <span v-for="n in 5" :key="n">
                  <i
                    :class="
                      n <= product.rating ? 'pi pi-star-fill' : 'pi pi-star'
                    "
                  ></i>
                </span>
              </div>
            </div>
          </div>
          <button
            class="cart__remove"
            @click.prevent="removeFromCart(product._id)"
          ></button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Title from "../Title.vue";
import { mapGetters, mapActions } from "vuex";

@Component({
  components: {
    Title,
  },
  computed: {
    ...mapGetters(["cart", "cartIsEmpty"]),
  },
  methods: {
    ...mapActions(["removeFromCart", "clearCart"]),
  },
})
export default class Cart extends Vue {
  get cartItems() {
    return this.$store.getters.cartItems;
  }
  removeFromCart(productId: string) {
    this.$store.dispatch("removeFromCart", productId);
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/Cart/cart.sass'
</style>
