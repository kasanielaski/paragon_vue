<template>
  <v-btn :disabled="!hasPrev" @click="prevPage" prepend-icon="mdi-arrow-left">Prev</v-btn>
  <span class="text-subtitle-1 mx-3">{{ currentPage }} of {{ totalPages }}</span>
  <v-btn :disabled="!hasNext" @click="nextPage" append-icon="mdi-arrow-right">Next</v-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { useProductsStore } from '@/stores/products';

const store = useProductsStore();

const { currentPage, totalPages } = storeToRefs(store);

const hasPrev = computed(() => currentPage.value > 1);
const hasNext = computed(() => currentPage.value < totalPages.value);

const nextPage = () => store.nextPage();
const prevPage = () => store.prevPage();
</script>
