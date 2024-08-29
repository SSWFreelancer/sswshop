<template>
  <header class="header" :class="{ active: menuState, show: isScrolled }">
    <HeaderTop @toggleMenu="toggleMenu" />
    <headerBottom />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import headerBottom from "./HeaderBottom.vue";
import HeaderTop from "./HeaderTop.vue";
@Component({
  components: {
    HeaderTop,
    headerBottom,
  },
})
export default class Header extends Vue {
  isScrolled = false;
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  menuState: boolean = false;
  toggleMenu() {
    this.menuState = !this.menuState;
    if (this.menuState) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/Header/Header.sass'
</style>
