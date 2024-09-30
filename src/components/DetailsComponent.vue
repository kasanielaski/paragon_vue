<template>
  <v-app>
    <v-card v-if="details">
      <v-img
        aspect-ratio="16/9"
        class="mx-auto"
        cover
        width="500"
        :src="`${details?.images?.[0]}`"
        :alt="`${details?.title} image`"
      />
      <v-card-text>
        <p>Price: {{ details?.price }}</p>
        <p>Brand: {{ details?.brand }}</p>
        <p>Title: {{ details?.title }}</p>
        <p>Description: {{ details?.description }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="toMainPage">Main Page</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import { useProductsStore } from '@/stores/products';

const router = useRouter();
const productsStore = useProductsStore();
const { details } = storeToRefs(productsStore);

function toMainPage() {
  router.push('/');
  productsStore.details = undefined;
}
</script>
