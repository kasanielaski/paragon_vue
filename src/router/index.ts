import { createRouter, createWebHistory } from 'vue-router';

import ListView from '@/views/ListView.vue';
import DetailsView from '@/views/DetailsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListView
    },
    {
      path: '/details/:id',
      name: 'details',
      component: DetailsView,
      props: true
    }
  ]
});

export default router;
