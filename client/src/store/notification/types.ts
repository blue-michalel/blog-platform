import { AlertColor } from '@mui/material/Alert';
import { StoreApi } from 'zustand';

export type NotificationConfig = {
  text: string;
  variant?: AlertColor;
};

export type State = {
  show: boolean;
  text?: string;
  variant?: AlertColor;
  dismiss(): void;
  setNotification(config: NotificationConfig): void;
};

export type SetState = StoreApi<State>['setState'];
