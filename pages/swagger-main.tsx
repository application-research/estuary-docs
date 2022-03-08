import styles from '@pages/Page.module.scss';

import * as React from 'react';
import { RedocStandalone } from 'redoc';

function Redoc(props) {
  return (
    <RedocStandalone
      specUrl="https://raw.githubusercontent.com/alvin-reyes/estuary-api-swag/main/docs/swagger.yaml"
      options={{
        nativeScrollbars: true,
        theme: { colors: { primary: { main: '#dd5522' } } },
      }}
    />
      );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Redoc;
