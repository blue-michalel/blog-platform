import { FormikHelpers } from 'formik';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { selectSetNotification, useStore as useNotificationStore } from 'store/notification';

import { LoginCommand } from '../models/login-command';
import { selectLogin, useStore } from '../store';

export interface UseLogin {
  hasError: boolean;
  onSubmit: (values: LoginCommand, helpers: FormikHelpers<LoginCommand>) => Promise<void>;
}

export const useLogin = (): UseLogin => {
  const login = useStore(selectLogin);
  const [hasError, hasSetError] = useState(false);
  const showNotification = useNotificationStore(selectSetNotification);
  const navigate = useNavigate();

  const onSuccess = useCallback(
    (helpers: FormikHelpers<LoginCommand>) => {
      helpers.setSubmitting(false);
      hasSetError(false);
      navigate(-1);
      showNotification({ text: 'Login successfully', variant: 'success' });
    },
    [navigate, showNotification]
  );

  const onError = useCallback(
    (helpers: FormikHelpers<LoginCommand>) => {
      helpers.setSubmitting(false);
      hasSetError(true);
      showNotification({ text: 'Login failed', variant: 'error' });
    },
    [showNotification]
  );

  const onSubmit = useCallback(
    async (values: LoginCommand, helpers: FormikHelpers<LoginCommand>) => {
      await login(
        values,
        () => {
          onSuccess(helpers);
        },
        () => {
          onError(helpers);
        }
      );
      helpers.setSubmitting(false);
    },
    [login, onError, onSuccess]
  );

  return { hasError, onSubmit };
};
