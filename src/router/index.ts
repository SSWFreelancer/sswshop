import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatalogView from "../views/CatalogView.vue";
import ProductView from "../views/ProductView.vue";
import CartView from "../views/CartView.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/catalog/:id?",
    name: "category",
    component: CatalogView,
    props: (route) => ({
      categoryName: route.params.categoryName,
    }),
  },
  {
    path: "/product/:id?",
    name: "product",
    component: ProductView,
    props: true,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
