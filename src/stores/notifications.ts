import { defineStore } from 'pinia';

import { DEBOUNCE_TIMEOUT } from '@/constants';

type StateT = {
  show: boolean;
  message: string;
  timeout: number;
};

export const useNotificationStore = defineStore('notification', {
  state: (): StateT => ({
    show: false,
    message: '',
    timeout: DEBOUNCE_TIMEOUT
  }),
  actions: {
    displayMessage(newMessage: string, callback?: () => void) {
      this.message = newMessage;
      this.show = true;

      setTimeout(() => {
        callback?.();
        this.show = false;
      }, DEBOUNCE_TIMEOUT);
    }
  }
});
