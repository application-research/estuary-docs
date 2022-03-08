import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';
import markdown from '@documentation/swagger-contributing.md';

const key = 'swagger-intro';
const code = null;
const curl = null;

function PageSwaggerIntro(props) {
  return (
    <App
      title="Estuary Documentation: Swagger"
      description="Estuary uses swagger"
      url={`https://docs.estuary.tech/${key}`}
      curl={curl}
      markdown={markdown}
      code={code}
      active={key}
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default PageSwaggerIntro;
