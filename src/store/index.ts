import Vue from "vue";
import Vuex from "vuex";
import { Product } from "./interface";
Vue.use(Vuex);

function loadCartFromLocalStorage(): Product[] {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

export default new Vuex.Store({
  state: {
    cart: loadCartFromLocalStorage(),
  },
  mutations: {
    ADD_TO_CART(state, product: Product) {
      const existingProduct = state.cart.find(
        (item: Product) => item._id === product._id
      );
      if (!existingProduct) {
        state.cart.push(product);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    REMOVE_FROM_CART(state, productId: string) {
      state.cart = state.cart.filter((item: Product) => item._id !== productId);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    CLEAR_CART(state) {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
  actions: {
    addToCart({ commit }, product: Product) {
      commit("ADD_TO_CART", product);
    },
    removeFromCart({ commit }, productId: string) {
      commit("REMOVE_FROM_CART", productId);
    },
    clearCart({ commit }) {
      commit("CLEAR_CART");
    },
  },
  getters: {
    isInCart: (state) => (productId: string) => {
      return state.cart.some((item) => item._id === productId);
    },
    cart: (state) => state.cart,
    cartIsEmpty: (state) => state.cart.length === 0,
  },
});
