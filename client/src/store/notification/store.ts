import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { NotificationConfig, SetState, State } from './types';

const name = '@store/notification';

const dismissAction = (set: SetState) => () => {
  set({ show: false, text: '' });
};

const setNotificationAction = (set: SetState) => (config: NotificationConfig) => {
  set({ ...config, show: true });
};

const store = (set: SetState): State => ({
  show: false,
  dismiss: dismissAction(set),
  setNotification: setNotificationAction(set)
});

export const useStore = create(devtools(store, { name }));
