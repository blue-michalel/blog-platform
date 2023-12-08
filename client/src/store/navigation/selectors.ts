import { NavigationState } from './store';

export const selectActiveErrorPage = (state: NavigationState) => state.activeErrorPage;

export const selectRedirectToError = (state: NavigationState) => state.redirectToError;

export const selectClearError = (state: NavigationState) => state.clearError;
