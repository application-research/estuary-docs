import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';
import markdown from '@documentation/terms.md';

const key = 'terms';
const code = null;
const curl = null;

function PageTerms(props) {
  return (
    <App
      title="Estuary Documentation: Terms of Service"
      description="You must agree to these Terms of Service when you use our Estuary Node."
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

export default PageTerms;
