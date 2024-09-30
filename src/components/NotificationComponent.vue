<template>
  <v-snackbar v-model="show" :timeout="timeout">
    {{ message }}
  </v-snackbar>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useNotificationStore } from '@/stores/notifications';

const notificationStore = useNotificationStore();
const { message, show, timeout } = storeToRefs(notificationStore);
</script>
