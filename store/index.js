export const state = () => ({
  products: [],
  aboutProduct: [],
  filteredProducts: [],
  selectedCategories: [],
  priceFilter: 0,
  sortOrder: "asc",
});

export const mutations = {
  setAboutProduct(state, product) {
    if (state.aboutProduct.length >= 0 || state.aboutProduct.length == 0) {
      state.aboutProduct = [];
      state.aboutProduct.push(product);
    } else {
      state.aboutProduct.push({
        id: "error",
        error: "Товар не зміг під'єднатися :(",
      });
    }
  },
  setProducts(state, products) {
    state.products = products || [];
    state.filteredProducts = products || [];
  },
  setFilteredProducts(state) {
    let filtered = state.products;

    if (state.selectedCategories.length) {
      filtered = filtered.filter((product) =>
        state.selectedCategories.includes(product.category)
      );
    }

    if (state.priceFilter > 0) {
      filtered = filtered.filter(
        (product) => product.price <= state.priceFilter
      );
    }

    if (state.sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    state.filteredProducts = filtered;
  },
  setCategoryFilter(state, categories) {
    state.selectedCategories = categories;
  },
  setPriceFilter(state, price) {
    state.priceFilter = price;
  },
  setSortOrder(state, order) {
    state.sortOrder = order;
  },
  clearFilters(state) {
    state.selectedCategories = [];
    state.priceFilter = 0;
    state.sortOrder = "asc";
    state.filteredProducts = [...state.products];
  },
};

export const actions = {
  async getAPI({ commit }) {
    try {
      const products = await this.$axios.$get(
        "https://fakestoreapi.com/products"
      );
      commit("setProducts", products);
    } catch (error) {
      console.error("Ошибка при загрузке товаров:", error);
    }
  },
};

export const getters = {
  products: (state) =>
    state.filteredProducts.length ? state.filteredProducts : state.products,
  getMaxCost: (state) => {
    if (state.products.length === 0) return 0;

    const max = Math.max(...state.products.map((product) => product.price));
    return max;
  },
  getMinCost: (state) => {
    if (state.products.length === 0) return 0;

    const min = Math.min(...state.products.map((product) => product.price));
    return min;
  },
  getAboutProduct: (state) => {
    return state.aboutProduct;
  },
};
