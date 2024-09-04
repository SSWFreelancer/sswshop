<template>
  <Cart />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Cart from "@/components/CartPage/Cart.vue";
@Component({
  components: {
    Cart,
  },
})
export default class CartView extends Vue {}
</script>
