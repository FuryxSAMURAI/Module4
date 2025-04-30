<template>
  <div>
    <div class="container__main-product-blocks">
      <div
        class="container__main-product-block"
        v-for="(product, index) in paginatedProducts"
        :key="index"
      >
        <div to="/about" @click="showAboutProduct(product)">
          <img
            class="container__main-product-block-image"
            v-if="product.image"
            :src="product.image"
            alt="product.title"
          />
          <div class="container__main-product-block-title">
            {{ product.title }}
          </div>
        </div>
        <div class="container__main-product-block-price">
          <div class="container__main-product-block-price-cost">
            {{ product.price }}$
          </div>
          <button class="container__main-product-block-price-addToCart">
            <i
              class="fa-solid fa-cart-shopping fa-2xl"
              style="color: #000000"
            ></i>
          </button>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">« Назад</button>
      <span>{{ $t("pages") }} {{ currentPage }} з {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Вперед »</button>
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
      currentPage: 1,
      perPage: 8,
    };
  },
  computed: {
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.products.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.products.length / this.perPage);
    },
  },
  methods: {
    showAboutProduct(product) {
      this.$router.push("/about");
      this.$store.commit("setAboutProduct", product);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 20px;
}
</style>
