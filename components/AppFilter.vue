<template>
  <div class="container__main-filter-block">
    <div class="container__main-filter-block-price">
      <label for="priceRange">{{ $t("price") }}: {{ value }}</label>
      <input
        name="priceRange"
        type="range"
        :min="getMinCost"
        :max="getMaxCost"
        step="0.01"
        :value="value"
        @input="getPriceValue($event.target.value)"
      />
    </div>

    <div class="container__main-filter-block-categiries">
      <p>{{ $t("category") }}:</p>
      <div v-for="category in categoryProducts" :key="category">
        <label :for="category">{{ category }}</label>
        <input
          type="checkbox"
          :id="category"
          :value="category"
          v-model="selectedCategories"
          @change="handleCategoryChange"
        />
      </div>
    </div>

    <div class="container__main-filter-block-sort">
      <p>{{ $t("sortBy") }}:</p>
      <button @click="sortProducts('asc')" v-t="'lowToHigh'"></button>
      <button @click="sortProducts('desc')" v-t="'highToLow'"></button>
    </div>

    <div class="container__main-filter-block-clear">
      <button @click="clearFilters">{{ $t("clearFilters") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      value: 0,
      categoryProducts: [
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics",
      ],
      selectedCategories: [],
      products: [],
    };
  },
  computed: {
    getMaxCost() {
      return this.$store.getters.getMaxCost;
    },
    getMinCost() {
      return this.$store.getters.getMinCost;
    },
  },
  methods: {
    getPriceValue(value) {
      this.value = value;
      this.$store.commit("setPriceFilter", value);
      this.$store.commit("setFilteredProducts");
    },
    getSortedProducts(isChecked, category) {
      if (isChecked) {
        this.selectedCategories.push(category);
      } else {
        this.selectedCategories = this.selectedCategories.filter(
          (item) => item !== category
        );
      }
      this.$store.commit("setCategoryFilter", this.selectedCategories);
      this.$store.commit("setFilteredProducts");
    },
    sortProducts(order) {
      this.$store.commit("setSortOrder", order);
      this.$store.commit("setFilteredProducts");
    },
    clearFilters() {
      this.selectedCategories = [];
      this.$store.commit("clearFilters");
    },
    handleCategoryChange() {
      if (this.selectedCategories.length === 0) {
        this.$store.commit("clearFilters");
      } else {
        this.$store.commit("setCategoryFilter", this.selectedCategories);
        this.$store.commit("setFilteredProducts");
      }
    },
  },
};
</script>
