<template>
  <div id="app" class="wrapper">
    <Header />
    <main class="main-page">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "./components/Footer/Footer.vue";
import Header from "./components/Header/Header.vue";
@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>
