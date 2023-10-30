/* eslint-disable react/display-name */
import React from 'react';
import Layout from './Layout';

const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  );
};

export default withLayout;
