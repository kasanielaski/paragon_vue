import { defineStore } from 'pinia';

import { API_URL } from '@/constants';
import { useNotificationStore } from '@/stores/notifications';

type ProductT = {
  id: number;
  title: string;
  price: number;
  brand: string;
  description: string;
  thumbnail: string;
  images: string[];
};

type StateT = {
  products: ProductT[];
  searchText: string;
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: number;
  totalProducts: number;
  details?: ProductT;
};

export const useProductsStore = defineStore('products', {
  state: (): StateT => ({
    products: [],
    searchText: '',
    isLoading: false,
    currentPage: 1,
    itemsPerPage: 5,
    totalProducts: 0,
    details: undefined
  }),

  actions: {
    setSearchText(text: string) {
      this.searchText = text;
    },

    async fetchProducts() {
      this.isLoading = true;
      const offset = (this.currentPage - 1) * this.itemsPerPage;
      const apiUrl = this.searchText
        ? `${API_URL}/search?q=${this.searchText}&limit=${this.itemsPerPage}&skip=${offset}`
        : `${API_URL}?limit=${this.itemsPerPage}&skip=${offset}`;

      try {
        const rawResponse = await fetch(apiUrl);
        const response = await rawResponse.json();
        this.products = response.products;
        this.totalProducts = response.total;
      } catch (error) {
        const notificationStore = useNotificationStore();
        notificationStore.displayMessage(`${error}`);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchDetails(id: string) {
      this.isLoading = true;

      try {
        const rawResponse = await fetch(`https://dummyjson.com/products/${id}`);
        const response = await rawResponse.json();
        this.details = response;
      } catch (error) {
        const notificationStore = useNotificationStore();
        notificationStore.displayMessage(`${error}`, () => this.router.push('/'));
      } finally {
        this.isLoading = false;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchProducts();
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchProducts();
      }
    },

    resetCurrentPage() {
      this.currentPage = 1;
    }
  },

  getters: {
    totalPages(state): number {
      return Math.ceil(state.totalProducts / state.itemsPerPage);
    }
  }
});
