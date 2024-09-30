<template>
  <v-app>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <NotificationComponent />
  </v-app>
</template>

<script setup lang="ts">
import NotificationComponent from './components/NotificationComponent.vue';
</script>
