<template>
  <v-container>
    <v-row>
      <v-col>
        <SearchComponent />
      </v-col>
      <v-col>
        <PaginationComponent />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <TableComponent />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-end align-center">
        <NavigationComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import SearchComponent from '@/components/SearchComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
</script>
