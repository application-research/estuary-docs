import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';
import Navigation from '@components/Navigation';

function NavigationPage(props) {
  return (
    <App
      title="Estuary Documentation: Navigation"
      description="Table of contents for Estuary's documentation."
      url={`https://docs.estuary.tech/navigation`}
      hideNavigation
    >
      <div style={{ width: '100%', padding: '16px' }}>
        <Navigation active={props.active} />
      </div>
    </App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default NavigationPage;
