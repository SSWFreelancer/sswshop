<template>
  <div id="app" class="wrapper">
    <Header />
    <main class="main-page">
      <router-view />
    </main>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header/Header.vue";
@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>
