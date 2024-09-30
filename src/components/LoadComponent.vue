<template>
  <v-row v-if="isLoading" justify="center" align-content="center" class="fill-height">
    <v-progress-circular indeterminate />
  </v-row>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useProductsStore } from '@/stores/products';

const productsStore = useProductsStore();
const { isLoading } = storeToRefs(productsStore);
</script>
