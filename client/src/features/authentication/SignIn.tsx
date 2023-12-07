import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { FormikHelpers, useFormik } from 'formik';
import React, { useCallback } from 'react';
import * as yup from 'yup';

import { LoginCommand } from './models/login-command';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().required('Password is required')
});

const initialValues: LoginCommand = {
  email: 'foobar@example.com',
  password: 'foobar'
};

const SignIn: React.FC = React.memo(() => {
  const onSubmit = useCallback((values: LoginCommand, helpers: FormikHelpers<LoginCommand>) => {
    console.log('values', values);
    console.log('helpers', helpers);
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit
  });

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>

      <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          {formik.isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Sign In '}
        </Button>
        {/* <Grid container>
      <Grid item xs>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </Grid> */}
      </Box>
    </Box>
  );
});

SignIn.displayName = 'Login';

export default SignIn;
