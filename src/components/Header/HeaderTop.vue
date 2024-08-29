<template>
  <div class="header-top">
    <div class="header-top__container">
      <router-link to="/" class="header-top__logo"> SSWShop </router-link>
      <div class="header-top__actions">
        <router-link to="/cart" class="header-top__cart">
          <img src="@/assets/images/cart.svg" alt="" />
          <span> Корзина </span>
        </router-link>
        <div @click="toggleMenu" class="header-top__burger">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeaderTop extends Vue {
  toggleMenu() {
    this.$emit("toggleMenu");
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/Header/HeaderTop.sass'
</style>
