<template>
  <div class="main" v-if="slides.length">
    <Swiper class="main__slider" loop :pagination="paginationOptions">
      <SwiperSlide v-for="slide in slides" :key="slide.id">
        <router-link to="/catalog">
          <img :src="slide.image" alt="" />
          <span>
            {{ slide.name }}
          </span>
        </router-link>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper";
import { SlideData } from "./index";
SwiperCore.use([Pagination]);

@Component({
  components: {
    Swiper,
    SwiperSlide,
  },
})
export default class MainSlider extends Vue {
  paginationOptions = {
    el: ".swiper-pagination",
    clickable: true,
  };

  slides: SlideData[] = [];
  created() {
    this.loadData();
  }
  async loadData() {
    try {
      const response = await fetch(
        "https://sswfreelancer.github.io/sswshop/json/slides.json"
      );
      const res = await response.json();
      this.slides = res.slides;
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/Home/main.sass'
</style>
