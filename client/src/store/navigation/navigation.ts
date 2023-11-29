import { ErrorsRoutes } from 'router/routes';
import { StoreApi } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

const name = '@store/navigation';

export type NavigationState = {
  activeErrorPage?: ErrorsRoutes;
  redirectToError(route: ErrorsRoutes): void;
  clearError(): void;
};

type SetState = StoreApi<NavigationState>['setState'];

const store = (set: SetState): NavigationState => ({
  clearError: () => set({ activeErrorPage: undefined }),
  redirectToError: (route: ErrorsRoutes) => set({ activeErrorPage: route }),
});

export const useNavigationStore = createStore(devtools(store, { name }));
