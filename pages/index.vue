<template>
  <div class="container__main">
    <div class="container__main-blocks">
      <app-filter :products="allProducts" />
      <app-product :products="filteredProducts" />
    </div>
  </div>
</template>

<script>
import AppFilter from "@/components/AppFilter.vue";
import AppProduct from "@/components/AppProduct.vue";

export default {
  components: {
    AppFilter,
    AppProduct,
  },
  computed: {
    allProducts() {
      return this.$store.state.products;
    },
    filteredProducts() {
      return this.$store.getters.products;
    },
  },
  created() {
    this.$store.dispatch("getAPI");
  },
};
</script>
