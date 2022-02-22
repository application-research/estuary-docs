import styles from '@pages/Page.module.scss';

import * as React from 'react';
import { RedocStandalone } from 'redoc';

function Redoc(props) {
  return (
    <RedocStandalone
      specUrl="https://raw.githubusercontent.com/application-research/estuary/tree/master/docs/swagger.json"
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
