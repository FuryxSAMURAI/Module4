<script>
export default {
  computed: {
    getProduct() {
      return this.$store.getters.products;
    },
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <div v-for="(product, index) in getProduct" :key="index">
      <img
        style="display: flex; height: 200px; widows: auto; margin: 10px"
        :src="product.image"
        alt="product.title"
      />
      <p style="margin-top: 20px">title: {{ product }}</p>
      <p style="margin-top: 20px">{{ product.image }}</p>
      <p style="margin-top: 20px">title: {{ product.title }}</p>
      <p style="margin-top: 20px">description: {{ product.description }}</p>
      <p style="margin-top: 20px">category: {{ product.category }}</p>
      <p style="margin-top: 20px">price: {{ product.price }}$</p>
    </div>
  </div>
</template>
