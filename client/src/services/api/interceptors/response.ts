import { AxiosError, AxiosResponse } from 'axios';
import { ErrorsRoutes } from 'router/routes';

import { useStore } from 'store/navigation';

export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

const { redirectToError } = useStore.getState();

export const responseErrorInterceptor = () => async (error: AxiosError) => {
  switch (error.response?.status) {
    case 404:
      redirectToError(ErrorsRoutes.PAGE_404);
      break;

    default:
      break;
  }
};
