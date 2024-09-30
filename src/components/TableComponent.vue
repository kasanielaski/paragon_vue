<template>
  <v-card class="overflow-y-auto" :height="500">
    <v-table v-if="!isLoading && products.length > 0">
      <template v-slot:default>
        <thead>
          <tr>
            <th style="width: 10%">Picture</th>
            <th class="text-left" style="width: 20%">Title</th>
            <th class="text-left" style="width: 20%">Brand</th>
            <th class="text-left" style="width: 40%">Description</th>
            <th class="text-left" style="width: 10%">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in products"
            :key="item.id"
            class="table-row"
            @click="toProductDetails(item.id)"
          >
            <td>
              <v-img
                aspect-ratio="16/9"
                cover
                :src="item.thumbnail"
                :alt="`${item?.title} image`"
              />
            </td>
            <td>{{ item.title }}</td>
            <td>{{ item.brand }}</td>
            <td>{{ item.description }}</td>
            <td>{{ formatPrice(item.price) }}</td>
          </tr>
        </tbody>
      </template>
    </v-table>
    <v-row
      v-if="!products.length && !isLoading"
      justify="center"
      align-content="center"
      class="fill-height"
    >
      <td class="text-center">No products</td>
    </v-row>
    <LoadComponent />
  </v-card>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import { useProductsStore } from '@/stores/products';
import LoadComponent from '@/components/LoadComponent.vue';

const router = useRouter();
const productsStore = useProductsStore();

const { products, isLoading } = storeToRefs(productsStore);

const toProductDetails = (id: number) => {
  router.push(`/details/${id}`);
};

const formatPrice = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  }).format(number);
};
</script>

<style scoped>
.table-row:hover {
  background-color: #eee;
  cursor: pointer;
}
</style>
