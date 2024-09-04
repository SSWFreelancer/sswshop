<template>
  <div class="product-page">
    <div class="product">
      <p class="loading" v-if="!isLoaded">Загрузка...</p>
      <div v-else class="product__container">
        <div class="product__sliders">
          <Swiper
            v-if="product.images"
            class="product__slider"
            loop
            :spaceBetween="10"
            :pagination="paginationOptions"
          >
            <swiper-slide
              class="swiper-slide product__slide"
              v-for="image in product.images"
              :key="image.url"
            >
              <img :src="image.url" alt="" />
            </swiper-slide>
          </Swiper>
          <div class="swiper-pagination"></div>
        </div>
        <div class="product__content">
          <div class="product__top">
            <div class="product__top-wrapper">
              <div class="product__name">{{ product.name }}</div>
              <div class="product__top-info">
                <div class="product__top-stars">
                  <span v-for="n in 5" :key="n">
                    <i
                      :class="
                        n <= product.rating ? 'pi pi-star-fill' : 'pi pi-star'
                      "
                    ></i>
                  </span>
                </div>
                <p>
                  {{ product.rating }}.0 ({{ product.feedbacksCount }} отзывов)
                  •
                  {{ product.brand }}
                </p>
              </div>
            </div>
          </div>
          <div class="product__text">
            {{ product.description }}
          </div>
          <div class="product__actions">
            <div class="product__summ" v-if="product.price">
              <span> ${{ product.price.toLocaleString("en-EN") }}</span>
            </div>
            <button @click.prevent="addToCart(product)">
              {{ isInCart ? "Добавлен" : "В корзину" }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isLoaded" class="characteristics">
      <div class="characteristics__container">
        <Title>Характеристики</Title>
        <div class="characteristics__items">
          <div
            class="characteristics__item"
            v-for="chars in product.characteristics"
            :key="chars.title"
          >
            <b>
              {{ chars.title }}
            </b>

            <div class="characteristics__descr">
              <div
                class="characteristics__descr-item"
                v-for="item in chars.items"
                :key="item.name"
              >
                <span>
                  {{ item.name }}
                </span>
                <b></b>
                <span>
                  {{ item.value }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isLoaded" class="reviews">
      <div class="reviews__container">
        <Title>Отзывы</Title>
        <div class="reviews__cards">
          <div
            v-for="feedback in product.feedbacks"
            :key="feedback._id"
            class="reviews__card"
          >
            <p>Аноним</p>
            <div class="product__top-stars">
              <p>
                {{ feedback.rate }}
              </p>

              <span v-for="n in 5" :key="n">
                <i
                  :class="n <= feedback.rate ? 'pi pi-star-fill' : 'pi pi-star'"
                ></i>
              </span>
            </div>
            <div class="product__text">
              {{ feedback.advantages }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Title from "../Title.vue";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { Product } from "./index";
SwiperCore.use([Pagination]);
@Component({
  components: {
    Swiper,
    SwiperSlide,
    Title,
  },
})
export default class ProductPage extends Vue {
  isLoaded: boolean = false;
  paginationOptions = {
    el: ".swiper-pagination",
    clickable: true,
  };
  product: Product | null = null;

  mounted() {
    const id = this.$route.params.id;
    this.fetchProducts(id);
    window.scrollTo(0, 0);
  }

  async fetchProducts(id: string) {
    try {
      const response = await fetch(
        "https://course-angular.javascript.ru/api/products/" + id + ""
      );
      const res = await response.json();
      this.product = res.data;
      this.isLoaded = true;
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }

  thumbsBreakpoints = {
    1024: {
      slidesPerView: 5,
      spaceBetween: 14,
      direction: "vertical",
    },
    600: {
      direction: "horizontal",
      slidesPerView: 4,
      spaceBetween: 12,
    },
    0: {
      direction: "horizontal",
      slidesPerView: 3,
      spaceBetween: 12,
    },
  };

  get isInCart() {
    return this.product
      ? this.$store.getters.isInCart(this.product._id)
      : false;
  }
  addToCart(product: any) {
    this.$store.dispatch("addToCart", product);
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/Product/product.sass'
</style>
