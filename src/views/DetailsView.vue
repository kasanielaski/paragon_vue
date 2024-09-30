<template>
  <v-container>
    <DetailsComponent />
    <LoadComponent />
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useProductsStore } from '@/stores/products';
import DetailsComponent from '@/components/DetailsComponent.vue';
import LoadComponent from '@/components/LoadComponent.vue';

const route = useRoute();

const id = route.params.id as string;
const productsStore = useProductsStore();

onMounted(() => {
  productsStore.fetchDetails(id);
});
</script>
