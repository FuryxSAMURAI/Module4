<script>
import AppAdmin from '@/components/Admin/AppAdmin.vue';

export default {
  components: {
    AppAdmin,
  },
  async fetch({ store }) {
    await store.dispatch('getAPI');
  },
}
</script>

<template>
    <div>
        <p>Admin panel:</p>
        <AppAdmin :products="products" />
    </div>
</template>