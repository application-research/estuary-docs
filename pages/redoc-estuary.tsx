import styles from '@pages/Page.module.scss';

import * as React from 'react';
import { RedocStandalone } from 'redoc';
import App from '@components/App';
import markdown from '@documentation/terms.md';

const key = 'terms';
const code = null;
const curl = null;

function Redoc(props) {
  return (
    <RedocStandalone
      specUrl="http://petstore.swagger.io/v2/swagger.json"
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
