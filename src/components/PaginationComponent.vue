<template>
  <v-select
    :model-value="itemsPerPage"
    :items="[5, 10, 15]"
    label="Items per page"
    @update:model-value="setItemsPerPage"
  />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import { useProductsStore } from '@/stores/products';

const productsStore = useProductsStore();
const { itemsPerPage } = storeToRefs(productsStore);

const fetchProducts = () => {
  productsStore.fetchProducts();
};

const setItemsPerPage = (number: number) => {
  productsStore.itemsPerPage = number;
  fetchProducts();
};

onMounted(fetchProducts);
</script>
