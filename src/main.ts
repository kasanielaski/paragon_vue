import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();
const vuetify = createVuetify();

pinia.use(({ store }: any) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(vuetify);
app.use(router);

app.mount('#app');
