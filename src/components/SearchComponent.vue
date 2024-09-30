<template>
  <v-text-field v-model="input" label="Search" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { refDebounced } from '@vueuse/core';

import { useProductsStore } from '@/stores/products';
import { DEBOUNCE_TIMEOUT } from '@/constants';

const productsStore = useProductsStore();

const input = ref('');
const debounced = refDebounced(input, DEBOUNCE_TIMEOUT);

watch(debounced, () => {
  productsStore.setSearchText(debounced.value);
  productsStore.resetCurrentPage();
  productsStore.fetchProducts();
});
</script>
