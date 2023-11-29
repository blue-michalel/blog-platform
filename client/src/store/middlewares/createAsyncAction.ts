import { StoreApi } from 'zustand';

type SetState = StoreApi<unknown>['setState'];

export const createAsyncAction =
  (set: SetState) => async (action: () => Promise<void>, onError?: () => void, onSuccess?: () => void) => {
    try {
      set({ loading: true });
      await action();
      onSuccess?.();
    } catch (error) {
      set({ error });
      onError?.();
    } finally {
      set({ loading: false });
    }
  };
