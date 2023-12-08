import { State } from './types';

export const selectShow = (state: State) => state.show;

export const selectText = (state: State) => state.text;

export const selectVariant = (state: State) => state.variant;

export const setSetNotification = (state: State) => state.setNotification;

export const selectDismiss = (state: State) => state.dismiss;

export const selectSetNotification = (state: State) => state.setNotification;
