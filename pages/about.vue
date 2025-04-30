<template>
  <div>
    <div
      v-for="item in product"
      :key="item"
      class="container__main-about-block"
    >
      <div class="container__main-about-block-img">
        <img :src="item.image" :alt="item.title" />
      </div>
      <div class="container__main-about-block-desc">
        <div class="container__main-about-block-desc-title">
          {{ item.title }}
        </div>
        <div class="container__main-about-block-desc-description">
          {{ $t('description') }}: {{ item.description }}
        </div>
        <div class="container__main-about-block-desc-category">
          {{ $t('category') }}: {{ item.category }}
        </div>
        <div class="container__main-about-block-desc-rating">
          <div class="container__main-about-block-desc-rating-rate">
            {{$t('rate')}}: {{ item.rating.rate }}
          </div>
          <div class="container__main-about-block-desc-rating-count">
            {{ $t('count') }}: {{ item.rating.count }}
          </div>
        </div>
        <div class="container__main-about-block-desc-price">
          <div>{{ item.price }}$</div>
          <button v-t="'addToCart'"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.getters.getAboutProduct;
    },
  },
};
</script>
